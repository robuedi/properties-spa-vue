<template>
    <div class="flex flex-col mb-6">
        <h1 class="grow">Add Property</h1>
        <div>
            <Button class="mb-4" label="Back" icon="pi pi-plus" @click="router.push({name: 'properties'})" />
        </div>
    </div>

    <div class="flex flex-wrap md:flex-nowrap space-y-8 md:space-x-8 md:space-y-0 ">
        <PropertyForm  :modelValue="property.details" @update:modelValue="updateInput('details', $event)" class="md:basis-1/2  basis-full"/>
        <AddressForm :modelValue="property.address" @update:modelValue="updateInput('address', $event)" class="md:basis-1/2 basis-full" />
    </div>
    <div class="flex flex-wrap md:flex-nowrap mt-8 space-y-8 md:space-x-8 md:space-y-0 ">
        <RentListingForm v-if="listingStore.rentItem?.id === property.details?.listingType" :modelValue="property.rentListing" @update:modelValue="updateInput('rentListing', $event)"  class="md:basis-1/2  basis-full"/>
        <SellListing v-if="listingStore.sellItem?.id === property.details?.listingType"  :modelValue="property.sellListing" @update:modelValue="updateInput('sellListing', $event)"  class="md:basis-1/2 basis-full" />
    </div>

</template>

<script setup>
import PropertyForm from '@/components/forms/PropertyForm.vue';
import AddressForm from '@/components/forms/AddressForm.vue';
import RentListingForm from '@/components/forms/RentListingForm.vue';
import SellListing from '@/components/forms/SellListing.vue';

import {reactive} from "vue";
import { useListingTypeStore } from "@/store/listingType.store";

const listingStore = useListingTypeStore()

import { useRouter } from "vue-router";
const router = useRouter()

const property = reactive({
    details: {
    },
    address: {},
    rentListing: {},
    sellListing: {},
})

const updateInput = (location, data)=>{
    for(let key in data){
        property[location][key] = data[key]
    }
}

</script>