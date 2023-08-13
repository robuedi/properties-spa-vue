<template>
    <div class="flex flex-col">
        <InputLabel v-if="props.name !== null" :for="props.id">{{props.name}}</InputLabel>
        <InputText v-bind="$attrs, $props"  :placeholder="props.placeholder !== null ? props.placeholder : 'Please insert'"  :class="{'p-invalid': props.error}"  @input="emit('input', $event.target.value)" />
        <InputError>{{ props.error }}</InputError>
    </div>
</template>
<script setup>
import InputText from 'primevue/inputtext'
import InputError from '@/components/inputs/extras/InputError.vue'
import InputLabel from '@/components/inputs/extras/InputLabel.vue'

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