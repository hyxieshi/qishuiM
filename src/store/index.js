import { createStore } from "vuex";
import { getMusicLyric } from "@/request/api/item.js";
// import { getPhoneLogin } from '@/request/api/home.js'

export default createStore({
  state: {
    playList: [
      {
        al: {
          id: 2800780,
          name: "Lock Me Up EP",
          pic: 109951166194689310,
          picUrl:
            "https://p1.music.126.net/GM4ofgyKaCZD2e1I10BKqQ==/109951166194689304.jpg",
          pic_str: "109951166194689304",
        },
        id: "1905157827",
        ar: [
          {
            name: "The Cab",
          },
        ],
        name: "Lock Me Up EP",
      },
    ],
    playListIndex: 0, // 默认下标 0
    isBtnShow: true, // 暂停按钮的显示
    detailShow: false, // 歌曲详情页的显示
    lyricList: {}, //歌词
    currentTime: 0, // 当前时间
    duration: 0, // 歌曲总时长
    isLogin: false, // 判断是否登录
    token: "",
    user: {}, // 用户信息
    search: [],
    palymag: {
      id: "1986655781", //歌曲id
      playurl: "", //歌曲url
      picUrl: "", //图片url
      play: 0, //是否播放
      listId: 3778678, //歌单id
    },
  },

  getters: {},
  mutations: {
    updateIsBtnShow(state, value) {
      state.isBtnShow = value;
    },
    pushPlayList(state, value) {
      state.playList.push(value);
    },
    // 历史记录
    searchPush(state, value) {
      // 只加入没有的
      if (!state.search.includes(value)) {
        state.search.push(value);
      }
    },
    // 播放
    playMusic(state, value) {
      state.palymag.play = value;
    },
    getListId(state, value) {
      state.palymag.listId = value;
    },
    updatePlayList(state, value) {
      state.playList = value;
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value;
    },
    updateDetailShow(state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList(state, value) {
      state.lyricList = value;
    },
    updateCurrentTime(state, value) {
      state.currentTime = value;
    },
    updateDuration(state, value) {
      state.duration = value;
    },
    updateIsLogin(state, value) {
      state.isLogin = value;
    },
    updateToken(state, value) {
      state.token = value;
      localStorage.setItem("token", state.token);
    },
    updateUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async getLyric(context, value) {
      let res = await getMusicLyric(value);
      context.commit("updateLyricList", res.data.lrc);
    },
    async getLogin(context) {
      let res = await getPhoneLogin();
      return res;
    },
  },
  modules: {},
});
