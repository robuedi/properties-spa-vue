<template>
    <Card >
        <template #title> 
            Sign in 
        </template>
        <template #content>
            <BasicForm >
                <TextInput  name="Email" v-model="form.email" :error="errors?.email" @blur="doValidate('email', $event)"  />
                <PasswordInput  name="Password" v-model="form.password" :error="errors?.password" @blur="doValidate('password', $event)"  />
                <InlineMessage v-if="errors?.general" severity="warn">{{errors?.general}}</InlineMessage>
            </BasicForm>
        </template>
        <template #footer>
            <Button icon="pi pi-user" @click="doLogin" class="w-full " label="Login" />
            <p class="text-center mt-2" v-if="!hideRegisterLink">
                Don't have an account yet? 
                <router-link class="text-dark text-weight-bold" style="text-decoration: none" :to="{name: 'register'}"><strong>Register</strong></router-link>
            </p>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth.store";
import { ILoginForm } from '@/types/forms'
import LoginFormValidation from '@/services/forms/validation/LoginFormValidation'
import useFormValidator from '@/composables/formValidator'
import useFormErrParser from '@/composables/apiFormErrParser'
import {ref} from 'vue'

//set props
const { hideRegisterLink } = withDefaults(defineProps<{ hideRegisterLink?: boolean }>(), {
    hideRegisterLink: false,
})

const form = ref<ILoginForm>({
    email: null,
    password: null
})

//make validation 
let { errors, doValidate } = useFormValidator(LoginFormValidation)

//do the login
const auth = useAuthStore()
const emit = defineEmits(['loggedIn'])
const {formErrParse} = useFormErrParser()
const doLogin = ()=>{
    auth.login(form.value)
    .then(() => {
        emit('loggedIn', true)
    })
    .catch((err)=>{
        errors.value = formErrParse(err?.response?.data?.error)
    })
}

</script>

