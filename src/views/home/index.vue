<script lang="ts" setup name="Home">
import { onUnmounted, ref } from 'vue';

const textlist = [
    '红', '叶', '点', '亮', '你', '的', '社', '交', '新', '生', '活',
]
const text2list = [
    '社', '交', '魅', '力', '尽', '在', '红', '叶', 'A', 'P', 'P',
]
//* 实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
const signinbox_title_PL = ref('362px')
const signinbox_leaf_PR = ref('250px')
const signinbox_leaf_PL = ref('254px')
const signinbox_Phone = ref('480px')
const dmsg_phone_L = ref('0px')
const dmsgbox_leaf_PL = ref('250px')
const dmsg_title_PL = ref('362px')
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth;
    if (viewportWidth.value < 1920) {
        signinbox_title_PL.value = (362 - ((1920 - viewportWidth.value) / 7.9)) + 'px'
        signinbox_leaf_PR.value = (250 - ((1920 - viewportWidth.value) / 6.1)) + 'px'
        signinbox_leaf_PL.value = (254 - ((1920 - viewportWidth.value) / 7.5)) + 'px'
        signinbox_Phone.value = (480 - ((1920 - viewportWidth.value) / 4)) + 'px'
        dmsg_phone_L.value = '-' + ((1920 - viewportWidth.value) / 4.232142857142857) + 'px'
        dmsgbox_leaf_PL.value = (250 - ((1920 - viewportWidth.value) / 6.771428571428571)) + 'px'
        dmsg_title_PL.value = (362 - ((1920 - viewportWidth.value) / 3.9)) + 'px'
    } else {
        signinbox_title_PL.value = '362px'
        signinbox_leaf_PR.value = '240px'
        signinbox_leaf_PL.value = '254px'
        signinbox_Phone.value = '480px'
        dmsg_phone_L.value = '0px'
        dmsgbox_leaf_PL.value = '250px'
        dmsg_title_PL.value = '362px'
    }
}
handleViewportWidthChange();
window.addEventListener('resize', handleViewportWidthChange);

//关闭监听
onUnmounted(() => {
    window.removeEventListener('resize', handleViewportWidthChange);
})
</script>
<template>
    <div ref="home" class="home">
        <div class="container">
            <!-- !头部 begin -->
            <div class="container-header">
                <div style="position: absolute;width: 100vw;height: 100vh;">
                    <Video></Video>
                </div>
                <div style="position: absolute;width: 100vw;height: 100vh;">
                    <HeaderBd isBtn></HeaderBd>
                </div>
            </div>
            <!-- !头部 end -->
            <!-- !注册 begin -->
            <div class="container_signinbox">
                <div class="container_signinbox_group">
                    <div class="container_signinbox_group_item">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/xin.png" alt="" height="60" width="71">
                        <span>聚焦真实的社交需求</span>
                    </div>
                    <i v-if="viewportWidth > 1348"></i>
                    <i v-if="viewportWidth < 1348 && viewportWidth > 768"></i>
                    <i class="i2" v-if="viewportWidth < 768"></i>
                    <div class="container_signinbox_group_item">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/xinbang.png" alt="" height="71.19"
                            width="71.39">
                        <span>提供个性化社交体验</span>
                    </div>
                    <i v-if="viewportWidth > 1348"></i>
                    <i class="i2" v-if="viewportWidth < 768"></i>
                    <div class="container_signinbox_group_item">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/duoyuan.png" alt="" height="62"
                            width="62">
                        <span>探索多元化社交可能</span>
                    </div>
                    <i v-if="viewportWidth > 1348"></i>
                    <i v-if="viewportWidth < 1348 && viewportWidth > 768"></i>
                    <i class="i2" v-if="viewportWidth < 768"></i>
                    <div class="container_signinbox_group_item">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/bajiaoxin.png" alt="" height="69.66"
                            width="69.66">
                        <span>建立可信赖社交安全</span>
                    </div>
                </div>
                <hr>
                <div class="container_signinbox_title_bgc" :style="{ paddingLeft: signinbox_title_PL }">
                    <img class="leftleaf" :style="{ left: viewportWidth > 768 ? signinbox_leaf_PL : '' }"
                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/signin_leaf_left.png" alt="">
                    <img class="rightleaf" :style="{ right: viewportWidth > 768 ? signinbox_leaf_PR : '' }"
                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/signin_leaf_right.png" alt="">
                    <img class="phone" :style="{ right: signinbox_Phone }"
                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/phone.png" alt="">
                    <div class="container_signinbox_title_bgc_textone"><span>注册快捷</span><span
                            v-if="viewportWidth > 768">，</span><span>安全隐私</span>
                    </div>
                    <div class="container_signinbox_title_bgc_texttwo"><span>聊天信息端</span><span>对端多重</span><span>加密</span>
                    </div>
                </div>
            </div>
            <!-- !注册 end -->
            <!-- !私聊 begin -->
            <div class="container_dmsgbox">
                <div class="dmsg_top">
                    <img class="dmsg_top_l" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/dmsg_top.png">
                    <img class="dmsg_top_r" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/dmsg_top.png">
                </div>
                <div class="dmsg_body" :style="{ paddingRight: dmsg_title_PL }">
                    <img class="dmsg_phone" :style="{ left: dmsg_phone_L }"
                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/dmsg_phone.png">
                    <img class="dmsg_leaf" :style="{ left: dmsgbox_leaf_PL }"
                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/dmsg_leaf_left.png">
                    <div class="text">
                        <div class="container_dmsgbox_textone"><span>私聊群聊</span><span
                                v-if="viewportWidth > 768">，</span><span>随心畅聊</span></div>
                        <div class="container_dmsgbox_texttwo"><span>双向撤回信</span><span>息不留痕迹</span></div>
                    </div>
                </div>
            </div>
            <!-- !私聊 end -->
            <!-- !人群 begin -->
            <div class="container_people">
                <div class="people_bgc">
                    <img class="people_img" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/finally_bgc.png">
                    <img class="people_img" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/finally_bgc.png">
                    <img class="people_img" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/finally_bgc.png">
                </div>
                <i class="people_bgc_color"> </i>
                <div class="container_people-redleaves">
                    <div class="container_people-redleaves-app-bgc">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/home_header_logo.png" alt=""
                            width="90.72" height="77.41">
                    </div>
                    <div class="yiwai">
                        <div class="container_people-redleaves-heard-title">
                            <div v-if="viewportWidth > 768" class="container_people-redleaves-heard-title-title">
                                <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 4"
                                    :key="d">{{
                                        text2list[d] }}</span>
                                <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 4"
                                    :key="d">{{
                                        text2list[4 + d] }}</span>
                                <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 3"
                                    :key="d">{{
                                        text2list[8 + d] }}</span>
                            </div>
                            <div v-else class="container_people-redleaves-heard-title-title">
                                <div>
                                    <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 4"
                                        :key="d">{{
                                            text2list[d] }}</span>
                                </div>
                                <div>
                                    <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 4"
                                        :key="d">{{
                                            text2list[4 + d] }}</span>
                                </div>
                                <div>
                                    <span class="container_people-redleaves-heard-title-title-item" v-for="(i, d) in 3"
                                        :key="d">{{
                                            text2list[8 + d] }}</span>
                                </div>
                            </div>
                            <div class="container_people-redleaves-text">
                                <span v-for="(i, d) in textlist" :key="d">{{ i }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="btn_box">
                        <a href="https://redleaves.s3.ap-east-1.amazonaws.com/RedLeaves-setup.dmg"
                            rel="noopener noreferrer">
                            <div class="container_people-redleaves-btn">
                                <img src="@/assets/mac.svg" alt="" srcset="">
                                Mac
                            </div>
                        </a>
                        <a href="https://redleaves.s3.ap-east-1.amazonaws.com/RedLeaves+Setup.exe"
                            rel="noopener noreferrer">
                            <div class="container_people-redleaves-btn">
                                <img src="@/assets/windows.svg" alt="" srcset="">
                                Windows
                            </div>
                        </a>
                        <a href="https://testflight.apple.com/join/tWR2VHsn" rel="noopener noreferrer" target="_blank">
                            <div class="container_people-redleaves-btn">
                                <img src="@/assets/mac.svg" alt="" srcset="">
                                Ios
                            </div>
                        </a>
                        <a href="https://redleaves.s3.ap-east-1.amazonaws.com/redleaves.apk" rel="noopener noreferrer">
                            <div class="container_people-redleaves-btn">
                                <img src="@/assets/android.svg" alt="" srcset="">
                                Android
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <!-- !人群 end -->
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    .container {
        width: 100%;
        overflow: hidden;

        //* 头部
        &-header {
            height: 100vh;
            width: 100vw;
            position: relative;
        }

        //* 注册
        &_signinbox {
            height: 768px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;

            &_group {
                height: 250px;
                padding: 0 18px;
                max-width: 1600px;
                width: 83.3333333333333vw;
                color: #6B6B6B;
                display: flex;
                justify-content: space-around;
                align-items: end;

                &_item {
                    height: 100%;
                    min-width: 126px;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;

                    span {
                        font-size: 14px;
                        font-weight: 400;
                        height: 90px;
                        line-height: 90px;
                        white-space: nowrap;
                    }
                }

                i {
                    height: 100px;
                    width: 1px;
                    background: #E0E0E0;
                    margin-bottom: 50px;
                }

                .i2 {
                    width: 100px;
                    height: 1px;
                    background: #E0E0E0;
                    margin-bottom: 50px;
                }
            }

            &_title_bgc {
                height: 100%;
                max-width: 1920px;
                width: 100%;
                color: #000;
                gap: 10px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;

                &_textone {
                    font-size: 48px;
                    font-weight: 800;
                    white-space: nowrap;
                }

                &_texttwo {
                    font-size: 30px;
                    font-weight: 400;
                    white-space: nowrap;
                }

                .phone {
                    position: absolute;
                    object-fit: contain;
                    right: 240px;
                    bottom: 15px;
                    transition: all 0.5s ease-in-out !important;

                }

                .leftleaf {
                    position: absolute;
                    object-fit: contain;
                    width: 197px;
                    height: 201px;
                    top: 31px;
                    transition: all 0.5s ease-in-out !important;

                }

                .rightleaf {
                    position: absolute;
                    object-fit: contain;
                    width: 261px;
                    height: 263px;
                    bottom: 0;
                    transition: all 0.5s ease-in-out !important;

                }
            }
        }

        //* 私聊
        &_dmsgbox {
            height: 793px;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;

            .dmsg_top {
                position: absolute;
                top: 0;
                display: flex;

                .dmsg_top_l,
                .dmsg_top_r {
                    transition: all 0.5s ease-in-out !important;

                    height: 562px;
                    min-width: 1920px;
                }

                .dmsg_top_r {
                    transform: rotateY(180deg);
                }
            }

            .dmsg_body {
                position: absolute;
                bottom: 0;
                left: 50%;
                height: 720px;
                transform: translateX(-50%);
                max-width: 1920px;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: end;

                .dmsg_phone {

                    max-width: 1108px;
                    max-height: 720px;
                    object-fit: contain;
                    position: absolute;
                    bottom: 0;
                    transition: all 0.5s ease-in-out !important;
                }

                .dmsg_leaf {
                    transition: all 0.5s ease-in-out !important;

                    max-width: 224px;
                    max-height: 227px;
                    object-fit: contain;
                    position: absolute;
                    bottom: 0;
                    left: 250px;
                }
            }

            &_textone {
                font-size: 48px;
                font-weight: 800;
                min-height: 70px;
                color: #000;
                white-space: nowrap;
            }

            &_texttwo {
                display: flex;
                justify-content: center;
                font-size: 30px;
                font-weight: 400;
                min-height: 44px;
                white-space: nowrap;
                color: #000;
            }
        }

        //* 人群
        &_people {
            height: 724px;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;

            .people_bgc {
                position: absolute;
                top: 0;
                display: flex;

                .people_img {
                    height: 724px;
                    min-width: 1490px;
                }

            }

            .people_bgc_color {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background: rgba(216, 61, 61, 0.8);
            }

            &-redleaves {
                position: absolute;
                height: 724px;
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

                    i {
                        flex: 1;
                    }
                }

                &-app-bgc {
                    width: 126px;
                    height: 126px;
                    background: #ffffff;
                    border-radius: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                &-heard-title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 712px;

                    &-title {
                        width: 100%;
                        margin-top: 40px;
                        display: flex;
                        align-items: end;
                        justify-content: center;
                        flex-wrap: wrap;

                        &-item {
                            flex: 1;
                            font-size: 55px;
                            font-weight: 600;
                            text-align: center;
                        }


                    }
                }

                &-text {
                    width: 604px;
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                }

                .btn_box {
                    margin-top: 72px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }

                &-btn {
                    cursor: pointer;
                    width: 144px;
                    height: 40px;
                    color: white;
                    border: 2px solid #fff;
                    border-radius: 18px;
                    background-color: rgba(255, 255, 255, 0.2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 400;
                    white-space: nowrap;
                    display: flex;
                    gap: 5px;

                    img {
                        width: 20px;
                    }
                }
            }
        }
    }

    hr {
        border: none;
        width: 73.5416666666667vw;
        max-width: 1412px;
        height: 1px;
        background: #E0E0E0;
        margin: 0;
    }
}
</style>
