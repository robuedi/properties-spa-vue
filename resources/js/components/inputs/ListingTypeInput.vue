<template>
  <div >
    <div class="flex items-center">
      <span class="mr-6">Listing</span> <SelectButton :class="{'p-invalid': props.error}" @blur="emit('blur')" id="listing_id" v-model="listingTypeId"  :options="listingTypeStore.listingTypes" optionValue="id" optionLabel="name" />
    </div>
    <small class="p-error" >{{ props.error }}</small>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useListingTypeStore } from "@/store/listingType.store";

const props = defineProps(['value', 'error'])
const emit = defineEmits(['input', 'blur'])

const listingTypeId = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('input', value)
  }
})

const listingTypeStore = useListingTypeStore()
onMounted(() => {
    listingTypeStore.getAll()
})
</script>