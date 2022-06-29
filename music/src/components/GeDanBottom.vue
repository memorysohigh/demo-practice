<template>
  <ul class="detail-bottom">
    <li class="bottom-top">
      <div class="bottom-cion"></div>
      <div class="bottom-title">播放全部</div>
    </li>
    <li v-for="value in playList" :key="value.id" class="item">
      <h3>{{ value.name }}</h3>
      <p>{{ value.al.name }} - {{ value.ar[0].name }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GeDanBottom",
  props: {
    playList: {
      type: Array,
      default: () => [],
      required: true,
    }
  },

  mounted() {

  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";

.detail-bottom {
  //width: 100%;
  //overflow: scroll;
  li {
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_back_ground_color();
    border-bottom: 1px solid #ccc;
  }

  .bottom-top {
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;

    .bottom-cion {
      width: 60px;
      height: 60px;
      @include bg_img('../assets/images/play.png', 60px, 60px);
    }

    .bottom-title {
      margin-left: 10px;
      @include font_color();
      @include font_size($font_large);
    }
  }

  .item {
    h3 {
      @include font_color();
      @include font_size($font_medium);
      @include clamp(1);
    }

    p {
      @include font_color();
      @include font_size($font_samll);
      @include clamp(1);
      margin-top: 10px;
      opacity: 0.8;
    }
  }
}

</style>