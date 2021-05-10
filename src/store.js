import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: {},
      // currentUser: null,
      // category: "",
      currentUser: "akbar@gmail.com",
      category: "History",
      numQuestions: 5,
      questions: [],
      timeTaken: "",
      notes: "",
    }
  },
  mutations: {
    addUser(state, user) {
      state.users[user.email] = user;
    },
    setCategory(state, category) {
      state.category = category;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setTimeTaken(state, time) {
      state.timeTaken = time;
    },
    setNotes(state, note) {
      state.notes = note;
    }
  },
  getters: {
    getUser(state) {
      return state.currentUser;
    },
    getCategory(state) {
      return state.category;
    },
    getNumQuestions(state) {
      return state.numQuestions;
    },
  },
  actions: {
    login(context, user) {
      if (context.state.users[user.email] && context.state.users[user.email].password === user.password) {
        context.state.currentUser = user.email;
      }
    }
  },
});
