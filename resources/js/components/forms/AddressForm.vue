<template>
        <CountryInput v-model="address.country" />

        <CityInput v-model="address.city" v-if="address.country" :country-id="address.country.id"/>

        <div  v-if="address.city"  class="mb-2">
            <InputText placeholder="Street Name" class="w-full" id="value" v-bind="address.streetName" type="text" name="street_name"   />
        </div>           

        <div  v-if="address.city"  class="mb-2">
            <InputText placeholder="Street Number" class="w-full" id="value" v-bind="address.streetNr" type="text" name="street_nr" />
        </div>   

        <div  v-if="address.city"  class="mb-2">
            <InputText placeholder="Postcode" class="w-full" id="value" v-bind="address.postcode" type="text" name="postcode" />
        </div>
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
