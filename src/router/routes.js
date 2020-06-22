
const routes = [
  {
    // layout_admin
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/admin/Home.vue') },
      { path: '/read', name: 'read', component: () => import('pages/admin/Reading.vue') },
      { path: '/cari', name: 'cari', component: () => import('pages/admin/cari.vue') }
    ]
  },

  {
    // layout_back
    path: '/login',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/admin/Login.vue') },
      { path: '/settingsuser', component: () => import('pages/user/Settings.vue') },
      { path: '/about', component: () => import('pages/user/About.vue') }
    ]
  },

  {
    // layout_back
    path: '/settings',
    component: () => import('layouts/Layout admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Settings.vue') },
      { path: '/about', component: () => import('pages/admin/About.vue') },
      { path: '/data', name: 'data', component: () => import('pages/admin/Data_Berita.vue') },
      { path: '/edit', name: 'formedit', component: () => import('pages/admin/Edit.vue') },
      { path: '/input', component: () => import('pages/admin/Input_Berita.vue') }
    ]
  },

  {
    // layout_user
    path: '/',
    component: () => import('layouts/Layoutuser.vue'),
    children: [
      { path: '', component: () => import('pages/user/Home.vue') },
      { path: '/readuser', name: 'readuser', component: () => import('pages/admin/Reading.vue') },
      { path: '/cariuser', name: 'cari', component: () => import('pages/user/cari.vue') }
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
