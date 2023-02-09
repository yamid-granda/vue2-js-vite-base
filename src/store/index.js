import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sessionUser: null,
    notifications: [],
  },
  mutations: {
    setSessionUser(state, newSessionUser) {
      state.sessionUser = newSessionUser;
    },
    setTranslations(state, newTranslations) {
      state.translations = newTranslations;
    },
    addNotification(state, newNotification) {
      state.notifications.push(newNotification);
    },
    removeNotification(state) {
      const index = state.notifications.length - 1;
      Vue.delete(state.notifications, index);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getSessionUser(state) {
      return state.sessionUser;
    },
  },
});
