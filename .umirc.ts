import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        { exact: true, path: '/', redirect: '/home/0' },
        { exact: true, path: '/login', component: '@/pages/login' },
        { exact: true, path: '/register', component: '@/pages/register' },
        { exact: true, path: '/home/:id', component: '@/pages/home' },
        { exact: true, path: '/topic/:id', component: '@/pages/topicDetail' },
        { exact: true, path: '/member/:id', component: '@/pages/memberDetail'}
      ],
    },
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001/api/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
