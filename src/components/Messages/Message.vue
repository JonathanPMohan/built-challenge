<template>

 <q-item>
        <q-item-section>
          <q-item-label>{{ message.subject }}</q-item-label>
          <q-item-label caption>{{ message.body }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ message.dateSent | dateDisplay }}</q-item-label>
          <q-icon name="mail" color="primary" />
        </q-item-section>
      </q-item>

</template>

<script>

import { date } from 'quasar';

export default {
  props: ['message', 'id'],
  data() {
    return {

    };
  },
  filters: {
    dateDisplay(value) {
      return date.formatDate(value, 'MMM D, YYYY');
    },
  },
};

</script>

<style lang="scss">

</style>
