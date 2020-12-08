<template>
  <div class="create-container">
    <h1>Add A New Employee</h1>
    <form @submit.prevent="onSubmit">
      <label for="name">Name :</label>
      <input type="text" name="name" id="name" v-model="employee.name" required autofocus>
      <label for="pos">Position :</label>
      <input type="text" name="pos" id="pos" v-model="employee.position" required>
      <label for="dept">Departement :</label>
      <input type="text" name="dept" id="dept" v-model="employee.dept" required>
      <input type="submit" value="Create">
    </form>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data(){
    return{
      employee :{
        employee_id: "",
        name: "",
        position: "",
        dept: "",
      }
    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>

<style scoped>
.create-container{
  max-width: 900px;
  margin: 5rem auto 1rem;
}
form{
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