<template>
  <q-page padding>
<user-profile />
  </q-page>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  components: {
    'user-profile': () => import('components/Profile/UserProfile.vue'),
  },
};
</script>

<style>

</style>
