<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Training erstellen</button>
    <h1>Drills</h1>
    <div class="description">
      <ul>
        <li>Number of drills: {{drills.length}}</li>
      </ul>
    </div>
    <div class="container">
      <div v-for="item in drills">
        <drill-part :title="item.title" :category="item.category" :video="item.video" :description="item.description"></drill-part>
      </div>
    </div>
  </div>
</template>

<script>

import DrillPart from "@/components/lessons/DrillPart.vue";

export default {
  name: 'DrillsView',
  components: {DrillPart},
  data: () => ({
    drills: [
      {title:'Side-control', category:'Bodenkampf', video:'video.mp3', description:'Some description'},
      {title:'Mount', category:'Bodenkampf', video:'video.mp3', description:'Some description'},
      {title:'Kreuzposition', category:'Bodenkampf', video:'video.mp3', description:'Some description'},
      {title:'Guard', category:'Bodenkampf', video:'video.mp3', description:'Some description'},
      {title:'Flow', category:'Bodenkampf', video:'video.mp3', description:'Some description'},
      {title:'Atemi', category:'Atemi', video:'video.mp3', description:'Some description'},
      {title:'Hüftwurf', category:'Wuerfe', video:'video.mp3', description:'Some description'},
      {title:'Grosse Aussensichel', category:'Wuerfe', video:'video.mp3', description:'Some description'},
      {title:'Schulterwurf', category:'Wuerfe', video:'video.mp3', description:'Some description'},
      {title:'Stockdrill', category:'Bodenkampf', video:'video.mp3', description:'Some description'}
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
</style>
