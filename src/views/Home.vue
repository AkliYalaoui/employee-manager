<template>
  <div class="table-container">
    <table>
      <caption><h1>Employees Table</h1></caption>
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
</template>

<script>
//import db from '../components/firebaseInit'
export default {
  name: 'Home',
  data(){
    return{
      employees:[{
        employee_id : 1,
        name: "Akli",
        dept: 'AI',
        position : 'Leader'
      },
      {
        employee_id : 2,
        name: "Kouki",
        dept: 'Web Dev',
        position : 'Project Manager'
      }]
    }
  },
  created(){
    // db.collection("employee").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     this.employees.unshift(doc.data());
    //   })
    // });
  }
}
</script>

<style scoped>
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
caption{
  font-weight: bold;
  margin-bottom: 2rem;
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