<template>
  <div>
    <div class="align-middle name p-2 pt-4 pb-4 mb-4">
      <h2>{{title}}</h2>
      <ul>
        <li v-for="technique in techniques" class="p-2">
          <img v-if="technique.image" :src="'assets/images/dice/' + technique.image + '.png'" :alt="technique.image"/>
          {{ technique.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: "TechniqueLegend",
  props: ['techniques', 'title'],
  data: () => ( {
    isLoading: false
  }),
  mounted: function() {
    // this.initiateTechnique();
  },
  computed: {
  },
  methods: {
    async initiateTechnique() {
      this.isLoading = true
    }
  }
}
</script>
<!--https://medium.com/@andrewmasonmedia/how-to-use-images-with-vite-and-vue-937307a150c0-->

<style scoped>
.name {font-size:1.5rem;}
img {width:40px;}
</style>