<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <q-scroll-area class="q-scroll-area-messages">
        <message-list
        :messages="messages" />
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters('invoices', ['messages']),
  },
  components: {
    'message-list': () => import('components/Messages/MessageList.vue'),
  },
};
</script>

<style lang="scss">
 .q-scroll-area-messages {
    display: flex;
    flex-grow: 1;
  }
</style>
