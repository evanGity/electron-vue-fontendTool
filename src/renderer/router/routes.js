let routes = [
  {
    path: '/',
    name: 'home',
    // component: require('@/views/LandingPage').default
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '首页',
      icon: 'el-icon-house'
    }
  }, {
    path: '/taskList',
    name: 'taskList',
    // component: require('@/views/LandingPage').default
    component: () => import('@/views/taskList/index.vue'),
    meta: {
      title: '待办任务',
      icon: 'el-icon-house'
    }
  }, {
    path: '/str2json',
    name: 'str2json',
    // component: require('@/views/LandingPage').default
    component: () => import('@/views/toJson/index.vue'),
    meta: {
      title: '格式化JSON数据',
      icon: 'el-icon-house'
    }
  }
]

export default routes
