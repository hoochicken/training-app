<script setup>

</script>

<template>
  <video v-if="path" controls>
    <source :src="'assets/videos/' + path" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script>

export default {
  name: 'VideoPlayer',
  props: ['path']
}
</script>

<style scoped>
  video { width:320px;height:240px;}
</style>