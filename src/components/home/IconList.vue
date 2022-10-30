<!--
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 18:17:07
 * @FilePath: \src\components\home\IconList.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-10-22 23:41:23
-->
<template>
  <div class="con">
    <div class="nav">
      <p class="p">歌单推荐</p>
      <van-icon name="arrow" size="0.45rem" />
    </div>
    <div class="body">
      <div class="mag" v-for="i in state.list.slice(0, 5)" :key="i.id">
        <img :src="i.picUrl" alt="" />
        <p>{{ i.name }}</p>
      </div>
      <br />
      <div class="mag" v-for="i in state.list.slice(5, 10)" :key="i.id">
        <img :src="i.picUrl" alt="" />
        <p>{{ i.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getMusicList } from "@/request/api/home";
import { onBeforeMount, reactive } from "vue";

const state = reactive({
  list: [],
});

onBeforeMount(async () => {
  const { data } = await getMusicList();
  console.log(data);
  state.list = data.result;
});
</script>

<style lang="less" scoped>
.con {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .p {
      font-size: 0.45rem;
    }
  }
  .body {
    width: 7.5rem;
    display: inline-block;
    overflow-y: scroll;
    white-space: nowrap;
    padding: 0 0.4rem 0 0;
    // padding-bottom: 7px;
    ::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
    .mag {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0.1rem;
      // background-color: #333;
      display: inline-block;
      padding: 0.1rem;
      position: relative;
      // border-radius: 5px;
      img {
        width: 100%;
        border-radius: 10px;
      }
      p {
        font-size: 0.1rem;
        padding: 0 1px;
        white-space: pre-wrap;
        position: absolute;
        bottom: 10px;
      }
    }
  }
}
</style>
