<template>
    <Card >
        <template #title> 
            Details
        </template>
        <template #content>
            <div class="flex flex-col gap-3 ">
                <InputSwitch2 label="Is Public" :modelValue="modelValue.is_public" @update:modelValue="updateInput('is_public', $event)"  />

                <InputWrapper name="Name" id='inp-name' :error="errors.name" >
                    <InputText :class="{'p-invalid': errors.name}" id="inp-name" placeholder="Please insert" v-bind="name"  @blur="handleInputBlur('name')" :value="modelValue.name" @input="updateInput('name', $event.target.value)" type="text" />
                </InputWrapper>

                <PropertyTypeInput :error="errors.property_type_id" v-bind="property_type_id"  @blur="handleInputBlur('property_type_id')" :value="modelValue.property_type_id" @input="updateInput('property_type_id', $event)" />

                <ListingTypeInput :error="errors.listing_type_id" v-bind="listing_type_id" @blur="handleInputBlur('listing_type_id')"  :value="modelValue.listing_type_id"  @input="updateInput('listing_type_id', $event)" />

                <InputWrapper name="Description" id='inp-description' :error="errors.description" >
                  <Textarea :class="{'p-invalid': errors.description}" placeholder="Please insert" v-bind="description" @blur="handleInputBlur('description')" :value="modelValue.description" @input="updateInput('description', $event.target.value)" rows="5" cols="30" />
                </InputWrapper>

                <InputWrapper name="Number of Bedrooms" id='inp-bedrooms' :error="errors.bedrooms" >
                  <InputNumber :class="{'p-invalid': errors.bedrooms}" placeholder="Please insert" v-bind="bedrooms" @blur="handleInputBlur('bedrooms')" id="bedrooms" :modelValue="modelValue.bedrooms" @input="updateInput('bedrooms', $event.value)" type="text"  />
                </InputWrapper>

                <InputWrapper name="Number of Bathrooms" id='inp-bathrooms' :error="errors.bathrooms" >
                  <InputNumber :class="{'p-invalid': errors.bathrooms}" placeholder="Please insert" v-bind="bathrooms" id="inp-bathrooms" @blur="handleInputBlur('bathrooms')" :modelValue="modelValue.bathrooms" @input="updateInput('bathrooms', $event.value)" type="text"/>
                </InputWrapper>
            </div>
        </template>
    </Card>
</template>

<script setup>
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';
import {ref} from 'vue'
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const { modelValue } = defineProps(['modelValue']);

const getValues = ()=>{
    //pass all the expected columns
    return Object.keys(modelValue).length ? modelValue : {
        name: null,
        description: null,
        bedrooms: null,
        bathrooms: null,
        listing_type_id: null,
        property_type_id: null,
        is_public: false
    }
}

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...getValues(), [prop]: value });
};

// //set input validation
// //set form validation schema
const {  handleSubmit, defineInputBinds, defineComponentBinds, validateField, errors} = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    property_type_id: yup.string().required(),
    listing_type_id: yup.string().required(),
    bathrooms: yup.number().required(),
    bedrooms: yup.number().required(),
  }),
});

const validateBindOptions = {
  validateOnValueUpdate: false,
  validateOnInput: false
}
const name = defineInputBinds('name', validateBindOptions);
const property_type_id = defineInputBinds('property_type_id', validateBindOptions);
const listing_type_id = defineInputBinds('listing_type_id', validateBindOptions);
const description = defineInputBinds('description', validateBindOptions);
const bathrooms = defineInputBinds('bathrooms', validateBindOptions);
const bedrooms = defineInputBinds('bedrooms', validateBindOptions);

const handleInputBlur = async (fieldName) => {
  await validateField(fieldName);
};
</script>
