<template>

  <q-card>
      <modal-header>Pay Invoice</modal-header>
<!-- Beginning of Form Component -->
        <q-form @submit.prevent="submitForm">

    <q-card-section class="q-pt-none">
        <modal-invoice-name
        :name.sync="invoiceToSubmit.name"
        ref="modalInvoiceName" />

        <modal-due-date
        :dueDate.sync="invoiceToSubmit.dueDate"/>

        <modal-invoice-total
        v-if="invoiceToSubmit.dueDate"
        :total.sync="invoiceToSubmit.total"/>

        </q-card-section>

        <modal-pay-button ></modal-pay-button>

        </q-form>
        <!-- End of Form Component -->
      </q-card>
</template>

<script>

import { mapActions } from 'vuex';
import mixinAddEditInvoice from 'src/mixins/mixin-add-edit-invoice';

export default {
  mixins: [mixinAddEditInvoice],
  props: ['invoice', 'id'],
  data() {
    return {
      invoiceToSubmit: {},
    };
  },
  methods: {
    ...mapActions('invoices', ['updateInvoice']),
    submitInvoice() {
      this.updateInvoice({
        id: this.id,
        updates: this.invoiceToSubmit,
      });
      this.$q.notify({
        color: 'white',
        textColor: 'black',
        position: 'bottom-right',
        icon: 'cloud_done',
        iconColor: 'white',
        message: 'Your invoice has been paid!',
      });
      this.$emit('close');
    },
  },
  mounted() {
    // this.invoiceToSubmit = Object.assign({}, this.invoice);
    // using the spread operator instead for less verbose
    this.invoiceToSubmit = { ...this.invoice };
  },
};
</script>

<style lang="scss">

</style>
