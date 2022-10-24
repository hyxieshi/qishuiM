<template>
  <!-- <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar> -->
  <div class="con">
    <div class="body">
      <router-link to="../">
        <van-icon name="audio" size="0.6rem" />
      </router-link>
      <router-link to="../">
        <van-icon name="music-o" size="0.6rem" />
      </router-link>
      <router-link to="../">
        <van-icon name="contact" size="0.6rem" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  active: 0,
});
</script>

<style lang="less" scoped>
.con {
  position: fixed;
  bottom: 0;
  background-color: #000;
  width: 100%;
  .body {
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0;
  }
}
</style>
