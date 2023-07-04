<template>
    <q-page-container>
        <q-page class="flex flex-center bg-grey-2">
            <LoginForm v-on:loggedIn="goProfile()" />
        </q-page >
    </q-page-container>
</template>

<script setup>
import LoginForm from '@/components/forms/LoginForm.vue';
import { useRouter } from "vue-router";

const router = useRouter()
const goProfile = () => {
    router.push({name: 'profile'})
}
</script>
