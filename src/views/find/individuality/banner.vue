<template>
  <div class="container">
    <carousel-3d>
      <slide :index="index" v-for="(item, index) in bannerImgs" :key="index">
        <img :src="item.imageUrl" alt="">
      </slide>
    </carousel-3d>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Carousel3d, Slide } from "vue-carousel-3d";
@Component({
  components: {
    Carousel3d,
    Slide
  }
})
export default class Banner extends Vue {
  bannerImgs = [];
  getBanner() {
    (this as any)._requst("/banner").then((v: any) => {
     this.bannerImgs=v.banners.map((v: any) => {
        return {
          imageUrl: v.imageUrl,
          url: v.url
        };
      });
       console.log(this.bannerImgs);
    });
   
  }
  created() {
    this.getBanner();
  }
}
</script>

<style scoped>
.carousel-3d-slide {
      height: auto !important;
      background-color: rgba(0, 0, 0, 0.25) !important;
    }
    .container{
      width: 100%;
    }
</style>