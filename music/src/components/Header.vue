<template>
  <div class="header">
    <div class="left">
      <img src="@/../public/header-left.png" alt="">
    </div>
    <p class="tittle">建行音乐</p>
    <div class="right">
      <img src="@/../public/header-right.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";

.header {
  height: 100px;
  width: 100%;
  @include bg_colot($wangyihong);
  display: flex;
  justify-content: space-between;

  .left, .right {
    height: 84px;
    width: 84px;
    margin-top: 8px;

    img {
      height: 100%;
      height: 100%;
    }
  }

  .tittle {
    text-align: center;
    line-height: 100px;
    color: azure;
  }


}
</style>