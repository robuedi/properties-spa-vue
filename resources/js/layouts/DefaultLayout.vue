<template>
    <div class="flex flex-col min-h-screen bg-surface-ground p-component">
        <DefaultHeader/>

        <main class="grow  flex flex-col p-8 md:mx-10 lg:mx-38 xl:mx-48" >
        <!-- :class="{'': !route?.meta?.plainPageContainer}"> -->
            <slot ></slot>
        </main>
    </div>
</template>
  
<script setup>
import DefaultHeader from '@/layouts/headers/DefaultHeader.vue'
</script>
  
  