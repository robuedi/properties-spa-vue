<template>
    <Card >
        <template #title> 
            Rent Details
        </template>
        <template #content>
            <BasicForm>
                <InputError v-if="errors.general">{{ errors.general }}</InputError>
                <InputError v-if="errors.any_price">{{ errors.any_price }}</InputError>
                <NumberInput name="Weekly Price" :error="errors.price_weekly" @blur="doValidate('any_price', modelValue.price_weekly||modelValue.price_monthly); doValidate('price_weekly', modelValue.price_weekly)" :modelValue="modelValue.price_weekly" @input="updateInput('price_weekly', $event)" />
                <NumberInput name="Monthly Price" :error="errors.price_monthly" @blur="doValidate('any_price', modelValue.price_weekly||modelValue.price_monthly); doValidate('price_monthly', modelValue.price_monthly)" :modelValue="modelValue.price_monthly" @input="updateInput('price_monthly', $event)" />
                <NumberInput name="Deposit" :error="errors.deposit" @blur="doValidate('deposit', modelValue.deposit)" :modelValue="modelValue.deposit" @input="updateInput('deposit', $event)" />
                <NumberInput name="Minimum Tenancy" :error="errors.minimum_tenancy" @blur="doValidate('minimum_tenancy', modelValue.minimum_tenancy)" :modelValue="modelValue.minimum_tenancy" @input="updateInput('minimum_tenancy', $event)" />
                <InputSwitch2 label="Pets Allowed"  :modelValue="modelValue.pets_allowed" @update:modelValue="updateInput('pets_allowed', $event)"  />
            </BasicForm>
        </template>
    </Card>
</template>

<script setup lang="ts">
import InputError from '@/components/inputs/extras/InputError.vue'
import { IRentListing, FormErrorMessages } from '@/types/forms'
import useUpdateModelProperty from '@/composables/updateModelProperty'
import RentListingFormValidation from '@/services/forms/validation/RentListingFormValidation'
import useFormValidator from '@/composables/formValidator'
import {watch} from 'vue'
import { toRefs } from 'vue';

//set props
const props = withDefaults(
  defineProps<{ 
    modelValue: IRentListing, 
    error: FormErrorMessages
  }>(), 
  {
    modelValue: () => {
        return {
          price_weekly: null,
          price_monthly: null,
          deposit: null,
          minimum_tenancy: null,
          pets_allowed: null
        }
    } ,
    error: () => {return {}}  
  }
)
const { modelValue, error } = toRefs(props)

//emit model update
const emit = defineEmits(['update:modelValue'])
const { updateInput } = useUpdateModelProperty<IRentListing>(modelValue, emit)

//make validation 
let { errors, doValidate } = useFormValidator(RentListingFormValidation)

//watch any error from form submit
watch(() => error.value, (newError) => { errors.value = newError })
</script>
