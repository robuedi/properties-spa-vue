<template>
    <Card >
        <template #title> 
            Details
        </template>
        <template #content>
            <BasicForm>
                <InputSwitch2 label="Is Public" :modelValue="props.modelValue.is_public" @update:modelValue="updateInput('is_public', $event)"  />

                <TextInput name="Name" :error="errors.name" v-bind="name"  @blur="validateField('name')" :value="props.modelValue.name" @input="updateInput('name', $event)" />

                <PropertyTypeInput :error="errors.property_type_id" v-bind="property_type_id"  @blur="validateField('property_type_id')" :value="props.modelValue.property_type_id" @input="updateInput('property_type_id', $event)" />

                <ListingTypeInput :error="errors.listing_type_id" v-bind="listing_type_id" @blur="validateField('listing_type_id')"  :value="props.modelValue.listing_type_id"  @input="updateInput('listing_type_id', $event)" />

                <TextareaInput name="Description" :error="errors.description" v-bind="description" @blur="validateField('description')" :value="props.modelValue.description" @input="updateInput('description', $event)" />

                <NumberInput name="Number of Bedrooms" :error="errors.bedrooms" v-bind="bedrooms" @blur="validateField('bedrooms')" :modelValue="props.modelValue.bedrooms" @input="updateInput('bedrooms', $event)"  />

                <NumberInput name="Number of Bathrooms" :error="errors.bathrooms" v-bind="bathrooms" @blur="validateField('bathrooms')" :modelValue="props.modelValue.bathrooms" @input="updateInput('bathrooms', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import {watch, ref, toRef} from 'vue'

//set model props
const props = defineProps({
  modelValue:{
    type: Object,
    required: true,
    default: {
      name: null,
      description: null,
      bedrooms: null,
      bathrooms: null,
      listing_type_id: null,
      property_type_id: null,
      is_public: false
    }
  },
  error: {
    type: Object,
    required: false,
    default: {
      name: [],
      description: [],
      bedrooms: [],
      bathrooms: [],
      listing_type_id: [],
      property_type_id: []
    }
  }
})

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...props.modelValue, [prop]: value });
};

// //set input validation
// //set form validation schema
const {  setErrors, defineInputBinds, validateField, errors} = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    property_type_id: yup.string().required(),
    listing_type_id: yup.string().required(),
    bathrooms: yup.number().required(),
    bedrooms: yup.number().required(),
  }),
});

const validationBind = (fieldName) => defineInputBinds(fieldName, {validateOnValueUpdate: false, validateOnInput: false})
const name = validationBind('name');
const property_type_id = validationBind('property_type_id');
const listing_type_id = validationBind('listing_type_id');
const description = validationBind('description');
const bathrooms = validationBind('bathrooms');
const bedrooms = validationBind('bedrooms');

//watch any error from form submit
// let formError = toRef(props.error)
watch(() => props.error, (newError)=>{
  setErrors(JSON.parse(JSON.stringify(newError)))
})
</script>
