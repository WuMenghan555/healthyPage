<template>
  <div class="lecture">
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell title="黄帝内经" is-link size="large" value="点击播放" @click="music()"/>
        <van-cell title="黄帝内经" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="黄帝内经" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="黄帝内经" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="黄帝内经" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
        <van-cell title="催眠音乐" is-link size="large" value="点击播放"  @click="music()"/>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    methods: {
        music(){
            Toast.success('播放成功')
        }
    }
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>