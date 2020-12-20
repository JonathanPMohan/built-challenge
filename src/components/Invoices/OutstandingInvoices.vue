<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s"
  absolute-top>
    <div>
      <list-header
      v-if="!settings.displayInvoicesInOneList"
      bgColor="bg-grey-4"
      >Outstanding Invoices</list-header>

      <q-list
        bordered
        separator>

          <invoice
          v-for="(invoice, key) in outstandingInvoices"
          :key="key"
          :invoice="invoice"
          :id="key"
          ></invoice>
        </q-list>
        </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['outstandingInvoices'],
  computed: {
    ...mapGetters('settings', ['settings']),
  },
  components: {
    invoice: () => import('components/Invoices/Invoice.vue'),
    'list-header': () => import('components/Shared/ListHeader.vue'),
  },
};
</script>

<style lang="scss">

</style>
