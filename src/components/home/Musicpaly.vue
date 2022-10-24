<template>
  <div class="body">
    <div class="nav">
      <van-icon name="play-circle" color="rgb(1,203,101)" size="0.55rem" />
      <p>全部播放(50)</p>
    </div>
    <div class="list" v-for="(i, index) in state.list" :key="i.id">
      <span>{{ index + 1 }}</span>
      <div class="name">
        <p class="h3">{{ i.name }}</p>
        <p>{{ i.ar[0].name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted, reactive } from "vue";
import { getPlaylist } from "@/request/api/home";

const state = reactive({
  list: [],
  lists: [],
});

onMounted(async (id) => {
  //
  // 获取
  // state.commit('getplaylist')
  try {
    const { data } = await getPlaylist(3778678);
    state.lists = data.playlist.tracks;
    state.list = state.lists.slice(0, 50);
    console.log(state.list[1]);
    // for (const i in state.lists) {
    //   state.list.push(i.id);
    // }
    // console.log(state.list);
  } catch {
    console.log(1);
  }
});
</script>
<style lang="less" scoped>
.body {
  margin: 0 0 1rem 0;
  .nav {
    display: flex;
    align-items: center;
    p {
      display: inline-block;
      line-height: 0.5rem;
      margin: 0 0 0 10px;
    }
  }
  .list {
    display: flex;
    align-items: center;
    margin: 0.2rem 0;
    .name {
      display: inline-block;
      margin: 0 0.2rem;
      .h3 {
        font-size: 0.35rem;
      }
      p {
        font-size: 0.25rem;
      }
    }
  }
}
</style>
