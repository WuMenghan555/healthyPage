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
import headLineDetail from '@/page/health/headLineDetail/index.vue'
import healthRecord from '@/page/health/healthRecord/index.vue'
import selfdata from '@/page/health/selfData/index.vue'
import healthydata from '@/page/health/healthyData/index.vue'
import medicalreport from '@/page/health/medicalReport/index.vue'
import healthyPoints from '@/page/health/healthyPoints/index.vue'
import toexamination from '@/page/health/healthyMall/toexamination.vue'
import buyDetail from '@/page/health/healthyMall/buyDetail.vue'
import healthyequipment from '@/page/health/healthyMall/healthyequipment.vue'
import equipmentdetail from '@/page/health/healthyMall/equipmentDetail.vue'
import Manage from '@/page/health/manage/index'
import phoneDoctor from '@/page/health/phoneDoctor/index.vue'
import Advance from '@/page/health/Advance/index.vue'
import geneticTesting from '@/page/health/geneticTesting/index.vue'
import cancerScreening from '@/page/health/cancerScreening/index.vue'
import report from '@/page/health/report/index.vue'
import lecture from '@/page/health/lecture/index.vue'
import cancer from '@/page/health/cancerTest/index.vue'
import cancerResult from '@/page/health/cancerTest/result.vue'
import greenGround from '@/page/health/greenGround/index.vue'
import SMO from '@/page/health/SMO/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
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
    { path: '/headlinedetail', name: 'headLineDetail', component: headLineDetail },
    { path: '/healthrecord', name: 'healthRecord', component: healthRecord },
    { path: '/selfdata', name: 'selfdata', component: selfdata },
    { path: '/healthydata', name: 'healthydata', component: healthydata },
    { path: '/medicalreport', name: 'medicalreport', component: medicalreport },
    { path: '/healthypoints', name: 'healthyPoints', component: healthyPoints },
    { path: '/toexamination', name: 'toexamination', component: toexamination },
    { path: '/buydetail', name: 'buyDetail', component: buyDetail },
    { path: '/healthyequipment', name: 'healthyequipment', component: healthyequipment },
    { path: '/equipmentdetail', name: 'equipmentdetail', component: equipmentdetail },
    { path: '/manage', name: 'manage', component: Manage },
    { path: '/phonedoctor', name: 'phoneDoctor', component: phoneDoctor },
    { path: '/advance', name: 'Advance', component: Advance },
    { path: '/genetictesting', name: 'geneticTesting', component: geneticTesting },
    { path: '/cancerscreening', name: 'cancerScreening', component: cancerScreening },
    { path: '/report', name: 'report', component: report },
    { path: '/lecture', name: 'lecture', component: lecture },
    { path: '/cancer', name: 'cancer', component: cancer },
    { path: '/cancerresult', name: 'cancerResult', component: cancerResult },
    { path: '/greenground', name: 'greenGround', component: greenGround },
    { path: '/smo', name: 'SMO', component: SMO }
  ]
})