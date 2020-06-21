<template>
  <div class="report">
    <div class="file">
      <van-uploader v-model="fileList" multiple />
    </div>
    <div class="btn">
      <van-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="large"
        @click="submit()"
      >提交</van-button>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant'
export default {
  data() {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  methods: {
    submit() {
      Dialog.confirm({
        title: '提交成功',
        message: '请等待解读'
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>
<style scoped>
.report {
  padding: 0.1rem;
}
.btn {
  margin-top: 3rem;
}
</style>