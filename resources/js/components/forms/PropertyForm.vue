<template>
    <Card >
        <template #title> 
            Details
        </template>
        <template #content>
            <div class="flex flex-col gap-3 ">
                <InputText placeholder="Name" id="name" :value="modelValue.name" @input="updateInput('name', $event.target.value)" type="text" />

                <PropertyTypeInput :modelValue="modelValue.propertyType" @update:modelValue="updateInput('propertyType', $event)" />

                <ListingTypeInput :modelValue="modelValue.listingType"  @update:modelValue="updateInput('listingType', $event)" />

                <Textarea placeholder="Description" :value="modelValue.description" @input="updateInput('description', $event.target.value)" rows="5" cols="30" />
                
                <InputNumber placeholder="Number of Bedrooms"  id="bedrooms" :modelValue="modelValue.bedrooms" @input="updateInput('bedrooms', $event.value)" type="text"  />
                
                <InputNumber placeholder="Number of Bathrooms" id="name" :modelValue="modelValue.bathrooms" @input="updateInput('bathrooms', $event.value)" type="text"/>
            </div>
        </template>
    </Card>
</template>

<script setup>
import PropertyTypeInput from '@/components/inputs/PropertyTypeInput.vue';
import ListingTypeInput from '@/components/inputs/ListingTypeInput.vue';

const { modelValue } = defineProps(['modelValue']);

const getValues = ()=>{
    //pass all the expected columns
    return Object.keys(modelValue).length ? modelValue : {
        name: null,
        description: null,
        bedrooms: null,
        bathrooms: null,
        listingType: null,
        propertyType: null
    }
}

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...getValues(), [prop]: value });
};
</script>
