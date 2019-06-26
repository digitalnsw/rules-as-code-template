import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
import contact from '../components/Contact.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
		{ path: '/', name: 'home', component: home },
		{ path: '/contact/', name: 'contact', component: contact }
	]
})
