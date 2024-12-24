<template>
  <div class="mb-4">
    <h2 class="p-3">{{ title }} ('{{ minutes }})</h2>
    <div class="container">
      <div v-if="description" class="description">
        {{ description }}
      </div>
      <div v-if="subsets" class="subsets">
        <div v-for="item in subsets" class="subset">
          <strong>{{ item.title }}</strong> <span v-if="item.minutes">('{{ item.minutes }})</span><br/>
          <p>{{ item.description }}</p>
          <video-player :path="item.video" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VideoPlayer from "@/components/general/VideoPlayer.vue";

export default {
  name: "LessonPart",
  components: {VideoPlayer},
  props: ['minutes', 'title', 'description', "subsets"],
  data: () => ({
    isLoading: false
  })
}
</script>

<style scoped>
.container {
  font-size: 1.5rem;
}
</style>
