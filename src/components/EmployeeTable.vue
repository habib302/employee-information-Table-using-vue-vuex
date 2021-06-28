<template>
    <div class="row">
        <div class="col-md-12">
            <div v-for="d in getterData" :key="d.id">
                {{d.name}}  {{d.designation}}  {{d.phone}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'EmployeeTable',
    computed:{
    ...mapGetters(['getterData']),
  }
}
</script>

<style lang="scss" scoped>

</style>