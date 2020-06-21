import Vue from 'vue'
import Router from 'vue-router'
// import healthy from '@/page/health/healthyInfo/index'
import healthyHeadlines from '@/page/health/healthyHeadlines/index.vue'
import healthyServices from '@/page/health/healthServices/index.vue'
import onlineTest from '@/page/health/onlineTest/index.vue'
import result from '@/page/health/onlineTest/result.vue'
import onlineConsultation from '@/page/health/onlineConsultation/index.vue'
import appointment from '@/page/health/appointment/index.vue'
import hostpitalDetail from '@/page/health/hospitalDetail/index.vue'
import submit from '@/page/health/submit/index.vue'
import step from '@/page/health/step/index.vue'
import heathyHeadlines from '@/page/health/healthyHeadlines/index.vue'
import headLineDetail from '@/page/health/headLineDetail/index.vue'
import Manage from '@/page/health/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/healthyheadlines'
    // },
    {
      path: '/healthyheadlines',
      name: 'Healthyheadlines',
      component: healthyHeadlines
    },
    {
      path: '/healthyservices',
      name: 'healthyservices',
      component: healthyServices
    },
    { path: '/onlinetest', name: 'onlinetest', component: onlineTest },
    { path: '/result', name: 'result', component: result },
    { path: '/onlineconsultation', name: 'onlineConsultation', component: onlineConsultation },
    { path: '/appointment', name: 'appointment', component: appointment },
    { path: '/hostpitaldetail', name: 'hostpitaldetail', component: hostpitalDetail },
    { path: '/submit', name: 'submit', component: submit },
    { path: '/step', name: 'step', component: step },
    { path: '/heathyheadlines', name: 'heathyHeadlines', component: heathyHeadlines },
    { path: '/headlinedetail', name: 'headLineDetail', component: headLineDetail },
    { path: '/manage', name: 'manage', component: Manage }
  ]
})
