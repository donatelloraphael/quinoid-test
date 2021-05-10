import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: {},
      currentUser: null,
      category: "",
      numQuestions: 10,
      questions: [],
      timeTaken: "",
      notes: "",
      totalTime: 300,
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
    },
    clearCurrentUser(state) {
      state.currentUser = "";
    },
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
    getTimeTaken(state) {
      return state.timeTaken;
    },
    getNotes(state) {
      return state.notes;
    },
    getQuestions(state) {
      return state.questions;
    },
    getTotalTime(state) {
      return state.totalTime;
    },
  },
  actions: {
    login(context, user) {
      if (context.state.users[user.email] && context.state.users[user.email].password === user.password) {
        context.state.currentUser = user.email;
      }
    },
    clearStore(context) {
      context.commit("setCategory", "");
      context.commit("setQuestions", []);
      context.commit("setTimeTaken", "");
      context.commit("setNotes", "");
    },
    setTimeTaken(context, seconds) {
      const time = context.state.totalTime - seconds;

      const minutes_t = Math.floor(time / 60);
      const seconds_t = time - minutes_t * 60;

      let timeString = (minutes_t < 10 ? "0" : "") + minutes_t + ":" + (seconds_t < 10 ? "0" : "") + seconds_t;
      
      context.commit("setTimeTaken", timeString);
    },
  },
});
