≠≠<template>
  <q-layout view="hHh LpR fFf">
    <!-- Header Element -->
    <q-header elevated>
      <q-toolbar>
        <img class="built-logo" src="~assets/built.png"/>
        <q-toolbar-title class="fixed-right q-mt-sm q-mr-sm">
          Payment App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
<!-- Footer Element -->
     <q-footer>
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

export default {
  name: 'Layout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Page A',
          icon: 'list',
          to: '/',
        },
        {
          label: 'Page B',
          icon: 'list',
          to: '/pageB',
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

  .built-logo {
    width: 25%;
    padding: 1%;
  }
</style>
