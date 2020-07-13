<template>
  <div class="logo">
    <svg-icon icon-class="logo" class="icon-logo"  size='22px'/>
      <span>网易云音乐</span>
  </div>
</template>

<script>

export default {
  
};
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 18px;
  width: var(--asideWidth);
  box-sizing: border-box;
  span{
    // font-weight: bold;
    color: white;
    margin-left: 6px;
    font-size: 18px;
    font-family: '楷体';
  }
}
</style>