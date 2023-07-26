<template>
    <div class="flex flex-col mb-6">
        <h1 class="grow">Add Property</h1>
        <div>
            <Button class="mb-4" label="Back" icon="pi pi-plus" @click="router.push({name: 'properties'})" />
        </div>
    </div>

    <div class="flex flex-wrap md:flex-nowrap space-y-8 md:space-x-8 md:space-y-0 ">
        <PropertyForm class="md:basis-1/2  basis-full"/>
        <AddressForm class="md:basis-1/2 basis-full" />
    </div>
</template>

<script setup>
import PropertyForm from '@/components/forms/PropertyForm.vue';
import AddressForm from '@/components/forms/AddressForm.vue';
import { useRouter } from "vue-router";

const router = useRouter()
</script>