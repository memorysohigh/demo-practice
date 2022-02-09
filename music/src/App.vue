<template>
  <div class="app">
    <div class="opstion">
      <Header></Header>
      <Tabbar></Tabbar>
    </div>
    <router-view class="view"></router-view>
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

.app{
  .opstion{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
  }
  .view{
    margin-top: 184px;
    height: 3842-184px;
  }
}

</style>