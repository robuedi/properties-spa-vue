<template>
    <div class="flex flex-col">
        <InputLabel :for="props.id">{{props.name}}</InputLabel>
        <slot ></slot>
        <InputError>{{ props.error }}</InputError>
    </div>
</template>

<script setup>
import InputError from '@/components/inputs/extras/InputError.vue'
import InputLabel from '@/components/inputs/extras/InputLabel.vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: false,
        default:''
    },
    error: {
        type: String,
        required: false,
        default: null,
    },
    placeholder: {
        type: String,
        required: false,
        default:''
    },
})

</script>