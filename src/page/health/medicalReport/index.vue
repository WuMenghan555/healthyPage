<template>
    <div class="report">
        <img src="../../../assets/report.jpg" alt="">
    </div>
</template>
<script>
export default {
    methods: {
        back(){
            this.$router.push({path: '/healthRecord'})
        }
    }
}
</script>
<style scoped>
.report {
    width: 100%;
    height: 100%;
}
img {
    width: 100%;
    height: 100%;
}
</style>