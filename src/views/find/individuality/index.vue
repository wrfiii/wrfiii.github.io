<template>
  <div>
      <Banner/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./banner.vue";
@Component({
  components: {
    Banner
  }
})
export default class Index extends Vue {}
</script>

<style scoped>
</style>