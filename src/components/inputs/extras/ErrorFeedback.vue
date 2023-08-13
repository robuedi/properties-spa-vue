<template>
    <div class="flex flex-col">
        <slot></slot> 
        <small class="p-error" >{{ props.error }}</small>
    </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: String,
    required: false,
    default: null,
  }
});
</script>