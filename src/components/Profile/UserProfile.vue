<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s">
  <div class="q-pa-md" style="full-width">
<div class="form-div q-pa-md q-ma-sm q-mt-xs">
  <modal-loan-header>User Profile</modal-loan-header>
    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
      <q-input
        outlined
        v-model="name"
        lazy-rules
        hint="Name"
        :rules="[ val => val && val.length > 0 || 'This field is required']">
        <template v-slot:prepend>
          <q-icon name="face" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="email"
        type="email"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'This field is required']">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>

      <q-input
        v-model="tel"
        outlined
        type="tel"
        hint="Phone Number">
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="number"
        hint="Request Amount"
        type="number"
        prefix="$"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'This field is required']">
      </q-input>

      <div>
        <q-btn
        label="Submit"
        type="submit"
        color="primary" />
      </div>
    </q-form>
    </div>
  </div>
</transition>
</template>

<script>
import mixinAddEditInvoice from 'src/mixins/mixin-add-edit-invoice';
import { mapGetters } from 'vuex';

export default {
  mixins: [mixinAddEditInvoice],
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      number: 'null',
    };
  },
  computed: {
    ...mapGetters('userProfile', ['userProfile']),
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'black',
          textColor: 'primary',
          position: 'bottom-right',
          icon: 'warning',
          message: 'Agree to be contacted by Built?',
        });
      } else {
        this.$q.notify({
          color: 'white',
          textColor: 'black',
          position: 'bottom-right',
          icon: 'cloud_done',
          iconColor: 'white',
          message: 'Your request has been submitted',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  // .form-div {
  //   margin: auto;
  //   width: 75%;
  //   border: 1px solid $black;
  //   border-radius: 5px;
  // }
</style>
