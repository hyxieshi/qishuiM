/*
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 18:39:57
 * @FilePath: \src\request\api\home.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-10-22 23:41:23
 */
import req from "..";

// 获取首页轮播图的数据
export function getBanner() {
  return req({
    method: "GET",
    url: "/banner?type=2",
  });
}
// 获取首页电台
export function getPerson() {
  return req({
    method: "GET",
    url: "/dj/recommend",
  });
}
// 获取歌单详情
export function getPlaylist(id) {
  return req({
    method: "GET",
    url: `/playlist/detail?id=${id}`,
  });
}
//获取发现好歌单
export function getMusicList() {
  return req({
    method: "GET",
    url: "/personalized?limit=10",
  });
}
// 实现搜索
export function getSearchMusic(data) {
  return req({
    method: "GET",
    url: `/search?keywords="${data}"`,
  });
}
// 发送短信验证码
export function sendCode(phone) {
  return req({
    method: "GET",
    url: `/captcha/sent?phone=${phone}`,
  });
}

// 验证短信验证码
export function byCode(phone, captcha) {
  return req({
    method: "POST",
    url: `/captcha/verify?phone=${phone}&captcha=${captcha}`,
  });
}

// 获取用户详情
export function getLoginUser() {
  return req({
    method: "GET",
    url: "/user/detail?uid=5058022655",
  });
}
// 获取临时cookie

export function getCookie() {
  return req({
    method: "GET",
    url: "/register/anonimous",
  });
}
