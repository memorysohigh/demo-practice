<template>
  <div class="Tabbar">
    <router-link tag="div" to="/tuijian">推荐</router-link>
    <router-link tag="div" to="/geshou">歌手</router-link>
    <router-link tag="div" to="/paihang">排行</router-link>
    <router-link tag="div" to="/sousuo">搜索</router-link>
  </div>
</template>

<script>
export default {
name: "Tabbar"
}
</script>

<style scoped lang="scss">
@import "src/assets/css/theme";
@import "src/assets/css/mixin";
.Tabbar{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 84px;
  line-height: 84px;
  @include bg_sub_back_ground_color();
  @include font_size($font_medium);
  @include font_color();
  .router-link-active{
    @include font_active_color();
    border-bottom: 5px solid #000;
    @include active_border_color
  }
}
</style>