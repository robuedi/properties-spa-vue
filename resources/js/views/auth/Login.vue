<template>
    <q-page class="flex flex-center bg-grey-2">
        <q-form @submit="doLogin">
            <q-card class="q-pa-md shadow-2" bordered style="width: 25rem; max-width: 100vw;">
                <!-- <span v-if="auth.isLogged">Hello {{ auth.authUser.name }} !</span> -->
                <q-card-section class="text-center">
                    <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
                </q-card-section>
                <q-card-section class="q-gutter-md"> 
                    <q-input v-bind="email" :error-message="errors.email" :error="!!errors.email" label="Email" />
                    <q-input v-bind="password" :error-message="errors.password" :error="!!errors.password" type="password" label="Password" />
                </q-card-section>
                <q-card-section v-if="errors?.general">
                    <span  class="text-red">{{errors?.general}}</span>
                </q-card-section>
                <q-card-section>
                    <q-btn color="primary" class="full-width" rounded type="submit" label="Login"></q-btn>
                </q-card-section>
            </q-card>
        </q-form>
    </q-page>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from "~/store/auth.store";

const auth = useAuthStore()

//set form validation schema
const { defineComponentBinds, handleSubmit, errors} = useForm({
  validationSchema: yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  }),
});

//set input binders
const email = defineComponentBinds('email');
const password = defineComponentBinds('password');

//do the login
const doLogin = handleSubmit((values, { setErrors, resetForm }) => {
  auth.login(values.email, values.password)
    .then(() => {
        resetForm()
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
