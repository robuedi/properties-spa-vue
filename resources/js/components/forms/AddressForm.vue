<template>
    <Card >
        <template #title> 
            Address
        </template>
        <template #content>
            <BasicForm>
                <CountryInput :modelValue="modelValue.country" @update:modelValue="updateInput('country', $event)" />

                <CityInput :modelValue="modelValue.city_id" @update:modelValue="updateInput('city_id', $event)" v-if="modelValue.country" :country-id="modelValue.country.id"/>

                <div  v-if="modelValue.city_id"  class="mb-2">
                    <InputText placeholder="Street Name" class="w-full" id="value"  type="text" :value="modelValue.street" @input="updateInput('street', $event.target.value)"    />
                </div>           

                <div  v-if="modelValue.city_id"  class="mb-2">
                    <InputText placeholder="Street Number" class="w-full" id="value" type="text"  :value="modelValue.street_nr" @input="updateInput('street_nr', $event.target.value)"  />
                </div>   

                <div  v-if="modelValue.city_id"  class="mb-2">
                    <InputText placeholder="Postcode" class="w-full" id="value" type="text" :value="modelValue.postcode" @input="updateInput('postcode', $event.target.value)"  />
                </div>
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
import CityInput from '@/components/inputs/CityInput.vue';
import CountryInput from '@/components/inputs/CountryInput.vue';

const { modelValue } = defineProps(['modelValue']);

const getValues = ()=>{
    //pass all the expected columns
    return Object.keys(modelValue).length ? modelValue : {
        country: null,
        city_id: null,
        street_nr: null,
        street: null,
        postcode: null
    }
}

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...getValues(), [prop]: value });
};
</script>
