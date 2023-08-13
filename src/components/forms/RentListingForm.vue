<template>
    <Card >
        <template #title> 
            Rent Details
        </template>
        <template #content>
            <BasicForm>
                <NumberInput name="Weekly Price" :error="errors.price_weekly" v-bind="price_weekly" @blur="validateField('price_weekly')" :modelValue="props.modelValue.price_weekly" @input="updateInput('price_weekly', $event)" />
                <NumberInput name="Monthly Price" :error="errors.price_monthly" v-bind="price_monthly" @blur="validateField('price_monthly')" :modelValue="props.modelValue.price_monthly" @input="updateInput('price_monthly', $event)" />
                <NumberInput name="Deposit" :error="errors.deposit" v-bind="deposit" @blur="validateField('deposit')" :modelValue="props.modelValue.deposit" @input="updateInput('deposit', $event)" />
                <NumberInput name="Minimum Tenancy" :error="errors.minimum_tenancy"  v-bind="minimum_tenancy" @blur="validateField('minimum_tenancy')" :modelValue="props.modelValue.minimum_tenancy" @input="updateInput('minimum_tenancy', $event)" />
                <InputSwitch2 label="Pets Allowed"  :modelValue="props.modelValue.pets_allowed" @update:modelValue="updateInput('pets_allowed', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
import {watch} from 'vue'
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
  modelValue:{
    type: Object,
    required: true,
    default: {
        price_weekly: null,
        price_monthly: null,
        deposit: null,
        minimum_tenancy: null,
        pets_allowed: null
    }
  },
  error: {
    type: Object,
    required: false,
    default: {}
  }
})

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...props.modelValue, [prop]: value });
};

// //set input validation
// //set form validation schema
const { setErrors, defineInputBinds, validateField, errors} = useForm({
  validationSchema: yup.object({
    price_weekly: yup.number().when('price_monthly',{
      is: (value) => value.trim() === '',
      then: yup.number().required('Weekly price is required if monthly price is not set.')
    }),
    price_monthly: yup.number().when('price_weekly',{
      is: (value) => value.trim() === '',
      then: yup.number().required('Monthly price is required if weekly price is not set.')
    }),
    deposit: yup.number().required(),
    minimum_tenancy: yup.number().required(),
  }),
});

const validationBind = (fieldName) => defineInputBinds(fieldName, {validateOnValueUpdate: false, validateOnInput: false})
const price_weekly = validationBind('price_weekly')
const price_monthly = validationBind('price_monthly')
const deposit = validationBind('deposit')
const minimum_tenancy = validationBind('minimum_tenancy')

//watch any error from form submit
watch(() => props.error, (newError)=>{
  setErrors(JSON.parse(JSON.stringify(newError)))
})
</script>
