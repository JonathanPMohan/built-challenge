<template>
   <q-select
      class="col q-ml-md q-mt-md q-mr-md"
      outlined
      v-model="sortBy"
      :options="options"
      emit-value
      map-options
      label="Sort By"
      dense />
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      options: [
        {
          label: 'Name',
          value: 'name',
        },
        {
          label: 'Date',
          value: 'dueDate',
        },
      ],
    };
  },
  computed: {
    ...mapState('invoices', ['sort']),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      },
    },
  },
  methods: {
    ...mapActions('invoices', ['setSort']),
  },
};
</script>

<style scoped>
  .q-select {
    /* // shouldn't grow, shouldn't shrink, base width */
    flex: 0 0 112px;
  }
</style>
