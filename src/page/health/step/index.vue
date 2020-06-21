<template>
  <div class="step">
    <div class="header">
      <div class="ka">
        <p>8089</p>
        <p style="font-size:.14rem;color:#c4c4c4;">今日能量消耗（千卡）</p>
      </div>
      <div class="steps">
        <p>240</p>
        <p style="font-size:.14rem;color:#c4c4c4;">步数</p>
      </div>
      <div class="minit">
        <p>--</p>
        <p style="font-size:.14rem;color:#c4c4c4;">分钟</p>
      </div>
      <div class="km">
        <p>0.1</p>
        <p style="font-size:.14rem;color:#c4c4c4;">公里</p>
      </div>
    </div>
    <div class="card">
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.step {
  width: 100%;
  height: 2.5rem;
}
.step .header {
  width: 100%;
  height: 1rem;
}
.step div {
  float: left;
  width: 20%;
  height: 100%;
  font-size: 0.16rem;
}
.step div p {
  margin: 0.1rem 0.1rem;
}
.step div p:nth-child(1) {
  font-weight: 600;
}
.step .ka {
  width: 40%;
}
.card {
  width: 100%;
  height: 1rem;
}
.card ul li {
    list-style: none;
    float: right;
    background-color: pink;
    width: .4rem;
    height: .4rem;
}
.card div {
  width: .4rem;
  height: 100%;
  font-size: 0.16rem;
  background-color: #ff0;
}
</style>