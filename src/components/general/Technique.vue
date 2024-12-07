<template>
  <div>
    <div class="align-middle name p-2 pt-4 pb-4 mb-4">
      <div class="labely">{{label}}</div>
      <img v-if="technique.image" :src="'assets/images/dice/' + technique.image + '.png'" :alt="technique.image"/>
      {{technique.name}}
    </div>
  </div>
</template>

<script>

export default {
  name: "Technique",
  props: ['technique', 'label'],
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
.name {font-size:1.5rem;color:white;background: #282828;}
.labely {width:100%;text-align: right;font-size:1rem;}
img {width:20%;}
</style>