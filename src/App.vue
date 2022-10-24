<template>
  <!--主要内容  -->
  <router-view />
  <!-- 底部共享组件 -->
  <FooterMusic></FooterMusic>
</template>

<script>
import FooterMusic from "./components/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  // overflow: hidden;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}
</style>
