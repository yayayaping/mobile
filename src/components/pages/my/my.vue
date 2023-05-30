<!--
* My
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 16:13:44
* @since 0.0.0
-->

<template>
    <div class="container">

        <van-contact-card type="edit" tel="15807551258" name="Abby" class="mb30" />
        <!-- <van-skeleton title avatar :row="3" class="mb30" /> -->

        <van-cell-group>
            <van-cell title="商户账号的登录" is-link />
            <van-cell title="消息通知" is-link />
            <van-cell title="帮助中心" is-link />
        </van-cell-group>
    </div>
</template>

<script lang="ts" setup>
import { computed, } from 'vue'
</script>

<style src="./my.styl" lang="stylus" scoped></style>
