<template>
  <div class="nav">
    <span class="title">推荐</span>
    <Item
      v-for="(item, index) in itemArr"
      :iconClass="item.iconClass"
      :title="item.title"
      :route="item.route"
      :active="item.active"
      :key="index"
      @changeIndex="changeIndex"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Item from "./item.vue";

interface Items {
  iconClass: string;
  title: string;
  route: string;
  active: boolean;
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
      title: "发现音乐",
      route: "find",
      active: false
    },
    {
      iconClass: "sign",
      title: "私人FM",
      route: "sign",
      active: false
    },
    {
      iconClass: "live",
      title: "LOOK直播",
      route: "live",
      active: false
    },
    {
      iconClass: "video",
      title: "视频",
      route: "video",
      active: false
    },
    {
      iconClass: "friend",
      title: "朋友",
      route: "friend",
      active: false
    }
  ];
  changeIndex(v: string) {
    (this.itemArr as any).forEach((v: Item) => {
      v.active = false;
    });
    const len = (this.itemArr as any).length;
    let i = 0;
    for (; i < len; i++) {
      this.itemArr[i].active = false;
      if (this.itemArr[i].route == v) {
        this.itemArr[i].active = true;
      }
    }
  }
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