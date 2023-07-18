<template>
    <AddressForm v-on:updated="clearr"/>
    <button type="button" >click</button>
</template>

<script setup>
import AddressForm from '@/components/forms/AddressForm.vue';

const clearr= (value)=>{
    console.log(JSON.parse(JSON.stringify(value)))
}
</script>