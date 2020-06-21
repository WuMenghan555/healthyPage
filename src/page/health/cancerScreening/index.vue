<template>
    <div class="cancer" style="font-size:.16rem;padding:.2rem;height:100%">
        <h3 style="font-size:.2rem">肿瘤筛查</h3>
        <p>建议检查项目</p>
        <p class="strong">1、血液检查</p>
        <p>血液检查是体检中查出早期癌症的重要手段，检测血液中各种肿瘤标志物指标是否升高，则可发现、鉴别各种恶性肿瘤。如：甲胎蛋白AFP可查原发性肝细胞癌、生殖腺胚胎性肿瘤。癌胚抗原CEA明显升高时，常见有结肠癌、胃癌、肺癌、胆管癌;存在肝癌、乳腺癌、卵巢癌、胰腺癌时也有升高。</p><br/>
        <p class="strong">2、妇科体检中巴氏涂片</p>
        <p class="strong">3、B超</p>
        <p>利用彩色多普勒成像技术，可清晰地发现全身大多数器官是否有肿块及病变。</p><br/>
        <p class="strong">4、X线胸片</p>
        <p>X线穿过人体后，因器官、组织密度不同呈现影像，由此可直接显示肺部肿瘤，也可通过肺气肿、阻塞性肺炎、胸水等间接性改变寻找胸部肿瘤。</p><br/>
        <p class="strong">5、肛门直肠指检</p>
        <p class="strong">6、胃镜和肠镜</p>
        <p>
            直接用肉眼观察胃、肠黏膜的色泽、血管纹理、腺体开口形态，来识别有无病变，对可疑病灶可做活检确诊。
        </p>
        <van-button size="large" round color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="toquery()">去申请</van-button>
    </div>
</template>
<script>
export default {
    methods:{
        toquery(){
            this.$router.push({path: '/genetictesting'})
        }
    }
}
</script>
<style scoped>
.cancer {
    letter-spacing: .05rem;
}
.strong {
    font-weight: 600;
}
.van-button {
    margin-top: .1rem;
}
</style>