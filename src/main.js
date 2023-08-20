import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import moment from "moment";

const app = createApp(App);
app.config.globalProperties.$moment = moment;
app.mount("#app");
