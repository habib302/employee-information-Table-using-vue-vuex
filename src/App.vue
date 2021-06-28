<template>
  <div class="container app-class">
    <div class="row">
      <div class="col-md-12">
          <add-employee />
          <employee-table />
      </div>
    </div>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
import AddEmployee from './components/AddEmployee.vue'
import EmployeeTable from './components/EmployeeTable.vue'
export default {
  name: 'App',
  components: {
    AddEmployee,
    EmployeeTable
    
  },
  computed:{
    ...mapGetters(['getterData']),
  }

}
</script>

<style>
.app-class{
  padding-top:2%;
  background-color: #DEEBF3;
}
</style>
