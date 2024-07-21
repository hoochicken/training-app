<template>
  <div>
    <div class="align-middle name pt-4 pb-4 mb-4">{{technique.name}}</div>
    <img v-if="technique.image" :src="'assets/images/dice/' + technique.image + '.png'" :alt="technique.name"/>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: "Technique",
  props: ['technique'],
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

<style scoped>
.name {font-size:1.5rem;text-align: center;color:white;background: #282828;}
img {width:100%;}
</style>