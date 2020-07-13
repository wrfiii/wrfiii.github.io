<template>
  <div class="nav">
    <span class="title">推荐</span>
    <Item
      v-for="(item, index) in itemArr"
      :iconClass="item.iconClass"
      :title="item.title"
      :key="index"
    />
  </div>
</template>


<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Item from "./item.vue";
interface Items {
  iconClass: string;
  title: string;
  // routerLink?:string
}
interface ItemArr {
  [index: number]: Items;
}
@Component({
  components: {
    Item
  }
})
export default class HelloWorld extends Vue {
  itemArr: ItemArr = [
    {
      iconClass: "music",
      title: "我的音乐"
    },
    {
      iconClass: "sign",
      title: "私人FM"
    },
    {
      iconClass: "live",
      title: "LOOK直播"
    },
    {
      iconClass: "video",
      title: "视频"
    },
    {
      iconClass: "friend",
      title: "朋友"
    }
  ];
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  color: #666444;
  padding: 12px 0 12px 14px;
}
.nav {
  display: flex;
  flex-direction: column;
}
</style>