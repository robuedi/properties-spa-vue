<template>
    <Card >
        <template #title> 
            Address
        </template>
        <template #content>
            <BasicForm>
                <CountryInput :modelValue="modelValue.country_id" @update:modelValue="updateInput('country_id', $event)" />

                <CityInput :modelValue="modelValue.city_id" @blur="validateInput('city_id', modelValue.city_id)"   :disabled="!modelValue.country_id" :error="errors?.city_id"   @update:modelValue="updateInput('city_id', $event)" :countryId="modelValue?.country_id"/>

                <TextInput name="Street Name" :error="errors.street_name"   @blur="validateInput('street_name', modelValue.street_name)" :disabled="!modelValue.city_id" :value="modelValue.street_name" @input="updateInput('street_name', $event)"    />

                <TextInput name="Street Number" :error="errors.street_nr"   @blur="validateInput('street_nr', modelValue.street_nr)" :disabled="!modelValue.city_id" :value="modelValue.street_nr" @input="updateInput('street_nr', $event)"  />
                
                <TextInput name="Postcode" :error="errors?.postcode"  @blur="validateInput('postcode', modelValue.postcode)" :disabled="!modelValue.city_id" :value="modelValue.postcode" @input="updateInput('postcode', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import CityInput from '@/components/inputs/CityInput.vue';
import CountryInput from '@/components/inputs/CountryInput.vue';
import {watch, ref, toRefs} from 'vue'
import AddressFormValidation from '@/services/forms/validation/AddressFormValidation'
import {  IFormErrObj } from '@/types/forms'

interface IAddressForm {
  country_id: number|null,
  city_id: number|null,
  street_nr: string|null,
  street_name: string|null,
  postcode: string|null
}

interface IError {
  [key: string]: string
}
//set props
const props = withDefaults(
  defineProps<{ 
    modelValue: IAddressForm, 
    error: IError
  }>(), 
  {
    modelValue: () => {
        return {
          country_id: null,
          city_id: null,
          street_nr: null,
          street_name: null,
          postcode: null
        }
    } ,
    error: () => {return {}}  
  }
)
const { modelValue, error } = toRefs(props)

//update model externally
const emit = defineEmits(['update:modelValue']);
const updateInput = (prop: string, value: string|number|boolean|null) => {
  emit('update:modelValue', { ...modelValue.value, [prop]: value });
};

//clear city when no country selected
watch(modelValue.value, (newVal)=>{
    //clear city when country is cleared
    if(newVal?.country_id === null){
        updateInput('city_id', null)
    }
    //clear street name, nr, postcode when city is cleared
    if(newVal?.city_id === null){
        updateInput('street_nr', null)
        updateInput('street_name', null)
        updateInput('postcode', null)
    }
})

//validate inputs
let errors = ref<IFormErrObj>({})
let validator = new AddressFormValidation()
const validateInput = (inputName: string, inputValue: string|number|boolean|null)=>{
  validator.validateInput(inputName, inputValue)
  .then((data) =>{
    console.log(data)
    errors.value = data
  })
}
watch(() => errors.value, (ffff)=>{
  console.log(ffff)
})
//watch any error from form submit
watch(() => error.value, (newError)=>{
  errors.value = JSON.parse(JSON.stringify(newError))
})
</script>
