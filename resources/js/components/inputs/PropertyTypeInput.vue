<template>
  <div>
    <div class="flex items-center">
      <span class="mr-6">Type</span> <SelectButton  :class="{'p-invalid': props.error}" id="inp-prop-type" @blur="emit('blur')" v-model="propertyTypeId" :options="propertyTypeStore.propertyTypes" optionValue="id" optionLabel="name" />
    </div>
    <small class="p-error" >{{ props.error }}</small>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { usePropertyTypeStore } from "@/store/propertyType.store";

const props = defineProps(['value', 'error'])
const emit = defineEmits(['input', 'blur'])

const propertyTypeId = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('input', value)
  }
})

const propertyTypeStore = usePropertyTypeStore()
onMounted(() => {
    propertyTypeStore.getAll()
})

</script>