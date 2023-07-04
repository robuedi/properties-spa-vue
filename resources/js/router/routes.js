import { useAuthStore } from '@/store/auth.store'

const redirectLoggedToHome = (to, from, next) => {
    if (useAuthStore().isLogged) {
        next({ name: 'home' })
    } else {
        next()
    }
}

export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
        beforeEnter: redirectLoggedToHome
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/Register.vue'),
        beforeEnter: redirectLoggedToHome
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/user/Profile.vue'),
        meta: { requireAuth: true },
    },
    {
        path: '/rent',
        name: 'rent',
        component: () => import('@/views/Rent.vue'),
    },
    {
        path: '/buy',
        name: 'buy',
        component: () => import('@/views/Buy.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue'),
    },
]