<script lang="ts" setup name="AppTopnav">
import { ref } from 'vue';

const navList = [
    { name: '首页', path: '/' },
    { name: '加入我们', path: '/' },
    { name: '联系我们', path: '/' },
]
const isActive = ref(0)
let app_topnav
let scrollTop = 0
const scroll = () => {
    app_topnav = document.querySelector('.app_topnav') as HTMLElement
    const navhight = app_topnav.offsetHeight
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > navhight) {
        app_topnav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    } else {
        app_topnav.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
}
window.addEventListener('scroll', scroll)
function tabbar(i: number) {
    isActive.value = i
    // 滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
<template>
    <nav class="app_topnav">
        <div class="container">
            <div class="body">
                <i></i>
                <div class="app_tab_bar">
                    <router-link v-for="(i, d) in navList" :key="d" class="app_tab_bar_item" to="/" @click="tabbar(d)">
                        <span :class="[isActive == d ? 'active' : '']">{{ i.name }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="less">
.app_topnav {
    position: fixed;
    z-index: 2023;
    top: 0;
    left: 0;
    right: 0;
    height: 106px;
    transition: all .1.5s;
    background-color: rgba(0, 0, 0, 0);


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
        }

    }
}
</style>