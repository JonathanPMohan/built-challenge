<template>
  <q-page q-pa-md>
    <no-invoices
    v-if="!Object.keys(outstandingInvoices).length" />
<!-- List of Items -->
    <outstanding-invoices
      v-else
      :outstandingInvoices="outstandingInvoices" />

    <paid-invoices
      v-if="Object.keys(paidInvoices).length"
      :paidInvoices="paidInvoices" />

<!-- End of List -->
<!-- Add Button -->
<div class="absolute-bottom text-center q-mb-lg">
  <q-btn
    @click="showAddInvoice = true"
    round
    color="primary"
    size="24px"
    icon="add"
    />
</div>
<!-- End of Add Button -->
<!-- Add Dialog Popup -->
  <q-dialog
    v-model="showAddInvoice">
      <add-invoice @close="showAddInvoice = false" />
    </q-dialog>
<!-- End of Add Dialog Popup -->
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      showAddInvoice: false,
    };
  },
  computed: {
    ...mapGetters('invoices', ['outstandingInvoices', 'paidInvoices']),
  },
  components: {
    'add-invoice': () => import('components/Invoices/Modals/AddInvoice.vue'),
    'outstanding-invoices': () => import('components/Invoices/OutstandingInvoices.vue'),
    'paid-invoices': () => import('components/Invoices/PaidInvoices.vue'),
    'no-invoices': () => import('components/Invoices/NoInvoices.vue'),
  },
};
</script>
    NoInvoices

<style lang="scss">

</style>
