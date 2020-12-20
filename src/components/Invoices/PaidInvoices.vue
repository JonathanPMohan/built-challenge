<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s"
>
    <div
    :class="{ 'q-mt-md' : !settings.displayInvoicesInOneList }">
      <list-header
      v-if="!settings.displayInvoicesInOneList"
      bgColor="bg-grey-4"
      > Recent Paid Invoices</list-header>
      <q-list
        bordered
        separator>
          <invoice
          v-for="(invoice, key) in paidInvoices"
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
  props: ['paidInvoices'],
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
