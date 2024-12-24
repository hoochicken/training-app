<script setup>

</script>

<template>
  <video v-if="path" width="320" height="240" controls>
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

</style>