import Vue from 'vue'
import App from './App'
import './pangza-uni-ui/css/var.scss';
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
