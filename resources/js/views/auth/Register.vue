<template>
    <q-page class="flex flex-center bg-grey-2">
        <RegisterForm v-on:registered="goLogin()" />
    </q-page >
</template>

<script setup>
import RegisterForm from '@/components/forms/RegisterForm.vue';
import { useRouter } from "vue-router";

const router = useRouter()
const goLogin = () => {
    router.push({name: 'login'})
}
</script>
