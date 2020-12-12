≠≠<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header Element -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Built Challenge App
        </q-toolbar-title>

        <div>2020 {{ appTitle }}</div>
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
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

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
      appTitle: 'JMohan',
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
</style>
