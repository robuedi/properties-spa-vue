<template>
    <q-select v-model="cityId" option-value="id"  option-label="name" :options="cityStore.cities" label="City" :clearable="true" ></q-select>
</template>

<script setup>
import City from '@/api/models/City'
import { onMounted, computed, watch, onUnmounted } from "vue";
import { useCityStore } from "@/store/city.store";

//set the model
const props = defineProps({
  modelValue: {
    type: [Object],
    required: false,
    default: null,
  },
  countryId: {
    type: Number,
    required: false,
    default: null,
  }
});
const emit = defineEmits(['update:modelValue'])

const cityId = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const cityStore = useCityStore()
//get cities
const fetchCities = () => { 
  props.countryId ? cityStore.getAll(City.where({country_id: props.countryId})) : cityStore.getAll(new City())
}

//clear city when country changes
watch(() => props.countryId, () => {
  cityId.value = null
  fetchCities()
})

onMounted(() => {
  fetchCities()
})
onUnmounted(() => {
  cityId.value = null
})
</script>