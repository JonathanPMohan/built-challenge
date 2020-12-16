<template>
<div>
  <list-header
  bgColor="bg-grey-4"
  > Recent Paid Invoices</list-header>
  <q-list
    bordered
    separator
    class="q-ma-md">
      <invoice
      v-for="(invoice, key) in paidInvoices"
      :key="key"
      :invoice="invoice"
      :id="key"
      ></invoice>

    </q-list>
  </div>
</template>

<script>
export default {
  props: ['paidInvoices'],
  components: {
    invoice: () => import('components/Invoices/Invoice.vue'),
    'list-header': () => import('components/Shared/ListHeader.vue'),
  },
};
</script>

<style lang="scss">

</style>
