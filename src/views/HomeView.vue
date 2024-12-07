<script setup>
import {MDBListGroup, MDBListGroupItem} from "mdb-vue-ui-kit";
</script>
<template>
  <main>
    <m-d-b-list-group flush>
      <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
        <menu-icon :icon-name="'list'"></menu-icon>
        <RouterLink to="/lesson">Unterrichtseinheit</RouterLink>
      </m-d-b-list-group-item>
      <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
        <menu-icon :icon-name="'clock'"></menu-icon>
        <RouterLink to="/drills">Drills</RouterLink>
      </m-d-b-list-group-item>
      <!--m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
        <menu-icon :icon-name="'people-group'"></menu-icon>
        <RouterLink to="/bodenkampf">Bodenkampf</RouterLink>
      </m-d-b-list-group-item-->
      <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
        <menu-icon :icon-name="'users-cog'"></menu-icon>
        <RouterLink to="/kombinationen">Kombinationen</RouterLink>
      </m-d-b-list-group-item>
      <m-d-b-list-group-item :class="'d-flex list-group-item'" @click="closeNavigation()">
        <menu-icon :icon-name="'chess-pawn'"></menu-icon>
        <RouterLink to="/about">Über uns</RouterLink>
      </m-d-b-list-group-item>
    </m-d-b-list-group>
  </main>
</template>
