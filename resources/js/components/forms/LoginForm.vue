<template>
    <q-form @submit="doLogin">
        <q-card class="q-pa-md shadow-2" bordered style="width: 25rem; max-width: 100vw;">
            <q-card-section class="text-center">
                <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
            </q-card-section>
            <q-card-section class="q-gutter-md"> 
                <q-input v-bind="email" :debounce="5000" name="email" :error-message="errors.email" :error="!!errors.email" label="Email" />
                <q-input v-bind="password" :debounce="5000" name="current-password" :error-message="errors.password" :error="!!errors.password" type="password" label="Password" />
            </q-card-section>
            <q-card-section v-if="errors?.general">
                <span  class="text-red">{{errors?.general}}</span>
            </q-card-section>
            <q-card-section>
                <q-btn color="primary" class="full-width" rounded type="submit" label="Login" />
            </q-card-section>
            <q-card-section class="text-center" v-if="!props.hideRegisterLink">
                <span class="text-grey-8">Don't have an account yet? 
                    <router-link class="text-dark text-weight-bold" style="text-decoration: none" to="/register">Register</router-link>
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
    hideRegisterLink: {
        type: Boolean,
        required: false,
        default: false
    }
})

//set form validation schema
const { defineComponentBinds, handleSubmit, errors} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
});

//set input binders
const email = defineComponentBinds('email');
const password = defineComponentBinds('password');

//do the login
const auth = useAuthStore()
const emit = defineEmits(['loggedIn'])
const doLogin = handleSubmit((values, { setErrors, resetForm }) => {
  auth.login(values)
    .then(() => {
        resetForm()
        emit('loggedIn', true)
    })
    .catch((err)=>{
        if(Array.isArray(err?.response?.data?.errors)&&err?.response?.data?.errors?.length > 0){
            setErrors({'general': err.response.data.errors.flat()})
        }
        else{
            setErrors(err?.response?.data?.errors?? {'general': ['There have been some error processing your request.']})
        }
    })
});

</script>
