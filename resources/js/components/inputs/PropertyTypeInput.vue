<template>
    <div>
        <span class="grey-txt">Type:</span>
        <q-radio class="q-pr-lg" v-for="propertyType in propertyTypeStore.propertyTypes" v-model="propertyTypeId" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" :val="propertyType.id" :label="propertyType.name.capitalize()" />
    </div>

    <!-- <q-select v-model="propertyTypeId" option-value="id"  option-label="name" :options="propertyTypeStore.propertyTypes" label="Property Type" :clearable="true" ></q-select> -->
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