<template>
    messages
    <button type="button" @click="fetUser()" >Click</button>
</template>

<script setup>
import { useAuthStore } from "@/store/auth.store";

const auth = useAuthStore()
const fetUser = () => {
    auth.getUser()
}
</script>

