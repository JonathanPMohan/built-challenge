<template>
  <q-page>
<p class="q-pt-md text-center text-h6">Contact Built To Request A Loan</p>
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
