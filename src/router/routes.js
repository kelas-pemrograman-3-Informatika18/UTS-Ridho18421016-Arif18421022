
const routes = [
  {
<<<<<<< HEAD
    // layout_admin
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/admin/Home.vue') },
      { path: '/read', name: 'read', component: () => import('pages/admin/Reading.vue') },
      { path: '/cari', name: 'cari', component: () => import('pages/admin/cari.vue') }
=======
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/read', component: () => import('pages/Reading.vue') }
>>>>>>> d8f9bdcd8d9ecb754b639f553f49fa4c210371d8
    ]
  },

  {
<<<<<<< HEAD
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

=======
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
>>>>>>> d8f9bdcd8d9ecb754b639f553f49fa4c210371d8
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
