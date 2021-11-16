import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const serverManagment: Array<RouteRecordRaw> = [
  {
    path: '/server',
    name: 'Server',
    component: Layout,
    redirect: '/server/management',
    meta: {
      title: '服务治理中心'
    },
    children: [
      {
        path: '/management',
        component: () => import(/** */ '@/views/_blank.vue'),
        redirect: '/server/management/search',
        name: 'Management',
        meta: {
          title: '服务管理'
        },
        children: [
          {
            path: 'search',
            component: () =>
              import(
                /* webpackChunkName: "serverManagement" */ '@/views/serverManagement/management/index.vue'
              ),
            name: 'Search',
            meta: {
              title: '服务查询',
              noCache: true
            }
          },
          {
            path: 'test',
            component: () =>
              import(
                /* webpackChunkName: "serverManagement" */ '@/views/serverManagement/management/test.vue'
              ),
            name: 'Test',
            meta: {
              title: '服务测试',
              noCache: true
            }
          }
        ]
      }
    ]
  }
]

export default serverManagment
