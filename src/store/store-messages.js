// import Vue from 'vue';
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
    ID4: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '5:30',
    },
    ID5: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '20:30',
    },
    ID6: {
      subject: 'Recent Request',
      body: 'loremipsum loremipsum loremipsum loremipsum',
      dateSent: '2020/05/12',
      timeSent: '14:30',
    },
  },
};
/* eslint no-shadow: ["error", { "allow": ["state", "getters"]}] */

const mutations = {

};

const actions = {

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
