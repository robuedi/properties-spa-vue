<template>
    <Card >
        <template #title> 
            Sell Details
        </template>
        <template #content>
            <BasicForm>

                <NumberInput name="Price" :error="errors.price" v-bind="price" @blur="validateField('price')" :modelValue="props.modelValue.price" @input="updateInput('price', $event)"  />
                
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import {watch} from 'vue'

//set model props
const props = defineProps({
  modelValue:{
    type: Object,
    required: true,
    default: {
        price: null,
    }
  },
  error: {
    type: Object,
    required: false,
    default: {}
  }
})

//emit model update
const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...props.modelValue, [prop]: value });
};

// //set input validation
// //set form validation schema
const {  setErrors, defineInputBinds, validateField, errors} = useForm({
  validationSchema: yup.object({
    price: yup.number().required(),
  }),
});

const price = defineInputBinds('price', {validateOnValueUpdate: false, validateOnInput: false})

//watch any error from form submit
watch(() => props.error, (newError)=>{
  setErrors(JSON.parse(JSON.stringify(newError)))
})
</script>
