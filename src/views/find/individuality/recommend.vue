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
        <div class="img-box">
          <img :src="item.picUrl" alt />
        </div>
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
    padding-bottom: 16px;
    min-height: 300px;
    position: relative;
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    .paly-cont {
      position: absolute;
      right: 0;
      display: flex;
      align-items: flex-end;
      justify-content: right;
      color: white;
      top: 0;
      z-index: 10;
      padding: 3px 10px 4px 28px;
      background: rgba(0, 0, 0, 0.5); /* fallback for old browsers */
      font-size: 12px;
      text-align: right;
      svg {
        margin-right: 8px;
      }
    }
    .intr {
      font-size: 16px;
      margin-top: 8px;
      color: #000;
      line-height: 1.4;
    }
    .img-box {
      width: 254px;
      overflow: hidden;
      height: 254px;
    }
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #cccccc;
      transition: all 0.5s;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>