<!--
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-11-17 02:50:12
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
        <van-icon name="delete-o" size="0.4rem" />
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
    <div class="base">
      <div
        class="list"
        v-for="(i, index) in state.palyList"
        :key="i.id"
        @click="getPlay(i.id)"
      >
        <!-- <span>{{ index + 1 }}</span> -->
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
import { onBeforeMount, onMounted, reactive, onBeforeUnmount } from "vue";
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
  if (store.state.search.length !== 0) {
    console.log("vuex");
    state.search = store.state.search;
    return;
  }
  let res = JSON.parse(localStorage.getItem("search"));
  console.log(res);
  state.search = res.search;
});
onBeforeUnmount(() => {
  localStorage.setItem(
    "search",
    JSON.stringify({
      search: state.search,
    })
  );
});
async function onSearch() {
  // store.state.palyList.push(state.value);
  if (state.value === "") {
    console.log("输入为空");
    return false;
  }
  const { data } = await getSearchMusic(state.value);
  console.log(data);
  store.commit("searchPush", state.value);

  state.palyList = data.result.songs;
  console.log(state.palyList);
}
function getPlay(id) {
  store.state.palymag.id = id;
  console.log(store.state.palymag.id);
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
      display: flex;
      justify-content: space-between;
      input {
        border-radius: 999em;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid;
        flex: 1;
        padding: 0 10px;
        margin: 0 5px;
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
      margin: 5px;
      span {
        margin: 10px 2px;
        padding: 5px;
        border-radius: 999rem;
        background-color: rgba(131, 128, 128, 0.151);
        color: rgba(255, 255, 255, 0.603);
      }
    }
  }
  .base {
    margin: 0 0 1rem 0;
    flex: 1;
    .list {
      .name {
        margin: 10px;
      }
    }
  }
}
</style>
