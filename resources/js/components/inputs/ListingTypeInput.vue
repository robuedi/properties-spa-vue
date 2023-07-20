<template>
  <div>
    <span class="grey-txt">Listing:</span>
    <q-radio class="q-pr-lg" v-for="listingType in listingTypeStore.listingTypes" v-model="listingTypeId" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="listingType.id" :label="listingType.name.capitalize()" />
  </div>
    <!-- <q-select v-model="listingTypeId" option-value="id"  option-label="name" :options="listingTypeStore.listingTypes" label="Listing Type" :clearable="true" ></q-select> -->
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