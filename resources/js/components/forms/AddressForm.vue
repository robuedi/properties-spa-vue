<template>
    <q-form >
        <div class="q-pa-md">
            <div class="q-gutter-y-md column" >
                <SelectCountry v-model="address.country" />

                <SelectCity v-model="address.city" v-if="address.country" :country-id="address.country.id"/>

                <q-input v-if="address.city" v-model="address.streetName" label="Street Name" />

                <q-input v-if="address.city" v-model="address.streetNr" label="Street Number" />

                <q-input v-if="address.city" v-model="address.postcode" label="Postcode" />
            </div>
        </div>
    </q-form>
</template>

<script setup>
import {reactive, watch } from "vue";
import SelectCity from '@/components/inputs/SelectCity.vue';
import SelectCountry from '@/components/inputs/SelectCountry.vue';

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
