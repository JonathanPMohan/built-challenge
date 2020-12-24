<template>
  <q-page padding>
<loan-request />
  </q-page>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  components: {
    'loan-request': () => import('components/Loans/LoanRequest.vue'),
  },
};
</script>

<style>

</style>
