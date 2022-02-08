<template>
  <div class="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabbar from  "@/components/Tabbar"

export default {
  name: "App",
  components: {
    Header: Header,
    Tabbar
  },
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "../src/assets/css/theme";

.home {
  height: 100%;
  width: 100%;

  .them {
    position: fixed;
    bottom: 0px;
    left: 0px;

    .box1, .box2, .box3 {
      height: 150px;
      width: 150px;
    }

    .box1 {
      background-color: $wangyihong;
    }

    .box2 {
      background-color: $qqlv;
    }

    .box3 {
      background-color: $yejianmoshi;
    }
  }
}

</style>