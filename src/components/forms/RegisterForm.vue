<template>
    <Card style="width: 25em">
        <template #title> 
            Register 
        </template>
        <template #content>
            <BasicForm class="mt-3">

                <TextInput  name="Name" v-model="form.name" :error="errors?.name" @blur="doValidate('name', $event)"  />
                <TextInput  name="Email" v-model="form.email" :error="errors?.email" @blur="doValidate('email', $event)"  />

                <ErrorFeedback :error="errors.password">
                    <InputLabel>Password</InputLabel>
                    <Password  v-model="form.password" @update="doValidate('password', $event)"  inputClass="w-full" placeholder="Please insert">
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
                    <InputLabel>Password Confirmation</InputLabel>
                    <Password :feedback="false" @update="doValidate('password_confirmation', $event)" v-model="form.password_confirmation" inputClass="w-full" placeholder="Please insert"/>
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
import { useAuthStore } from "@/store/auth.store"
import { IRegistrationForm } from '@/types/forms'
import RegisterFormValidation from '@/services/forms/validation/RegisterFormValidation'
import useFormValidator from '@/composables/formValidator'
import useFormErrParser from '@/composables/apiFormErrParser'
import InputLabel from '@/components/inputs/extras/InputLabel.vue'
import {ref} from 'vue'

//set props
const { hideLoginLink } = withDefaults(defineProps<{ hideLoginLink?: boolean }>(), {
    hideLoginLink: false,
})

const auth = useAuthStore()

const form = ref<IRegistrationForm>({
    name: null,
    email: null,
    password: null,
    password_confirmation: null
})

//make validation 
let { errors, doValidate } = useFormValidator(RegisterFormValidation)

//do the registration
const emit = defineEmits(['registered'])
const {formErrParse} = useFormErrParser()
const doRegister = () => {
    //submit registration request
    auth.register(form.value)
    .then(() => {
        emit('registered', true)
    })
    .catch((err)=>{
        errors.value = formErrParse(err?.response?.data?.error)
    })
}

</script>
