<template>
    <Card >
        <template #title> 
            Address
        </template>
        <template #content>
            <BasicForm>
                <CountryInput :modelValue="props.modelValue.country" @update:modelValue="updateInput('country', $event)" />

                <CityInput :disabled="!props.modelValue.country" :error="errors.city_id"  v-bind="city_id"  @blur="validateField('city_id')" :value="props.modelValue.city_id" @input="updateInput('city_id', $event)" :country-id="props.modelValue?.country?.id"/>

                <TextInput name="Street Name" :error="errors.street_name"  v-bind="street_name"  @blur="validateField('street_name')" :disabled="!props.modelValue.city_id" :value="props.modelValue.street_name" @input="updateInput('street_name', $event)"    />

                <TextInput name="Street Number" :error="errors.street_nr"  v-bind="street_nr"  @blur="validateField('street_nr')" :disabled="!props.modelValue.city_id" :value="props.modelValue.street_nr" @input="updateInput('street_nr', $event)"  />
                
                <TextInput name="Postcode" :error="errors.postcode"  v-bind="postcode"  @blur="validateField('postcode')" :disabled="!props.modelValue.city_id" :value="props.modelValue.postcode" @input="updateInput('postcode', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
import CityInput from '@/components/inputs/CityInput.vue';
import CountryInput from '@/components/inputs/CountryInput.vue';
import {watch} from 'vue'
import { useForm } from 'vee-validate';
import * as yup from 'yup';

//set model props
const props = defineProps({
  modelValue:{
    type: Object,
    required: true,
    default: {
        country: null,
        city_id: null,
        street_nr: null,
        street_name: null,
        postcode: null
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

//clear city when no country selected
watch(props.modelValue, (newVal)=>{
    //clear city when country is cleared
    if(newVal?.country === null){
        updateInput('city_id', null)
    }
    //clear street name, nr, postcode when city is cleared
    if(newVal?.city_id === null){
        updateInput('street_nr', null)
        updateInput('street_name', null)
        updateInput('postcode', null)
    }
})

//make the validation

// //set input validation
// //set form validation schema
const { setErrors, defineInputBinds, validateField, errors} = useForm({
  validationSchema: yup.object({
    city_id: yup.string().required(),
    street_name: yup.string().required(),
    street_nr: yup.string().required(),
    postcode: yup.string().required(),
  }),
});

const validationBind = (fieldName) => defineInputBinds(fieldName, {validateOnValueUpdate: false, validateOnInput: false})
const city_id = validationBind('city_id');
const street_name = validationBind('street_name');
const street_nr = validationBind('street_nr');
const postcode = validationBind('postcode');

//watch any error from form submit
watch(() => props.error, (newError)=>{
  setErrors(JSON.parse(JSON.stringify(newError)))
})
</script>
