<template>
  <div class="ground">
    <van-cell title="特需挂号" is-link to="/appointment" size="large" />
    <van-cell title="家庭医生" is-link to="/phonedoctor" size="large" />
    <van-cell title="在线问诊" is-link to="/onlineconsultation" size="large" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '2'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.radio {
    font-size: .16rem;
}
</style>