<template>
  <div class="advance">
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="姓名" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="gender" name="性别" label="性别" placeholder="请输入性别" />
      <van-field v-model="age" name="年龄" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="code" name="身份证号" label="身份证号" placeholder="请输入身份证号" />
      <van-field v-model="number" name="电话号码" label="电话号码" placeholder="请输入电话号码" />
      <van-field v-model="hospital" name="医院" label="医院" placeholder="请输入医院名称" />
      <van-field v-model="project" name="检测项目" label="检测项目" placeholder="请输入检测项目" />
      <van-field v-model="date" name="日期" label="日期" placeholder="请输入日期" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#d99cb1">提交申请</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  data() {
    return {
      username: '',
      gender: '',
      age: '',
      code: '',
      number: '',
      hospital: '',
      project: '',
      date: ''
    }
  },
  methods: {
    onSubmit(values) {
      Dialog.confirm({
        title: '提交成功',
        message: '请在审核通过后前往医院进行样本采集'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>