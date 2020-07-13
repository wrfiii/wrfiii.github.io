<template>
  <div class="top-nav-container">
      <Icon/>
      <RightBtn/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Icon from './icon.vue';
import RightBtn from './rightBtn/index.vue'
@Component({
  components:{
      Icon,
      RightBtn
  }
})
export default class HelloWorld extends Vue {
    
}
</script>

<style lang="scss" scoped>
.top-nav-container{
  height: var(--topNavHeight);
  background-color: var(--backColor);
  display: flex;
}

</style>