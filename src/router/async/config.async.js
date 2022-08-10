import routerMap from './router.map'
import routerMapReport from './router.report.map'
import {parseRoutes} from '@/utils/routerUtil'

// 异步路由配置
const routesConfig = [
  'login',
  'root',
  {
    router: 'exp404',
    path: '*',
    name: '404'
  },
  {
    router: 'exp403',
    path: '/403',
    name: '403'
  }
]


var routerMapTotal = Object.assign(routerMap,routerMapReport)

const options = {
  routes: parseRoutes(routesConfig, routerMapTotal)
}

export default options
