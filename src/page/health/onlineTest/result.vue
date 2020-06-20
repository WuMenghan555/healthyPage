<template>
  <div class="result-content">
    <p class="result-title">睡眠质量达标</p>
    <p class="result-detail">目前睡眠质量尚可，好的睡眠可以缓解疲劳、精力充沛、思维明捷......建议继续保持良好的睡眠习惯</p>
    <van-button color="#a778de" block @click="testAgain()">再测一次</van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    testAgain () {
      this.$router.replace({path: '/onlinetest'})
    }
  }
}
</script>
<style>
.result-content .result-title {
  font-size: 0.26rem;
  line-height: 0.5rem;
  margin: 0.4rem 0 0.1rem 0;
  text-align: center;
}
.result-content .result-detail {
  font-size: 0.16rem;
  margin: 0 0.4rem;
}
.result-content .van-button {
  width: 3rem;
  height: 0.5rem;
  color: #fff;
  border-radius: 0.1rem;
  margin: 2rem auto 0 auto;
}
</style>