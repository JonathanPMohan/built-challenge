<template>

  <q-item
      @click="updateInvoice({ id: id, updates: { paid: !invoice.paid } })"
      :class="!invoice.paid ? 'bg-grey-1' : 'bg-grey-3'"
      v-touch-hold:1000.mouse="showEditInvoiceModal"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox
          :value="invoice.paid"
          class="no-pointer-events" />
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
          <small>
          <q-icon
          name="payment"
          size="15px"
          color="green"
          class="q-mr-sm" /> <b> ${{ invoice.total}}</b></small>
          </div>
        </q-item-section>

        <q-item-section side>
          <div class="row">
          <q-btn
            @click.stop="showEditInvoiceModal"
            flat
            round
            dense
            color="dark"
            icon="edit" />
          <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            dense
            color="primary"
            icon="delete" />
            </div>
        </q-item-section>
            <q-dialog
              v-model="showEditInvoice">
                <edit-invoice
                @close="showEditInvoice = false"
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
      showEditInvoice: false,
    };
  },
  computed: {
    ...mapState('invoices', ['search']),
  },
  methods: {
    ...mapActions('invoices', ['updateInvoice', 'deleteInvoice']),
    showEditInvoiceModal() {
      this.showEditInvoice = true;
    },
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm Delete',
        message: 'Delete this invoice?',
        ok: {
          push: true,
          color: 'blue',
        },
        cancel: {
          color: 'negative',
        },
        persistent: true,
      }).onOk(() => {
        this.deleteInvoice(id);
        this.$q.notify({
          color: 'white',
          textColor: 'black',
          position: 'bottom-right',
          icon: 'cloud_done',
          iconColor: 'white',
          message: 'Your invoice has been deleted',
        });
      });
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
    'edit-invoice': () => import('components/Invoices/Modals/EditInvoice.vue'),
  },
};
</script>

<style lang="scss">

</style>
