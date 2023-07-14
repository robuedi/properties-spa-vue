<template>
    <q-form >
        <q-card class="q-pa-md shadow-2" bordered style="width: 25rem; max-width: 100vw;">
            <q-card-section class="q-gutter-md"> 
                <q-input v-bind="streetNr" :debounce="5000" :error-message="errors.street_nr" :error="!!errors.street_nr" label="Street Number" />
                <q-input v-bind="street" :debounce="5000" :error-message="errors.street" :error="!!errors.street" label="street" />
            </q-card-section>
            <q-card-section v-if="errors?.general">
                <span  class="text-red">{{errors?.general}}</span>
            </q-card-section>
        </q-card>
    </q-form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

//set props
const props = defineProps({
    hideLoginLink: {
        type: Boolean,
        required: false,
        default: false
    }
})

//set form validation schema
const { defineComponentBinds, handleSubmit, errors} = useForm({
  validationSchema: yup.object({
    name: yup.integer().required(),
    email: yup.string().required(),
  }),
});

//set input binders
const streetNr = defineComponentBinds('streetNr');
const street = defineComponentBinds('street');

</script>
