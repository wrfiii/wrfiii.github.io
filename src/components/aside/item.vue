<template>
  <div class="nav-item">
    <svg-icon :icon-class="iconClass" class="icon-logo" size="20px" />
    <span>{{title}}</span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: "" }) iconClass!: string;
  @Prop({ default: "" }) title!: string;
}
</script>

<style lang="scss" scoped>
.nav-item {
  padding-left: 8%;
  display: flex;
  align-items: center;
  height: 50px;
  transition: all 0.6s;
  cursor: pointer;
  .icon-logo, span { 
    opacity: 0.7;
  }
  &:hover {
    .icon-logo, span { 
      opacity: 1;
    }
  }
  span {
    color: #000;
    font-weight: 300;
    font-size: 13px;
    margin-left: 10px;
  }
}
</style>