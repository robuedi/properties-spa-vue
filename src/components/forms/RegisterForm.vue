<template>
    <Card style="width: 25em">
        <template #title> 
            Register 
        </template>
        <template #content>
            <BasicForm class="mt-3">
                <ErrorFeedback :error="errors.name">
                    <InputText placeholder="Name" class="w-full" id="value" v-bind="name" type="text" name="name" :class="{ 'p-invalid': !!errors.name }" aria-describedby="text-error"  />
                </ErrorFeedback>
                <ErrorFeedback :error="errors.email">
                    <InputText placeholder="Email" class="w-full" id="value" v-bind="email" type="text" name="email" :class="{ 'p-invalid': !!errors.email }" aria-describedby="text-error"  />
                </ErrorFeedback>
                <ErrorFeedback :error="errors.password">
                    <Password  v-bind="password" inputClass="w-full" placeholder="Password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                </ErrorFeedback>
                <ErrorFeedback :error="errors.password_confirmation">
                    <Password :feedback="false"  v-bind="password_confirmation" inputClass="w-full" placeholder="Password Confirmation"/>
                </ErrorFeedback>
                <InlineMessage v-if="errors?.general" severity="warn">{{errors?.general}}</InlineMessage>
            </BasicForm>
        </template>
        <template #footer>
            <Button icon="pi pi-user" @click="doRegister" class="w-full " label="Register" />
            <p class="text-center mt-2" v-if="!hideLoginLink">
                Already having an account?  
                <router-link class="text-dark text-weight-bold" style="text-decoration: none" :to="{name: 'login'}"><strong>Login</strong></router-link>
            </p>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from "@/store/auth.store"
import { UserRegistrationCredentials } from '@/types/api'

//set props
const { hideLoginLink } = withDefaults(defineProps<{ hideLoginLink?: boolean }>(), {
    hideLoginLink: false,
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
const doRegister = handleSubmit((values , { setErrors, resetForm }) => {
    //cast the values as the type we need for the api
    let valueCast = values as UserRegistrationCredentials
    if(!valueCast){
        throw new Error('Wrong registration fields sent')
    }

    //submit registration request
    auth.register(valueCast)
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
