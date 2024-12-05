<template>
  <div class="container pt-3 pb-1 mb-4">
    <div class="row">
      <h2>{{title}} <small>({{category}})</small></h2>
      <div class="col-md description">
        {{description}}
      </div>
      <div class="col-md video">
        {{video}}
      </div>
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
</style>
