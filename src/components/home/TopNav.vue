<template>
  <div class="topNav">
    <p>发现</p>
    <!--  -->
    <p v-show="show">最近播放</p>
    <van-icon name="search" size="0.5rem" />
  </div>
</template>

<script setup>
import { ref } from "vue";

let show = ref(false);
</script>

<style lang="less" scoped>
.topNav {
  p {
    font-size: 0.45rem;
  }
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
