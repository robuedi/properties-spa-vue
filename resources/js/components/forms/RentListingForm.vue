<template>
    <Card >
        <template #title> 
            Rent Details
        </template>
        <template #content>
            <BasicForm>
                <InputNumber placeholder="Weekly Price " id="price_weekly" type="text"  :modelValue="modelValue.price_weekly" @input="updateInput('price_weekly', $event.value)" />
                <InputNumber placeholder="Monthly Price" id="price_montyly" type="text"  :modelValue="modelValue.price_monthly" @input="updateInput('price_monthly', $event.value)" />
                <InputNumber placeholder="Deposit" id="deposit" type="text"  :modelValue="modelValue.deposit" @input="updateInput('deposit', $event.value)" />
                <InputNumber placeholder="Minimum Tenancy" id="minimum_tenancy" type="text" :modelValue="modelValue.minimum_tenancy" @input="updateInput('minimum_tenancy', $event.value)"  />
                <InputSwitch2 label="Pets Allowed" :modelValue="modelValue.pets_allowed" @update:modelValue="updateInput('pets_allowed', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup>
const { modelValue } = defineProps(['modelValue']);

const getValues = ()=>{
    //pass all the expected columns
    return Object.keys(modelValue).length ? modelValue : {
        price_weekly: null,
        price_monthly: null,
        deposit: null,
        minimum_tenancy: null,
        pets_allowed: null
    }
}

const emit = defineEmits();
const updateInput = (prop, value) => {
  emit('update:modelValue', { ...getValues(), [prop]: value });
};
</script>
