<template>
  <div class="gedanlist">
    <SubHeader :title="playList.name" class="SubHeader"></SubHeader>
    <GeDanTop :path="playList.coverImgUrl" ref="topImg"></GeDanTop>
    <iScroll ref="scroll">
      <div class="bottom">
        <GeDanBottom :play-list="playList.tracks" @refresh="refresh"></GeDanBottom>
      </div>
    </iScroll>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader"
import GeDanTop from "@/components/GeDanTop"
import GeDanBottom from "@/components/GeDanBottom"
import iScroll from "@/components/iScroll"
import {getPlayList, getAlbumList} from '@/api/index'

export default {
  components: {
    SubHeader, GeDanTop, GeDanBottom, iScroll
  },
  name: "GeDanList",
  data() {
    return {
      playList: {},
    }
  },
  watch: {
    playList(newValue,oldValue){
      this.$refs.scroll.refresh()
    }
  },
  mounted() {
    let defaultHeight = this.$refs.topImg.$el.offsetHeight
    this.$refs.scroll.scrolling((offsetY) => {
      if (offsetY < 0) {
        // let scale = 30 * Math.abs(offsetY) / defaultHeight
        // this.$refs.topImg.$el.style.filter = `blur(${scale}px)`
      } else {
        let scale = 1 + offsetY / defaultHeight
        this.$refs.topImg.$el.style.transform = `scale(${scale})`
      }
    })
  },
  created() {
    if (this.$route.params.type === 'personalized') {
      getPlayList(({id: this.$route.params.id})).then((data) => {
        this.playList = data.playlist
      }).catch((err) => {
        console.log(err);
      })
    } else if (this.$route.params.type === 'albums') {
      getAlbumList(({id: this.$route.params.id})).then((data) => {
        console.log(data)
        this.playList = {
          name: data.album.name,
          coverImgUrl: data.album.picUrl,
          tracks: data.songs
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh()
    }
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/css/mixin";

.gedanlist {
  height: 100%;
  width: 100%;
  @include bg_sub_back_ground_color();

  .SubHeader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .bottom {
    position: fixed;
    top: 600px;
    right: 0;
    left: 0;
  }

}

</style>