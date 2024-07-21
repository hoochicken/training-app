<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Nächste Technik!!!</button>
    <h1>Triple Technique</h1>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <technique :technique="attack"/>
        </div>
        <div class="col-md">
          <technique :technique="counter"/>
        </div>
        <div class="col-md">
          <technique :technique="conclusion"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Technique from '../components/general/Technique';

export default {
  name: 'Triplet',
  components: {Technique},
  data: () => ({
    attack: {},
    counter: {},
    conclusion: {},
    attacks: [
      {name:'Gerader Fauststoss', image:1},
      {name:'Haken', image:2},
      {name:'Frontkick oder Sidekick', image:3},
      {name:'Würgen', image:4},
      {name:'Griff zum Handgelenk', image:5},
      {name:'Highkick', image:6}
    ],
    counters: [
      {name:'Hüftwurf', image:1},
      {name:'Eckenwurf', image:2},
      {name:'Beinstellen', image:3},
      {name:'Reisballenwurf', image:4},
      {name:'Kleine Innensichel', image:5},
      {name:'Schwerthandwurf', image:6}
    ],
    conclusions: [
      {name:'Kreuzfesselgriff', image:1},
      {name:'Kreuzposition mit Kimura', image:2},
      {name:'Kavaliersgriff', image:3},
      {name:'Armstreckhebel (Rückenlage)', image:4},
      {name:'Armstreckhebel (Bauchlage)', image:5},
      {name:'Fingerhebel', image:6}
    ],
    errored: false,
    isLoading: true
  }),
  mounted: function () {
  },
  methods: {
    setTechnique() {
      this.attack = this.getRandomElementFromArray(this.attacks)
      this.counter = this.getRandomElementFromArray(this.counters)
      this.conclusion = this.getRandomElementFromArray(this.conclusions)
    },
    getRandomElementFromArray(items) {
      return items[Math.floor(Math.random() * items.length)];
    }
  }
}
</script>

<style>
</style>
