import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/:catchAll(.*)",
    redirect: () => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: "/" };
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
