<template>
  <q-item
      @click="updateInvoice({ id: id, updates: { paid: !invoice.paid } })"
      :class="!invoice.paid ? 'bg-grey-1' : 'bg-grey-4'"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox
          :value="invoice.paid"
          class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label
          :class="{ 'text-strikethrough' : invoice.paid }">
          {{invoice.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
          <q-icon
          name="event"
          size="15px"
          class="q-mr-sm"
          ></q-icon>
          <q-item-label caption>{{ invoice.dueDate }}</q-item-label>
          </div>
          <div class="row">
          <small>
          <q-icon
          name="payment"
          size="15px"
          color="green"
          class="q-mr-sm" /> <b> ${{ invoice.total}}</b></small>
          </div>
        </q-item-section>
      </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['invoice', 'id'],
  methods: {
    ...mapActions('invoices', ['updateInvoice']),
  },
};
</script>

<style lang="scss">

</style>
