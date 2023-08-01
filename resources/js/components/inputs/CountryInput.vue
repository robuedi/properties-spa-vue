<template>
  <InputWrapper name="Country" >
    <Dropdown v-model="countryId" showClear :options="countryStore.countries" filter optionValue="id" optionLabel="name" placeholder="Please select" class="w-full"/>
  </InputWrapper>
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