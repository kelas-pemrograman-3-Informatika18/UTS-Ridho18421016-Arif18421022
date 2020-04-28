
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/read', component: () => import('pages/Reading.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/data', name: 'data', component: () => import('pages/Data_Berita.vue') },
      { path: '/input', component: () => import('pages/Input_Berita.vue') }
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
