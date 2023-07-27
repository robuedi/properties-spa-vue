<template>
    <div class="flex">
        <Breadcrumb :model="breadcrumbItems" />
    </div>

    <div class="flex items-center mb-6">
        <h1 class="grow">Add Property</h1>
        <Button  label="Save" icon="pi pi-save"  severity="success"  @click="saveProperty()" />
    </div>

    <div class="flex items-start flex-wrap md:flex-nowrap space-y-8 md:space-x-8 md:space-y-0 ">
        <PropertyForm  :modelValue="property.details" @update:modelValue="updateInput('details', $event)" class="md:basis-1/2  basis-full"/>

        <div class="flex flex-col md:basis-1/2 basis-full space-y-8" >
            <AddressForm :modelValue="property.address" @update:modelValue="updateInput('address', $event)"  />
            <RentListingForm v-if="listingStore.rentItem?.id === property.details?.listingType" :modelValue="property.rentListing" @update:modelValue="updateInput('rentListing', $event)"  class="md:basis-1/2  basis-full"/>
            <SellListing v-if="listingStore.sellItem?.id === property.details?.listingType"  :modelValue="property.sellListing" @update:modelValue="updateInput('sellListing', $event)"  class="md:basis-1/2 basis-full" />
        
        </div>
    </div>
    <!-- <div class="flex items-start flex-wrap md:flex-nowrap mt-8 space-y-8 md:space-x-8 md:space-y-0 ">
        <div v-if="[listingStore.sellItem?.id, listingStore.rentItem?.id].indexOf(property.details?.listingType) > -1" class="md:basis-1/2 basis-full" >&nbsp;</div>
    </div> -->

</template>

<script setup>
import PropertyForm from '@/components/forms/PropertyForm.vue';
import AddressForm from '@/components/forms/AddressForm.vue';
import RentListingForm from '@/components/forms/RentListingForm.vue';
import SellListing from '@/components/forms/SellListing.vue';

import {reactive, ref} from "vue";
import { useListingTypeStore } from "@/store/listingType.store";
import { usePropertyStore } from "@/store/property.store";

const listingStore = useListingTypeStore()

import { useRouter } from "vue-router";
const router = useRouter()

//breadcrumbs
const breadcrumbItems = ref([
    {
        icon: 'pi pi-home',
        command: ()=>{
            router.push({name: 'home'})
        }
    },
    {
        label: 'My Properties',
        command: ()=>{
          router.push({name: 'properties'})
        }
    },
    {label: 'Add Property'},
]);

//here we store the property data
const property = reactive({
    details: {},
    address: {},
    rentListing: {},
    sellListing: {},
})

//set the data
const updateInput = (location, data)=>{
    for(let key in data){
        property[location][key] = data[key]
    }
}

//save the property
const propertyStore = usePropertyStore()
const saveProperty = () => {
    propertyStore.create({'testes':'testset'})
}

</script>