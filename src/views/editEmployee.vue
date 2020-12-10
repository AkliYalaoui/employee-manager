<template>
  <div class="create-container">
    <h1>Edit An Employee</h1>
    <form @submit.prevent="onUpdate">
      <label for="id">Employee Id :</label>
      <input type="text" name="id" id="id" disabled v-model="employee.employee_id" required autofocus>
      <label for="name">Name :</label>
      <input type="text" name="name" id="name" v-model="employee.name" required>
      <label for="pos">Position :</label>
      <input type="text" name="pos" id="pos" v-model="employee.position" required>
      <label for="dept">Departement :</label>
      <input type="text" name="dept" id="dept" v-model="employee.dept" required>
      <input type="submit" value="Update">
    </form>
  </div>
</template>

<script>
import db from '../components/firebaseInit'
export default {
  name: 'Create',
  data(){
    return{
      employee :{
        employee_id: null,
        name: null,
        position: null,
        dept: null
      }
    }
  },
  methods:{
    onUpdate(){
      db.collection('employee')
        .where('__name__','==',this.$route.params.id)
        .get()
        .then(
          querySnapshot =>{
            querySnapshot.forEach(doc => {
              doc.ref.update({
                name:this.employee.name,
                position:this.employee.position,
                dept:this.employee.dept
              })
                .then(()=> this.$router.push({
                  name:'View',
                  params:{
                    id: this.employee.employee_id
                  }
                }));
            });  
          }
        );
    }
  },
  created(){
    db.collection('employee')
      .where('__name__','==',this.$route.params.id)
      .get()
      .then(
        querySnapshot =>{
          querySnapshot.forEach(doc => {
            this.employee.employee_id = doc.id;
            this.employee.name = doc.data().name;
            this.employee.dept = doc.data().dept;
            this.employee.position = doc.data().position;
          });  
        }
      );
  }
}
</script>

<style scoped>
.create-container{
  max-width: 900px;
  margin: 5rem auto 1rem;
}
form{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: start;
}
label{
  margin-bottom: .6rem;
}
input{
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
}
input:focus{
  outline: 1px solid var(--main-color);
}
input[type="submit"]{
  background-color: var(--main-color);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>