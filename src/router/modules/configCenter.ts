import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const configCenter: Array<RouteRecordRaw> = [
  {
    path: '/configCenter',
    component: Layout,
    name: 'configCenter',
    redirect: '/configCenter/projectItem',
    meta: {
      title: '配置中心'
      // icon: 'icon-xitongpeizhi'
    },
    children: [
      {
        path: 'projectItem',
        component: () =>
          import(/* webpackChunkName: "projectItem" */ '@/views/configCenter/index.vue'),
        name: 'ProjectItem',
        meta: {
          title: '项目列表',
          noCache: true
        }
      },
      {
        path: 'detail',
        component: () =>
          import(/* webpackChunkName: "ProjectDetail" */ '@/views/configCenter/detail.vue'),
        name: 'ProjectDetail',
        meta: {
          title: '项目详情',
          noCache: true
        }
      }
    ]
  }
]

export default configCenter
