<template>
  <div class="row q-mb-xs">
          <q-input
          class="col"
          clearable
          outlined
          autofocus
          v-select-all
          :value="name"
          @input="$emit('update:name', $event)"
          label="Invoice Name"
          ref="name"
          lazy-rules
          :rules="[val => !!val || 'Field is required']" />
        </div>
</template>

<script>
import { selectAll } from 'src/Directives/directive-select-all';

export default {
  props: ['name'],
  directives: {
    // convert v-directive to camelCase
    selectAll,
  },
};
</script>

<style lang="scss">

</style>
