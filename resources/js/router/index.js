import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from '@/store/auth.store'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !useAuthStore().isLogged){
      next({ name: 'login' })
  }else{
      next()
  } 
})

export default router;