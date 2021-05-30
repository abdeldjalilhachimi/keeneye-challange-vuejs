import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
axios.defaults.baseURL =
  "http://pb-backend-lb-30e3b7a2fe04ab9c.elb.eu-west-3.amazonaws.com/v1/authenticate";
//axios.defaults.withCredentials = 'true';

//axios.defaults.headers.common['x-api-key'] = "2BAAFD2BE944AAA5B21BCBDF99F6E";
//axios.defaults.headers.common['x-api-secret'] = "CA41A12EA2828DBC49CDBDA88D521";
createApp(App).use(store).use(router).mount("#app");
