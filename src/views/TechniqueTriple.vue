<template>
  <div class="training">
    <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="setTechnique">Nächste Technik!!!</button>
    <h1>Triple Technique</h1>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <technique :label="'Angriff'" :technique="attack"/>
        </div>
        <div class="col-md">
          <technique :label="'Technik'" :technique="counter"/>
        </div>
        <div class="col-md">
          <technique :label="'Abschluss'" :technique="conclusion"/>
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
      {name:'Gerade Faust', image:1},
      {name:'Haken', image:2},
      {name:'Frontkick', image:3},
      {name:'Würgen', image:4},
      {name:'Griff.z.Handg.', image:5},
      {name:'Highkick', image:6}
    ],
    counters: [
      {name:'Hüftwurf', image:1},
      {name:'Eckenwurf', image:2},
      {name:'Beinstellen', image:3},
      {name:'Reisballenwurf', image:4},
      {name:'Kl.Innensichel', image:5},
      {name:'Schwerthandwurf', image:6}
    ],
    conclusions: [
      {name:'Kreuzfesselgriff', image:1},
      {name:'Kreuzpos.m.Kim.', image:2},
      {name:'Kavaliersgriff', image:3},
      {name:'Armstrckh.(Rück)', image:4},
      {name:'Armstrckh.(Bauch)', image:5},
      {name:'Fingerhebel', image:6}
    ],
    errored: false,
    isLoading: true
  }),
  mounted: function () {
    this.setTechnique()
  },
  methods: {
    setTechnique() {
      this.attack = this.getRandomElementFromArray(this.attacks)
      this.counter = this.getRandomElementFromArray(this.counters)
      this.conclusion = this.getRandomElementFromArray(this.conclusions)
    },
    getRandomElementFromArray(items) {
      return items[Math.floor(Math.random() * items.length)]
    }
  }
}
</script>

<style>
</style>
