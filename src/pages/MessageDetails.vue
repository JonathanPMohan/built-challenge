<template>
  <q-page padding>
<p></p>
<p></p>
  </q-page>
</template>

<script>

export default {
  props: ['id'],
  data() {
    console.log('data', this.$store);
    console.log('state', this.$store.state.messages);
    return {
      message: this.$store.state.messages.ID1.subject,
    };
  },
};

</script>

<style lang="scss">

</style>
