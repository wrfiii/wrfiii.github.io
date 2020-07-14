<template>
  <div class="nav-item" @click="changeview" :class="active ? 'active':''">
    <svg-icon :icon-class="iconClass" class="icon-logo" size="20px" />
    <span>{{title}}</span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component({})
export default class HelloWorld extends Vue {
  @Prop({ default: "" }) iconClass!: string;
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) route!: string;
  @Prop({ default: false }) active!: boolean;
  @Emit("changeIndex")
  changeview() {
    this.$router.push({ name: this.route });
    return this.route;
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  padding-left: 8%;
  display: flex;
  align-items: center;
  height: 40px;
  transition: all 0.6s;
  cursor: pointer;
  .icon-logo,
  span {
    opacity: 0.7;
  }
  &:hover {
    .icon-logo,
    span {
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
.active{
  background: #c6c6c6;
  position: relative;
  &::before{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 6px;
    content: '';
    display: inline-block;
    background-color: var(--backColor);
  }
}
</style>