<template>
    <div class="examination">
        <div class="list" @click="toDetail()">
            <div class="left">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
            <div class="right">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
        </div>
         <div class="list" @click="toDetail()">
            <div class="left">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
            <div class="right">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
        </div> <div class="list" @click="toDetail()">
            <div class="left">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
            <div class="right">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
        </div> <div class="list" @click="toDetail()">
            <div class="left">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
            <div class="right">
                <img src="../../../assets/setmeal.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toDetail(){
            this.$router.push({path: '/buydetail'})
        }
    }
}
</script>
<style scoped>
.list {
    width: 100%;
    height: 100%;
}
.left {
    float: left;
    width: 50%;
    height: 3rem;
}
.right {
    float: left;
    width: 50%;
    height: 3rem;
}
img {
    width: 100%;
    height: 100%;
}
</style>