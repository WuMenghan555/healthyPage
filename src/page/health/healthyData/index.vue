<template>
  <div class="healthy-data">
    <van-cell-group>
      <van-field v-model="steps" label="运动步数"/>
      <van-field v-model="sleep" label="睡眠时长" />
      <van-field v-model="weight" label="体重" />
      <van-field v-model="suger" label="血糖" />
      <van-field v-model="type" label="血压" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
    data () {
        return {
            steps: '10000',
            sleep: '总睡眠8.00小时',
            weight: '50KG',
            suger: '0.0mmol/L',
            type: '0/0mmHG'
        }
    }
}
</script>