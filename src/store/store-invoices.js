import Vue from 'vue';
import { uid } from 'quasar';

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
  search: '',
};
/* eslint no-shadow: ["error", { "allow": ["state", "getters"]}] */

const mutations = {
  updateInvoice(state, payload) {
    Object.assign(state.invoices[payload.id], payload.updates);
  },
  deleteInvoice(state, id) {
    Vue.delete(state.invoices, id);
  },
  addInvoice(state, payload) {
    Vue.set(state.invoices, payload.id, payload.invoice);
  },
  setSearch(state, value) {
    state.search = value;
  },
};

const actions = {
  updateInvoice({ commit }, payload) {
    commit('updateInvoice', payload);
  },
  deleteInvoice({ commit }, id) {
    commit('deleteInvoice', id);
  },
  addInvoice({ commit }, invoice) {
    const invoiceId = uid();
    const payload = {
      id: invoiceId,
      // using short hand method for invoice: invoice
      invoice,
    };
    commit('addInvoice', payload);
  },
  setSearch({ commit }, value) {
    commit('setSearch', value);
  },
};

const getters = {
  // invoices: () => state.invoices,
  invoicesFiltered: (state) => {
    const invoicesFiltered = {};
    if (state.search) {
      Object.keys(state.invoices).forEach((key) => {
        const invoice = state.invoices[key];
        const invoiceNameLowerCase = invoice.name.toLowerCase();
        const searchLowerCase = state.search.toLowerCase();
        if (invoiceNameLowerCase.includes(searchLowerCase)) {
          invoicesFiltered[key] = invoice;
        }
      });
      return invoicesFiltered;
    }
    return state.invoices;
  },
  outstandingInvoices: (state, getters) => {
    // object destructuring { ...sample }
    const { ...invoicesFiltered } = getters.invoicesFiltered;
    const invoices = {};
    Object.keys(invoicesFiltered).forEach((key) => {
      const invoice = invoicesFiltered[key];
      if (!invoice.paid) {
        invoices[key] = invoice;
      }
    });
    return invoices;
  },
  paidInvoices: (state, getters) => {
    // object destructuring { ...sample }
    const { ...invoicesFiltered } = getters.invoicesFiltered;
    const invoices = {};
    Object.keys(invoicesFiltered).forEach((key) => {
      const invoice = invoicesFiltered[key];
      if (invoice.paid) {
        invoices[key] = invoice;
      }
    });
    return invoices;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
