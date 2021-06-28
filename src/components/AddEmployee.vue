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
                    <Modal v-show="showModal" @close="showModal = false"><h3>Employee Information Add</h3></Modal>
                </teleport>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
    components: { Modal },
        
    data() {
        return {
        showModal: false,
        };
    },
}
</script>

<style lang="scss" scoped>

</style>