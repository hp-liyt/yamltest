import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from "../components/Demo";
import Demo1 from "../components/Demo1";
import Penal1 from "../components/Kibana/Penal1";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/penal1',
    name: 'Penal1',
    component: Penal1
  }
]

const router = new VueRouter({
  routes
})

export default router
