import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carts from '../views/Carts.vue'
import Jokes from '../views/Jokes.vue'
import DownLoad from '../views/DownLoad.vue'
import Detail from '../views/Detail.vue'


import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Center from '../views/Center.vue'
import Logout from '../views/Logout.vue'



import Baby from '@/components/Baby.vue'
import Coments from '@/components/Coments.vue'
Vue.use(VueRouter)

const routes = [
	
	
	
	
	
	{
	  path: '/login',
	  name: 'login',
	  component: Login,
	
	},
	{
	  path: '/regist',
	  name: 'regist',
	  component: Regist
	},
	{
	  path: '/center',
	  name: 'center',
	  component: Center
	},
	{
	  path: '/logout',
	  name: 'logout',
	  component: Logout
	},
	
	
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carts',
    name: 'carts',
    component: Carts,
	meta:{
		 auth:true
	}
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: Jokes,
	meta:{
		 auth:true
	}
  },
  {
    path: '/download',
    name: 'download',
    component: DownLoad
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
	children:[
		{
			path: 'baby',
			name: 'baby',
			component: Baby,
		},
		{
			path: 'coments',
			name: 'coments',
			component: Coments,
		},
	]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
    // path: '/jokes',
    // name: 'jokes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Jokes.vue')
  // }
]


const router = new VueRouter({
  routes
})
import store from '../store'
router.beforeEach((toRouter,fromRouter,next)=>{
	console.log(toRouter,fromRouter)
	if(toRouter.meta.auth)
	{
		if(store.getters.geystate)
		{
			next()
		}
		else{
			next('/login?red='+toRouter.path)
		}
	
	}
	else{
		next()
	}
	
})
export default router
