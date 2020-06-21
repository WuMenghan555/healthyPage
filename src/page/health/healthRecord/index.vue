<template>
  <div class="container">
    <div class="header">
      <div class="circle">
        <van-circle
          v-model="currentRate"
          :rate="60"
          :stroke-width="60"
          :text="text"
          :color="gradientColor"
        />
      </div>
    </div>
    <div class="list">
        <van-cell title="个人资料" is-link  to="/selfdata"/>
        <van-cell title="健康数据" is-link  to="/healthydata"/>
        <van-cell title="体检报告" is-link  to="medicalreport"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        "0%": "#ff9b4e",
        "100%": "#ffa107"
      }
    };
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%';
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 2.6rem;
  background-color: #642437;
}
.circle {
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%,60%);
  color: #fff;
}
</style>
