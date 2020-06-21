<template>
    <div class="phone-doctor">
        <div class="headers">
            <img src="../../../assets/doctors.jpg" alt="">
        </div>
        <div class="btn">
            <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large" @click="Buy()">立即购买</van-button>
        </div>
    </div>
</template>
<script>
import {Toast} from 'vant'
export default {
    methods: {
        Buy () {
            Toast.success('购买成功')
        }
    }
}
</script>
<style scoped>
.phone-doctor {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
}
.headers {
    width: 100%;
}
img {
    width: 100%;
}
.btn {
    margin: 0 .2rem;
    margin-top: 1rem;
}
.van-button {
    border-radius: .8rem;
}
</style>