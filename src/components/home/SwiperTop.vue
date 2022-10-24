<template>
  <div class="con">
    <p class="p">音乐电台</p>
    <div class="body">
      <div class="mag" v-for="i in state.list.slice(0, 5)" :key="i.id">
        <p>{{ i.category }}</p>
      </div>
      <br />
      <div class="mag" v-for="i in state.list.slice(5, 10)" :key="i.id">
        <p>{{ i.category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount, reactive } from "vue";
import { getPerson } from "@/request/api/home";

const state = reactive({
  list: [],
});

onMounted(async () => {
  try {
    const { data } = await getPerson();
    state.list = data.djRadios;
  } catch {
    console.log("初始化错误");
  }
});
</script>

<style lang="less" scoped>
.con {
  // display: flex;

  padding: 0 0 0 0.2rem;
  overflow: hidden;
  .p {
    font-size: 0.45rem;
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
      width: 2.3rem;
      height: 1.7rem;
      margin: 0.2rem;
      background-color: #333;
      display: inline-block;
      padding: 0.2rem;
      border-radius: 5px;
    }
  }
}
</style>
