<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="createTraining()">Training erstellen</button>
    <h1>Drills</h1>
    <div class="description">
      <ul>
        <li>Number of drills: {{drills.length}}</li>
      </ul>
    </div>
    <div class="wrapper">
      <div v-for="item in drills">
        <div :class="'container pt-3 pb-1 mb-4 ' + item.category.toLowerCase()">
          <drill-part :title="item.title" :category="item.category" :video="item.video" :description="item.description"></drill-part>
        </div>
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
      {title:'Positioning Flow', category:'Bodenkampf Flow', video:'bodenkampf-position-flow.mp4', description:'Wechsel von Side control nach Kreuzposition, dann Mount und Guard'},
      {title:'Side control submission - Armbeugehebel', category:'Bodenkampf Submission', video:'side-control-submission.mp4', description:'Armbeugehebel mit Bein'},
      {title:'Kreuzposition submission - Americana', category:'Bodenkampf Submission', video:'kreuzposition-submission-americana.mp4', description:'Americana'},
      {title:'Mount submission - Reverswürger', category:'Bodenkampf Submission', video:'mount-submission.mp4', description:'Reverswürger'},
      {title:'Guard submission - Triangle Choke', category:'Bodenkampf Submission', video:'guard-submission-triangle.mp4', description:'Triangle Choke'},
      {title:'Side controll escape', category:'Bodenkampf Escape', video:'side-control-escape.mp4', description:''},
      {title:'Side controll escape 2', category:'Bodenkampf Escape', video:'side-control-escape-uebertragen.mp4', description:''},
      {title:'Side controll escape 3', category:'Bodenkampf Escape', video:'side-control-escape-rollen.mp4', description:''},
      {title:'Kreuzposition escape', category:'Bodenkampf Escape', video:'kreuzposition-escape-ns.mp4', description:''},
      {title:'Kreuzposition escape Frame', category:'Bodenkampf Escape', video:'kreuzposition-escape-frame.mp4', description:''},
      {title:'Guard escape Frame', category:'Bodenkampf Escape', video:'guard-escape-elbow.mp4', description:''},
      {title:'Mount escape Sweep', category:'Bodenkampf Escape', video:'mount-escape-sweep.mp4', description:''},
      {title:'Mount escape Stand-up', category:'Bodenkampf Escape', video:'guard-escape-standup.mp4', description:''},
      {title:'Wurfdrill Hüftwurf', category:'uchikomi Wurf', video:'uchi-komi-hueftwurf.mp4', description:''},
      {title:'Wurfdrill Grosse Aussensichel', category:'uchikomi Wurf', video:'uchi-komi-grosse-aussensichel.mp4', description:''},
      {title:'Gegentechnik Grosse Aussensichel', category:'Gegentechnik Wurf', video:'gegentechniken-grosse-aussensichel.mp4', description:''},
      {title:'Weiterführung Grosse Aussensichel', category:'Weiterfuehrung Wurf', video:'weiterfuehrung-grosse-aussensichel.mp4', description:''},
      {title:'Hebel-Flow Armstreckhebel - Kipphandhebel', category:'Hebel-FLow', video:'hebel-flow-ash-khh.mp4', description:''},
      {title:'Hebel-Flow Armstreckhebel - Z-Hebel - Kipphandhebel', category:'Hebel-Flow', video:'hebel-flow-ash-z-khh.mp4', description:''},
      {title:'Hebel-Flow Kote-hineri - Z-Hebel', category:'Hebel-FLow', video:'hebel-flow-kote-hineri-kuzure-z.mp4', description:''},
      {title:'Hebel-Flow Fingerhebel', category:'Hebel-FLow', video:'hebel-flow-fingerhebel.mp4', description:''},
      {title:'180°-Drehung', category:'Drehung', video:'180-grad-drehung.mp4', description:''},
      {title:'180°-Drehung', category:'Drehung', video:'180-grad-drehung.mp4', description:''},
      {title:'Atemi Basic Combi', category:'Atemi', video:'atemi-basic.mp4', description:'Atemi Basic Combi'},
      {title:'Bedingtes Sparring Jab', category:'Randori', video:'atemi-bedingtes-sparring-jab.mp4', description:'Bedingtes Sparring Jab'},
      {title:'Bedingtes Sparring Jab Punch', category:'Randori', video:'atemi-bedingtes-sparring-jab.mp4', description:'Bedingtes Sparring Jab Punch'},
      {title:'Stock', category:'Stock', video:'waffen-stock-abwehr.mp4', description:'Waffendrill, Angriffe 1-6'},
      {title:'Stock, Konter', category:'Stock', video:'waffen-stock-conter.mp4', description:'Waffendrill, Angriffe 1-6, mit Konterschlag'},
      {title:'Stock, Handgelenk', category:'Stock', video:'waffen-stock-handgelenk.mp4', description:'Waffendrill, Angriffe 1-6 auf Handgelenk'}
    ],
    errored: false,
    isLoading: true
  }),
  methods: {
    createTraining() {

    }
  }
}
</script>

<style scoped>
.container > div {border-left: solid #e8cd7f 20px;}
.container > div.bodenkampf {border-left-color: #e8ae7f;}
.container > div:nth-child(3) {border-left-color: #e87f7f;}
.container > div:nth-child(4) {border-left-color: #e87fbe;}
.container > div:nth-child(5) {border-left-color: #ce7fe8;}
</style>
