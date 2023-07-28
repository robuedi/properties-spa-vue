<template>
    <div class="flex">
        <Breadcrumb :model="breadcrumbItems" />
    </div>

    <div class="flex items-center mb-6">
        <h1 class="grow">Add Property</h1>
        <Button  label="Save" icon="pi pi-save"  severity="success"  @click="saveProperty()" />
    </div>

    <div class="flex items-start flex-wrap md:flex-nowrap space-y-8 md:space-x-8 md:space-y-0 ">
        <PropertyForm  :modelValue="propertyData.property" @update:modelValue="updateInput('property', $event)" class="md:basis-1/2  basis-full"/>

        <div class="flex flex-col md:basis-1/2 basis-full space-y-8" >
            <AddressForm :modelValue="propertyData.address" @update:modelValue="updateInput('address', $event)"  />
            <RentListingForm v-if="listingStore.rentItem?.id === propertyData.property?.listing_type_id" :modelValue="propertyData.rent_listing" @update:modelValue="updateInput('rent_listing', $event)"  class="md:basis-1/2  basis-full"/>
            <SellListing v-if="listingStore.sellItem?.id === propertyData.property?.listing_type_id"  :modelValue="propertyData.sell_listing" @update:modelValue="updateInput('sell_listing', $event)"  class="md:basis-1/2 basis-full" />
        
        </div>
    </div>
</template>

<script setup>
import PropertyForm from '@/components/forms/PropertyForm.vue';
import AddressForm from '@/components/forms/AddressForm.vue';
import RentListingForm from '@/components/forms/RentListingForm.vue';
import SellListing from '@/components/forms/SellListing.vue';

import {reactive, ref} from "vue";
import { useListingTypeStore } from "@/store/listingType.store";
import { useUserPropertyStore } from "@/store/userProperty.store";

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
const propertyData = reactive({
    property: {},
    address: {},
    rent_listing: {},
    sell_listing: {},
})

//set the data
const updateInput = (location, data)=>{
    for(let key in data){
        propertyData[location][key] = data[key]
    }
}

//save the property
const userPropertyStore = useUserPropertyStore()
const saveProperty = () => {
    let data  = {...propertyData}
    delete data.property
    userPropertyStore.store({
        ...propertyData.property, 
        ...data
    })
}

</script>