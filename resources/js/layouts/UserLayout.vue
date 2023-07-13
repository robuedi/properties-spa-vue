<template>
    <q-toolbar>
      <q-tabs no-caps shrink>
        <q-route-tab v-for="(value, key) in tabs" :to="{name: key}" :label="value" />
      </q-tabs>
    </q-toolbar>
  
    <q-page padding>
      <router-view  />
    </q-page>
  </template>
  
  <script setup>
  const tabs =  {
    'messages': 'Messages',
    'properties': 'My Properties',
    'saved-properties': 'Saved Properties',
    'saved-searches': 'Saved Searches',
    'profile-details': 'Profile Details',
  }
  </script>