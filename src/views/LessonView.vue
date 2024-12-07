<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="initAll()">Neues Training erstellen</button>
    <h1>Triple Technique</h1>
    <!--timer minutes="0.5"></timer-->
    <div class="container">
      <lesson-part title="Einwärmen" minutes="15" :subsets="subsetsWarmup"></lesson-part>
      <lesson-part title="Drills" minutes="15" :subsets="subsetsDrills"></lesson-part>
      <lesson-part title="Technik I" minutes="15"></lesson-part>
      <lesson-part title="Technik II" minutes="15"></lesson-part>
      <lesson-part title="Randori / Sparring" minutes="15" :subsets="subsetsSparring" description="Schutzausrüstung ist zu tragen. Zahnschutz, Handpolster, Schienbeinschoner"></lesson-part>
    </div>
  </div>
</template>

<script>

// import Timer from "@/components/general/Timer.vue";
import LessonPart from "@/components/lessons/LessonPart.vue";
import DrillData from "./../data/drills.json"
import SoloDrillData from "./../data/drills-solo.json"
import LessonParts from "./../data/lesson-parts.json"
import Falling from "./../data/falling.json"
import Games from "./../data/games.json"
import Sparring from "./../data/sparring.json"

export default {
  name: 'LessonView',
  components: {LessonPart},
  data: () => ({
    lessonParts: LessonParts,
    drills: DrillData,
    soloDrills: SoloDrillData,
    falling: Falling,
    games: Games,
    sparring: Sparring,
    subsetsWarmup: [],
    subsetsDrills: [],
    subsetsSparring: [],
    errored: false,
    isLoading: true
  }),
  mounted() {
    this.initAll()
  },
  methods: {
    initAll() {
      this.initSubSetsWarmup()
      this.initDrills()
      this.initSparring()
    },
    initSubSetsWarmup() {
      let warmUpGeneral = this.getRandomElementsFromArray(this.soloDrills).pop()
      let falling = this.getRandomElementsFromArray(this.falling).pop()
      let game = this.getRandomElementsFromArray(this.games).pop()
      warmUpGeneral.minutes = falling.minutes = game.minutes = 5
      this.subsetsWarmup = [warmUpGeneral, falling, game]
    },
    initDrills() {
      let drills = this.getRandomElementsFromArray(this.drills, 3)
      // drills[0].minutes = drills[1].minutes = drills[2].minutes = 5
      this.subsetsDrills = drills
    },
    initSparring() {
      let sparring = this.getRandomElementsFromArray(this.sparring, 3)
      // drills[0].minutes = drills[1].minutes = drills[2].minutes = 5
      this.subsetsSparring = sparring
    },
    getRandomElementsFromArray(anArray, numberOfElements = 1) {
      anArray = this.shuffleArray(anArray)
      return anArray.slice(0, numberOfElements)
    },
    shuffleArray(anArray) {
      for (let i = anArray.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
      }
      return anArray
    }
  }
}
</script>

<style scoped>
.container > div {
  border-left: solid #e8cd7f 20px;
  /* border-top: solid #e8cd7f 20px;*/
}

.container > div:nth-child(2) {
  border-left-color: #e8ae7f;
  border-top-color: #e8ae7f;
}

.container > div:nth-child(3) {
  border-left-color: #e87f7f;
  border-top-color: #e87f7f;
}

.container > div:nth-child(4) {
  border-left-color: #e87fbe;
  border-top-color: #e87fbe;
}

.container > div:nth-child(5) {
  border-left-color: #ce7fe8;
  border-top-color: #ce7fe8;
}

.container > div:nth-child(6) {
  border-left-color: #b5b5b5;
  border-top-color: #b5b5b5;
  background: #dcdcdc;
}
</style>

<style>
.container > div:nth-child(1) h2 {background: #e8cd7f;}
.container > div:nth-child(2) h2 {background: #e8ae7f;}
.container > div:nth-child(3) h2 {background: #e87f7f;}
.container > div:nth-child(4) h2 {background: #e87fbe;}
.container > div:nth-child(5) h2 {background: #ce7fe8;}
.container > div:nth-child(6) h2 {background: #b5b5b5;}
</style>
