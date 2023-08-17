<template>
    <div class="grow flex justify-center items-center">
        <RegisterForm v-on:registered="goLogin()" />
    </div>
</template>

<script setup lang="ts">
import RegisterForm from '@/components/forms/RegisterForm.vue';
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const router = useRouter()
const toast = useToast();
const goLogin = () => {
    toast.add({ severity: 'success', summary: 'Successful registration', detail: 'Please login', life: 3000 });
    router.push({name: 'login'})
}
</script>
