<template>
    <div class="row">
      <h2 class="p-3">{{title}} <small>({{category}})</small></h2>
      <div class="col-md description">
        {{description}}
      </div>
      <div class="col-md video">
        <video-player :path="video"></video-player>
      </div>
    </div>
</template>

<script>

import VideoPlayer from "@/components/general/VideoPlayer.vue";

export default {
  name: "DrillPart",
  components: {VideoPlayer},
  props: ['title', 'video', 'description', 'category'],
  data: () => ({
    isLoading: false
  })
}
</script>

<style scoped>
.video video {width:100%}
</style>
