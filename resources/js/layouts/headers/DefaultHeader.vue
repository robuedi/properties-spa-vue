<template>
    <header class="surface-overlay py-2 px-6 border-bottom-1 surface-border relative lg:static">
        <Menubar class="main-menu-bar-1 text-xl font-bold	" :model="items">
            <template #start>
                <Button @click="router.push({name: 'home'})" style="height: 50px; width:50px" class="mr-4" icon="pi pi-home" severity="primary" rounded size="large"  aria-label="home" />
            </template>
            <template #end>
                <Button v-if="!auth.isLogged" @click="router.push({name: 'login'})" label="Sign In" rounded outlined  severity="info"  />
                <SplitButton v-else :label="useAuthStore().authUser.name" :model="profileItems" outlined severity="secondary" @click="router.push({name: 'user'})" icon="pi pi-user" rounded ></SplitButton>
            </template>
        </Menubar>
    </header>
</template>

<style scoped>
.main-menu-bar-1{
  border:none;
  background: none;
}
.home-link, .home-link:visited, .home-link:hover, .home-link:active {
  color: initial;
}
</style>

<script setup>
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "vue-router";
const router = useRouter()

const items = [
    {
        label: 'BUY',
        icon: 'pi pi-fw pi-tag',
        command: ()=>{
            router.push({name: 'buy'})
        }
    },
    {
        label: 'RENT',
        icon: 'pi pi-fw pi-calendar',
        command: ()=>{
            router.push({name: 'rent'})
        }
    },
]

const profileItems = [
    {
        label: 'Your profile',
        icon: 'pi pi-refresh',
        command: ()=>{
            router.push({name: 'user'})
        }
    },
    {
        label: 'Logout',
        icon: 'pi pi-times',
        command: ()=>{
            doLogout()
        }
    },
];


const auth = useAuthStore()
//logout function
const doLogout = () => {
    auth.logout().then(()=>{
        router.push({name: 'home'})
    })
}

</script>
  
  