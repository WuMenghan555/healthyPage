<template>
    <div class="online">
        <div class="content">
            <span>
                {{label}}
            </span>
        </div>
        <div class="image">
            <div class="left">
                <van-uploader :after-read="afterRead" />
            </div>
            <div class="rigth">
                <p>添加照片<span class="test">（非必填）</span></p>
                <p>症状部位、检查报告或其他材料</p>
            </div>
        </div>
        <div class="footer" @click="chooseBtn()">选择服务时长</div>
        <van-action-sheet v-model="show">
            <div class="choose-content">
                <div class="box1">24小时</div>
                <div class="box2">七天</div>
                <div class="box3">一个月</div>
                <div class="box4">三个月</div>
            </div>
            <div class="btn">
                <van-button block color="#a778de">立即开通</van-button>
            </div>
        </van-action-sheet>
    </div>
</template>
<script>
export default {
  data () {
    return {
      label: '请详细描述您的问题，包括身体状况，疾病和病症等，我们会为您分配最专业的医生，并且保证您的隐私安全（最少十个字）',
      show: false
    }
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    chooseBtn () {
      this.show = true
    }
  }
}
</script>
<style scoped>
body {
    background-color: #ccc;
}
.online {
    width: 100%;
    height: auto;
    color: #c4c4c4;
}
.online .content {
    width: 100%;
    height: 1.5rem;
    font-size: .14rem;
    background-color: #fff;
    padding-left: .05rem;
    padding-right: .02rem;
    border-radius: .08rem;
    margin-top: .4rem;
}
.online .content span {
    margin-top: .11rem;
}
.image {
    width: 100%;
    height: 1rem;
    font-size: .14rem;
    /* color: #000; */
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    background-color: #fff;
    margin: .1rem auto;
    padding-top: 0.1rem;
}
.rigth {
    line-height: .35rem;
    font-size: .16rem;
    color: #000;
}
.image .right .test {
    font-size: .14rem;
    color: #ccc!important;
}
.footer {
    position: absolute;
    bottom: 0;
    height: .6rem;
    width: 100%;
    font-size: .20rem;
    background-color: #a778de;
    text-align: center;
    color: #fff;
    line-height: .6rem;
}
.choose-content {
    display: flex;
    justify-content: left;
    flex-flow: row wrap;
    align-items: center;
}
.choose-content div {
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    border: .01rem solid #a778de;
    margin: .1rem;
    font-size: .20rem;
}
.btn {
    width: 3rem;
    height: .4rem;
    margin: 0 auto;
    background-color: #a778de;
    border-radius: .1rem;
}
</style>
