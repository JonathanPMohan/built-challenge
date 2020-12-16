<template>
    <div class="row q-mb-xs">
     <q-input
     class="col"
      outlined
      :value="total"
      @input="$emit('update:total', $event)"
      clearable
      label="Invoice Total"
      :rules="[val => !!val || 'Field is required']" />
</div>
</template>

<script>
export default {
  props: ['total'],
};
</script>

<style lang="scss">

</style>
