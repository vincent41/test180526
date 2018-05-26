import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/Rooms_v1/RoomsList'
import Detail from '../components/Rooms_v1/RoomDetail'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'list', component: List},
    {path: '/detail/:id', name: 'detail', component: Detail}
  ],
  mode: 'history'
})
