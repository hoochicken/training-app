<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Training erstellen</button>
    <h1>Triple Technique</h1>
    <div class="container">
      <lesson-part title="Einwärmen" minutes="15"></lesson-part>

      <div v-for="item in lessonParts">
        <lesson-part :title="item.title" :minutes="item.minutes" :description="item.description"></lesson-part>
      </div>


    </div>
  </div>
</template>

<script>

import LessonPart from "@/components/lessons/LessonPart.vue";
import DrillData from "./../data/drills.json"
import LessonParts from "./../data/lesson-parts.json"

export default {
  name: 'LessonViewRaw',
  components: {LessonPart},
  data: () => ({
    lessonParts: LessonParts,
    drills: DrillData,
    errored: false,
    isLoading: true
  })
}
</script>

<style scoped>
.container > div {border-left: solid #e8cd7f 20px;}
.container > div:nth-child(2) {border-left-color: #e8ae7f;}
.container > div:nth-child(3) {border-left-color: #e87f7f;}
.container > div:nth-child(4) {border-left-color: #e87fbe;}
.container > div:nth-child(5) {border-left-color: #ce7fe8;}
.container > div:nth-child(6) {border-left-color: #b5b5b5;background: #dcdcdc;}
</style>
