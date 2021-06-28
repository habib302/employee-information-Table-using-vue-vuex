<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content">
      <slot></slot>
      <hr />
        <form>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-9">
                <input v-model="newEmployee.name" type="text" class="form-control" id="inputPassword" placeholder="enter name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Designation</label>
                <div class="col-sm-9">
                <input v-model="newEmployee.designation" type="text" class="form-control" id="inputPassword" placeholder="enter designation">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                <input v-model="newEmployee.email" type="text" class="form-control" id="inputPassword" placeholder="enter email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Mobile No</label>
                <div class="col-sm-9">
                <input v-model="newEmployee.phone" type="number" class="form-control" id="inputPassword" placeholder="enter mobile no">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label">Date Of Joining</label>
                <div class="col-sm-9">
                <input v-model="newEmployee.dateOfJoining" type="text" class="form-control" id="inputPassword" placeholder="enter date of joining">
                </div>
            </div>
        </form>
      <button @submit.prevent="addEmployeeDispatch()">Submit</button>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "Modal",
  emits: ["close"],
  data(){
      return{
         newEmployee:{
            id: uuidv4(),
            name: "",
            designation: "",
            email:"",
            phone: "",
            dateOfJoining:""
         }
      }
  },
  methods:{
      ...mapActions(['addEmployee']),
      addEmployeeDispatch(){
          this.$store.dispatch('addEmployee',this.newEmployee);
          this.newEmployee={
            id: "",
            name: "",
            designation: "",
            email:"",
            phone: "",
            dateOfJoining:""
         }
        }
  }
};
</script>

<style>
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
  font-family: 'Times New Roman', Times, serif;
  padding: 20px;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  min-height: 500px;
  margin: 1rem;
  position: relative;
  min-width: 700px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
}
</style>