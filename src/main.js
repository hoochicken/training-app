import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCake, faList, faChessPawn, faClose, faClock, faUsersCog, faHandFist, faHand, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
// import CircleSpin from 'vue-loading-spinner/src/components/Circle.vue'
// import 'mdb-vue-ui-kit/css/mdb.dark.min.css'

const app = createApp(App)
// import Qlletter from '@/components/general/Qlletter.vue' // <= THIS WORKED

// vue app
// but we're using vite here ;-)
let standalone = `${import.meta.env.VITE_API_STANDALONE}`
if (!standalone) {
  axios.defaults.baseURL = `${import.meta.env.VITE_API_HOST}`
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  app.axios = axios
  app.use(VueAxios, axios)
}

app.use(router)

library.add(faUserSecret, faCake, faList, faChessPawn, faClose, faClock, faUsersCog, faHandFist, faHand, faPeopleGroup)

app.component('vue3-chart-js', Vue3ChartJs)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component('loading-spinner', CircleSpin)

app.config.productionTip = false

app.exports = {
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}

app.mount('#app')
