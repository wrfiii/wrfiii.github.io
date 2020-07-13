<template>
  <div>
    <svg-icon icon-class="skin" class="skin-icon" size="22px" style="margin-left:3px"></svg-icon>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.skin-icon {
  opacity: 0.5;
  transition: all .5s;
  cursor: pointer;
  &:hover{
      opacity: 1;
  }
}
</style>