<template>
  <div class="training">
    <MDBBtn style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Press</MDBBtn>
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
      {name:'Haken', image:1},
      {name:'Frontkick oder Sidekick', image:1},
      {name:'Würgen', image:1},
      {name:'Griff zum Handgelenk', image:1},
      {name:'Highkick', image:1}
    ],
    counters: [
      {name:'Hüftwurf', image:1},
      {name:'Eckenwurf', image:1},
      {name:'Beinstellen', image:1},
      {name:'Reisballenwurf', image:1},
      {name:'Kleine Innensichel', image:1},
      {name:'Schwerthandwurf', image:1}
    ],
    conclusions: [
      {name:'Kreuzfesselgriff', image:1},
      {name:'Kreuzposition mit Kimura', image:1},
      {name:'Kavaliersgriff', image:1},
      {name:'Armstreckhebel (Rückenlage)', image:1},
      {name:'Armstreckhebel (Bauchlage)', image:1},
      {name:'Fingerhebel', image:1}
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
