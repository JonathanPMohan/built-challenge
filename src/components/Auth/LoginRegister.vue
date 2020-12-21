<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
    <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab | titleCase }} for access to Built Payment Solutions
      </q-banner>
      </div>

      <div class="row q-mb-md">
        <q-input
        outlined
        class="col"
        v-model="formData.email"
        lazy-rules
        :rules="[ val => isValidEmailAddress(val) || 'Please use a valid email address']"
        label="Email"
        ref="email"
        stack-label />
      </div>

      <div class="row q-mb-md">
        <q-input
        outlined
        class="col"
        v-model="formData.password"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please use a minimum 6 characters']"
        label="Password"
        ref="password"
        type="password"
        stack-label />
      </div>

      <div class="row">
        <q-space />
        <q-btn
          type="submit"
          color="primary"
          :label="tab" />
      </div>
  </form>
</template>

<script>
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          console.log('login the user');
        } else {
          console.log('register the user');
        }
      }
    },
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
