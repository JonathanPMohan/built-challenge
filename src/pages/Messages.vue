<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <q-scroll-area class="q-scroll-area-messages">
        <no-messages
        v-if="!Object.keys(messages).length" />
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
    ...mapGetters('messages', ['messages']),
  },
  components: {
    'message-list': () => import('components/Messages/MessageList.vue'),
    'no-messages': () => import('components/Messages/NoMessages.vue'),
  },
};
</script>

<style lang="scss">
 .q-scroll-area-messages {
    display: flex;
    flex-grow: 1;
  }
</style>
