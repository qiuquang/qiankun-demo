import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false
registerMicroApps([
  {
    name: 'vip',
    entry: '//localhost:8082',
    container: '#container',
    activeRule: '/guibin',
  },
  {
    name: 'qiankun-app1',
    entry: '//localhost:8083',
    container: '#container',
    activeRule: '/app-vue',
    props: { data : { store, router } }
  },
  // {
  //   name: 'angularApp',
  //   entry: '//localhost:4200',
  //   container: '#container',
  //   activeRule: '/app-angular',
  // },
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
