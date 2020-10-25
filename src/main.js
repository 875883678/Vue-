import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 引入全局样式
import './styles/base.less'

// 引入lib-flexible 该依赖包是阿里开源的一个库，自动给不同屏幕设置html的fontsize
import 'lib-flexible'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
