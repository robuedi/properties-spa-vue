<template>
    <div class="flex flex-col">
        <InputLabel v-if="props.name !== null" :for="props.id">{{props.name}}</InputLabel>
        <Textarea v-bind="$attrs, $props" :class="{'p-invalid': props.error}" :placeholder="props.placeholder !== null ? props.placeholder : 'Please insert'" @input="emit('input', $event.target.value)" rows="5" cols="30" />
        <InputError>{{ props.error }}</InputError>
    </div>
</template>
<script setup>
import Textarea from 'primevue/textarea'
import InputError from '@/components/inputs/extras/InputError.vue'
import InputLabel from '@/components/inputs/extras/InputLabel.vue'

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: false,
        default: null,
    },
    placeholder: {
        type: String,
        required: false,
        default: null,
    },
    error:{
        type: String,
        required: false,
        default: '',
    }
});
const emit = defineEmits(['input'])
</script>