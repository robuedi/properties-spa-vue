<template>
    <q-select v-model="cityId" option-value="id"  option-label="name" :options="cityStore.cities" label="City" :clearable="true" ></q-select>
</template>

<script setup>
import { onMounted, computed, watch, onUnmounted } from "vue";
import { useCityStore } from "@/store/city.store";

//set the model
const props = defineProps(['modelValue', 'countryId'])
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
//query options
const options = computed(() => { 
  return {
    where: {
      country_id: props.countryId
    }
  }
})

const fetchCities = (options_) => {
    cityStore.getAll({where: options_.where ?? {}})
}

//clear city when country changes
watch(() => props.countryId, () => {
  cityId.value = null
})

//watch options
watch(options, (newOptions) => {
  fetchCities(newOptions)
})

onMounted(() => {
  fetchCities(options)
})
onUnmounted(() => {
  cityId.value = null
})
</script>