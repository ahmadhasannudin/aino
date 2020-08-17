import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store.js";
import idleVue from "idle-vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const eventsHub = new Vue();

Vue.use(idleVue, {
  eventEmitter: eventsHub,
  idleTime: 60000,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
