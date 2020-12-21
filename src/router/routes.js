const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageA.vue'),
      },
      {
        path: '/pageB',
        component: () => import('pages/PageB.vue'),
      },
      {
        path: '/loanRequest',
        component: () => import('pages/Request.vue'),
      },
      {
        path: '/messages',
        component: () => import('pages/Messages.vue'),
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue'),
      },
      {
        path: '/settings/help',
        component: () => import('pages/PageHelp.vue'),
      },
      {
        path: '/about',
        component: () => import('pages/About.vue'),
      },
      {
        path: '/auth',
        component: () => import('pages/PageAuth.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
