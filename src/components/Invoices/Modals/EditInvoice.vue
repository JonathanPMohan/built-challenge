<template>

  <q-card>
      <modal-header>Edit Invoice</modal-header>
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

        <modal-save-button ></modal-save-button>

        </q-form>
        <!-- End of Form Component -->
      </q-card>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: ['invoice', 'id'],
  data() {
    return {
      invoiceToSubmit: {},
    };
  },
  methods: {
    ...mapActions('invoices', ['updateInvoice']),
    submitForm() {
      this.$refs.modalInvoiceName.$refs.name.validate();
      if (!this.$refs.modalInvoiceName.$refs.name.hasError) {
        this.submitInvoice();
      }
    },
    submitInvoice() {
      this.updateInvoice({
        id: this.id,
        updates: this.invoiceToSubmit,
      });
      this.$emit('close');
    },
  },
  components: {
    'modal-header': () => import('components/Invoices/Modals/Shared/ModalHeader.vue'),
    'modal-invoice-name': () => import('components/Invoices/Modals/Shared/ModalInvoiceName.vue'),
    'modal-due-date': () => import('components/Invoices/Modals/Shared/ModalDueDate.vue'),
    'modal-invoice-total': () => import('components/Invoices/Modals/Shared/ModalInvoiceTotal.vue'),
    'modal-save-button': () => import('components/Invoices/Modals/Shared/ModalButtons.vue'),
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
