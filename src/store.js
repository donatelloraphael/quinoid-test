import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: {},
      currentUser: null,
      category: "",
    }
  },
  mutations: {
    addUser(state, user) {
      state.users[user.email] = user;
    },
    setCategory(state, category) {
      state.category = category;
    },
  },
  getters: {
    getUser(state) {
      return state.currentUser;
    }
  },
  actions: {
    login(context, user) {
      if (context.state.users[user.email] && context.state.users[user.email].password === user.password) {
        context.state.currentUser = user.email;
      }
    }
  },
});
