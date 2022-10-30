<!--
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 18:37:28
 * @FilePath: \src\views\Search.vue
 * @Description: 
 * Copyright 2022 OBKoro1, All Rights Reserved. 
 * 2022-10-22 23:41:23
-->
<template>
  <div class="con">
    <div class="nav">
      <van-icon name="arrow-left" class="left" size="0.55rem" />
      <div class="r">
        <input v-model="state.value" placeholder="请输入搜索歌名" />
        <van-icon name="search" @click="onSearch" size="0.55rem" />
      </div>
    </div>
    <br />
    <div class="body">
      <div class="navs">
        <h3>搜索记录</h3>
        <van-icon name="delete-o" size="0.55rem" />
      </div>
      <div class="tag">
        <span
          v-for="(i, index) in state.search"
          :key="index"
          @click="
            state.value = i;
            onSearch();
          "
          >{{ i }}</span
        >
      </div>
    </div>
    <div>
      <div
        class="list"
        v-for="(i, index) in state.palyList"
        :key="i.id"
        @click="getPlay(i.id)"
      >
        <span>{{ index + 1 }}</span>
        <div class="name">
          <p class="h3">{{ i.name }}</p>
          <p>{{ i.ar[0].name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSearchMusic } from "@/request/api/home.js";
import { onBeforeMount, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const state = reactive({
  value: "",
  palyList: [],
  search: [],
});
onBeforeMount(() => {
  state.search = store.state.search;
});
async function onSearch() {
  // store.state.palyList.push(state.value);
  const { data } = await getSearchMusic(state.value);
  store.commit("searchPush", state.value);
  console.log(data);
  state.palyList = data.result.songs;
}
function getPlay(id) {
  store.state.palymag.id = id;
  router.push(`/play`);
}
</script>

<style lang="less" scoped>
.con {
  margin: 10px 0.1rem;
  display: flex;
  flex-direction: column;
  .nav {
    flex: 1;
    display: flex;
    height: 100%;
    .left {
      width: 0.5rem;
      height: 0.5rem;
      left: 0;
    }
    .r {
      flex: 1;
      margin-left: 10px;
      input {
        border-radius: 999em;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid;
      }
    }
  }
  .body {
    flex: auto;
    .navs {
      display: flex;
      justify-content: space-between;
    }
    .tag {
      margin: 1px 5px;
    }
  }
}
</style>
