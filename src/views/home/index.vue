<script lang="ts" setup name="Home">
const textlist = [
    '红', '叶', '点', '亮', '你', '的', '社', '交', '新', '生', '活',
]
//组件

</script>

<template>
    <div ref="home" class="home">
        <div class="container">
            <div class="container-header">
                <Video></Video>
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
                                        :height="i == 1 || i == 3 ? 91 : 68" alt="">
                                </div>
                                <div class="container-header-redleaves-heard-title-title-item">
                                    <img class="_img" v-for="(i, d) in 6"
                                        :src="'src/assets/imgs/Vector' + `${i + 3}` + '.png'" :height="i == 1 ? 91 : 68"
                                        alt="">
                                </div>
                            </div>
                            <div class="container-header-redleaves-text">
                                <span v-for="(i, d) in textlist">{{ i }}</span>
                            </div>
                        </div>
                        <i></i>
                    </div>
                    <div class="container-header-redleaves-btn">
                        下载红叶
                    </div>
                </div>
            </div>
            <div class="container_signinbox">
                <div class="container_signinbox_group">
                    <div class="container_signinbox_group_item">
                        <img src="@/assets/imgs/xin.png" alt="" height="60" width="71">
                        <span>聚焦真是的社交需求</span>
                    </div>
                    <i></i>
                    <div class="container_signinbox_group_item">
                        <img src="@/assets/imgs/xinbang.png" alt="" height="71.19" width="71.39">
                        <span>提供个性化社交体验</span>
                    </div>
                    <i></i>
                    <div class="container_signinbox_group_item">
                        <img src="@/assets/imgs/duoyuan.png" alt="" height="62" width="62">
                        <span>探索多元化社交可能</span>
                    </div>
                    <i></i>
                    <div class="container_signinbox_group_item">
                        <img src="@/assets/imgs/bajiaoxin.png" alt="" height="69.66" width="69.66">
                        <span>建立可信赖社交安全</span>
                    </div>
                </div>
                <hr>
                <div class="container_signinbox_title_bgc">
                    <div class="container_signinbox_title_bgc_textone">注册快捷，安全隐私</div>
                    <div class="container_signinbox_title_bgc_texttwo">聊天信息端对端多重加密</div>
                    <img class="phone" src="@/assets/imgs/phone.png" alt="">
                    <img class="leftleaf" src="@/assets/imgs/signin_leaf_left.png" alt="">
                    <img class="rightleaf" src="@/assets/imgs/signin_leaf_right.png" alt="">
                </div>
            </div>
            <div class="_dmsgbox">

            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    .container {
        overflow: hidden;

        &-header {
            height: 724px;
            width: 100%;
            position: relative;

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
                }
            }
        }

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
                width: 100%;
                color: #6B6B6B;
                display: flex;
                justify-content: center;
                align-items: end;

                &_item {
                    height: 100%;
                    width: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    align-items: center;

                    span {
                        font-size: 14px;
                        font-weight: 400;
                        height: 90px;
                        line-height: 90px;
                    }
                }

                i {
                    height: 100px;
                    width: 1px;
                    background: #E0E0E0;
                    margin-bottom: 50px;
                }
            }

            &_title_bgc {
                height: 100%;
                max-width: 1412px;
                width: 100%;
                color: #000;
                padding-left: 105px;
                gap: 10px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;

                &_textone {
                    font-size: 48px;
                    font-weight: 800;
                    height: 70px;
                }

                &_texttwo {
                    font-size: 30px;
                    font-weight: 400;
                    height: 44px;
                }

                .phone {
                    position: absolute;
                    object-fit: contain;
                    height: 200%;
                    right: 240px;
                    bottom: 15px;
                }

                .leftleaf {
                    position: absolute;
                    object-fit: contain;
                    width: 197px;
                    height: 201px;
                    left: 0;
                    top: 31px;
                }

                .rightleaf {
                    position: absolute;
                    object-fit: contain;
                    width: 261px;
                    height: 263px;
                    right: 0;
                    bottom: 0;
                }
            }
        }
    }

    hr {
        border: none;
        width: 100%;
        max-width: 1412px;
        height: 1px;
        background: #E0E0E0;
        margin: 0;
    }
}
</style>
