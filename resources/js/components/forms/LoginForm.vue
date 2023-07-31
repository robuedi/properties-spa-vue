<template>
    <Card >
        <template #title> 
            Sign in 
        </template>
        <template #content>
            <BasicForm class="mt-3">
                <ErrorFeedback :error="errors.email">
                    <InputText placeholder="Email" class="w-full" id="value" v-bind="email" type="text" :class="{ 'p-invalid': !!errors.email }" aria-describedby="text-error"  />
                </ErrorFeedback>
                <ErrorFeedback :error="errors.password">
                    <Password :feedback="false"  v-bind="password" :class="{ 'p-invalid': !!errors.password }" inputClass="w-full" placeholder="Password"/>
                </ErrorFeedback>
                <InlineMessage v-if="errors?.general" severity="warn">{{errors?.general}}</InlineMessage>
            </BasicForm>
        </template>
        <template #footer>
            <Button icon="pi pi-user" @click="doLogin" class="w-full " label="Login" />
            <p class="text-center mt-2" v-if="!props.hideRegisterLink">
                Don't have an account yet? 
                <router-link class="text-dark text-weight-bold" style="text-decoration: none" :to="{name: 'register'}"><strong>Register</strong></router-link>
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
