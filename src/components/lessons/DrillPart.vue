<template>
    <div class="row">
      <h2>{{title}} <small>({{category}})</small></h2>
      <div class="col-md description">
        {{description}}
      </div>
      <div class="col-md video">
        <video width="320" height="240" controls>
          <source :src="'assets/videos/' + video" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
</template>

<script>

export default {
  name: "DrillPart",
  props: ['title', 'video', 'description', 'category'],
  data: () => ({
    isLoading: false
  })
}
</script>

<style scoped>
.container {font-size: 1.5rem;}
.video video {width:100%}
</style>
