<template>
  <div id="app">
    <Header />
    <section class="coantainer">
      <aside class="aside">
        <Aside />
      </aside>
      <main class="main"></main>
    </section>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./assets/styles/rset.css";
import "./assets/styles/base.css";
import request from "@/api/request";
import Header from "@/components/header/index.vue";
import Aside from "@/components/aside/index.vue";
@Component({
  components: {
    Header,
    Aside
  }
})
export default class Home extends Vue {
  created() {
    request("/login/cellphone", {
      params: {
        phone: "18428053612",
        password: "123abc"
      }
    }).then(res => {
      console.log(res);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
section.coantainer {
  width: 100%;
  height: calc(100vh - var(--topNavHeight));
  display: flex;
}
aside.aside {
  width: var(--asideWidth);
  height: 100%;
  background-color: rgb(245, 245, 247);
  border-right: 1px solid rgb(225, 225, 226);
}
main.main {
  /* width: calc(100vw - 200px);
   */
  flex: 1;
  height: 100%;
}
</style>
