<template>
        <CountryInput v-model="address.country" />

        <CityInput v-model="address.city" v-if="address.country" :country-id="address.country.id"/>

        <q-input v-if="address.city" v-model="address.streetName" label="Street Name" />

        <q-input v-if="address.city" v-model="address.streetNr" label="Street Number" />

        <q-input v-if="address.city" v-model="address.postcode" label="Postcode" />
</template>

<script setup>
import {reactive, watch } from "vue";
import CityInput from '@/components/inputs/CityInput.vue';
import CountryInput from '@/components/inputs/CountryInput.vue';

const address = reactive({
    country: null,
    city: null,
    streetName: null,
    streetNr: null,
    postcode: null
})

const emit = defineEmits(['updated'])
watch(address, (newAddress) => {
    emit('updated', JSON.parse(JSON.stringify(newAddress)))
})

</script>
