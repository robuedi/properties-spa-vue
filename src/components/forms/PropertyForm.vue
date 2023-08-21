<template>
    <Card >
        <template #title> 
            Details
        </template>
        <template #content>
            <BasicForm>
                <InputSwitch2 label="Is Public" :modelValue="modelValue.is_public" @update:modelValue="updateInput('is_public', $event)"  />

                <TextInput name="Name" :error="errors.name" @blur="doValidate('name', modelValue.name)" :value="modelValue.name" @input="updateInput('name', $event)" />

                <PropertyTypeInput :error="errors.property_type_id" @blur="doValidate('property_type_id', modelValue.property_type_id)" :value="modelValue.property_type_id" @input="updateInput('property_type_id', $event)" />

                <ListingTypeInput :error="errors.listing_type_id" @blur="doValidate('listing_type_id', modelValue.listing_type_id)"  :value="modelValue.listing_type_id"  @input="updateInput('listing_type_id', $event)" />

                <TextareaInput name="Description" :error="errors.description" @blur="doValidate('description', modelValue.description)" :value="modelValue.description" @input="updateInput('description', $event)" />

                <NumberInput name="Number of Bedrooms" :error="errors.bedrooms" @blur="doValidate('bedrooms', modelValue.bedrooms)" :modelValue="modelValue.bedrooms" @input="updateInput('bedrooms', $event)"  />

                <NumberInput name="Number of Bathrooms" :error="errors.bathrooms" @blur="doValidate('bathrooms', modelValue.bathrooms)" :modelValue="modelValue.bathrooms" @input="updateInput('bathrooms', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';
import { IPropertyForm, FormErrorMessages, GeneralInputType } from '@/types/forms'
import PropertyFormValidation from '@/services/forms/validation/PropertyFormValidation'
import {watch, ref, toRefs} from 'vue'

//set props
const props = withDefaults(
  defineProps<{ 
    modelValue: IPropertyForm, 
    error: FormErrorMessages
  }>(), 
  {
    modelValue: () => {
      return {
        name: null,
        description: null,
        bedrooms: null,
        bathrooms: null,
        listing_type_id: null,
        property_type_id: null,
        is_public: false
      }
    } ,
    error: () => {return {}}  
  }
)

const { modelValue, error } = toRefs(props)

const emit = defineEmits();
const updateInput = (prop: string, value: GeneralInputType) => {
  emit('update:modelValue', { ...modelValue.value, [prop]: value });
};

//set input validation error messages
let errors = ref<FormErrorMessages>({})

//make validation 
let { doValidate } = PropertyFormValidation.make((data) => { errors.value = data })

//watch any error from form submit
watch(() => error.value, (newError)=>{ errors.value = newError })
</script>
