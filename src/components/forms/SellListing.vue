<template>
    <Card >
        <template #title> 
            Sell Details
        </template>
        <template #content>
            <BasicForm>

                <NumberInput name="Price" :error="errors.price" @blur="doValidate('price', modelValue.price)" :modelValue="modelValue.price" @input="updateInput('price', $event)"  />
                
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import {watch, toRefs} from 'vue'
import { ISellListing, FormErrorMessages } from '@/types/forms'
import SellListingFormValidation from '@/services/forms/validation/SellListingFormValidation'
import useUpdateModelProperty from '@/composables/updateModelProperty'
import useFormValidator from '@/composables/formValidator'

//set props
const props = withDefaults(
  defineProps<{ 
    modelValue: ISellListing, 
    error: FormErrorMessages
  }>(), 
  {
    modelValue: () => {
        return {
          price: null
        }
    } ,
    error: () => {return {}}  
  }
)
const { modelValue, error } = toRefs(props)

//emit model update
const emit = defineEmits(['update:modelValue'])
const { updateInput } = useUpdateModelProperty<ISellListing>(modelValue, emit)

//make validation 
let { errors, doValidate } = useFormValidator(SellListingFormValidation)

//watch any error from form submit
watch(() => error.value, (newError) => { errors.value = newError })
</script>
