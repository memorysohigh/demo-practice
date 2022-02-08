<template>
<div class="personalized">
  <div class="personalized-top">
    <h3>{{ title }}</h3>
  </div>
  <div class="personalized-bottom">
    <div class="item" v-for="value in personalized" :key="value.id">
      <img v-lazy="value.picUrl" alt="">
      <p>{{value.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props:{
    personalized:{
      type:Array,
      required:false,
      default:()=>[],
    },
    title:{
      type:String,
      required:false,
      default:'',
    }
  },
name: "Personalized"
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.personalized{
  @include bg_sub_back_ground_color();
  .personalized-top{
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_back_ground_color();
    border-bottom: 1px solid #ccc;
    h3{
      padding: 0 20px;
      @include font_size($font_large);
      @include font_color();
    }
  }
  .personalized-bottom{
    overflow: scroll;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      width: 200px;
      padding: 20px 0px;
      img{
        height: 200px;
        width: 200px;
        border-radius: 20px;
      }
      p{
        @include font_color();
        @include font_size($font_medium_s);
        @include clamp(2);
      }
    }
  }
}

</style>