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

const mutations = {

};

const actions = {

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
