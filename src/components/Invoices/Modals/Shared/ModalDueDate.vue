<template>
  <div class="row q-mb-xs">
    <q-input
      label="Due Date"
      clearable
      outlined
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      :rules="[val => !!val || 'Field is required']">
      <template v-slot:append>
        <q-icon
        name="event"
        class="cursor-pointer">
          <q-popup-proxy>
            <q-date
            :value="dueDate"
            @input="$emit('update:dueDate', $event)">
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
        </div>
</template>

<script>
export default {
  props: ['dueDate'],
};
</script>

<style lang="scss">

</style>
