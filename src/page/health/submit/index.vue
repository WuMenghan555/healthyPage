<template>
  <div class="submit">
    <van-notice-bar mode="closeable">以下信息用于提供实名就医</van-notice-bar>
    <div class="number">
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号码" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="验证码" placeholder="请输入验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field v-model="text" label="姓名" placeholder="请输入姓名" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="身份证号" placeholder="请输入身份证号码" />
      <van-field v-model="text1" label="预约科室" placeholder="请输入预约科室" />
    </div>
    <div class="submit-btn">
      <van-button color="#6e9cea" size="large" @click="submit()">提交</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      tel: '',
      digit: '',
      text: '',
      text1: '',
      number: ''
    }
  },
  methods: {
    submit() {
      Toast.success('预约成功')
    }
  }
}
</script>
<style scoped>
body {
  background-color: #fff !important;
}
.submit-btn {
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>