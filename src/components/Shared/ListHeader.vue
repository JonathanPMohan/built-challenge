<template>
  <q-banner
  inline-actions
  :class="bgColor"
  class="list-header text-dark text-center">
      <span class="text-bold text-subtitle1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {
  props: ['bgColor'],
};
</script>

<style lang="scss">
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
