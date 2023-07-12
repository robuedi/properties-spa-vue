<template>
    <q-header elevated  height-hint="98">
    <q-toolbar>
        <q-toolbar-title >
        <router-link :to="{name: 'home'}" class="text-white txt-no-decoration">
            <q-avatar>
                <q-icon name="fa-solid fa-house" />
            </q-avatar>
            Properties
        </router-link>
        </q-toolbar-title>

        <div class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
        <q-btn :to="{name: 'rent'}"  size="lg" dense flat>
            To Rent
        </q-btn>
        <q-space/>  
        <q-btn :to="{name: 'buy'}"  size="lg" dense flat>
            To Buy
        </q-btn>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
        <q-btn dense flat>
            <div class="row items-center no-wrap">
            Rent/Sell Your Property
            <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
            <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                    <q-item-section>Rent new property</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                    <q-item-section>Sell new property</q-item-section>
                </q-item>
            </q-list>
            </q-menu>
        </q-btn>

        <q-space />
        <q-space />

        <q-btn v-if="!auth.isLogged" :to="{name: 'login'}"  dense flat>
            Sign In
        </q-btn>

        <q-btn v-else dense flat no-wrap>
            <q-avatar rounded size="20px">
                <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            &nbsp;
            {{useAuthStore().authUser.name}}
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
            <q-list dense>
                <q-item clickable :to="{name:'user'}" class="GL__menu-link">
                    <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                    <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item v-on:click="auth.logout()" clickable class="GL__menu-link">
                    <q-item-section>Logout</q-item-section>
                </q-item>
            </q-list>
            </q-menu>
        </q-btn>
        </div>
    </q-toolbar>

    </q-header>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useAuthStore } from "@/store/auth.store";
  
  const auth = useAuthStore()
  
  onMounted(() => {
    auth.setToken()
  })
  
  </script>
  
  