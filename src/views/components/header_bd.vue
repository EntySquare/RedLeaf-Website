<script setup lang='ts'>
import { onUnmounted, ref } from 'vue';

//接受父组件参数
const props = defineProps({
    isBtn: {
        type: Boolean,
        default: false
    }
});
function download() {
    if (props.isBtn) {
        console.log('1:', 1)
    }
}

const textlist = [
    '红', '叶', '点', '亮', '你', '的', '社', '交', '新', '生', '活',
]
//* 实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth;
}
handleViewportWidthChange();
window.addEventListener('resize', handleViewportWidthChange);

//关闭监听
onUnmounted(() => {
    window.removeEventListener('resize', handleViewportWidthChange);
})
</script>
<template>
    <div class="container">
        <div class="container-header-redleaves">
            <div class="container-header-redleaves-app-bgc">
                <img src="@/assets/imgs/home_header_logo.png" alt="" width="90.72" height="77.41">
            </div>
            <div class="yiwai">
                <i></i>
                <div class="container-header-redleaves-heard-title">
                    <div class="container-header-redleaves-heard-title-title">
                        <div class="container-header-redleaves-heard-title-title-item">
                            <img class="_img" v-for="(i, d) in 3" :src="'src/assets/imgs/Vector' + `${i}` + '.png'"
                                :height="viewportWidth < 768 ? (i == 1 || i == 3 ? 57 : 43) : (i == 1 || i == 3 ? 91 : 68)"
                                alt="">
                        </div>
                        <div class="container-header-redleaves-heard-title-title-item">
                            <img class="_img" v-for="(i, d) in 6" :src="'src/assets/imgs/Vector' + `${i + 3}` + '.png'"
                                :height="viewportWidth < 768 ? (i == 1 ? 57 : 43) : (i == 1 ? 91 : 68)" alt="">
                        </div>
                    </div>
                    <div class="container-header-redleaves-text">
                        <span v-for="(i, d) in textlist">{{ i }}</span>
                    </div>
                </div>
                <i></i>
            </div>
            <div class="container-header-redleaves-btn" :style="{ opacity: isBtn ? 1 : 0 }" @click="download">
                下载红叶
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
//* 头部
.container {
    height: 100vh;
    width: 100%;

    &-header {
        height: 100vh;
        width: 100%;
        position: relative;

        &-redleaves {
            position: absolute;
            height: 100vh;
            width: 100%;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .yiwai {
                width: 100%;
                display: flex;
                justify-content: center;
            }

            &-app-bgc {
                width: 126px;
                height: 126px;
                background: linear-gradient(135deg, #ffffffef 50%, #ffffff57 100%);
                border-radius: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &-heard-title {

                &-title {
                    margin-top: 40px;
                    display: flex;
                    align-items: end;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 27px;

                    &-item {
                        display: flex;
                        align-items: end;
                        gap: 12px;
                    }
                }
            }

            &-text {
                margin-top: 14px;
                display: flex;
                justify-content: space-between;
            }

            &-btn {
                cursor: pointer;
                margin-top: 72px;
                width: 144px;
                height: 40px;
                border: 2px solid #fff;
                border-radius: 18px;
                background-color: rgba(255, 255, 255, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 400;
                white-space: nowrap;
            }
        }
    }
}
</style>