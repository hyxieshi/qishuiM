<template>
  <div>
    <!-- 头部 搜索 -->
    <TopNav></TopNav>
    <!-- 音乐电台 -->
    <SwiperTop></SwiperTop>
    <!-- 歌单推荐 -->
    <IconList></IconList>
    <!-- 歌单列表 -->
    <MusicList></MusicList>
  </div>
</template>

<script setup>
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";

import { onBeforeMount } from "vue";
import { getCookie } from "@/request/api/home";
import { useStore } from "vuex";
const store = useStore();
onBeforeMount(async () => {
  const { cookie } = await getCookie();
  store.state.token = cookie;
});
</script>
<style></style>
