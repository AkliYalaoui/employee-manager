<template>
  <Spinner v-if="loading"></Spinner>
  <div class="view-container" v-else>
    <h1>View Employee</h1>
    <dl class="employee-info">
      <div class="desc-grp">
        <dt>Id :</dt>
        <dd>{{ employee.employee_id}}</dd>
      </div>

      <div class="desc-grp">
        <dt>Name :</dt>
        <dd>{{ employee.name}}</dd>
      </div>

      <div class="desc-grp">
        <dt>Departement :</dt>
        <dd>{{ employee.dept}}</dd>
      </div>

      <div class="desc-grp">
        <dt>Position : </dt>
        <dd>{{ employee.position}}</dd>
      </div>
    </dl>
    <router-link to="/">Go Back</router-link>
    <router-link :to="{name:'Edit',params:{id:employee.employee_id}}">Update</router-link>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
import db from '../components/firebaseInit'
import Spinner from '../components/spinner'

export default {
  name:"employee-view",
  components:{
    Spinner
  },
  data(){
    return{
      employee :{
        employee_id : null,
        name: null,
        position : null,
        dept:null
      },
      loading: true
    }
  },
  watch:{
    "$route" : 'fetchData'
  },
  methods:{
    fetchData(){
      db.collection('employee')
        .where('employee_id','==',this.$route.params.id ?? this.employee.employee_id)
        .get()
        .then(querySnapshot=>{
          querySnapshot.forEach(doc =>{
            this.employee.employee_id = doc.data().employee_id;
            this.employee.name = doc.data().name;
            this.employee.dept = doc.data().dept;
            this.employee.position = doc.data().position;
          });
        })
        .catch(err=>{
          console.log(err);
          this.$router.push('/');
        })
        .finally(()=>this.loading = false);
    },
    onDelete(){
      if(confirm('Do You Really Want To Remove This Employee')){
        db.collection('employee')
          .where('employee_id',"==",this.employee.employee_id)
          .get()
          .then(
            querySnapshot =>{
              querySnapshot.forEach(doc => doc.ref.delete().then(()=> this.$router.push('/')));
            }
          );
      }
    }
  },
  created(){
    this.fetchData();
  }
}
</script>

<style scoped>
  .view-container{
    margin-top: 5rem;
  }
  .employee-info{
    margin-top: 2rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    background-color: #eee;
    border: 1px solid #ddd;
    text-align: start;
    max-width: 900px;
  }
  .desc-grp{
    display: flex;
    align-items: center;
  }
  .desc-grp:not(:last-of-type){
    margin-bottom: 1rem;
  }
  dt{
    background-color: #333;
    color:#fff;
    display: inline;
    padding:.6rem;
  }
  dd{
    padding: 1rem;
  }
  a{
        display: inline-block;
    color: #fff;
    padding: 1rem;
    text-decoration: none;
    margin-right: 1rem;
    font-size: 1.6rem;
  }
  a:first-of-type{
    background-color: #777;
  }
  a:last-of-type{
    background-color: var(--main-color);
  }
  button{
    display: inline-block;
    color: #fff;
    background-color: #ef6624;
    padding: 1rem;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.6rem;
  }
</style>