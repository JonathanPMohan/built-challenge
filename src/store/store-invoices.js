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
  sort: 'name',
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
  setSort(state, value) {
    state.sort = value;
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
  setSort({ commit }, value) {
    commit('setSort', value);
  },
};

const getters = {
  // invoices: () => state.invoices,
  invoicesSorted: (state) => {
    const invoicesSorted = {};
    const keysOrdered = Object.keys(state.invoices);

    keysOrdered.sort((a, b) => {
      const invoiceAProp = state.invoices[a][state.sort].toLowerCase();
      const invoiceBProp = state.invoices[b][state.sort].toLowerCase();

      if (invoiceAProp > invoiceBProp) return 1;
      if (invoiceAProp < invoiceBProp) return -1;
      return 0;
    });

    keysOrdered.forEach((key) => {
      invoicesSorted[key] = state.invoices[key];
    });
    return invoicesSorted;
  },
  invoicesFiltered: (state, getters) => {
    const { ...invoicesSorted } = getters.invoicesSorted;
    const invoicesFiltered = {};
    if (state.search) {
      Object.keys(invoicesSorted).forEach((key) => {
        const invoice = invoicesSorted[key];
        const invoiceNameLowerCase = invoice.name.toLowerCase();
        const searchLowerCase = state.search.toLowerCase();
        if (invoiceNameLowerCase.includes(searchLowerCase)) {
          invoicesFiltered[key] = invoice;
        }
      });
      return invoicesFiltered;
    }
    return invoicesSorted;
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
