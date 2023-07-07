<script setup lang='ts' name="Joinus">
import { onUnmounted, ref } from 'vue'

//* 实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
const join_red_leaf = ref('342px')
const joinus_phone = ref('-29px')
const join_orign_leaf = ref('809px')
const container_joinus = ref('200px')
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth;
    if (viewportWidth.value < 1920) {
        join_red_leaf.value = (342 - ((1920 - viewportWidth.value) / 2.633333333333333)) + 'px'
        joinus_phone.value = (-29 - ((1920 - viewportWidth.value) / 4.514285714285714)) + 'px'
        join_orign_leaf.value = (809 - ((1920 - viewportWidth.value) / 2.31219512195122)) + 'px'
        container_joinus.value = (200 - ((1920 - viewportWidth.value) / 5.511627906976744)) + 'px'
    } else {
        join_red_leaf.value = '342px'
        joinus_phone.value = '-29px'
        join_orign_leaf.value = '809px'
        container_joinus.value = '200px'
    }
}
handleViewportWidthChange();
window.addEventListener('resize', handleViewportWidthChange);

//关闭监听
onUnmounted(() => {
    window.removeEventListener('resize', handleViewportWidthChange);
})
</script>
<template >
    <div class="Joinus">
        <div class="container">
            <!-- !头部 begin -->
            <div class="container-header">
                <div style="position: absolute;width: 100vw;height: 100vh;">
                    <Video></Video>
                </div>
                <div style="position: absolute;width: 100vw;height: 100vh;">
                    <HeaderBd></HeaderBd>
                </div>
            </div>
            <!-- !头部 end -->
            <div class="container_joinus" :style="{ paddingRight: container_joinus }">
                <img class="join_red_leaf" :style="{ right: viewportWidth > 1400 ? join_red_leaf : '' }"
                    src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/join_red_leaf.png" alt="">
                <img class="join_orign_leaf"
                    :style="{ left: viewportWidth > 1400 ? join_orign_leaf : '', top: viewportWidth > 1400 ? '551px' : '' }"
                    src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/join_orign_leaf.png" alt="">
                <img class="joinus_phone" :style="{ left: viewportWidth > 1400 ? joinus_phone : '' }"
                    src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/joinus_phone.png" alt="">
                <div class="container_joinus_text">
                    <div class="container_joinus_text_textone"><span>大約红叶</span><span>APP</span></div>
                    <div class="container_joinus_text_texttwo"><span>關於公司</span></div>
                    <div class="container_joinus_text_textthree">
                        XXXX有限公司成立于XXXX年，是一家以研发、运营为主的科技型公司，长期致力于软件开发，业务范围涉及：社交APP开发、移动互联网通讯技术等。公司由运营团队、产品团队、UI团队、开发团队及测试团队等多名具丰富行业的精英组成。旗下的「红叶」app于2023年推出，是一款主打安全加密聊天的手机通讯软件，现已在各大应用市场上线，上线首月用户已累积过万，如果您我们感兴趣，欢迎随时您加入我们！
                    </div>
                    <div class="doub_btn" v-if="viewportWidth > 1400">
                        <div class="btn_left">加入我們</div>
                        <div class="btn_right">生涯</div>
                    </div>
                </div>
                <div class="doub_btn" v-if="viewportWidth < 1400">
                    <div class="btn_left">加入我們</div>
                    <div class="btn_right">生涯</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.Joinus {
    .container {
        overflow: hidden;

        //* 头部
        &-header {
            height: 100vh;
            width: 100vw;
            position: relative;
        }

        //* 加入
        &_joinus {
            height: 893px;
            max-width: 1920px;
            width: 100%;
            padding-right: 200px;
            padding-top: 300px;
            position: relative;
            display: flex;
            justify-content: end;
            margin: 0 auto;

            &_text {
                position: relative;
                width: 562px;
                display: flex;
                flex-direction: column;
                align-items: start;

                &_textone {
                    font-size: 48px;
                    font-weight: 800;
                    min-height: 70px;
                    color: #000;
                    white-space: nowrap;
                }

                &_texttwo {
                    margin-top: 45px;
                    display: flex;
                    justify-content: center;
                    font-size: 30px;
                    font-weight: 400;
                    min-height: 44px;
                    white-space: nowrap;
                    color: #000;
                }

                &_textthree {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    // white-space: nowrap;
                    color: #000;
                    margin-top: 20px;
                }


            }

            .joinus_phone {
                transition: all 0.5s ease-in-out !important;
                position: absolute;
                min-width: 1158px;
                min-height: 693px;
                height: 693px;
                top: 81px;
            }

            .join_red_leaf {
                transition: all 0.5s ease-in-out !important;
                position: absolute;
                min-width: 197px;
                min-height: 201px;
                height: 201px;
                top: 159px;
            }

            .join_orign_leaf {
                transition: all 0.5s ease-in-out !important;
                position: absolute;
                min-width: 261px;
                min-height: 263px;
                height: 263px;
            }

            .doub_btn {
                position: relative;
                margin-top: 20px;
                display: flex;
                gap: 20px;

                .btn_left,
                .btn_right {
                    height: 42px;
                    width: 180px;
                    background: rgba(24, 24, 24, 1);
                    border-radius: 10px;
                    line-height: 42px;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>