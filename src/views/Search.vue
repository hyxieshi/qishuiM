<template>
  <div class="con">
    <div class="nav">
      <van-icon name="arrow-left" class="left" size="0.55rem" />
      <div class="r">
        <van-icon name="search" @click="onSearch" size="0.55rem" />
        <input v-model="state.value" placeholder="请输入搜索歌名" />
      </div>
    </div>
    <br />
    <div class="body">
      <div class="navs">
        <h3>搜索记录</h3>
        <van-icon name="delete-o" size="0.55rem" />
      </div>
      <div>
        <span v-for="(i, index) in state.search" :key="index">{{ i }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSearchMusic } from "@/request/api/home.js";
import { onBeforeMount, onMounted, reactive } from "vue";
import { useStore } from "vuex";
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
  state.palyList = data.result.songs;
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
  }
}
</style>
