<template>
  <div class="flex items-center">
    <span class="mr-6">Listing</span> <SelectButton id="item" v-model="listingTypeId"  :options="listingTypeStore.listingTypes" optionValue="id" optionLabel="name" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useListingTypeStore } from "@/store/listingType.store";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const listingTypeId = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const listingTypeStore = useListingTypeStore()
onMounted(() => {
    listingTypeStore.getAll()
})
</script>