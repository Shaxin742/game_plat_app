import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store from './store'
Vue.prototype.$store = store

import {roast} from './utils/common.js'
Vue.prototype.$roast = roast

App.mpType = 'app'
const app = new Vue({
	store, 
    ...App
})
app.$mount()
