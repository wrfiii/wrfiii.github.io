<template>
  <div class="avater" >
    <div v-if="isLogin">
      <img :src="avater" alt />
      <span>魔魔魔魔魔魔i</span>
      <svg-icon icon-class="vip" class="vip-icon" size="22px" style="margin-left:3px"></svg-icon>
    </div>
    <div v-else class="no-login">
        <span>未登录</span>
    </div>
    <el-dialog>
         你好呐
    </el-dialog>
    <svg-icon icon-class="bottom-icon" class="vip-icon" size="16px" style="margin-left:3px"></svg-icon>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
// import { mapGetters } from "vuex";
@Component({
  components: {}
})
export default class RightBtn extends Vue {
  get avater() {
    return (
      this.$store.getters.avater || require("../../../assets/imgs/avater.jpg")
    );
  }
  get isLogin() {
    return false;
  }
}
</script>

<style lang="scss" scoped>
.avater {
  display: flex;
  align-items: center;
  margin-right: 20px;
  img {
    height: 28px;
    border-radius: 50%;
  }
  span {
    font-size: 12px;
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
  }
  .vip-icon {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .no-login{
    cursor: pointer;
  }
}
</style>