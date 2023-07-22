<template>
    <Card style="width: 25em">
        <template #title> 
            Sign in 
        </template>
        <template #content>
            <form class="mt-3">
                <div class="mb-2">
                    <InputText placeholder="Email" class="w-full" id="value" v-bind="email" type="text" name="email" :class="{ 'p-invalid': !!errors.email }" aria-describedby="text-error"  />
                    <small class="p-error" id="text-error">{{ errors.email || '&nbsp;' }}</small>
                </div>
                <div class="mb-2">
                    <Password :feedback="false"  v-bind="password" inputClass="w-full" placeholder="Password"/>
                    <small class="p-error" id="text-error">{{ errors.password || '&nbsp;' }}</small>
                </div>
            </form>
            <InlineMessage v-if="errors?.general" severity="warn">{{errors?.general}}</InlineMessage>
        </template>
        <template #footer>
            <Button icon="pi pi-user" @click="doLogin" class="w-full " label="Login" />
            <p class="text-center mt-2" v-if="!props.hideRegisterLink">
                Don't have an account yet? 
                <router-link class="text-dark text-weight-bold" style="text-decoration: none" to="/register"><strong>Register</strong></router-link>
            </p>
        </template>
    </Card>
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
