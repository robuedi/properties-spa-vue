<template>
    <q-page class="flex flex-center bg-grey-2">
        <RegisterForm v-on:registered="goLogin()" />
    </q-page >
</template>

<script setup>
import RegisterForm from '@/components/forms/RegisterForm.vue';
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const router = useRouter()
const toast = useToast();
const goLogin = () => {
    toast.success("Successful registration, please login.");
    router.push({name: 'login'})
}
</script>
