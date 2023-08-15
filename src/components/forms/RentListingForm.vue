<template>
    <Card >
        <template #title> 
            Rent Details
        </template>
        <template #content>
            <BasicForm>
                <InputError v-if="errors.general">{{ errors.general }}</InputError>
                <NumberInput name="Weekly Price" :error="errors.price_weekly" v-bind="price_weekly" @blur="blurredFields.price_weekly = true; validateField('price_weekly')" :modelValue="props.modelValue.price_weekly" @input="updateInput('price_weekly', $event)" />
                <NumberInput name="Monthly Price" :error="errors.price_monthly" v-bind="price_monthly" @blur="blurredFields.price_monthly = true; validateField('price_monthly')" :modelValue="props.modelValue.price_monthly" @input="updateInput('price_monthly', $event)" />
                <NumberInput name="Deposit" :error="errors.deposit" v-bind="deposit" @blur="validateField('deposit')" :modelValue="props.modelValue.deposit" @input="updateInput('deposit', $event)" />
                <NumberInput name="Minimum Tenancy" :error="errors.minimum_tenancy"  v-bind="minimum_tenancy" @blur="validateField('minimum_tenancy')" :modelValue="props.modelValue.minimum_tenancy" @input="updateInput('minimum_tenancy', $event)" />
                <InputSwitch2 label="Pets Allowed"  :modelValue="props.modelValue.pets_allowed" @update:modelValue="updateInput('pets_allowed', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang>
import InputError from '@/components/inputs/extras/InputError.vue'
import {watch} from 'vue'
import { useForm } from 'vee-validate';
import { object, number } from 'yup';
import { ref } from 'vue';

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

// //set form validation schema
const blurredFields = ref({
  price_weekly: false,
  price_monthly: false,
});
const { setErrors, defineInputBinds, validateField, errors} = useForm({
  validationSchema: object({
    price_weekly: number().nullable(),
    price_monthly: number().nullable(),
    deposit: number().required(),
    minimum_tenancy: number().required(),
  }).test('validate-prices', 'Weekly price or monthly price is required if the other is not set.', function (obj) {
    const { price_weekly, price_monthly } = obj;

    if ((blurredFields.value.price_weekly || blurredFields.value.price_monthly) && !price_weekly && !price_monthly) {
      return this.createError({
        path: 'general',
        message: 'Weekly price or monthly price is required if the other is not set.',
      });
    }

    return true;
  })
})

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
