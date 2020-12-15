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

        <q-card-section class="q-pt-none">
          <div class="row q-mb-sm">
          <q-input
          class="col"
          outlined
          v-model="invoiceToSubmit.name"
          label="Invoice Name" />
        </div>
        <div class="row q-mb-sm">
             <q-input
             label="Due Date"
             outlined
             v-model="invoiceToSubmit.dueDate">
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

<div class="row q-mb-sm">
     <q-input
     class="col"
      outlined
      v-model="invoiceToSubmit.total"
      label="Invoice Total" />
</div>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn
          flat
          label="SAVE"
          color="primary"
          v-close-popup />
        </q-card-actions>
      </q-card>
</template>

<script>

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
};
</script>

<style lang="scss">

</style>
