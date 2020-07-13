<template>
  <div class="main_r">
    <Avtaer />
    <Skin/>
  </div>
</template>

<script lang="ts">
import Avtaer from './avater.vue'
import Skin from './skin.vue'
import { Component, Vue } from "vue-property-decorator";
//    @Component({
//   components:{

//   }
// })
@Component({
    components:{
        Avtaer,
        Skin
    }
})
export default class SearchBTn extends Vue {
//      Prop computed: {
   
//   },
}
</script>

<style lang="scss" scoped>
.main_r{
    display: flex;
    align-items: center;
    padding-right: 4vw;
  }
</style>