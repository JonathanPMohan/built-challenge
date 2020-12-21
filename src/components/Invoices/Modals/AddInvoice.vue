<template>

  <q-card>
      <modal-header>Add Invoice</modal-header>
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
import mixinAddEditInvoice from 'src/mixins/mixin-add-edit-invoice';

export default {
  mixins: [mixinAddEditInvoice],
  data() {
    return {
      invoiceToSubmit: {
        name: '',
        total: '',
        dueDate: '',
        paid: false,
      },
    };
  },
  methods: {
    ...mapActions('invoices', ['addInvoice']),
    submitInvoice() {
      this.addInvoice(this.invoiceToSubmit);
      this.$q.notify({
        color: 'white',
        textColor: 'black',
        position: 'bottom-right',
        icon: 'cloud_done',
        iconColor: 'white',
        message: 'Your invoice has been added',
      });
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">

</style>
