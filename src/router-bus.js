import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Arena from './components/Arena.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login},
  {
    path: '/logout',
    name: 'Logout',
    component: Logout},
  {
    path: '/',
    name: 'Home',
    component: Home},
  {
    path: '/arena',
    name: 'Arena',
    component: Arena},
    
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && to.name !== 'Login' && !auth())
    next({ name: 'Login'});
  else
    next();
});

function auth() {
  return sessionStorage.getItem("user") != null;
};

export default router;
