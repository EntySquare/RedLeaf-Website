<script lang="ts" setup name="AppTopnav">
import { Transform } from 'stream';
import { Transition, onUnmounted, ref } from 'vue';

const navList = [
    { name: '首页', path: '/' },
    { name: '加入我们', path: '/' },
    { name: '联系我们', path: '/' },
]
const isActive = ref(0)
const Active = ref(false)
let app_topnav
let scrollTop = 0
const isnone = ref(0)
const scroll = () => {
    Active.value = false
    app_topnav = document.querySelector('.app_topnav') as HTMLElement
    const navhight = 200
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > navhight) {
        app_topnav.style.display = 'none'
    } else {
        app_topnav.style.display = 'block'
    }
    isnone.value = scrollTop
}
window.addEventListener('scroll', scroll)
function tabbar(i: number) {
    isActive.value = i
    // 滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    Active.value = false
}
//实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth; //* 视口宽度赋值
}
handleViewportWidthChange();//* 初始化 默认调用一次
window.addEventListener('resize', handleViewportWidthChange); //* 监听视口宽度变化调用
//关闭监听
onUnmounted(() => {
    window.removeEventListener('resize', handleViewportWidthChange);
    window.removeEventListener('scroll', scroll)
})
</script>
<template>
    <nav class="app_topnav">
        <div class="poop" v-show="Active" @click="Active = false"></div>
        <div class="container">
            <div class="body">
                <i></i>
                <div class="app_tab_bar" v-if="viewportWidth > 768">
                    <router-link v-for="(i, d) in navList" :key="d" class="app_tab_bar_item" to="/" @click="tabbar(d)">
                        <span :class="[isActive == d ? 'active' : '']">{{ i.name }}</span>
                    </router-link>
                </div>
                <div v-else class="menu" @click="Active = !Active" :class="[Active ? 'menu_blue' : '']"
                    :style="{ background: Active ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, 0' }">
                    <img width="30" height="23" src="@/assets/svgs/menu.svg" alt="">
                </div>
                <div class="menu_body">
                    <router-link
                        :style="{ Transform: Active ? 'translateX(0px)' : 'translateX(106px)', Transition: Active ? `all .${d + 1}s` : `all .${3 - d + 1}s` }"
                        v-for="(i, d) in navList" :key="d" class="menu_body_item" to="/" @click="tabbar(d)">
                        <span :class="[isActive == d ? 'active' : '']">{{ i.name }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="less">
.poop {
    position: fixed;
    height: 100vh;
    width: 100vw;
}

.app_topnav {
    position: fixed;
    z-index: 2023;
    top: 0;
    left: 0;
    right: 0;
    height: 106px;
    transition: all .3s;


    .container {
        height: 100%;

        .body {
            max-width: 1600px;
            width: 100%;
            height: 100%;
            padding-right: 10px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            .app_tab_bar {
                height: 106px;
                display: flex;
                justify-content: space-between;
                justify-content: center;
                white-space: nowrap;

                &_item {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 0 25px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        color: #fff;
                        background-color: rgba(255, 255, 255, .2);
                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);
                    }

                    span,
                    .active {
                        height: 20px;
                    }

                    .active {
                        border-bottom: 1px solid #fff;
                    }
                }
            }

            .menu {
                height: 106px;
                width: 106px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                transition: all .3s;
            }

            .menu_body {
                position: absolute;
                bottom: -318px;
                right: 0;
                width: 106px;
                height: 318px;
                z-index: 2024;
                display: flex;
                flex-direction: column;


                &_item {
                    border-top: .5px solid #ffffff7a;
                    transition: all .3s;
                    transform: translateX(106px);
                    color: #fff;
                    height: 106px;
                    width: 106px;
                    line-height: 106px;
                    text-align: center;
                    background: rgba(255, 255, 255, .2);
                    -webkit-backdrop-filter: blur(10px);
                    backdrop-filter: blur(10px);
                }
            }

        }

    }
}

.menu_blue {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
</style>