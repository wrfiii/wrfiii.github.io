<template>
  <div class="line"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.line {
  position: relative;
  width: 100%;
}
.line::before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform-origin: 0 0; z-index:-1;
  background-color: #ccc;
  transform: scaleY(0.5);
}
</style>