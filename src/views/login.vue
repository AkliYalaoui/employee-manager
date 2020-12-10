<template>
  <Spinner v-if="loading"></Spinner>
  <div class="form-container" v-else>
    <h1>Login</h1>
    <form @submit.prevent="login" method="post">
        <label for="email">Email :</label>
        <input type="email" required id="email" name="email" v-model="email">
        <label for="pwd">Password :</label>
        <input type="password" name="pwd" id="pwd" required v-model="password">
        <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import Spinner from '../components/spinner'
import firebase from 'firebase'
export default {
  name:"login",
  components:{
    Spinner
  },
  data(){
    return{
      loading:true,
      email:null,
      password:null
    }
  },
  methods:{
    login(){
        this.loading = true;
        firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then(user =>{
                  console.log(user);
                  this.loading = false;
                  this.$router.push('/');
                })
                .catch(err => alert(err.message));
    }
  },
  created(){
    this.loading = false;
  }
}
</script>

<style scoped>
  .form-container{
    max-width: 700px;
    margin: 30px auto;
    border:1px solid var(--main-color);
    padding: 2rem;
    border-radius: 1rem;
  }
  h1{
    margin-bottom: 20px;
  }
  form{
    display: flex;
    flex-direction: column;
  }
  label{
    text-align: start;
    margin-bottom: 5px;
  }
  input{
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 1rem;
  }
  input[type="submit"]{
    background-color: var(--main-color);
    color: #fff;
    cursor: pointer;
    border-color: var(--main-color);
    font-weight: bold;
  }
</style>