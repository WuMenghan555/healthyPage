<template>
  <div class="appoinment-list">
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="content" v-for="(item,index) in list" :key="index" @click="toDetail()">
      <div class="images">
        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" width="100" height="100" />
      </div>
      <div class="detail">
        <h3>{{item.title}}</h3>
        <p class="number">{{item.detail}}</p>
        <p class="levler">[三级甲等]</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      option: [
        { text: '南京', value: 0 },
        { text: '江苏', value: 1 },
        { text: '无锡', value: 2 }
      ],
      list: [
        {
          title: '江苏省人民医院',
          detail: '预约量6.0万'
        },
        {
          title: '南京市儿童医院',
          detail: '预约量6.0万'
        },
        {
          title: '鼓楼医院',
          detail: '预约量6.0万'
        },
        {
          title: '江苏省人民医院',
          detail: '预约量6.0万'
        },
        {
          title: '南京市儿童医院',
          detail: '预约量6.0万'
        },
        {
          title: '鼓楼医院',
          detail: '预约量6.0万'
        }
      ]
    }
  },
  methods: {
    toDetail() {
      this.$router.push({ path: 'hostpitalDetail' })
    },
    onSearch() {}
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.content {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: 0.02rem 0.02rem 0.02rem 0.02rem #ccc;
  margin: 0.05rem auto;
}
.content .images {
  width: 30%;
}
.content .detail {
  width: 70%;
  font-size: 0.14rem;
}
.content .number {
  color: #4c4c4c;
}
.content .levler {
  color: #e7a358;
}
</style>
