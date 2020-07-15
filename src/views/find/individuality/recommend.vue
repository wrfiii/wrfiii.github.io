<template>
  <div>
    <h3>推荐歌单</h3>
    <BorderLine />
    <ul class="container">
      <li v-for="(item, index) in itemArr" :key="index">
        <p class="paly-cont">
          <svg-icon icon-class="headset" class="icon-logo" size="16px" />
          <span>{{filterPalyCont(item.playcount)}}</span>
          <span>{{item.isMoreCont ?'万':''}}</span>
        </p>
        <img :src="item.picUrl" alt />
        <p class="intr">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BorderLine from "@/components/line.vue";
@Component({
  components: {
    BorderLine
  }
})
export default class Index extends Vue {
  itemArr = [];
  filterPalyCont(v: number) {
    return parseInt(v / 10000);
  }
  mounted() {
    this._requst("/recommend/resource").then((res: any) => {
      this.itemArr = res.recommend.map((v: any) => {
        if (v.playcount > 10000) {
          v.isMoreCont = true;
        }
        return v;
      });
    });
  }
}
</script>

<style scoped lang='scss'>
h3 {
  color: #666;
  font-family: "楷体";
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
  justify-content: space-between;
  li {
    width: 18%;
    box-sizing: border-box;
    height: 300px;
    position: relative;
    .paly-cont {
      position: absolute;
      right: 0;
      display: flex;
      align-items: flex-end;
      color: white;
      top: 0;
      background-color: #000;
      font-size: 12px;
      svg {
        margin-right: 8px;
      }
    }
    .intr {
      font-size: 16px;
      margin-top: 8px;
      color: #000;
    }
    img {
      width: 100%;
      border: 1px solid #cccccc;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>