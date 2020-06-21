<template>
  <div class="container">
    <ul class="goods_group">
      <li class="group_item" v-for="(item,index) in goodsList" :key="index">
        <img :src="item.goods_img" class="goods_img" />
        <div class="goods_text">
          <p class="goods_name">{{item.goods_name}}</p>
          <p class="goods_price">{{item.goods_price}}</p>
        </div>
        <div style="margin: .16rem;">
          <van-button round block type="info" @click="onSubmit()" color="red">预约送药</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      goodsList: [
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        },
        {
          goods_img: require('@/assets/toothpaste.jpg'),
          goods_name: '云南白药牙膏',
          goods_price: '￥21.50'
        }
      ]
    }
  },
  methods: {
    onSubmit(valus) {
      Toast.success('请求成功')
    }
  }
}
</script>
<style scoped>
.container {
  background-color: #eee;
}
.container .goods_group {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.05rem;
  margin-right: 0.05rem;
}
.container .goods_group .group_item {
  flex: 45%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 0.05rem;
}
.container .goods_group .group_item:nth-child(odd) {
  margin-right: 0.05rem;
}
.container .goods_group .group_item .goods_img {
  width: 1.7rem;
  height: 1.7rem;
}
.container .goods_group .group_item .goods_text {
  margin-left: 0.1rem;
}
.container .goods_group .group_item .goods_text .goods_name {
  font-size: 0.14rem;
  margin-bottom: 0.1rem;
}
.container .goods_group .group_item .goods_text .goods_price {
  font-size: 0.12rem;
  color: red;
}
</style>