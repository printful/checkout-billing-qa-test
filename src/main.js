import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VTooltip from 'v-tooltip';
import '@assets/scss/main.scss';

Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
