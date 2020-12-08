import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Create from '../views/create.vue'
import ViewEmployee from "../views/viewEmployee.vue"
import EditEmployee from '../views/editEmployee.vue'

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
    path: '/employee/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/employee/:id',
    name: 'View',
    component: ViewEmployee
  },
  {
    path: '/employee/:id/edit',
    name: 'Edit',
    component: EditEmployee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
