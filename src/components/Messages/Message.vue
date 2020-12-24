<template>

 <q-item>
        <q-item-section>
          <q-item-label>{{ message.subject }}</q-item-label>
          <q-item-label caption>{{ message.body }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ message.dateSent | dateDisplay }} |
            {{ messageTimeSent }}</q-item-label>
            <div class="row">
           <q-btn
            dense
            color="primary"
            flat
            size="12px"
            icon="email"
            class=""
            :to="{ name: 'messageDetails',
            params: { id: id }}" />

            <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            dense
            color="primary"
            icon="delete" />
            </div>
        </q-item-section>
      </q-item>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
  methods: {
    ...mapActions('messages', ['deleteMessage']),
    promptToDelete(id) {
      this.$q.dialog({
        title: '<div class="bg-grey-4 rounded-borders q-pa-sm"><div><span class="text-dark q-pa-xs"><strong>CONFIRM DELETE</strong></span></div></div>',
        message: 'Delete this Message?',
        html: true,
        ok: {
          push: true,
          color: 'blue',
        },
        cancel: {
          color: 'grey-4',
          textColor: 'dark',
        },
        persistent: true,
      }).onOk(() => {
        this.deleteMessage(id);
        this.$q.notify({
          color: 'white',
          textColor: 'black',
          position: 'bottom-right',
          icon: 'cloud_done',
          iconColor: 'white',
          message: 'Your message has been deleted',
        });
      });
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
