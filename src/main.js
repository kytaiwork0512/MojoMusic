import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { VueMasonryPlugin } from "vue-masonry";

// BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueMasonryPlugin);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
