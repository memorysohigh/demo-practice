<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  <div ref="root"></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
import * as all from 'vue'

export default {
    name: "App",
    components: {
        HelloWorld,
    },
  setup(){
      const root = all.ref(null)
    all.onMounted(()=>{
      console.log(root)
    })
    return root
  },
  mounted(){
    console.log(all)
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
