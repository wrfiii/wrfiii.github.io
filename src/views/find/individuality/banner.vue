<template>
  <div class="container">
    <carousel-3d :cont="bannerImgs.length" :autoplay="true" bias="right" :border="0" height='200' width='666' >
      <slide :index="index" v-for="(item, index) in bannerImgs" :key="index">
        <div class="silde-content">
          <img :src="item.imageUrl" alt />
        </div>
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
  styleText='calc(100vw - var(--asideWidth) - 72 / 5  )'
  mounted() {
    this.getBanner();
  }
  getBanner() {
    (this as any)._requst("/banner").then((v: any) => {
      this.bannerImgs = v.banners.map((v: any) => {
        return {
          imageUrl: v.imageUrl,
          url: v.url
        };
      });
    });
  }
}
</script>

<style lang="css">
.carousel-3d-slide ,.silde-content{
  border: none !important;
  background-color:transparent !important;
  border-bottom-color: transparent !important;
  height: 100% !important;
}
.carousel-3d-slide img{
  height: 100% !important;
}
</style>