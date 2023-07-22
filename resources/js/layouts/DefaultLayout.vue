<template>
    <div class="wrapper p-component">
        <DefaultHeader/>

        <main class="page-main" :class="{'p-6': !route?.meta?.plainPageContainer}">
            <slot ></slot>
        </main>
    </div>
</template>
  
<script setup>
import DefaultHeader from '@/layouts/headers/DefaultHeader.vue'
import { useRoute } from "vue-router";

const route = useRoute();
</script>
  
  