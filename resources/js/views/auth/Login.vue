<template>
    <div class="grow flex justify-center items-center">
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
