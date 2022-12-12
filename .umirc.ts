import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },

  routes: [
    {
      path: '/',
      redirect: '/home',
    },

    {
      name: '首页',
      path: '/home',
      component: './Home',
    },

    { name: '创建博客', path: '/posts/create', component: 'posts/create' },
    { path: '/login', component: 'login' },
    { path: '/posts/:postId', component: 'posts/post' },
  ],

  apiRoute: {
    platform: 'vercel',
  },

  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
