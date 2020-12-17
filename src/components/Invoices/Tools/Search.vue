<template>
   <q-input
   dense
   class="col"
   outlined
   v-model="searchField"
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
};
</script>

<style lang="scss">

</style>
