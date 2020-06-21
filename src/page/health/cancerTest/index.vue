<template>
  <div class="container">
    <div class="question-list">
      <div
        class="question-item"
        v-for="(item,index) in questionList"
        :key="index"
        :class="{'active':activeIndex == index}"
      >
        <p>{{`${item.title}(${index+1}/8)`}}</p>
        <div class="question" v-for="(qw,ind) in item.question" :key="'info-' + ind">
          {{qw}}
          <div style="width:100%;border:.005rem solid #ccc;margin-top:.2rem"></div>
        </div>
        <div class="select-list" v-for="(list,indx) in item.selectList" :key="'info+'+indx">
          <li @click="select(index)">{{list}}</li>
        </div>
        <div class="backbtn">
          <van-button color="#a778de" block v-if="index!=0" @click="back(index)">上一步</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questionList: [
        {
          title: "肿瘤质子评估",
          question: ["01.是否头疼"],
          selectList: [
            "A. 是",
            "B. 否"
          ]
        },
        {
          title: "肿瘤质子评估",
          question: ["01.是否做过检查）"],
          selectList: [
            "A. 是",
            "B. 否"
          ]
        },
        {
          title: "肿瘤质子评估",
          question: ["01.是否做过检查）"],
          selectList: [
            "A. 是",
            "B. 否"
          ]
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    select (index) {
      if (index < this.questionList.length - 1) {
        this.activeIndex = index + 1
      }
      if (index === this.questionList.length - 1) {
        this.submit()
      }
    },
    back (index) {
      this.activeIndex = index - 1
    },
    submit () {
      this.$router.replace({path: '/cancerresult'})
    }
  }
};
</script>
<style>
.container {
  margin: 0.1rem 0.12rem;
}
.question-item {
    display: none;
}
.question-item p {
  font-size: 0.23rem;
  color: #a778de;
  margin-bottom: 0.1rem;
}
.question {
  font-size: 0.16rem;
  margin-bottom: 0.3rem;
}
.select-list li {
  padding: 0;
  line-height: 0.3rem;
  list-style: none;
  font-size: 0.16rem;
}
.backbtn {
  width: 3rem;
  height: 0.7rem;
  color: #fff;
  margin: 0 auto;
  margin-top: 1.5rem;
}
.active {
  display: block;
}
</style>
