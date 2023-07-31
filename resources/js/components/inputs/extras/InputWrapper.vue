<template>
    <div class="flex flex-col">
        <label :for="props.id" class="mb-2">{{props.name}}</label>
        <slot   ></slot>
        <small class="p-error" >{{ props.error }}</small>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: false,
        default: null,
    }
})

</script>