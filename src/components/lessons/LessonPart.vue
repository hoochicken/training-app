<template>
  <div class="container pt-3 pb-1 mb-4">
    <div class="row">
      <h2>{{title}} ('{{minutes}})</h2>
      <div class="col-md description">
        {{description}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LessonPart",
  props: ['minutes', 'title', 'description'],
  data: () => ({
    isLoading: false
  })
}
</script>

<style scoped>
.container {font-size: 1.5rem;}
</style>
