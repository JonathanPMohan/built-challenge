import Vue from 'vue';
// import { uid } from 'quasar';

const state = {
  messages: {
    ID1: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '16:30',
    },
    ID2: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '13:30',
    },
    ID3: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '11:30',
    },
  },
};
/* eslint no-shadow: ["error", { "allow": ["state", "getters"]}] */

const mutations = {
  deleteMessage(state, id) {
    Vue.delete(state.messages, id);
  },
};

const actions = {
  deleteMessage({ commit }, id) {
    commit('deleteMessage', id);
  },
};

const getters = {
  // need to refactor messages getter into it's own store
  messages: () => state.messages,
  messageCount: (state) => {
    const count = Object.keys(state.messages).length;
    return count;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
