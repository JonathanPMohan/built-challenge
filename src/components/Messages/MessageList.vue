<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s"
>
    <div>
      <list-header
      v-if="Object.keys(messages).length"
      bgColor="bg-grey-4"
      > Current Messages</list-header>
      <q-list
        v-if="Object.keys(messages).length"
        bordered
        separator
        class="q-ma-md">
          <message
          v-for="(message, key) in messages"
          :key="key"
          :message="message"
          :id="key"
          ></message>

        </q-list>
      </div>
  </transition>
</template>

<script>
export default {
  props: ['messages'],
  components: {
    message: () => import('components/Messages/Message.vue'),
    'list-header': () => import('components/Shared/ListHeader.vue'),
  },
};
</script>

<style lang="scss">

</style>
