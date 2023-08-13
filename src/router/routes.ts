import { useAuthStore } from '@/store/auth.store'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

const redirectLoggedToHome = (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext) => {
    if (useAuthStore().isLogged) {
        next({ name: 'user' })
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
        path: '/user',
        name: 'user',
        redirect: { name: "messages" },
        component: () => import('@/layouts/sublayouts/UserSubLayout.vue'),
        meta: { requireAuth: true},
        children: [
            {
                path: 'messages',
                name: 'messages',
                component: () => import('@/views/user/Messages.vue'),
            },
            {
                path: 'my-properties',
                name: 'my-properties',
                component: () => import('@/views/user/properties/PropertiesIndex.vue'),
            },
            {
                path: 'properties/add',
                name: 'properties-add',
                component: () => import('@/views/user/properties/PropertiesAdd.vue'),
            },
            {
                path: 'saved-properties',
                name: 'saved-properties',
                component: () => import('@/views/user/SavedProperties.vue'),
            },
            {
                path: 'profile-details',
                name: 'profile-details',
                component: () => import('@/views/user/ProfileDetails.vue'),
            }
        ]
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
