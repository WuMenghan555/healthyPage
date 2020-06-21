<template>
    <div class="buy-detail">
        <div class="images">
            <img src="../../../assets/equipment.jpg" alt="">
        </div>
        <div class="btn" style="z-index:9999">
            <van-submit-bar :price="21500" button-text="立即购买" @submit="onSubmit">
                <van-icon name="shopping-cart-o" size=".3rem"/>
            </van-submit-bar>
        </div>
    </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    methods: {
        onSubmit(){
            Toast.success('付款成功')
        }
    }
}
</script>
<style scoped>
    .buy-detail {
        widows: 100%;
        height: 100%;
    }
    .images {
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
    }
</style>