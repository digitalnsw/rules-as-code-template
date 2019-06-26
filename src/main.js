import Vue from 'vue'
import App from './App'
import router from './routes/index'

new Vue({
	el: '#app',
	router,
	render: h => h(App),
})
