import Vue from 'vue'
import Router from 'vue-router'
import components from './components.js'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
      path: '/',
      name: 'Index',
      component: components.Index
    },
    {
      path: '/DispatchingList',
      name: 'Dispatchinglist',
      component: components.DispatchingList
    },
    {
      path: '/AdministrativeOffice',
      name: 'AdministrativeOffice',
      component: components.AdministrativeOffice
    }
  ]
})
