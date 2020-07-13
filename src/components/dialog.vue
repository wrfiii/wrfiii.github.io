<template>
  <div class="el-dialog" v-if="switchBtn" :style="'z-index:1;'+styleText" ref="dialog">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Dialog extends Vue {
  @Prop({ default: false, required: true }) switch!: boolean;
  @Prop({ default: "", required: true }) styleText!: string;
  get switchBtn() {
    return this.switch;
  }
  mounted() {
    console.log(this.switchBtn);
  }
}
</script>

<style lang="scss" scoped>
@keyframes dialogAnmation {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.el-dialog {
  // box-shadow: 2px 2px 12px 0px #ccc;
  animation: dialogAnmation 0.3s both;
}
</style>