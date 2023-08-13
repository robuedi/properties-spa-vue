<template>
    <Button label="Add" icon="pi pi-plus" @click="router.push({name: 'properties-add'})" />
    <p>List</p>
    <PropertyList/>   
</template>

<script setup>
import PropertyList from "@/components/user-properties/PropertyList.vue"
import { useRouter } from "vue-router";
const router = useRouter()
</script>

