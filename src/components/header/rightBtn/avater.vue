<template>
  <div class="avater">
    <div v-if="isLogin" class="avater">
      <img :src="avatarUrl" alt />
      <span>{{nickname}}</span>
      <svg-icon icon-class="vip" class="vip-icon" size="22px" style="margin-left:3px"></svg-icon>
    </div>
    <div v-else class="no-login">
      <span @click="changeSwich">未登录</span>
    </div>
    <Dialog :switch="switchbtn" :styleText="styleText">
      <div slot class="login-from login-box">
        <h2>Login</h2>
        <svg-icon
          icon-class="close"
          class="close-icon"
          size="18px"
          style="margin-left:3px"
          @click.native="closeDialog"
        ></svg-icon>
        <form>
          <div class="user-box">
            <input type="text" name required v-model="phone" />
            <label>手机号码</label>
          </div>
          <div class="user-box">
            <input type="password" name required v-model="password" />
            <label>密码</label>
          </div>
          <a href="#" @click="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </Dialog>
    <svg-icon icon-class="bottom-icon" class="vip-icon" size="16px" style="margin-left:3px"></svg-icon>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Dialog from "../../dialog.vue";
import request from "@/api/request";

@Component({
  components: {
    Dialog
  }
})
export default class RightBtn extends Vue {
  switchbtn = false;
  styleText = "position:fixed;left:35vw;top:20vh;width:30vw;height: 50vh;";
  phone = "18428053612";
  password = "123abc";
  get avatarUrl() {
    return (
      this.$store.getters.avatarUrl ||
      require("../../../assets/imgs/avater.jpg")
    );
  }
  get isLogin() {
    return this.nickname !== "" && this.avatarUrl !== "";
  }
  get nickname() {
    return this.$store.getters.nickname;
  }
  changeSwich() {
    this.switchbtn = !this.switchbtn;
  }
  submit() {
    request("/login/cellphone", {
      params: {
        phone: this.phone,
        password: this.password
      }
    }).then(res => {
      request("/user/detail", {
        params: {
          uid: (res as any).account.id
        }
      }).then(res => {
        this.$store.commit("user/M_USERINFO", res);
        console.log(this.nickname);
        console.log(this.avatarUrl);
        this.switchbtn = false;
      });
    });
  }
  closeDialog() {
    console.log(123);
    this.switchbtn = false;
  }
}
</script>

<style lang="scss" scoped>
.avater {
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  img {
    height: 28px;
    border-radius: 50%;
  }
  span {
    font-size: 12px;
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    margin-right: 4px;
  }
  .vip-icon {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .no-login {
    cursor: pointer;
    user-select: none;
  }
  .login-from {
    width: 100%;
    height: 100%;
    .close-icon {
      position: absolute;
      right: 20px;
      top: 32px;
      transition: all 0.7s 0.5s;
      cursor: pointer;
      &:hover {
        transform: rotate(360deg) scale(1.1);
      }
    }
  }
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  // background: #12c2e9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-sizing: border-box;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  opacity: 0.8;
  input {
    font-weight: bold;
    text-indent: 8px;
  }
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>