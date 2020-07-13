<template>
  <div class="btn">
    <span class="icon">
      <svg-icon icon-class="left" size="18px" class="lh" />
    </span>
    <span class="icon">
      <svg-icon icon-class="right" size="18px" class="lh" />
    </span>
  </div>
</template>

<script>
export default {
  name: "HsitoryBtn"
};
</script>

<style lang="scss" scoped>
.btn {
  margin-left: -10px;
  height: var(--topNavHeight);
  display: flex;
  align-items: center;
}
.icon {
  // line-height: var(--topNavHeight);
  display: inline-block;
  padding: 0px 2px;
  position: relative;
  &:first-of-type {
    &::after {
      border-right: none;
    }
  }
  &::after {
    position: absolute;
    content: "";
    transform: scale(0.5);
    border: 0.5px solid rgba(51, 51, 51, 0.6);
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
  }
  svg {
    color: rgba(255, 255, 255, 0.1);
  }
}
</style>