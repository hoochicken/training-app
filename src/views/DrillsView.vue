<template>
  <div class="drills">
    <div class="button-container">
      <!--button style="z-index:1000" class="btn btn-primary fa-pull-right" v-on:click="randomDrill()">Zufalls-Drill</button-->
      <button style="z-index:1000" class="btn all" v-on:click="categoryToDisplay = 'all'">Alle</button>
      <button style="z-index:1000" class="btn hebel-flow" v-on:click="categoryToDisplay = 'hebel-flow'">Hebel-Flow
      </button>
      <button style="z-index:1000" class="btn atemi" v-on:click="categoryToDisplay = 'atemi'">Atemi</button>
      <button style="z-index:1000" class="btn bodenkampf" v-on:click="categoryToDisplay = 'bodenkampf'">Bodenkampf
      </button>
      <button style="z-index:1000" class="btn wurf" v-on:click="categoryToDisplay = 'wurf'">Würfe</button>
      <button style="z-index:1000" class="btn waffen" v-on:click="categoryToDisplay = 'waffen'">Waffen</button>
      <button style="z-index:1000" class="btn randori" v-on:click="categoryToDisplay = 'randori'">Randori</button>
      <button style="z-index:1000" class="btn drehung" v-on:click="categoryToDisplay = 'drehung'">Drehung</button>
    </div>
    <h1>Drills</h1>
    <div class="description">
      <ul>
        <li>Number of drills: {{ drills.length }}</li>
        <li>{{ categoryToDisplay }}</li>
      </ul>
    </div>
    <div class="wrapper-drills">
      <div v-for="item in drills">
        <div :class="'container m-0 mb-4 ' + item.category.toLowerCase()"
             v-show="'all' === categoryToDisplay || item.category.toLowerCase().includes(categoryToDisplay)">
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
    categoryToDisplay: 'all',
    categoryToDisplayDefault: 'all',
    drills: DrillData,
    errored: false,
    isLoading: true
  })
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
