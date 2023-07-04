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
                                    <img v-for="(i, d) in 3" :src="'src/assets/imgs/Vector' + `${i}` + '.png'" alt="">
                                </div>
                                <div class="container-header-redleaves-heard-title-title-item">
                                    <img v-for="(i, d) in 6" :src="'src/assets/imgs/Vector' + `${i + 3}` + '.png'" alt="">
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
    }
}
</style>
