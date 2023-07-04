<template>
    <q-form @submit="doLogin">
        <q-card class="q-pa-md shadow-2" bordered style="width: 25rem; max-width: 100vw;">
            <q-card-section class="text-center">
                <div class="text-grey-9 text-h5 text-weight-bold">Register</div>
            </q-card-section>
            <q-card-section class="q-gutter-md"> 
                <q-input v-bind="name" :debounce="5000" :error-message="errors.name" :error="!!errors.name" label="Name" />
                <q-input v-bind="email" :debounce="5000" autocomplete="email" :error-message="errors.email" :error="!!errors.email" label="Email" />
                <q-input v-bind="password" :debounce="5000" autocomplete="new-password" :error-message="errors.password" :error="!!errors.password" type="password" label="Password" />
                <q-input v-bind="password_confirmation" :debounce="5000" autocomplete="new-password" :error-message="errors.password_confirmation" :error="!!errors.password_confirmation" type="password" label="Confirm Password" />
            </q-card-section>
            <q-card-section v-if="errors?.general">
                <span  class="text-red">{{errors?.general}}</span>
            </q-card-section>
            <q-card-section>
                <q-btn color="primary" class="full-width" rounded type="submit" label="Register" />
            </q-card-section>
            <q-card-section class="text-center" v-if="!props.hideLoginLink">
                <span class="text-grey-8">Already having an account? 
                    <router-link class="text-dark text-weight-bold" style="text-decoration: none" to="/login">Login</router-link>
                </span>
            </q-card-section>
        </q-card>
    </q-form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from "@/store/auth.store";

//set props
const props = defineProps({
    hideLoginLink: {
        type: Boolean,
        required: false,
        default: false
    }
})

const auth = useAuthStore()

//set form validation schema
const { defineComponentBinds, handleSubmit, errors} = useForm({
  validationSchema: yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    password_confirmation: yup.string().min(6).required(),
  }),
});

//set input binders
const name = defineComponentBinds('name');
const email = defineComponentBinds('email');
const password = defineComponentBinds('password');
const password_confirmation = defineComponentBinds('password_confirmation');

//do the registration
const emit = defineEmits(['registered'])
const doLogin = handleSubmit((values, { setErrors, resetForm }) => {
  auth.register(values)
    .then(() => {
        resetForm()
        emit('registered', true)
    })
    .catch((err)=>{
        if(Array.isArray(err.response.data.errors)&&err.response.data.errors.length > 0){
            setErrors({'general': err.response.data.errors.flat()})
        }
        else{
            setErrors(err.response.data.errors)
        }
    })
});

</script>
