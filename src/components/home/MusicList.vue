<!--
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 17:20:12
 * @FilePath: \src\components\home\MusicList.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-10-22 23:41:23
-->
<template>
  <div class="con">
    <div class="nav">
      <div>
        <p @click="getid(3778678)">热歌榜</p>
        <!--3778678-->
        <p @click="getid(3779629)">新歌榜</p>
        <!--3779629-->
        <p @click="getid(2809513713)">欧美榜</p>
        <!--2809513713-->
      </div>
    </div>
    <musicpaly></musicpaly>
  </div>
</template>

<script setup>
// import { getMusicList } from "@/request/api/home";
import { reactive, onMounted, ref } from "vue";
import Musicpaly from "./Musicpaly.vue";
import { useStore } from "vuex";

const store = useStore();

function getid(id) {
  store.commit("getListId", id);
  // console.log(store.state.palymag.listId);
}
</script>

<style lang="less" scoped>
.con {
  padding: 0.1rem 0.35rem;
  color: white;
  .nav {
    margin: 0 0 0.2rem 0;
    p {
      display: inline-block;
      color: #333;
      font-size: 0.4rem;
      margin: 5px;
    }
  }
}
</style>
