<template>
    <div class="flex flex-col">
        <InputLabel v-if="props.name !== null" :for="props.id">{{props.name}}</InputLabel>
        <Password v-bind="$attrs, $props"  :placeholder="props.placeholder !== null ? props.placeholder : 'Please insert'" inputClass="w-full" :class="{'p-invalid': props.error}"  @blur="emit('blur',  $event.target.value)" @input="emit('input', $event.target.value)" />
        <InputError>{{ props.error }}</InputError>
    </div>
</template>
<script setup>
import Password from 'primevue/password'
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
const emit = defineEmits(['input', 'blur'])
</script>