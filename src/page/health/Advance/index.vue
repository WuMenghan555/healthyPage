<template>
  <div class="advance">
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="姓名" label="姓名" placeholder="请输入姓名" />
      <van-field v-model="agend" name="性别" label="性别" placeholder="请输入性别" />
      <van-field v-model="age" name="年龄" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="code" name="身份证号" label="身份证号" placeholder="请输入身份证号" />
      <van-field v-model="hospital" name="就诊医院" label="就诊医院" placeholder="请输入就诊医院" />
      <van-field v-model="department" name="就诊科室" label="就诊科室" placeholder="请输入就诊科室" />
      <van-field v-model="disease" name="病名" label="病名" placeholder="请输入病名" />
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
      department: '',
      disease: ''
    }
  },
  methods: {
    onSubmit(values) {
      Dialog.confirm({
        title: '提交成功',
        message: '请携带病人身份原件及复印件到医院办理'
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