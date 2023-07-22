<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
  <Toast position="bottom-right" />
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/store/auth.store";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const auth = useAuthStore()
onMounted(() => {
    auth.refreshToken()
})

</script>

