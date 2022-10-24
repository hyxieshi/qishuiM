<template>
  <div class="con">
    <div class="nav">
      <div>
        <router-link to="../">热歌榜</router-link
        ><!--3778678-->
        <router-link to="../">新歌榜</router-link
        ><!--3779629-->
        <router-link to="../">欧美榜</router-link
        ><!--2809513713-->
      </div>
    </div>
    <musicpaly></musicpaly>
  </div>
</template>

<script setup>
// import { getMusicList } from "@/request/api/home";
import musicpaly from "./Musicpaly.vue";
import { reactive, onMounted } from "vue";
import Musicpaly from "./Musicpaly.vue";
</script>

<style lang="less" scoped>
.con {
  padding: 0.1rem 0.35rem;
  color: white;
  .nav {
    margin: 0 0 0.2rem 0;
    a {
      color: #333;
      font-size: 0.35rem;
      margin: 5px;
    }
  }
}
</style>
