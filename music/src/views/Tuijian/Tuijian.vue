<template>
  <div class="tuijian">
    <Banner :banners='banners' class="banner"></Banner>
    <Personalized :personalized='personalized' :title="'推荐歌单'" @select="godetail" :type="'personalized'"></Personalized>
    <Personalized :personalized='albums' :title="'最新专辑'" @select="godetail" :type="'albums'"></Personalized>
    <SongList :songs="songs"></SongList>
    <transition>
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import {getBanner, getPersonalized, getAlbums, getNewSong} from "@/api"
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
      personalized: [],
      albums: [],
      songs: [],
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
      this.albums = data.albums.splice(0, 6)
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
  methods: {
    godetail(id, type) {
      this.$router.push({
        path: `/tuijian/gedanlist/${id}/${type}`
      })

    }
  }
}
</script>

<style scoped lang="scss">
.tuijian {
  .banner {
    width: 100%;
    overflow: hidden;
  }

  .view {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
}

.v-enter {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0%);
}

.v-enter-active {
  transition: transform 1s;
}

.v-leave {
  transform: translateX(0%);
}

.v-leave-to {
  transform: translateX(100%);
}

.v-leave-active {
  transition: transform 1s;
}
</style>