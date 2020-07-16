<template>
  <div class="icon-box">
    <div class="play-icon">
      <svg-icon icon-class="paly" class="icon-logo" size="18px" />
      <!-- <svg-icon icon-class="pause" class="icon-logo" size="20px" /> -->
    </div>
    <div class="play-icon p-r">
      <svg-icon icon-class="paly-right" class="icon-logo" size="26px" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang='scss'>
.icon-box {
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
}

.play-icon {
  background-color: var(--backColor);
  width: var(--playIconSize);
  height: var(--playIconSize);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-r {
  margin-left: 18px;
}
</style>