import Vue from 'vue'
import App from './App'
import uView  from 'uview-ui'
import store  from "./store"
Vue.use(uView)
Vue.config.productionTip = false
//将state挂载到原型上
Vue.prototype.$store=store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
