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
      {name:'Gerader Fauststoss'},
      {name:'Haken'},
      {name:'Frontkick oder Sidekick'},
      {name:'Würgen'},
      {name:'Griff zum Handgelenk'},
      {name:'Highkick'}
    ],
    counters: [
      {name:'Hüftwurf'},
      {name:'Eckenwurf'},
      {name:'Beinstellen'},
      {name:'Reisballenwurf'},
      {name:'Kleine Innensichel'},
      {name:'Schwerthandwurf'}
    ],
    conclusions: [
      {name:'Kreuzfesselgriff'},
      {name:'Kreuzposition mit Kimura'},
      {name:'Kavaliersgriff'},
      {name:'Armstreckhebel (Rückenlage)'},
      {name:'Armstreckhebel (Bauchlage)'},
      {name:'Fingerhebel'}
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
