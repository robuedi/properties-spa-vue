import { createWebHistory, createRouter } from "vue-router";
import { useAuthStore } from '@/store/auth.store'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext) => {
  if (to.meta.requireAuth && !useAuthStore().isLogged){
      next({ name: 'login' })
  }else{
      next()
  } 
})

export default router;