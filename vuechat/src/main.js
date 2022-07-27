import Vue from 'vue'
import App from './App'
import * as VueRouter from 'vue-router'
import * as Routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Toasted from 'vue-toasted';
import './assets/styles.css'

library.add(faPencilAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Toasted)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})