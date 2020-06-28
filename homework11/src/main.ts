import Vue from "vue";
import App from "./views/App/App.vue";
import router from "./config/router";
import axios from 'axios';
import VueAxios from "vue-axios";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Notification from "vue-notification";
import store from "@/config/store";
import Vuelidate from 'vuelidate'
import DateTimeFormatter from "@/utils/DateTimeFormatter";

axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(Notification)

Vue.filter("DateTimeFormatter", DateTimeFormatter.filter())

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
