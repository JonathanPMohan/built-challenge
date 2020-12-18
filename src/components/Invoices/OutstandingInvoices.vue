<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s"
  absolute-top>
    <div>
      <list-header
      bgColor="bg-grey-4"
      >Outstanding Invoices</list-header>

      <q-list
        bordered
        separator
        class="q-ma-md">

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

export default {
  props: ['outstandingInvoices'],
  components: {
    invoice: () => import('components/Invoices/Invoice.vue'),
    'list-header': () => import('components/Shared/ListHeader.vue'),
  },
};
</script>
    ListHeader

<style lang="scss">

</style>
