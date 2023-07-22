<template>
    <div class="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
        <LoginForm v-on:loggedIn="goProfile()" />
    </div>
</template>

<script setup>
import LoginForm from '@/components/forms/LoginForm.vue';
import { useRouter } from "vue-router";

const router = useRouter()
const goProfile = () => {
    router.push({name: 'user'})
}
</script>
