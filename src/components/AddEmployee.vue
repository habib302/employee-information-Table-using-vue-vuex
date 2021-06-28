<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="title">
                    <h4>Employee information Table using vue & vuex</h4>
                </div>
            </div>
            <div class="col-md-4">
                <button @click="showModal = true">Show Modal</button>
                <teleport to="#modal-root">
                    <Modal v-show="showModal" :showClose="showClose"><h3>Add Employee Information</h3></Modal>
                </teleport>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
    components: { Modal},
    data() {
        return {
        showModal: false,
        };
    },
    methods:{
        showClose(){
            this.showModal=false;
        }
    }
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>