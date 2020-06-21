<template>
    <div class="healthy-points">
        <div class="header">
            <p class="points">可用积分</p>
            <p class="number">290</p>
        </div>
        <div class="list">
            <div class="title">赚健康积分</div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round block @click="todoTask()">去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round block @click="todoTask()">去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round block @click="todoTask()">去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round block @click="todoTask()">去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round block>去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
            <div class="task-list">
                <img src="../../../assets/task.jpg" alt="">
                <div class="detail">
                    <div class="titles">完善个人健康档案</div>
                    <div class="point">+50</div>
                </div>
                <div class="btn">
                    <van-button type="info" round @click="todoTask()">去做任务</van-button>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    todoTask () {
      this.$router.push({path: '/healthrecord'})
    }
  }
}
</script>
<style scoped>
.healthy-points {
    background-color: #ddd;
    font-size: .16rem;
}
.header {
    width: 100%;
    height: 1rem;
    text-align: center;
    padding-top: .5rem;
    background: linear-gradient(blue, pink);
}
.header .points {
    font-size: .16rem;
    color: #c4c4c4;
}
.header .number {
    font-size: .5rem;
    font-weight: 600;
    color: #fff;
}
.list {
    width: 100%;
    background-color: #fff;
    margin-top: .1rem;
    font-size: .16rem;
}
.list .title {
    margin: .1rem;
    padding-top: .1rem;
    font-size: .20rem;
}
.task-list {
    width: 100%;
    height: .5rem;
    background-color: #fff;
    margin-top: .05rem;
    margin-bottom: .4rem;
}
.line {
    width: 100%;
    height: .01rem;
    background-color: #ccc;
    margin-top: .65rem;
}
.task-list img {
    float: left;
    width: 20%;
}
.task-list {
    float: left;
}
.detail {
    float: left;
    margin-left: .1rem;
    margin-top: .1rem;
}
.detail .titles {
    font-size: .2rem;
}
.detail .point {
    color: #e9b923;
    margin-top: .05rem;
    font-size: .18rem;
}
.btn {
    float: right;
    margin-top: .1rem;
    margin-right: .1rem;
}
.van-button {
    height: .3rem;
}
</style>