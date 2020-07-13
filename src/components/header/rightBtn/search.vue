<template>
  <div style="height:100%;display:flex;align-items: center">
      <HsitoryBtn/>
      <SearchIpt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HsitoryBtn from './history.vue';
import SearchIpt from './searchIpt.vue'

@Component({
  components: {
    HsitoryBtn,
    SearchIpt
  }
})
export default  class Search extends Vue {}
</script>

<style scoped>

</style>