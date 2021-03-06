import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Items from '../views/Items.vue';
import CreateItem from '../views/CreateItem.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/items',
    name: 'Todo List',
    component: Items,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/create-item',
    name: 'create-item',
    component: CreateItem,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
