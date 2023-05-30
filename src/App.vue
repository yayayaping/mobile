<script setup lang="ts">
import { ref } from 'vue'
const active = ref('home')
const active1 = ref(1)
</script>

<template>

<van-tabs v-model:active="active1">
  <van-tab v-for="index in 8" :title="'标签 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">交易查询</van-tabbar-item>
    <van-tabbar-item name="finance" icon="cashier-o">财务专区</van-tabbar-item>
    <van-tabbar-item name="refund" icon="exchange">退款管理</van-tabbar-item>
    <van-tabbar-item name="opasst" icon="orders-o">OPASST</van-tabbar-item>
    <van-tabbar-item name="message" icon="chat-o">消息通知</van-tabbar-item>
  </van-tabbar>
</template>

<style>
</style>
