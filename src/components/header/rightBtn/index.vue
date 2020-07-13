<template>
  <div class="right-main-box">
    <Search />
    <Main />
  </div>
</template>

<script lang='ts'>
import Search from "./search.vue";
import Main from "./main_r.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Search,
    Main
  }
})
export default class RightBtn extends Vue {}
</script>

<style lang="scss" scoped>
.right-main-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-bettwen;
  justify-content: space-between;
  flex: 1;
}
</style>