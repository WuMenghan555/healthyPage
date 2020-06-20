<template>
  <div class="tab" style="background:#fff !important">
     <router-link v-for="(item,index) in linkTab" :key="index" :to="item.link">
      <van-tabs color="#a778de">
        <van-tab :title="item.title">
      </van-tab>
    </van-tabs>
   </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ['健康头条', '健康服务', '健康档案', '健康计步', '健康积分', '健康商城', '健康管理'],
      current: 0,
      linkTab: [
        {
          title: '健康头条',
          link: '/healthyheadlines'
        },
        {
          title: '健康服务',
          link: '/healthyservices'
        }
      ]
    }
  }
};
</script>
<style scoped>
.tab {
  height: .5rem;
  display: flex;
  justify-content: space-around;
}
</style>
