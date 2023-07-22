<template>
    <TabMenu  class="text-lg font-light" :model="items" />
    <div class="p-6">
        <router-view></router-view>
    </div>
</template>
  
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

const items = [
  {
      label: 'Messages',
      icon: 'pi pi-fw pi-home',
      class: 'pt-3 	pl-6',
      command: ()=> {
          router.push({name: 'messages'})
      }
  },
  {
      label: 'My Properties',
      icon: 'pi pi-fw pi-calendar',
      class: 'pt-3',
      command: ()=> {
          router.push({name: 'properties'})
      }
  },
  {
      label: 'Saved Properties',
      icon: 'pi pi-fw pi-pencil',
      class: 'pt-3',
      command: ()=> {
          router.push({name: 'saved-properties'})
      }
  },
  {
      label: 'Saved Searches',
      icon: 'pi pi-fw pi-file',
      class: 'pt-3',
      command: ()=> {
          router.push({name: 'saved-searches'})
      }
  },
  {
      label: 'Profile Details',
      icon: 'pi pi-fw pi-cog',
      class: 'pt-3',
      command: () => {
          router.push({name: 'profile-details'})
      }
  }
]
</script>