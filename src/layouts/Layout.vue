<template>
  <q-layout view="hHh LpR fFf">
    <!-- Header Element -->
    <q-header
    elevated>
      <q-toolbar
      class="bg-white">
        <a href="/">
        <img class="built-logo" src="~assets/built.png"/></a>
        <q-toolbar-title class="q-mt-sm q-mr-sm">
          <!-- Payment Station -->
        </q-toolbar-title>
        <q-space />
        <div class="q-pa-md q-gutter-sm">
    <q-btn
    dense
    color="black"
    flat
    size="15px"
    icon="email"
    class="q-mr-md"
    to="/messages">
      <q-badge color="primary" floating>{{ messageCount}}</q-badge>
    </q-btn>
  </div>
  <div>
    <q-btn
    color="black"
    dense
    flat
    size="15px"
    icon-right="account_circle"
    label="Login"
    class="q-mr-md"
    to="/auth" />
    </div>
      </q-toolbar>
    </q-header>
<!-- Footer Element -->
     <q-footer
     elevated
     class="bg-white text-black">
        <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :key="nav.label"
        :icon="nav.icon"
        :to="nav.to"
        :label="nav.label"
        />
      </q-tabs>
      </q-footer>

    <q-drawer
      :width="200"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list class="q-mt-sm">

        <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Layout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Pay',
          icon: 'payment',
          to: '/',
        },
        {
          label: 'Reminders',
          icon: 'list',
          to: '/reminders',
        },
        {
          label: 'Request',
          icon: 'request_quote',
          to: '/loanRequest',
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings',
        },
        {
          label: 'About',
          icon: 'info',
          to: '/about',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('invoices', ['messageCount']),
  },
};
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active {
    color: primary !important;
    }
  }

  .q-route-tab {
    .exact-active-class {
    color: primary !important;
    }
  }

  .built-logo {
    width: 75%;
    padding: 2%;
  }

  .navs {
    color: $black;
  }
</style>
