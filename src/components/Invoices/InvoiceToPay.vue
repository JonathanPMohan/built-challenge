<template>

  <q-item
      @click="updateInvoice({ id: id, updates: { paid: !invoice.paid } })"
      :class="!invoice.paid ? 'bg-grey-1' : 'bg-grey-3'"
      v-touch-hold:1000.mouse="showPayInvoiceModal"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-btn
            @click.stop="showPayInvoiceModal"
            flat
            round
            dense
            color="green"
            icon="payment" />
        </q-item-section>
        <q-item-section>
          <q-item-label
          :class="{ 'text-strikethrough' : invoice.paid }"
          v-html="$options.filters.searchHighlight(invoice.name, search)">
          <!-- {{invoice.name | searchHighlight(search) }} -->
          </q-item-label>
        </q-item-section>

        <q-item-section
        side>
          <div class="row">
          <q-icon
          name="event"
          size="15px"
          class="q-mr-sm"
          ></q-icon>
          <q-item-label caption>{{ invoice.dueDate | dateDisplay }}</q-item-label>
          </div>
          <div class="col">
          <b> ${{ invoice.total}}</b>
          </div>
        </q-item-section>
            <q-dialog
              v-model="showPayInvoice">
                <pay-invoice
                @close="showPayInvoice = false"
                :invoice="invoice"
                :id="id" />
            </q-dialog>

      </q-item>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { date } from 'quasar';

export default {
  props: ['invoice', 'id'],
  data() {
    return {
      showPayInvoice: false,
    };
  },
  computed: {
    ...mapState('invoices', ['search']),
  },
  methods: {
    ...mapActions('invoices', ['updateInvoice', 'deleteInvoice']),
    showPayInvoiceModal() {
      this.showPayInvoice = true;
    },
  },
  filters: {
    dateDisplay(value) {
      return date.formatDate(value, 'MMM D, YYYY');
    },
    searchHighlight(value, search) {
      if (search) {
        const searchRegExp = new RegExp(search, 'ig');
        // using preferred template literal instead of concatenation
        return value.replace(searchRegExp, (match) => `<span class="bg-blue-2">${match}</span>`);
      }
      return value;
    },
  },
  components: {
    'pay-invoice': () => import('components/Invoices/Modals/PayInvoice.vue'),
  },
};
</script>

<style lang="scss">

</style>
