<template>
    <q-select v-model="countryId" option-value="id"  option-label="name" :options="countryStore.countries" label="Country" :clearable="true" ></q-select>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useCountryStore } from "@/store/country.store";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const countryId = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const countryStore = useCountryStore()
onMounted(() => {
    countryStore.getAll()
})
</script>