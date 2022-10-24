<template>
  <div class="body">
    <div class="nav">
      <van-icon name="play-circle" color="rgb(1,203,101)" size="0.55rem" />
      <p>全部播放(50)</p>
    </div>
    <div
      class="list"
      v-for="(i, index) in state.list"
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
</template>
<script setup>
import { onBeforeMount, onMounted, reactive, defineProps, watch } from "vue";
import { getPlaylist } from "@/request/api/home";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// const props = defineProps(["id"]);
const store = useStore();
const router = useRouter();
const state = reactive({
  list: [],
  lists: [],
  // id: props.id,
});
// 获取歌单列表
async function getPlaylists() {
  try {
    const { data } = await getPlaylist(store.state.palymag.listId);
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
}
// 监听 歌单
watch(
  () => store.state.palymag.listId,
  (n, o) => {
    getPlaylists();
  }
);
// 进入播放页 传入id 跳转
function getPlay(id) {
  store.state.palymag.id = id;
  router.push(`/play`);
}
// 组件载入时加载默认列表
onMounted(() => {
  console.log(state.id);
  getPlaylists();
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
