<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s"
  absolute-top>
    <q-banner class="bg-grey-3 q-mb-md">
        <template v-slot:avatar>
          <q-icon name="mail" color="primary" />
        </template>
        You have no current messages.
        <template v-slot:action>
        </template>
      </q-banner>
  </transition>
</template>

<script>
export default {

};
</script>

<style lang="scss">

</style>
