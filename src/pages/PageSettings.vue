<template>
  <q-page padding>
      <q-list
        bordered
        padding
        class="q-mb-md"
        >
      <q-item-label
      class="bg-grey-4 q-ma-sm"
      header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Display 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
          v-model="display12HourTimeFormat"
          color="grey" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Display Invoices In One List</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
          v-model="displayInvoicesInOneList"
          color="grey" />
        </q-item-section>
      </q-item>

    </q-list>
<q-list bordered padding>

      <q-item-label
      class="bg-grey-4 q-ma-sm"
      header
      >More</q-item-label>

      <q-item
      to="/settings/help"
      tag="label"
      v-ripple>
        <q-item-section>
          <q-item-label>FAQ</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
      @click="visitOurWebsite"
      tag="label"
      v-ripple>
        <q-item-section>
          <q-item-label>Visit Us On The Web</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
      @click="emailUs"
      tag="label"
      v-ripple>
        <q-item-section>
          <q-item-label>Email Us</q-item-label>
        </q-item-section>
        <q-item-section side >
         <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { openURL } from 'quasar';

export default {
  computed: {
    ...mapGetters('settings', ['settings']),
    display12HourTimeFormat: {
      get() {
        return this.settings.display12HourTimeFormat;
      },
      set(value) {
        this.setDisplay12HourTimeFormat(value);
      },
    },
    displayInvoicesInOneList: {
      get() {
        return this.settings.displayInvoicesInOneList;
      },
      set(value) {
        this.setDisplayInvoicesInOneList(value);
      },
    },
  },
  methods: {
    ...mapActions('settings', ['setDisplay12HourTimeFormat', 'setDisplayInvoicesInOneList']),
    visitOurWebsite() {
      openURL('http://www.getbuilt.com');
    },
    emailUs() {
      window.location.href = 'mailto:hello@getbuilt.com?subject=Question For Built';
    },
  },
};
</script>

<style lang="scss" scoped>
  .settings-header {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
  }
</style>
