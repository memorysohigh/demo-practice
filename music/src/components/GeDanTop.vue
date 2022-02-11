<template>
  <div class="detail-top">
    <div class="img-container">
      <img :src="path" alt="">
    </div>
  </div>
</template>

<script>
export default {
name: "GeDanTop",
  props:{
  path:{
    type: String,
    default: '',
    required: true,
  }
  }
}
</script>

<style scoped lang="scss">
  .detail-top{
    width: 100%;
    height: 650px;
    margin-top: 100px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
</style>