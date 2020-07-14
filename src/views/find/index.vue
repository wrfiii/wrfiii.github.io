<template>
  <div class="find-container" ref="find_container" id="find">
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <input type="radio" name="active" :id="'f_'+index" />
        <label
          :for="'f_'+index"
          :nav-index="index"
          @click="changeView(index,item.route)"
        >{{item.name}}</label>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import requst from "@/api/request";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Find extends Vue {
  nav = [
    {
      name: "个性推荐",
      route: "individuality"
    },
    {
      name: "歌单",
      route: "s_list"
    },
    {
      name: "主播电台",
      route: "radio"
    },
    {
      name: "排行榜",
      route: "ranking"
    },
    {
      name: "歌手",
      route: "singer"
    },
    {
      name: "最新音乐",
      route: "newest"
    }
  ];
  changeView(index: string, route: string) {
    (this.$refs as any).find_container.style.setProperty("--navIndex", index);
    this.$router.push({ name: route });
  }
}
</script>

<style scoped lang='scss'>
.find-container {
  padding: 0 36px;
  --navIndex: 0;
  ul {
    display: flex;
    line-height: 58px;
    font-weight: 500;
    justify-content: center;
    border-bottom: 1px solid #c6c6c6;
    position: relative;
    &::after {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 88px;
      height: 1px;
      content: "";
      display: block;
      background-color: var(--backColor);
      left: calc(50% - 88px * 6 / 2 + var(--navIndex) * 88px);
      transition: all 0.3s ease-in-out;
    }
    li {
      width: 88px;
      text-align: center;
      position: relative;
      user-select: none;
      &:hover {
        color: var(--backColor);
      }
      label {
        cursor: pointer;
      }
      input[type="radio"] {
        opacity: 0;
        width: 0;
        &:checked + label {
          color: red;
        }
      }
    }
  }
}
</style>