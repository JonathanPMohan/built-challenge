import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  userProfile: {
    ID1: {
      name: 'Jason Smith',
      userName: 'userName1234',
      email: 'email@email.com',
      phone: '615-555-5555',
      password: 'aaaaaaaaa',
      cardNumber: '1234567891234567',
      expiration: '2020/05/12',
      ccv: '123',
    },
  },
};
/* eslint no-shadow: ["error", { "allow": ["state", "getters"]}] */

const mutations = {
  updateProfile(state, payload) {
    Object.assign(state.userProfile[payload.id], payload.updates);
  },
  addProfile(state, payload) {
    Vue.set(state.userProfile, payload.id, payload.userProfile);
  },
};

const actions = {
  addProfile({ commit }, userProfile) {
    const profileId = uid();
    const payload = {
      id: profileId,
      // using short hand method for userProfile: userProfile
      userProfile,
    };
    commit('addProfile', payload);
  },
  updateProfile({ commit }, payload) {
    commit('updateProfile', payload);
  },
};

const getters = {
  userProfile: () => state.userProfile,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
