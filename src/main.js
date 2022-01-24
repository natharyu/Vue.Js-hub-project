import { createApp, h } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Routes from "./Routes.js";
import App from "./App.vue";

const router = new createRouter({
  routes: Routes,
  history: createWebHashHistory(),
});

createApp({ render: () => h(App) })
  .use(router)
  .mount("#app");
