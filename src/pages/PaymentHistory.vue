<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
    <div class="row">
      <search class="q-mb-md" />
      <sort class="q-mb-md q-ml-md"  />
    </div>

    <p class="q-pa-md" v-if="search && !Object.keys(paidInvoices).length">
    <q-icon name="not_interested"
    size="25px"
    color="red"
    />
    Sorry! We don't find any search results.</p>

<q-scroll-area class="q-scroll-area-invoices">
<!-- List of Items -->
    <payment-history
      class="q-mb-xl"
      v-if="Object.keys(paidInvoices).length"
      :paidInvoices="paidInvoices" />
</q-scroll-area>

<!-- End of List -->
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('invoices', ['paidInvoices']),
    ...mapGetters('settings', ['settings']),
    ...mapState('invoices', ['search']),
  },
  components: {
    'payment-history': () => import('components/Payment/PaymentHistory.vue'),
    search: () => import('components/Invoices/Tools/Search.vue'),
    sort: () => import('components/Invoices/Tools/Sort.vue'),
  },
};
</script>

<style lang="scss">
  .q-scroll-area-invoices {
    display: flex;
    flex-grow: 1;
  }
</style>
