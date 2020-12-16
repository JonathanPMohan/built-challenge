<template>
  <div class="row q-mb-xs">
          <q-input
          class="col"
          clearable
          outlined
          autofocus
          :value="name"
          @input="$emit('update:name', $event)"
          label="Invoice Name"
          ref="name"
          lazy-rules
          :rules="[val => !!val || 'Field is required']" />
        </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style lang="scss">

</style>
