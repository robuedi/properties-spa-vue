<template>
    <label :for="props.for" class="mb-2">
        <slot></slot>
    </label>  
</template>

<script setup>
const props = defineProps({
    for: {
        type: String,
        required: false,
        default:''
    }
})
</script>