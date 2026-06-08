import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ThreadView from '../views/ThreadView.vue'
import UploadView from '../views/UploadView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/thread/:id',
    component: ThreadView
  }
  /** ,
  {
    path: '/upload',
    component: UploadView
  }*/
]

export default createRouter({
  history: createWebHistory(),
  routes
})