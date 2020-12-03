import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VTooltip from 'v-tooltip';
import '@assets/scss/main.scss';

Vue.use(VTooltip);

Vue.config.productionTip = false;

// Ignore <ion-icon/> tags
Vue.config.ignoredElements = [/^ion-/];

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
