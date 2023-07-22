<template>
    <Button label="Add" icon="pi pi-plus" @click="router.push({name: 'properties-add'})" />
    <p>List</p>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
</script>

