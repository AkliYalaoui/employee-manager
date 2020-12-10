import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Create from '../views/create.vue'
import ViewEmployee from "../views/viewEmployee.vue"
import EditEmployee from '../views/editEmployee.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/employee/create',
    name: 'Create',
    component: Create,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/employee/:id',
    name: 'View',
    component: ViewEmployee,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/employee/:id/edit',
    name: 'Edit',
    component: EditEmployee,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
    meta: {
      requiresGuest:true
    }
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
    meta: {
      requiresGuest:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
//routes guard
router.beforeEach((to, from, next) => {
  //requiresAuth Gards
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //is not Logged in
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        // query: {
        //   redirect: to.fullPath 
        // }
      });
    } else {
      next();
    }
  }//requiresGuest Gard
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    //is Logged in
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        // query: {
        //   redirect: to.fullPath 
        // }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
