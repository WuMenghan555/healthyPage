<template>
  <div class="examine_container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="性别"
        placeholder="请选择"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="calendar"
        :value="data"
        label="日历"
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirms" />
      <van-field v-model="type" name="证件类型" label="证件类型" placeholder="请输入证件类型" />
      <van-field v-model="number" name="证件号码" label="证件号码" placeholder="请输入证件号码" />
      <van-field v-model="height" name="身高" label="身高(cm)" placeholder="请输入身高" />
      <van-field v-model="weight" name="体重" label="体重(kg)" placeholder="请输入体重" />
      <van-field v-model="marriage" name="婚姻状况" label="婚姻状况" placeholder="请输入婚姻状况" />
      <van-field v-model="Medicare" name="医保类型" label="医保类型" placeholder="请输入医保类型" />
      <div style="margin: .16rem;">
        <van-button round block type="info" native-type="submit" color="#c145a2">预约体检</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      username: '张三',
      type: '身份证',
      number: '11111155555555',
      height: '188',
      weight: '98',
      marriage: '未婚',
      Medicare: '城市医保',
      value: '男',
      columns: ['男', '女'],
      showPicker: false,
      data: '6/22',
      showCalendar: false
    }
  },
  methods: {
    onConfirms(date) {
      this.data = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    },
    onSubmit(valus) {
      Toast.success('预约体检成功')
    }
  }
}
</script>
<style scoped>
</style>