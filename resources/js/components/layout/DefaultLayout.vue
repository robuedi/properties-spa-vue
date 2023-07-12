<template>
    <q-layout class="bg-grey-2" view="hHh lpR fFf">
        <DefaultHeader/>
      
        <q-page-container>
            <slot></slot>
        </q-page-container>
  
    </q-layout>
  </template>
  
  <script setup>
  
  import DefaultHeader from '@/components/layout/headers/DefaultHeader.vue'
  
  </script>
  
  