import { h, resolveComponent } from 'vue'

const routes = [
  {
    path: '',
    component: () => import('layouts/theme.vue'),
    children: [
      { path: '', name: 'enHomeShow', component: () => import('../pages/home/show.vue') }
    ]
  },
  {
    path: '/:lang',
    component: {
      render () {
        return h(resolveComponent('router-view'))
      }
    },
    children: [
      {
        path: '',
        component: () => import('layouts/theme.vue'),
        children: [
          { path: '', name: 'homeShow', component: () => import('../pages/home/show.vue') }
        ]
      },
      {
        path: 'health',
        component: () => import('layouts/health.vue'),
        children: [
          { path: '', name: 'healthShow', component: () => import('../pages/health/show.vue') }
        ]
      },
      {
        path: 'privacy',
        component: () => import('layouts/theme.vue'),
        children: [
          { path: '', name: 'privacyShow', component: () => import('../pages/legal/privacy/show.vue') }
        ]
      },
      {
        path: 'terms',
        component: () => import('layouts/theme.vue'),
        children: [
          { path: '', name: 'termsShow', component: () => import('../pages/legal/terms/show.vue') }
        ]
      },
      {
        path: 'cookies',
        component: () => import('layouts/theme.vue'),
        children: [
          { path: '', name: 'cookiesShow', component: () => import('../pages/legal/cookies/show.vue') }
        ]
      },
      {
        path: 'about',
        component: () => import('layouts/theme.vue'),
        children: [
          { path: '', name: 'aboutShow', component: () => import('../pages/company/about/show.vue') }
        ]
      }
    ]
  }
]

export default routes
