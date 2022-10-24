<template>
  <!-- <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar> -->
  <div class="con">
    <div class="body">
      <router-link to="/">
        <van-icon name="audio" size="0.6rem" />
      </router-link>
      <van-icon name="music-o" size="0.6rem" @click="paly" />
      <router-link to="../">
        <van-icon name="contact" size="0.6rem" />
      </router-link>
    </div>
    <audio ref="audio" :src="state.palyUrl"></audio>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
// let palyUrl = ref();
const state = reactive({
  active: 0,
  palyUrl: "",
});
const audio = ref();

watch(
  () => store.state.palymag.playurl,
  (v, o) => {
    // console.log(v, "---", o);
    state.palyUrl = v;
    console.dir(audio.value.src);
  }
);

function paly() {
  console.log(
    store.state.palymag.playurl,
    store.state.palymag.play,
    state.palyUrl
  );
  store.state.palymag.play ? audio.value.pause() : audio.value.play();
  store.state.palymag.play
    ? store.commit("playMusic", 0)
    : store.commit("playMusic", 1);
}
</script>

<style lang="less" scoped>
.con {
  position: fixed;
  bottom: 0;
  background-color: #000;
  width: 100%;
  .body {
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0;
  }
}
</style>
