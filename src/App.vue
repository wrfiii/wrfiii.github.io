<template>
  <div id="app">
    <Header />
    <section class="coantainer">
      <aside class="aside">
        <Aside />
      </aside>
      <main class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>
    </section>
    <Palyer/>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import "./assets/styles/rset.css";
import "./assets/styles/base.css";
import request from "@/api/request";
import Header from "@/components/header/index.vue";
import Aside from "@/components/aside/index.vue";
import Palyer from '@/components/palyer/index.vue'

@Component({
  components: {
    Header,
    Aside,
    Palyer
  }
})
export default class Home extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
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
  flex: 1;
  height: calc(100vh - var(--topNavHeight));
  overflow-y: auto;
  padding-bottom: var(--playerHeight);
  box-sizing: border-box;
}
</style>
