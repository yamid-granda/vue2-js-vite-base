import VueRouter from 'vue-router';
import Home from "../pages/home/index.vue";
import Counters from "../pages/counters/index.vue";

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/counters',
    component: Counters,
  },
];

const router = new VueRouter({ routes });

export default router;
