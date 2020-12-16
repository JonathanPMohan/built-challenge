<template>
  <q-page q-pa-md>
<!-- List of Items -->
    <q-list
    v-if="Object.keys(invoices).length"
    bordered
    separator
    class="q-ma-md">
      <invoice
      v-for="(invoice, key) in invoices"
      :key="key"
      :invoice="invoice"
      :id="key"
      ></invoice>

    </q-list>
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
    ...mapGetters('invoices', ['invoices']),
  },
  components: {
    invoice: () => import('components/Invoices/Invoice.vue'),
    'add-invoice': () => import('components/Invoices/Modals/AddInvoice.vue'),
  },
};
</script>

<style lang="scss">

</style>
