<template>
  <div class="healthy_headline">
    <div class="header" @click="toDetail()">
      <img src="../../../assets/headLine.jpg" alt />
    </div>
    <div class="content-list">
      <div class="list-item">
        <div class="text">
          <p class="title">疫情防控 健康防护</p>
          <p class="detail">
            <span>永城健康</span>
            <span>11评论</span>
            <span>1天前</span>
          </p>
        </div>
        <div class="imgs">
          <img src="../../../assets/list.jpg" alt />
        </div>
      </div>
      <div class="list-item">
        <div class="text">
          <p class="title">疫情防控 健康防护</p>
          <p class="detail">
            <span>永城健康</span>
            <span>11评论</span>
            <span>1天前</span>
          </p>
        </div>
        <div class="imgs">
          <img src="../../../assets/list.jpg" alt />
        </div>
      </div>
      <div class="list-item">
        <div class="text">
          <p class="title">疫情防控 健康防护</p>
          <p class="detail">
            <span>永城健康</span>
            <span>11评论</span>
            <span>1天前</span>
          </p>
        </div>
        <div class="imgs">
          <img src="../../../assets/list.jpg" alt />
        </div>
      </div>
      <div class="list-item">
        <div class="text">
          <p class="title">疫情防控 健康防护</p>
          <p class="detail">
            <span>永城健康</span>
            <span>11评论</span>
            <span>1天前</span>
          </p>
        </div>
        <div class="imgs">
          <img src="../../../assets/list.jpg" alt />
        </div>
      </div>
      <div class="list-item">
        <div class="text">
          <p class="title">疫情防控 健康防护</p>
          <p class="detail">
            <span>永城健康</span>
            <span>11评论</span>
            <span>1天前</span>
          </p>
        </div>
        <div class="imgs">
          <img src="../../../assets/list.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toDetail () {
      this.$router.replace({ path: '/headlinedetail' })
    }
  }
};
</script>
<style scoped>
h3 {
  margin: 0;
}
.healthy_headline {
  padding: 0.1rem;
}
.header {
  height: 2rem;
  width: 100%;
}
.header img {
  width: 100%;
  height: 100%;
  border-radius: 0.08rem;
}
.content-list {
  width: 100%;
}
.content-list .list-item {
  width: 100%;
  height: 1rem;
  margin: 0.05rem 0;
  border-radius: 0.08rem;
  font-size: 0.16rem;
  border-radius: 0.08rem;
  overflow: hidden;
  box-shadow: 0 0 0.2rem 0 #ddd;
}
.content-list .list-item .text {
  float: left;
  width: 70%;
}
.content-list .list-item .text .title {
  letter-spacing: 0.03rem;
  font-weight: 600;
  margin: 0.1rem 0 0.3rem 0.08rem;
}
.content-list .list-item .text .detail {
  font-size: 0.12rem;
  color: #c4c4c4;
  margin-left: 0.08rem;
}
.content-list .list-item .text .detail span {
  margin-right: 0.1rem;
}
.content-list .list-item .imgs {
  float: left;
  width: 30%;
  height: 1rem;
}
.content-list .list-item .imgs img {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>