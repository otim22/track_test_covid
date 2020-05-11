import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueLocalStorage from 'vue-localstorage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

library.add(faFacebook, faTwitter, faLinkedinIn, faGithub, faMedium, faChevronRight, faPhoneAlt, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false
Vue.use(VueLocalStorage)
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
