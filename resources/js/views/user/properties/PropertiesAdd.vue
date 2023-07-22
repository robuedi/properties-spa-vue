<template>
    <h1>Add Property</h1>
    <Button class="mb-4" label="Back" icon="pi pi-plus" @click="router.push({name: 'properties'})" />

    <PropertyFormCard/>
</template>

<script setup>
import PropertyFormCard from '@/components/forms/PropertyFormCard.vue';
import { useRouter } from "vue-router";

const router = useRouter()
</script>