import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
// 引入jshint用于实现js自动补全提示
import jshint from "jshint";
window.JSHINT = jshint.JSHINT;
Vue.use(codemirror);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
