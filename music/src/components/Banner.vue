<template>
    <swiper ref="mySwiper" :options="swiperOptions" v-if="banners.length>0" class="banner">
      <swiper-slide v-for="value in banners" :key="value.bannerId" class="item">
        <a :href="value.url">
          <img :src="value.pic" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

export default {
  name: "Banner",
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 100,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style scoped lang="scss">
.banner {
  .item {
    img {
      width: 100%;
      height: 300px;
    }
  }

}
</style>

<style lang="scss">
@import "../assets/css/mixin";

.banner {
  width: 750px;
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background: #fff;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    @include bg_color()
  }
}
</style>