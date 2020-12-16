<template>
  <q-banner class="bg-grey-3 q-ma-md">
      <template v-slot:avatar>
        <q-icon name="mood" color="primary" />
      </template>
      Congratulations. You have no outstanding invoices.
      <template v-slot:action>
        <q-btn
        icon="monetization_on"
        dense
        class="q-pa-xs"
        size="sm"
        color="primary"
        label="Payment History" />
      </template>
    </q-banner>
</template>

<script>
export default {

};
</script>

<style lang="scss">

</style>
