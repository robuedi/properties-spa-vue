<template>
    <q-btn class="q-mb-sm" color="primary" rounded :to="{name: 'properties'}"  >Back</q-btn >
    <PropertyFormCard/>
</template>

<script setup>
import PropertyFormCard from '@/components/forms/PropertyFormCard.vue';
</script>