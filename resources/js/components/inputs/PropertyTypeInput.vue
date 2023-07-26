<template>
  <div class="flex items-center">
    <span class="mr-6">Type</span> <SelectButton id="item" v-model="propertyTypeId" :options="propertyTypeStore.propertyTypes" optionValue="id" optionLabel="name" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { usePropertyTypeStore } from "@/store/propertyType.store";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const propertyTypeId = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const propertyTypeStore = usePropertyTypeStore()
onMounted(() => {
    propertyTypeStore.getAll()
})
</script>