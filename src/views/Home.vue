<template>
  <Spinner v-if="loading"></Spinner>
  <div  v-else>
    <h1>Employees Table</h1>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Departement</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.employee_id">
            <td>{{employee.employee_id}}</td>
            <td>{{employee.name}}</td>
            <td>{{employee.dept}}</td>
            <td>{{employee.position}}</td>
            <td>
              <router-link :to="{name:'View',params:{id:employee.employee_id}}">explore</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from '../components/firebaseInit'
import Spinner from '../components/spinner'

export default {
  name: 'Home',
  components:{
    Spinner
  },
  data(){
    return{
      employees:[],
      loading: true
    }
  },
  created(){
    db.collection("employee").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.employees.unshift({
          employee_id:doc.id,
          name:doc.data().name,
          dept:doc.data().dept,
          position:doc.data().position,
        });
      });
      this.loading = false;
    });
  }
}
</script>

<style scoped>

h1{
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.table-container{
  margin-top: 5rem;
  overflow-x: auto;
}
table{
  border-collapse: collapse;
  width: 100%;
  min-width: 600px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
}
thead{
  background-color: var(--main-color);
  color: #fff;
}
th,td{
  padding: 1rem;
}
th{
    border: 1px solid #fff;
}
td{
  border: 1px solid var(--main-color);
}
a{
  color: var(--main-color);
}
</style>