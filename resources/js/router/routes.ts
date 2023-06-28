export default [
        {
          path: '/',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/login',
          component: () => import('@/views/Login.vue'),
        },
        {
          path: '/register',
          component: () => import('@/views/Register.vue'),
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