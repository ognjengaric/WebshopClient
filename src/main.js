import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueSession from 'vue-session';
import Routes from './routes';

Vue.use(VueSession);
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
