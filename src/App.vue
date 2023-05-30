<script setup lang="ts">
import { ref } from 'vue'
const active = ref('home')
const active1 = ref(1)
</script>

<template>

  <div class="app-container">
      <router-view></router-view>
  </div>
  <van-tabbar route>
    <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" to="/search" icon="search">交易查询</van-tabbar-item>
    <van-tabbar-item name="finance" to="/finance" icon="cashier-o">财务专区</van-tabbar-item>
    <van-tabbar-item name="refund" to="/refund" icon="exchange">退款管理</van-tabbar-item>
    <van-tabbar-item name="opasst" to="/opasst" icon="orders-o">OPASST</van-tabbar-item>
    <van-tabbar-item name="message" to="/message" icon="chat-o">消息通知</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="stylus">
.app-container
  width 100%
  height 100%
</style>
