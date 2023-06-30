export default [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        component: () => import('@/views/auth/Login.vue'),
    },
    {
        path: '/register',
        component: () => import('@/views/auth/Register.vue'),
    },
    {
        path: '/profile',
        component: () => import('@/views/user/Profile.vue'),
    },
    {
        path: '/rent',
        component: () => import('@/views/Rent.vue'),
    },
    {
        path: '/buy',
        component: () => import('@/views/Buy.vue'),
    },
]