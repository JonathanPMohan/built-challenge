<template>

 <q-item>
        <q-item-section>
          <q-item-label>{{ message.subject }}</q-item-label>
          <q-item-label caption>{{ message.body }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ message.dateSent | dateDisplay }} |
            {{ messageTimeSent }}</q-item-label>
          <q-icon name="mail" color="primary" />
        </q-item-section>
      </q-item>

</template>

<script>
import { mapGetters } from 'vuex';
import { date } from 'quasar';

export default {
  props: ['message', 'id'],
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    messageTimeSent() {
      if (this.settings.display12HourTimeFormat) {
        // unexpected use of comma operator no-sequences (Stuck)
        // return date.formatDate(`${this.message.dateSent} ${this.message.timeSent, 'h:mmA'}`);
        // return date.formatDate(this.message.dateSent + ' ' + this.message.timeSent, 'h:mmA');
        return date.formatDate(`${this.message.dateSent} ${this.message.timeSent}`);
      }
      return this.message.timeSent;
    },
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
