<template>
    <div class="flex items-center">
      <span class="mr-6">{{label}}</span> <InputSwitch v-model="value" />
    </div>
</template>
  
<script setup>
import { computed } from "vue";
import InputSwitch from 'primevue/inputswitch'
const props = defineProps(['modelValue', 'label'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>