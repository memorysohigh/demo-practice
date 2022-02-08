<template>
  <div class="tuijian">
    <Banner :banners='banners' class="banner"></Banner>
    <Personalized :personalized='personalized' :title="'推荐歌单'"></Personalized>
    <Personalized :personalized='albums' :title="'最新专辑'"></Personalized>
    <SongList :songs="songs"></SongList>
  </div>
</template>

<script>
import {getBanner,getPersonalized,getAlbums,getNewSong} from "../api/index"
import Banner from '@/components/Banner'
import Personalized from '@/components/Personalized'
import SongList from '@/components/SongList'

export default {
  name: "Redian",
  components: {
    Banner,
    Personalized,
    SongList
  },
  data() {
    return {
      banners: [],
      personalized:[],
      albums:[],
      songs:[],
    }
  },
  created() {
    getBanner().then((data) => {
      this.banners = data.banners
    })
        .catch((err) => {
          this.banners = data.banners
        })
    getPersonalized().then((data) => {
      this.personalized = data.result
    })
        .catch((err) => {
          console.log(err);
        })
    getAlbums().then((data) => {
      this.albums = data.albums.splice(0,6)
    })
        .catch((err) => {
          console.log(err);
        }),
        getNewSong().then((data) => {
      this.songs = data.result
      console.log(data.result);
    })
        .catch((err) => {
          console.log(err);
        })
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.tuijian{
  .banner{
    width: 100%;
    overflow: hidden;
  }
}

</style>