<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Training erstellen</button>
    <h1>Triple Technique</h1>
    <div class="container">
      <div v-for="item in lessonParts">
        <lesson-part :title="item.title" :minutes="item.minutes" :description="item.description"></lesson-part>
      </div>
    </div>
  </div>
</template>

<script>

import LessonPart from "@/components/lessons/LessonPart.vue";

export default {
  name: 'LessonView',
  components: {LessonPart},
  data: () => ({
    lessonParts: [
      {minutes:15, title:'Einwärmen', description:'(1.) einwärmen - (2.) Fallschule - (3.) Spiel'},
      {minutes:15, title:'Drills', description:'verschiedene Drills'},
      {minutes:15, title:'Technik I', description:'Konkrete Kombination, methodische Übungsreihe'},
      {minutes:15, title:'Technik II', description:'Konkrete Kombination, methodische Übungsreihe'},
      {minutes:15, title:'Anwendung', description:'Randori / SV-Drills / SV / Sparring'},
      {minutes:15, title:'[Pufferzeit]', description:'z. B. für Erklärungen, Fragen etc.'},
    ],
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
