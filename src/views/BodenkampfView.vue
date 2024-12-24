<template>
  <div class="drills">
    <div class="button-container">
      <button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="randomDrill()">Zufalls-Drill</button>
      <button style="z-index:1000" class="btn btn-secondary fa-pull-right" v-on:click="reset()">Alle anzeigen</button>
    </div>
    <h1>Bodenkampf-Drills ({{ drills.length }})</h1>
    <div class="wrapper-drills">
      <div v-for="item in drillsToDisplay">
        <div :class="'container m-0 mb-4 ' + item.category.toLowerCase()">
          <drill-part :title="item.title" :category="item.category" :video="item.video"
                      :description="item.description"></drill-part>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DrillPart from "@/components/lessons/DrillPart.vue";
import DrillData from "./../data/drills.json"

export default {
  name: 'DrillsView',
  components: {DrillPart},
  data: () => ({
    categoryToDisplay: 'bodenkampf ',
    drills: [],
    drillsToDisplay: [],
    errored: false,
    isLoading: true
  }),
  mounted() {
    this.drillsToDisplay = this.drills = this.filterGround(DrillData)
  },
  methods: {
    filterGround(drills) {
      return drills.filter((drill) => drill.category.toLowerCase().includes(this.categoryToDisplay))
    },
    randomDrill: function() {
      this.drillsToDisplay = this.getRandomElementsFromArray(this.drills, 1)
    },
    reset: function() {
      this.drillsToDisplay = this.drills
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

.container {
  max-width: 100%;
}

.wrapper-drills {
  width: 100%;
  float: left;
}

.wrapper-drills > div {
  width: 48%;
  float: left;
  margin-left: 2%;
}

@media (max-width: 1200px) {
  .wrapper-drills > div {
    width: 100%;
    margin-left: 0;
  }
}

.container, .container.neutral {
  border-left: solid #bab9b9 20px;
}

.container.hebel-flow {
  border-left-color: #fffe77;
}

.btn.hebel-flow {
  background: #fffe77;
}

.container.atemi {
  border-left-color: #fdbe6c;
}

.btn.atemi {
  background: #fdbe6c;
}

.container.bodenkampf {
  border-left-color: #e87f7f;
}

.btn.bodenkampf {
  background: #e87f7f;
}

.container.wurf {
  border-left-color: #ce7fe8;
}

.btn.wurf {
  background: #ce7fe8;
}

.container.waffen {
  border-left-color: #6493ff;
}

.btn.waffen {
  background: #6493ff;
}

.container.randori {
  border-left-color: #a2ff64;
}

.btn.randori {
  background: #a2ff64;
}

.container.drehung {
  border-left-color: #4e7737;
}

.btn.drehung {
  background: #4e7737;
  color: white;
}
</style>

<style>
.drills {
  .container.atemi h2 {
    background: #fdbe6c;
  }

  .container.bodenkampf h2 {
    background: #e87f7f;
  }

  .container.waffen h2 {
    background: #6493ff;
  }

  .container.randori h2 {
    background: #a2ff64;
  }

  .container.hebel-flow h2 {
    background: #fffe77;
  }

  .container.wurf h2 {
    background: #ce7fe8;
  }

  .container.drehung h2 {
    background: #4e7737;
  }
}
</style>
