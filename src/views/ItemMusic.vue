<template>
  <TopNav></TopNav>
  <!-- 播放详情 -->
  <div class="con">
    <!-- 图片 -->
    <img :src="state.list[0].al.picUrl" alt="" />
    <!-- 歌词 -->
    <div class="geci">
      <p>1</p>
      <p>geci</p>
      <p>歌词</p>
    </div>
    <!-- 功能组 -->
    <div class="gongneng">
      <!-- 信息 -->
      <div class="mag">
        <h2>{{ state.list[0].name }}</h2>
        <p>{{ state.list[0].ar[0].name }}</p>
        <span>关注</span>
      </div>
      <!-- 功能 -->
      <!-- https://music.163.com/song/media/outer/url?id=id.mp3  -->
      <div class="icons">
        <div>
          <van-icon name="like-o" badge="99+" size="0.55rem" class="icon" />
          <van-icon name="chat-o" badge="99+" size="0.55rem" class="icon" />
          <van-icon name="share" badge="99+" size="0.55rem" class="icon" />
        </div>
        <div>
          <van-icon name="bars" size="0.55rem" class="icon" />
          <van-icon name="ellipsis" size="0.5rem" class="icon" />
        </div>
      </div>
      <!-- 进度条 -->
      <div class="pivot">
        <van-progress pivot-text="白色" color="#f2826a" percentage="25" />
      </div>
    </div>
  </div>
  <!-- <ItemMusicTop :playlist="state.playList"></ItemMusicTop>
  <ItemMusicList :itemlist="state.itemList" :subscribedCount="state.playList.subscribedCount"></ItemMusicList> -->
</template>

<script setup>
// import { useRoute } from "vue-router";
import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import {
  getMusicItemList,
  getItemList,
  getDetail,
} from "@/request/api/item.js";
import TopNav from "@/components/home/TopNav.vue";
import { useStore } from "vuex";
const store = useStore();

const state = reactive({
  list: [],
  palyUrl: "",
});

onBeforeMount(async () => {
  const { data } = await getDetail(store.state.palymag.id);
  store.state.palymag.playurl = `https://music.163.com/song/media/outer/url?id=${store.state.palymag.id}.mp3`;
  state.list = data.songs;
  // console.log(store.state.palymag.playurl, "----");
});
// 播放暂停
// 进入 旁边音乐id是否改变 改变暂停
watch(
  () => store.state.palymag.id,
  () => {
    store.state.palymag.play = 0;
  }
);
</script>

<style lang="less" scoped>
.con {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  margin: 0.2rem 0.3rem;
  height: 100%;
  img {
    // flex: 1;
    border-radius: 0.3rem;
    width: 7rem;
    padding: 0.1rem;
    margin: 5px 0;
  }
  .geci {
    // flex: 1;
    height: 2rem;
    padding: 0.5rem 0;
    background-color: aquamarine;
  }
  .gongneng {
    // flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .mag {
      margin: 0.5rem 0;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      padding: 0.3rem 0;
      .icon {
        margin: 0.05rem 0.1rem;
      }
    }
    .pivot {
      margin: 0.3rem 0;
    }
    h2 {
      font-size: 0.38rem;
      padding: 0.1rem;
    }
    p {
      font-size: 0.31rem;
      display: inline-block;
      padding: 0.1rem;
    }
    span {
      font-size: 0.18rem;
      padding: 0.1rem 0.2rem;
      margin: auto;
      border-radius: 999em;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
