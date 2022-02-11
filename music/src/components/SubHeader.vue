<template>
  <div class="header" @click="fn">
    <div class="left">
      <img src="@/assets/images/back.png" alt="" @click.stop="back">
    </div>
    <p class="tittle">{{ title }}</p>
    <div class="right">
      <img src="@/assets/images/more.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    }
  },
  data() {
    return {
      theme: [1, 2, 3],
      index: 1,
    }
  },
  methods: {
    back() {
      window.history.back()
    },
    fn() {
      console.log(this.index, 98888)
      this.index++
      if (this.index > this.theme.length) {
        this.index = 1
      }
      document.documentElement.setAttribute('data-theme', this.index)
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";

.header {
  height: 100px;
  width: 100%;
  @include bg_color();
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