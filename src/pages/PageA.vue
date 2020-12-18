<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
    <div class="row">
      <search class="q-ma-md" />
      <sort class="q-ma-md"  />
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
    v-if="!Object.keys(outstandingInvoices).length && !search" />
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
<!-- Add Button -->
<div class="absolute-bottom text-center q-mb-lg no-pointer-events">
  <q-btn
    @click="showAddInvoice = true"
    round
    class="all-pointer-events"
    color="primary"
    size="24px"
    icon="add"
    />
</div>
<!-- End of Add Button -->
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
    ...mapState('invoices', ['search']),
  },
  components: {
    'add-invoice': () => import('components/Invoices/Modals/AddInvoice.vue'),
    'outstanding-invoices': () => import('components/Invoices/OutstandingInvoices.vue'),
    'paid-invoices': () => import('components/Invoices/PaidInvoices.vue'),
    'no-invoices': () => import('components/Invoices/NoInvoices.vue'),
    search: () => import('components/Invoices/Tools/Search.vue'),
    sort: () => import('components/Invoices/Tools/Sort.vue'),
  },
};
</script>
    NoInvoices

<style lang="scss">
  .q-scroll-area-invoices {
    display: flex;
    flex-grow: 1;
  }
</style>
