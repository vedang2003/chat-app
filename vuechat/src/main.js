// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as VueRouter from 'vue-router'
import * as Routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const router = new VueRouter({
        /* eslint-disable no-new */
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