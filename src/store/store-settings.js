import { LocalStorage } from 'quasar';

const state = {
  settings: {
    display12HourTimeFormat: false,
    displayInvoicesInOneList: true,
  },
};

/* eslint no-shadow: ["error", { "allow": ["state", "getters"]}] */
const mutations = {
  setDisplay12HourTimeFormat(state, value) {
    state.settings.display12HourTimeFormat = value;
  },
  setDisplayInvoicesInOneList(state, value) {
    state.settings.displayInvoicesInOneList = value;
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings);
  },
};

const actions = {
  setDisplay12HourTimeFormat({ commit, dispatch }, value) {
    commit('setDisplay12HourTimeFormat', value);
    dispatch('saveSettings');
  },
  setDisplayInvoicesInOneList({ commit, dispatch }, value) {
    commit('setDisplayInvoicesInOneList', value);
    dispatch('saveSettings');
  },
  saveSettings({ state }) {
    LocalStorage.set('settings', state.settings);
  },
  getSettings({ commit }) {
    const settings = LocalStorage.getItem('settings');
    if (settings) {
      commit('setSettings', settings);
    }
  },
};

const getters = {
  settings: () => state.settings,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
