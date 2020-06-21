<template>
  <div class="smo">
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="姓名" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="agend" name="性别" label="性别" placeholder="请输入性别" />
      <van-field v-model="age" name="年龄" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="code" name="身份证号" label="身份证号" placeholder="请输入身份证号" />
      <van-field v-model="hospital" name="就诊医院" label="就诊医院" placeholder="请输入就诊医院" />
      <van-field v-model="result" name="一次会诊结果" label="一次会诊结果" placeholder="请输入一次会诊结果" />
      <van-field v-model="symptom" name="现状" label="现状" placeholder="请输入现状" />
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
      agend: '',
      age: '',
      code: '',
      hospital: '',
      result: '',
      symptom: ''
    }
  },
  methods: {
    onSubmit(values) {
      Dialog.confirm({
        title: '提交成功',
        message: '请等待审核'
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