<template>
  <q-card-section class="row bg-grey-5 text-white rounded-borders q-ma-md">
        <div class="text-h6"><slot></slot></div>
          <q-space />
          <q-btn
          flat
          round
          dense
          icon="close"
          v-close-popup />
        </q-card-section>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">

</style>
