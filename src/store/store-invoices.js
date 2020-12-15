import Vue from 'vue';

const state = {
  invoices: {
    ID1: {
      name: 'May Invoice',
      paid: false,
      total: '249.95',
      dueDate: '2020/05/12',
    },
    ID2: {
      name: 'June Invoice',
      paid: false,
      total: '249.95',
      dueDate: '2020/06/12',
    },
    ID3: {
      name: 'July Invoice',
      paid: false,
      total: '249.95',
      dueDate: '2020/07/12',
    },
  },
};
/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const mutations = {
  updateInvoice(state, payload) {
    console.log('payload (from mutation): ', payload);
    Object.assign(state.invoices[payload.id], payload.updates);
  },
  deleteInvoice(state, id) {
    Vue.delete(state.invoices, id);
  },
};

const actions = {
  updateInvoice({ commit }, payload) {
    commit('updateInvoice', payload);
  },
  deleteInvoice({ commit }, id) {
    commit('deleteInvoice', id);
  },
};

const getters = {
  invoices: () => state.invoices,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
