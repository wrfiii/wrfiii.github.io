<template>
  <div class="play-contaier">
    <Control />
    <Pmgressbar />
    <PlayBtn/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Control from "./control.vue";
import Pmgressbar from "./pmgressbar.vue";
import PlayBtn from './palyBtn.vue'

@Component({
  components: {
    Control,
    Pmgressbar,
    PlayBtn
  }
})
export default class Player extends Vue {}
</script>

<style scoped lang='scss'>
.play-contaier {
  height: var(--playerHeight);
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  display: flex;
  left: 0;
  width: 100vw;
  &::after {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    height: 0;
    width: 100%;
    left: 0;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
  }
}
</style>