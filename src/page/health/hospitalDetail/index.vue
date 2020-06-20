<template>
  <div class="hospital">
    <div class="header">
      <div class="banner">
        <img src="../../../assets/hospital.jpg" alt />
      </div>
      <div class="content">
        <p class="title">江苏省人民医院</p>
        <p class="lever-number">
          <span class="levl">三级甲等</span>
          <span class="number">预约量6.0万</span>
        </p>
      </div>
    </div>
    <nav>
      <div class="nav-common">
        <div class="nav-items">
          <a href="#" @click="toSubmit()">预约挂号</a>
        </div>
        <div class="nav-items">
          <a href="#">科室医生</a>
          <a href="#">医院概况</a>
        </div>
      </div>
    </nav>
    <div style="margin-top:.1rem">
      <van-cell title="热门科室">
        <template #label>
          <van-tag round plain type="primary">心血管内科门诊</van-tag>
          <van-tag round plain type="primary">心血管内科门诊</van-tag>
          <van-tag round plain type="primary">心血管内科门诊</van-tag>
          <van-tag round plain type="primary">心血管内科门诊</van-tag>
          <van-tag round plain type="primary">心血管内科门诊</van-tag>
        </template>
      </van-cell>
    </div>
     <div style="margin-top:.1rem">
      <van-cell title="患者评价">
        <template #label>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
          <van-tag round plain type="primary">普外科（144）</van-tag>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        toSubmit() {
            this.$router.push({path:'/submit'})
        }
    }
}
</script>
<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  height: 1rem;
}
.banner {
  width: 100%;
  height: 1.56rem;
}
.content {
  background-color: #fff;
  height: 0.7rem;
}
.header .title {
  font-size: 0.2rem;
  font-weight: 600;
  margin-left: 0.1rem;
}
.lever-number {
  width: 100%;
  height: 0.2rem;
}
.header .levl {
  display: block;
  width: 1rem;
  border: 0.01rem solid #ee978f;
  border-radius: 0.1rem;
  font-size: 0.16rem;
  margin-left: 0.1rem;
  color: #ee978f;
  text-align: center;
  margin-top: 0.1rem;
}
.header .number {
  position: absolute;
  left: 1.3rem;
  top: 1.9rem;
  font-size: 0.14rem;
  margin-left: 0.1rem;
  color: #c4c4c4;
}
.nav-common {
  width: 100%;
  height: 2rem;
  display: flex;
  background-color: #fff;
  margin-top: 1.4rem;
}
.nav-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 0.05rem;
}
.nav-items:nth-child(0) {
  border-right: 0.01rem solid #ccc;
}
.nav-items a {
  flex: 1;
  text-align: center;
  margin: auto;
  line-height: 0.44rem;
  color: #000;
  font-size: 0.14rem;
  /* 文字阴影 */
  text-shadow: 0.01rem 0.01rem rgba(0, 0, 0, 0.2);
}
.van-tag {
    margin: .05rem .05rem;
}
</style>
