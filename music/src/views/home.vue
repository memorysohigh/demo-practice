<template>
  <div class="home">
    <Header></Header>
    <div class="them">
      <button class="box1" @click="fn(1)"></button>
      <button class="box2" @click="fn(2)"></button>
      <button class="box3" @click="fn(3)"></button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "home",
  components: {
    Header: Header
  },
  data() {
    return {}
  },
  methods: {
    fn(data) {
      document.documentElement.setAttribute('data-theme', data)
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/theme";

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