
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PerAn.vue'), exact: true },
      { path: '/profile', component: () => import('pages/Profile.vue'), exact: true },
      { path: '/diffan', component: () => import('pages/DiffAn.vue'), exact: true },
      { path: '/settings', component: () => import('pages/Settings.vue'), exact: true },
      { path: '/opportunity', component: () => import('pages/Opportunities.vue'), exact: true }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
