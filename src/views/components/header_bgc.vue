<script setup lang='ts' name="video">
import { onUnmounted, ref, } from 'vue';

//实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
const logo_L = ref('160px') //* 私密信息手机图片左边距
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth; //* 视口宽度赋值
    if (viewportWidth.value < 1920) { //* 如果视口宽度小于1920
        logo_L.value = (160 - ((1920 - viewportWidth.value) / 8.315789473684211)) + 'px' //* 计算私密信息手机图片左边距
    } else {
        logo_L.value = '0px' //* 私密信息手机图片左边距
    }
}
handleViewportWidthChange();//* 初始化 默认调用一次
window.addEventListener('resize', handleViewportWidthChange); //* 监听视口宽度变化调用

//关闭监听
onUnmounted(() => {
    window.removeEventListener('resize', handleViewportWidthChange);
})
</script>
<template>
    <div class="my_video">
        <img class="bgcimg" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/nnn.jpeg" alt="video">
        <video muted playsinline autoplay loop>
            <source src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/nnn.mp4" type="video/mp4">
        </video>
        <div class="video_bgc">
            <div class="body">
                <div class="nav_logo" :style="{ left: logo_L }">
                    <img class="_img" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/nav_logo.png" alt="logo" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.my_video {
    height: 100vh;
    width: 100%;
    position: relative;

    .bgcimg {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
    }

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        object-fit: cover;
    }

    .video_bgc {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(216, 61, 61, 0.8);


        .body {
            position: relative;
            max-width: 1600px;
            margin: 0 auto;

            .nav_logo {
                transition: all 0.5s ease-in-out !important;
                position: absolute;
                height: 160px;
                width: 145px;
                top: 0;
                left: 160px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

                ._img {
                    transition: all 0.5s ease-in-out !important;
                    height: 93.9px;
                    width: 66.73px;
                }
            }
        }

    }
}
</style>