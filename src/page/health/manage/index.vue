<template>
  <div class="manage">
    <p class="title">健康管理</p>
    <div class="manage_wrapper">
      <ul class="manage_group">
        <li class="group_items" v-for="(item,index) in manageList" :key="index">
          <img class="items_img" :src="item.img_src" />
          <p class="text">{{item.item_text}}</p>
        </li>
      </ul>

      <!-- 体检/活动 -->
      <div class="examine_activity">
        <ul class="group">
          <li class="group_items">
            <p class="item_text">
              <span class="title">体检服务</span>
              <span class="info">掌上体检便捷预约</span>
            </p>
            <img src="../../../assets/examine.png" class="examine_img" />
          </li>
          <li class="group_items">
            <p class="item_text">
              <span class="title">健康讲座及活动</span>
              <span class="info">精彩活动享不停</span>
            </p>
            <img src="../../../assets/examine.png" class="examine_img" />
          </li>
          <li class="group_items">
            <p class="item_text">
              <span class="title">就医绿色通道</span>
              <span class="info">绿色通道</span>
            </p>
            <img src="../../../assets/examine.png" class="examine_img" />
          </li>
          <li class="group_items">
            <p class="item_text">
              <span class="title">海外转诊绿色通道</span>
              <span class="info">绿色通道</span>
            </p>
            <img src="../../../assets/examine.png" class="examine_img" />
          </li>
        </ul>
      </div>

      <!-- 治疗 -->
      <div class="therapeutic">
        <ul class="therapeutic_group">
          <li class="smo group_item">
            <span>SMO二次会诊</span>
          </li>
          <li class="mdt group_item">
            <span>MDT多学科会诊</span>
          </li>
          <li class="group_item">
            <span>肿瘤质子治疗评估</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      manageList: [
        { img_src: require('@/assets/yy.jpg'), item_text: '住院垫付' },
        { img_src: require('@/assets/yy.jpg'), item_text: '电话医生' },
        { img_src: require('@/assets/yy.jpg'), item_text: '基因检测' },
        { img_src: require('@/assets/yy.jpg'), item_text: '肿瘤筛查' },
        { img_src: require('@/assets/yy.jpg'), item_text: '报告解读' },
        { img_src: require('@/assets/yy.jpg'), item_text: '慢病送药' }
      ]
    }
  }
}
</script>
<style scoped>
.manage {
  margin: 0.1rem 0 0 0.15rem;
}
.manage .title {
  font-size: 0.14rem;
  margin-bottom: 0.1rem;
}
.manage .manage_wrapper {
  width: 100%;
}
.manage .manage_wrapper .manage_group {
  display: flex;
  flex-wrap: wrap;
}
.manage .manage_wrapper .manage_group .group_items {
  flex: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.15rem;
  height: 1.35rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
}
.manage .manage_wrapper .manage_group .group_items .items_img {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 0.05rem;
}
.manage .manage_wrapper .manage_group .group_items .text {
  font-size: 0.12rem;
}
.manage .manage_wrapper .examine_activity {
  margin-top: 0.1rem;
}
.manage .manage_wrapper .examine_activity .group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.manage .manage_wrapper .examine_activity .group .group_items {
  flex: 44%;
  display: flex;
  background-color: #eee;
  margin-right: 0.1rem;
  height: 0.7rem;
  align-items: center;
  padding-left: 0.1rem;
  margin-bottom: 0.1rem;
}
.manage .manage_wrapper .examine_activity .group .item_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.manage
  .manage_wrapper
  .examine_activity
  .group
  .group_items
  .item_text
  .title {
  font-size: 0.13rem;
  margin-bottom: 0.04rem;
}
.manage .manage_wrapper .examine_activity .group .group_items .item_text .info {
  font-size: 0.11rem;
}
.manage .manage_wrapper .examine_activity .group .group_items .examine_img {
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin-left: 0.1rem;
}
.manage .manage_wrapper .therapeutic {
    margin-top: .1rem;
}
.manage .manage_wrapper .therapeutic .therapeutic_group {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.manage .manage_wrapper .therapeutic .therapeutic_group .group_item {
  flex: 45%;
  font-size: 0.18rem;
  color: #fff;
  font-weight: 600;
  height: 0.8rem;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  text-align: right;
  border-radius: 0.05rem;
}
.manage .manage_wrapper .therapeutic .therapeutic_group .group_item span {
  margin-right: 0.1rem;
}
.manage
  .manage_wrapper
  .therapeutic
  .therapeutic_group
  .group_item:first-child {
  margin-right: 0.1rem;
  background-image: linear-gradient(to right, #efe3d3, #dfc39b);
}
.manage
  .manage_wrapper
  .therapeutic
  .therapeutic_group
  .group_item:nth-child(2) {
  background-image: linear-gradient(to right, #ecc783, #efc78c);
}
.manage
  .manage_wrapper
  .therapeutic
  .therapeutic_group
  .group_item:nth-child(3) {
  background-image: linear-gradient(to right, #edb5bb, #efbbbd);
}
</style>