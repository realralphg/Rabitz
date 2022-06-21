
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/hero', component: () => import('pages/Hero.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/services', component: () => import('pages/Services.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/industries', component: () => import('pages/Industries.vue') },
      { path: '/events', component: () => import('pages/Events.vue') },
      { path: '/read', component: () => import('src/pages/More.vue') },








    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
