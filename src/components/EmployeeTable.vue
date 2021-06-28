<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Serial No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Date Of Joining</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(d) in getterData" :key="d.id">
                        <th scope="row">{{d.index}}</th>
                        <th>{{d.name}}</th>
                        <th>{{d.designation}}</th>
                        <th>{{d.email}}</th>
                        <th>{{d.phone}}</th>
                        <th>{{d.dateOfJoining}}</th>
                        <th><button type="button" class="btn btn-info">Edit</button></th>
                        <th><button type="button" class="btn btn-danger" @click="deleteById(d.id)">Delete</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'EmployeeTable',
    computed:{
    ...mapGetters(['getterData']),
    },
    methods:{
        ...mapActions(['deleteEmployee']),
        deleteById(id){
            console.log(id);
            this.$store.dispatch('deleteEmployee',id);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>