<template>
  <div class="song">
    <div class="song-top">
      <h3>最新音乐</h3>
    </div>
    <ul class="song-bottom">
      <li class="item" v-for="value in songs" :key="value.id">
        <img v-lazy="value.song.album.picUrl" alt="">
        <div>
          <h3>{{ value.name }}</h3>
          <p>{{ value.song.artists[0].name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  name: "SongList"
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";

.song {
  width: 100%;
  @include bg_sub_back_ground_color();

  .song {
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_back_ground_color();
    border-bottom: 1px solid #ccc;

    h3 {
      padding: 0 20px;
      @include font_size($font_large);
      @include font_color();
    }
  }

  .song-bottom {
    width: 100%;
    overflow: hidden;

    .item {
      height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 20px;

      img {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
        border-bottom: 1px solid #ccc;
      }

      div {
        h3 {
          @include font_size($font_large);
          @include font_color();
        }

        p {
          @include font_size($font_samll);
          @include font_color();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
}

</style>