<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn} from "mdb-vue-ui-kit";
</script>

<template>
  <m-d-b-btn aria-controls="showNavigation" @click="showNavigation=true">
    <font-awesome-icon icon="list"/>
  </m-d-b-btn>
  <div class="menu">
    <m-d-b-modal id="showNavigation" tabindex="-1" labelledby="showNavigation"
                 class="col-md-6 sidebary modal-side modal-top-left" v-model="showNavigation">
      <m-d-b-modal-header>Menu</m-d-b-modal-header>
      <m-d-b-modal-body>
          kk<MainMenu></MainMenu>
      </m-d-b-modal-body>
    </m-d-b-modal>
  </div>
</template>

<script>
import MainMenu from "./MainMenu.vue";

export default {
  name: "MainMenuModal",
  components: { MainMenu },
  data: () => ({
    'showNavigation': false
  })
}
</script>

<style scoped>

.sidebary.modal-side.modal-top-left > div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 300px;
}
</style>
