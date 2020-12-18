<template>
   <q-input
   dense
   class="col q-ml-md q-mt-md"
   outlined
   @keyup.esc="searchField = ''"
   v-model="searchField"
   v-select-all
   label="Search">

    <template v-slot:append>
      <q-icon
      clickable
      v-if="searchField !== ''"
      name="close"
      @click="searchField = ''"
      class="cursor-pointer" />
      <q-icon name="search" />
    </template>

  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { selectAll } from 'src/Directives/directive-select-all';

export default {
  computed: {
    ...mapState('invoices', ['search']),
    searchField: {
      get() {
        return this.search;
      },
      set(value) {
        this.setSearch(value);
      },
    },
  },
  methods: {
    ...mapActions('invoices', ['setSearch']),
  },
  directives: {
    // convert v-directive to camelCase
    selectAll,
  },
};
</script>

<style lang="scss">

</style>
