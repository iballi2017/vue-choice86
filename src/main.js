import Vue from 'vue'
import App from './App.vue'
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"  // vue bootstrap
import vueRouter from "vue-router"  // vue router
import Routes from "./routes"  // importing routes

import { store } from "./store/store"

// After instaling "vue-resource", we import it here
import VueResource from "vue-resource"

// using vue-resource
Vue.use(VueResource)


// using bootstrap
Vue.use(bootstrap)

// using vue router
Vue.use(vueRouter)
const router = new vueRouter({
  routes: Routes,
  mode: "history"
})


//*** Directives

// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString().slice(2, 8)
//   }
Vue.directive("rainbow", {
  bind(el) {
    el.style.color = "#" + Math.random().toString().slice(2, 8)
  }
})


//*** Filters
Vue.filter("snippet", function (value) {
  return value.slice(0, 50)
})





Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
  router: router
}).$mount('#app')
