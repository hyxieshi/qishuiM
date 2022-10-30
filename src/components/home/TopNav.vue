<!--
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 17:07:30
 * @FilePath: \src\components\home\TopNav.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-10-22 23:41:23
-->
<template>
  <div class="topNav">
    <p>发现</p>
    <!--  -->
    <p v-show="show">最近播放</p>
    <van-icon name="search" size="0.5rem" @click="search()"></van-icon>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let show = ref(false);
function search() {
  router.push("/search");
}
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
