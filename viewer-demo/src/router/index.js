import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Forge/home.vue'
import Oauth from '../views/Forge/oauth.vue'
import CreateBucket from '../views/Forge/bucket.vue'
import BucketDetails from '../views/Forge/bucketDetails.vue'
import Upload from '../views/Forge/upload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/forge/oauth',
    name: 'Oauth',
    component: Oauth
  },
  {
    path: '/api/forge/datamanagement/bucket/create',
    name: 'CreateBucket',
    component: CreateBucket
  },
  {
    path: '/api/forge/datamanagement/bucket/detail',
    name: 'BucketDetails',
    component: BucketDetails
  },
  {
    path: '/api/forge/datamanagement/bucket/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/',
    redirect: '/home'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
