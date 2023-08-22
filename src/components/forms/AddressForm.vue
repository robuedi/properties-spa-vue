<template>
    <Card >
        <template #title> 
            Address
        </template>
        <template #content>
            <BasicForm>
                <CountryInput :modelValue="modelValue.country_id" @update:modelValue="updateInput('country_id', $event)" />

                <CityInput :error="errors?.city_id" :modelValue="modelValue.city_id" @change="doValidate('city_id', modelValue.city_id)"   :disabled="!modelValue.country_id"  @update:modelValue="updateInput('city_id', $event)" :countryId="modelValue?.country_id"/>

                <TextInput :error="errors?.street_name"   @blur="doValidate('street_name', modelValue.street_name)" :disabled="!modelValue.city_id" :value="modelValue.street_name" @input="updateInput('street_name', $event)"    />

                <TextInput :error="errors?.street_nr"   @blur="doValidate('street_nr', modelValue.street_nr)" :disabled="!modelValue.city_id" :value="modelValue.street_nr" @input="updateInput('street_nr', $event)"  />
                
                <TextInput :error="errors?.postcode"  @blur="doValidate('postcode', modelValue.postcode)" :disabled="!modelValue.city_id" :value="modelValue.postcode" @input="updateInput('postcode', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import CityInput from '@/components/inputs/CityInput.vue';
import CountryInput from '@/components/inputs/CountryInput.vue';
import {watch, toRefs} from 'vue'
import AddressFormValidation from '@/services/forms/validation/AddressFormValidation'
import { IAddressForm, FormErrorMessages } from '@/types/forms'
import useUpdateModelProperty from '@/composables/updateModelProperty'
import useFormValidator from '@/composables/formValidator'

//set props
const props = withDefaults(
  defineProps<{ 
    modelValue: IAddressForm, 
    error: FormErrorMessages
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

//emit model update
const emit = defineEmits(['update:modelValue'])
const { updateInput } = useUpdateModelProperty<IAddressForm>(modelValue, emit)

//clear city when no country selected
watch(modelValue.value, (newVal)=>{
    //clear city when country is cleared
    if(!newVal.country_id){
        updateInput('city_id', null)
    }
    //clear street name, nr, postcode when city is cleared
    if(!newVal.city_id){
      updateInput('street_nr', null)
      updateInput('street_name', null)
      updateInput('postcode', null)
    }
})

//make validation 
let { errors, doValidate } = useFormValidator(AddressFormValidation)

//watch any error from form submit
watch(() => error.value, (newError) => { errors.value = newError })
</script>
