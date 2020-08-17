import Vue from "vue";
import Vuex from "vuex";
import { getAPI } from "./axios-api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: "",
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      (state.accessToken = access), (state.refreshToken = refresh);
    },
    destroyToken(state) {
      (state.accessToken = null), (state.refreshToken = null);
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null;
    },
  },
  actions: {
    userLogin(context, userCredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post("/auth/login", {
            username: userCredentials.username,
            password: userCredentials.password,
          })
          .then((response) => {
            context.commit("updateStorage", {
              access: response.data.data.access_token.token,
              refresh: response.data.data.access_token.refresh_token,
            });
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    userLogout(context) {
      if (context.getters.loggedIn) {
        context.commit("destroyToken");
      }
    },
  },
});
