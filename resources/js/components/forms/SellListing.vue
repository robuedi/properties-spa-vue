<template>
    <Card >
        <template #title> 
            Sell Details
        </template>
        <template #content>
            <BasicForm>
                <InputNumber placeholder="Price" id="price"  :modelValue="modelValue.price" @input="updateInput('price', $event.value)" type="text"/>
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
const { modelValue } = defineProps(['modelValue']);

const getValues = ()=>{
    //pass all the expected columns
    return Object.keys(modelValue).length ? modelValue : {
        price: null
    }
}

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...getValues(), [prop]: value });
};
</script>
