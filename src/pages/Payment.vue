<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
    <div class="row">
      <search class="q-mb-md" />
      <sort class="q-mb-md q-ml-md"  />
    </div>

    <p class="q-pa-md" v-if="search && !Object.keys(outstandingInvoices).length
    && !Object.keys(paidInvoices).length">
    <q-icon name="not_interested"
    size="25px"
    color="red"
    />
    Sorry! We don't find any search results.</p>

<q-scroll-area class="q-scroll-area-invoices">
    <no-invoices
    v-if="!Object.keys(outstandingInvoices).length &&
    !search && !settings.displayInvoicesInOneList" />
<!-- List of Items -->
    <outstanding-invoices
      v-if="Object.keys(outstandingInvoices).length"
      :outstandingInvoices="outstandingInvoices" />

    <paid-invoices
      class="q-mb-xl"
      v-if="Object.keys(paidInvoices).length"
      :paidInvoices="paidInvoices" />
</q-scroll-area>

<!-- End of List -->
</div>
<!-- Add Dialog Popup -->
  <q-dialog
    v-model="showAddInvoice">
      <add-invoice @close="showAddInvoice = false" />
    </q-dialog>
<!-- End of Add Dialog Popup -->
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      showAddInvoice: false,
    };
  },
  computed: {
    ...mapGetters('invoices', ['outstandingInvoices', 'paidInvoices']),
    ...mapGetters('settings', ['settings']),
    ...mapState('invoices', ['search']),
  },
  components: {
    'outstanding-invoices': () => import('components/Invoices/InvoicesToPay.vue'),
    'paid-invoices': () => import('components/Invoices/PaidInvoices.vue'),
    'no-invoices': () => import('components/Invoices/NoInvoices.vue'),
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
