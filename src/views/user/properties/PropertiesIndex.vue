<template>
    <HeadingContainer class="flex justify-between items-center">
        <Heading1>My Properties</Heading1>
        <Button label="Add" icon="pi pi-plus" @click="router.push({name: 'properties-add'})" />
    </HeadingContainer>
    <PropertyList/>   
</template>

<script setup>
import PropertyList from "@/components/user-properties/PropertyList.vue"
import { useRouter } from "vue-router";
const router = useRouter()
</script>

