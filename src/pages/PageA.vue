<template>
  <q-page q-pa-md>
<!-- List of Items -->
<q-list bordered class="q-ma-md" separator>
      <invoice
      v-for="(invoice, key) in invoices"
      :key="key"
      :invoice="invoice"
      :id="key"
      ></invoice>

    </q-list>
<!-- End of List -->
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('invoices', ['invoices']),
  },
  components: {
    invoice: () => import('components/Invoices/Invoice.vue'),
  },
};
</script>

<style>

</style>
