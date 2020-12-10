<template>
  <div style="display:flex;height: 100vh;">
    <aside :class="{closed: !menu}">
      <nav>
        <div class="nav-controls">
          <button @click="menu = !menu">
              <span v-if="menu">&times;</span>
              <span v-else>&#8594;</span>
          </button>
        </div>
        <div class="nav-brand" v-if="menu">
          <span v-if="!isAuth">Employee Manager</span>
          <span v-else>{{ user }}</span>
        </div>
        <ul>
          <li v-if="!isAuth">
            <router-link to="/login">
              <span v-if="menu">Login</span>
              <span v-else title="Login">L</span>
            </router-link>
          </li>
          <li v-if="!isAuth">
            <router-link to="/register">
              <span v-if="menu">Register</span>
              <span v-else title="Register">R</span>
            </router-link>
          </li>
          <li v-if="isAuth">
            <router-link to="/">
              <span v-if="menu">Dashboard</span>
              <span v-else>&#127968;</span>
            </router-link>
          </li>
          <li v-if="isAuth">
            <router-link to="/employee/create">
              <span v-if="menu">New Employee</span>
              <span v-else>+</span>
            </router-link>
          </li>
          <li v-if="isAuth">
            <button @click="logout">
              <span v-if="menu">Logout</span>
              <span v-else>&#128075;</span>
            </button>
          </li>
          <li>
            <router-link to="/about">
              <span v-if="menu">About</span>
              <span v-else>&#63;</span>
            </router-link>
          </li>
        </ul>
      </nav>    
    </aside>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name:"nav-bar",
  data(){
    return{
      menu:false,
      isAuth : false,
      user : false
    }
  },
  created(){
    if(firebase.auth().currentUser){
      this.isAuth = true;
      this.user = firebase.auth().currentUser.email
    }
  },
  methods:{
    logout(){
      firebase.auth().signOut().then(()=> this.$router.push('/login'));
    }
  } 
}
</script>

<style scoped>
.main{
  flex: 1;
  padding: 2rem;
  font-size: 1.8rem;
  overflow: hidden;
}
aside{
  min-width: 280px;
  background-color: var(--main-color,#333);
  padding-top: 2rem;
  font-size: 2rem;
  color: #fff;
}
aside.closed{
  min-width: 60px;
}
.nav-controls{
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: var(--hover-color,#333);
}
.nav-controls button{
  width: 100%;
  height: 100%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.nav-brand{
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: .8rem;
}
ul{
  list-style: none;
  margin: auto;
}
li{
  margin-bottom: 1rem;
}
li button ,a{
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: 100%;
  padding: 1rem 2rem;
  opacity: .8;
  background-color: var(--hover-color,#333);
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.8rem;
}
li button,a:hover{
  opacity: 1
}
</style>