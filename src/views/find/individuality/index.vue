<template>
  <div class="wrapper">
      <Banner/>
      <Recommend/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./banner.vue";
import Recommend from './recommend.vue'
@Component({
  components: {
    Banner,
    Recommend
  }
})
export default class Index extends Vue {}
</script>

<style scoped>
.wrapper{
  user-select: none;
}
</style>