<template>
  <div class="ipt">
    <input type="text"  class="top_ipt" placeholder="搜索音乐,视频,歌词,电台"/>
    <svg-icon icon-class="search" class="icon_s" size="14px" />
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
//    @Component({
//   components:{

//   }
// })
@Component({

})
export default class SearchBTn extends Vue {}
</script>

<style scoped lang='scss'>
.ipt {
  height: var(--topNavHeight);
  display: flex;
  align-items: center;
  margin-left: 14px;
  position: relative;
  .top_ipt{
      outline: none;
      border: none;
      font-size: 12px;
      width: 200px;
      line-height: 1.6;
      border-top-left-radius:12px;;
      border-top-right-radius: 12px;
      border-bottom-left-radius:12px;
      border-bottom-right-radius: 12px;
      padding-right: 20px;
      text-indent: 12px;
      caret-color:white;
      color: white;
      font-weight: 500;
      background-color: rgb(168,40,40) ;
      &::placeholder{
          color: rgba(255, 255, 255,.5);
      }
  }
  .icon_s{
      position: absolute;
      right: 8px;
  }
}
</style>