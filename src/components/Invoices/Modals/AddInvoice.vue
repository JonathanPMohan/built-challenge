<template>

  <q-card>
      <q-card-section class="row">
        <div class="text-h6">Add Invoice</div>
          <q-space />
          <q-btn
          flat
          round
          dense
          icon="close"
          v-close-popup />
        </q-card-section>
<!-- Beginning of Form Component -->
        <q-form @submit.prevent="submitForm">
    <q-card-section class="q-pt-none">
        <div class="row q-mb-xs">
          <q-input
          class="col"
          clearable
          outlined
          autofocus
          v-model="invoiceToSubmit.name"
          label="Invoice Name"
          ref="name"
          lazy-rules
          :rules="[val => !!val || 'Field is required']" />
        </div>
        <div class="row q-mb-xs">
             <q-input
             label="Due Date"
             clearable
             outlined
             v-model="invoiceToSubmit.dueDate"
             :rules="[val => !!val || 'Field is required']">
      <template v-slot:append>
        <q-icon
        name="event"
        class="cursor-pointer">
          <q-popup-proxy>
            <q-date v-model="invoiceToSubmit.dueDate">
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
        </div>

  <div
  v-if="invoiceToSubmit.dueDate"
    class="row q-mb-xs">
     <q-input
     class="col"
      outlined
      clearable
      v-model="invoiceToSubmit.total"
      label="Invoice Total"
      :rules="[val => !!val || 'Field is required']" />
</div>

<q-card-actions align="right">
          <q-btn
          label="SAVE"
          color="primary"
          type="submit"
          />
        </q-card-actions>

        </q-card-section>
        </q-form>
        <!-- End of Form Component -->
      </q-card>
</template>

<script>

import { mapActions } from 'vuex';

export default {
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
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitInvoice();
      }
    },
    submitInvoice() {
      this.addInvoice(this.invoiceToSubmit);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss">

</style>
