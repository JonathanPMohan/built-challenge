<template>
<transition
  appear
  enter-active-class="animated zoomIn delay-1s"
  leave-active-class="animated zoomOut delay-1s">
  <div class="q-pa-md" style="full-width">
<div class="form-div q-pa-md q-ma-sm q-mt-xs">
  <modal-loan-header>Request A Loan</modal-loan-header>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
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

      <q-input
      v-model="text"
      outlined
      style="max-height: 100px"
      type="textarea"
      hint="Message"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'This field is required']"
    />

    <q-toggle v-model="accept" label="I agree to be contacted by Built Technologies." />

      <div>
        <q-btn
        label="Submit"
        type="submit"
        color="primary" />

        <q-btn
        label="Reset"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </div>
</transition>
</template>

<script>
import mixinAddEditInvoice from 'src/mixins/mixin-add-edit-invoice';

export default {
  mixins: [mixinAddEditInvoice],
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      text: '',
      number: 'null',
      accept: false,
    };
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
        this.onReset();
      }
    },
    onReset() {
      this.name = null;
      this.email = null;
      this.tel = null;
      this.text = null;
      this.number = null;
      this.accept = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .form-div {
    margin: auto;
    width: 75%;
    border: 1px solid $black;
    border-radius: 5px;
  }
</style>
