<template>
  <div class="services">
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>bannner1</van-swipe-item>
        <van-swipe-item>bannner2</van-swipe-item>
        <van-swipe-item>bannner3</van-swipe-item>
      </van-swipe>
    </div>
    <div class="tab">
      <div class="tab-item" v-for="(item, indexs) in title" :key="indexs">
        <div :class="{active:cur==indexs}" @click="cur=indexs" style="height:100%">
          <van-icon name="star-o" size=".4rem" />
          <p>{{item}}</p>
        </div>
      </div>
    </div>
    <div class="content" v-for="(item,index) in content" :key="index" >
      <div class="images">
        <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" width="100" height="100" />
      </div>
      <div class="detail">
        <h3>
          {{item.title}}
          <van-button color="#a778de" class="test-btn" @click="startEvaluation()">开始测评</van-button>
        </h3>
        <p>{{item.detail}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ['健康评测', '在线问诊', '预约挂号'],
      cur: 0,
      content: [
        {
          title: '睡眠评估',
          detail: '睡眠好不好，够不够，让专家给你分析一下'
        },
        {
          title: '注意力测试',
          detail: '注意力测试又叫舒尔特方格，不但可以简单测量注意力水平还可以训练注意力'
        },
        {
          title: '睡眠评估',
          detail: '睡眠好不好，够不够，让专家给你分析一下'
        },
        {
          title: '注意力测试',
          detail: '注意力测试又叫舒尔特方格，不但可以简单测量注意力水平还可以训练注意力'
        },
        {
          title: '睡眠评估',
          detail: '睡眠好不好，够不够，让专家给你分析一下'
        },
        {
          title: '注意力测试',
          detail: '注意力测试又叫舒尔特方格，不但可以简单测量注意力水平还可以训练注意力'
        }
      ]
    }
  },
  methods: {
    startEvaluation () {
      this.$router.push({path: '/healthyservices/onlinetest'})
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.swiper {
  margin-top: 0.1rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: #a778de;
}
.my-grid .van-grid-item {
  border-radius: 50%;
}
.tab {
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
}
.tab .tab-item {
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.14rem;
  margin: auto;
  border-radius: 0.08rem;
  border: 0.01rem solid #a778de;
  color: #a778de;
}
.tab .tab-item .active {
  background-color: #e5a9b0;
  color: #fff;
}
.tab .tab-item .van-icon {
  text-align: center;
  transform: translateX(50%);
}
.tab .tab-item p {
  text-align: center;
  margin-top: 0.03rem;
}
.content {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: .02rem .02rem .02rem .02rem #ccc;
  margin: .05rem auto;
}
.content .images {
  width: 30%;
}
.content .detail {
  width: 70%;
  font-size: 0.14rem;
  line-height: 0.35rem;
}
.content .detail .test-btn {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  width: 1rem;
  height: 0.2rem;
  box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem #a778de;
}
</style>
