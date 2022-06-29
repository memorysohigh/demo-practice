<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import Iscroll from 'iscroll/build/iscroll-probe'

export default {
  name: "iScroll",
  mounted() {
    this.iscroll = new Iscroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollbars: false,
      probeType: 3,
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
    })
  },
  methods: {
    //提供一个监听滚动距离的方法给外面
    scrolling(fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    },
    refresh() {
      this.$nextTick(() => {
        this.iscroll.refresh()
        console.log(789)
      })
    }
  }
}
</script>

<style scoped lang="scss">
#wrapper {
  height: calc(100% - 600px);
  position: relative;
  top: -150px;
}
</style>