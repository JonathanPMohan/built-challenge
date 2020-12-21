<template>
  <q-page padding>
    <about-us />
  </q-page>
</template>

<script>

export default {
  components: {
    'about-us': () => import('components/About/About.vue'),
  },
};
</script>

<style>

</style>
