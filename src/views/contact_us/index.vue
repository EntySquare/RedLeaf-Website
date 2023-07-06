<script setup lang='ts' name="Contacts">
import { onUnmounted, ref } from 'vue';


//实时监听视口宽度
const viewportWidth = ref(0) //* 视口宽度
const Contact_text_l = ref('1232px')
const Contact_text_r = ref('357px')
const phone_picture_l = ref('221px')
const Maple_leaf_image_l = ref('399px')
// const signinbox_title_PL = ref('362px') //* 私密信息标题左边距
function handleViewportWidthChange() {
    viewportWidth.value = window.innerWidth; //* 视口宽度赋值
    if (viewportWidth.value < 1920) { //* 如果视口宽度小于1920
        Contact_text_l.value = (1232 - ((1920 - viewportWidth.value) / 1.606779661016949)) + 'px'
        Contact_text_r.value = (357 - ((1920 - viewportWidth.value) / 2.64804469273743)) + 'px'
        phone_picture_l.value = (221 - ((1920 - viewportWidth.value) / 3.674418604651163)) + 'px'
        Maple_leaf_image_l.value = (399 - ((1920 - viewportWidth.value) / 2.278846153846154)) + 'px'

        // signinbox_title_PL.value = (362 - ((1920 - viewportWidth.value) / 4.016949152542373)) + 'px' //* 计算私密信息标题左边距
    } else {
        Contact_text_l.value = '1232px'
        Contact_text_r.value = '357px'
        phone_picture_l.value = '221px'
        Maple_leaf_image_l.value = '399px'
        // signinbox_title_PL.value = '362px' //* 私密信息标题左边距
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
    <div class="contact_us">

        <div class="container">
            <!-- !头部 begin -->
            <div class="container-header">
                <div style="position: absolute ; width: 100vw;height: 100vh; ">
                    <Video></Video>
                </div>
                <div style="position: absolute; width: 100vw;height: 100vh;">
                    <HeaderBd></HeaderBd>
                </div>
            </div>
            <div class="my_message">
                <div class="Contact_text" :style="{ right: Contact_text_r }">
                    <div class="Contact_text_title">联系我们</div>
                    <div class="Contact_text_content">
                        提交所有资讯以进行联系
                    </div>
                </div>
                <div class="Message_box">
                    <div class="Little_maple_leaf">
                        <img class="" src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/isolated-autumn-leaves1.png"
                            alt="">
                    </div>
                    <div class="Input_field">
                        <div class="contact_top">
                            <div class="contact_name">
                                <div class="name">名字</div>
                                <div class="name_input"><textarea placeholder="您的姓名" rows="1" cols="50"
                                        maxlength="20"></textarea></div>
                            </div>
                            <div class="contact_email">
                                <div class="email">电子邮件</div>
                                <div class="email_input"><textarea placeholder="您的电子邮件" rows="1" cols="50"
                                        maxlength="30"></textarea></div>
                            </div>
                        </div>
                        <div class="contact_center">
                            <div class="theme">主题</div>
                            <div class="theme_input"><textarea placeholder="主题" rows="1" cols="50"
                                    maxlength="30"></textarea></div>
                        </div>
                        <div class="contact_bottom">
                            <div class="message">消息</div>
                            <div class="message_input"><textarea placeholder="您的留言" rows="5" maxlength="100"></textarea>
                            </div>
                        </div>
                        <div class="button">
                            <button>发送消息</button>
                        </div>
                    </div>
                    <div class="Big_maple_leaf">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/isolated-autumn-leaves.png" alt="">
                    </div>
                </div>

            </div>
            <div class="Download">
                <div class="red_leaves">
                    <div class="icon_bg">
                        <div class="centered-image">
                            <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/icon_bg.png" alt="">
                        </div>
                        <div class="icon">
                            <!-- home_header_logo -->
                            <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/home_header_logo.png" alt="">
                        </div>
                    </div>
                    <div class="DownLoad_l" :style="{ flexDirection: viewportWidth <= 1554 ? 'column' : 'row' }">
                        <div class="Download_text">
                            <div class="Download_text_title">
                                <!-- 1384px -->
                                <img :src="viewportWidth <= 1384 && viewportWidth > 790 ? 'https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/Group_Download1.png' : 'https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/Group_Download.png'"
                                    alt="">
                            </div>
                            <div class="Download_text_content">
                                红叶点亮你的社交新生活
                            </div>
                        </div>
                        <div class="DownLoad_right" :style="{ marginBottom: viewportWidth <= 1554 ? '0' : '18' }">
                            <div class="app_store">
                                <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/app_store.png" alt="">
                            </div>
                            <div class="google_play">
                                <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/google_play.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- phone_picture_l -->
                <!-- :style="{ marginLeft: phone_picture_l }" -->
                <div class="phone_picture">
                    <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/coll_phone.png" alt="">
                </div>
            </div>
            <div class="map">
                <div class="map_img">
                    <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/map.png" alt="">
                </div>
            </div>
            <div class="Get_in_touch_box_big">
                <div class="Get_in_touch_box">
                    <!-- Maple_leaf_image_l -->
                    <div class="Maple_leaf_image" v-if="viewportWidth > 790" :style="{ left: Maple_leaf_image_l }">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/signin_leaf_left.png" alt="">
                    </div>
                    <div class="Get_in_touch_box_right">
                        <div class="Get_in_touch">
                            取得联系
                        </div>
                        <div class="connection_us">
                            联系我们
                        </div>
                        <div class="tel_and_mail">

                            <div class="telephone">
                                <div class="telephone_icon"><img
                                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/svg/coll.svg"
                                        alt="SVG Image"></div>
                                <div class="telephone_text">电话: 13345678901</div>
                            </div>
                            <div class="mailbox">
                                <div class="mailbox_icon"><img
                                        src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/svg/email.svg"
                                        alt="SVG Image"></div>
                                <div class="mailbox_text">邮箱:1111111111@qq.com</div>
                            </div>
                        </div>
                        <div class="address">
                            <div class="address_icon"><img
                                    src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/svg/location.svg"
                                    alt="SVG Image"></div>
                            <div class="address_text">
                                地址：国家，城市，地区，街道，建筑物名称，大门，楼层，办公室编号。
                            </div>
                        </div>
                    </div>
                    <div class="Maple_leaf_image1" v-if="viewportWidth <= 790">
                        <img src="https://redleaves-ety.oss-cn-shenzhen.aliyuncs.com/signin_leaf_left.png" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped lang='less'>
.contact_us {

    img {
        vertical-align: bottom;

    }

    .container {
        margin: 0 auto;
        position: relative;

        .container-header {
            height: 100vh;
            width: 100vw;
            position: relative;
        }

        button,
        textarea {
            border: none;
        }

        textarea {
            outline: none;
            background: #f7f7f7;
            line-height: 38px;
            height: 42px;
            width: 100%;
            padding-left: 24px;
            border-radius: 10px;
            margin-top: 9px;
            margin-bottom: 16px;
            resize: none; //禁止拖动
        }

        .my_message {
            // !
            min-height: 976px;
            // background-color: #F7F7F7;
            margin: 0 auto;
            max-width: 1920px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding-top: 28px;

            .Message_box {
                margin: 0 auto;
                position: relative;
                height: 830px;
                width: 1444px;

                .Little_maple_leaf {
                    z-index: 1;
                    width: 204px;
                    height: 208px;
                    position: absolute;
                    left: 0;
                    top: 0;

                }

                .Input_field {
                    // position: absolute;
                    margin-left: 138px;
                    margin-top: 106px;
                    padding: 74px 38px;
                    width: 609px;
                    height: 609px;
                    background-color: #fff;
                    border-radius: 20px;
                    color: #000;
                    font-size: 12px;
                    font-weight: 600;

                    .contact_top {
                        display: flex;
                        z-index: 100;
                        position: relative;
                        justify-content: space-between;


                        .contact_name,
                        .contact_email {
                            width: 260px;
                        }

                    }

                    .name,
                    .email,
                    .theme,
                    .message {
                        margin-left: 10px;
                    }

                    .contact_bottom {
                        z-index: 100;
                        position: relative;

                        .message_input {
                            textarea {
                                height: 184px;

                            }
                        }
                    }

                    .button {
                        z-index: 200;
                        display: flex;
                        justify-content: center;

                        button {
                            z-index: 200;
                            width: 265px;
                            height: 42px;
                            border-radius: 10px;
                            margin-top: 16px;
                            background-color: #000;
                            color: #fff;
                            font-weight: 600;
                            font-size: 12px;
                        }
                    }
                }



            }

            .Big_maple_leaf {
                z-index: 1;
                width: 858px;
                height: 335px;
                position: absolute;
                right: 0px;
                bottom: 0px;

            }

            .Contact_text {
                color: #000;
                position: absolute;
                top: 365px;
                right: 357px;

                .Contact_text_title {
                    font-size: 48px;
                    font-weight: 800;
                }

                .Contact_text_content {
                    font-size: 30px;
                    font-weight: 400;
                }
            }

        }

        .Download {
            height: 282px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #CF4241;

            .red_leaves {
                height: 282px;
                display: flex;
                align-items: center;
            }


            // margin-top: 100px;
            .icon_bg {
                width: 131px;
                height: 131px;
                margin-right: 29px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                .centered-image {
                    img {
                        min-width: 131px;
                        height: 131px;
                    }
                }


                .icon {
                    width: 94.324px;
                    height: 80.48px;
                    position: absolute;


                }
            }

            .DownLoad_l {
                display: flex;
                justify-content: space-between;

                .Download_text {
                    width: 245.773px;
                    margin-right: 87.23px;

                    .Download_text_title {
                        img {
                            min-width: 245.773px;
                            height: 38.384px;
                        }
                    }

                    .Download_text_content {
                        font-size: 12px;
                        margin-top: 13.62px;
                    }
                }

                .DownLoad_right {
                    margin: 18px auto;
                    display: flex;
                    justify-content: space-between;

                    .app_store {
                        margin-right: 25px;

                        img {
                            min-width: 141px;
                            height: 47px;
                        }
                    }

                    .google_play {
                        img {
                            min-width: 141px;
                            height: 47px;
                        }
                    }
                }

            }

        }

        .phone_picture {
            z-index: 100;
            // margin-left: 221px;
            width: 376px;
            height: 591px;
            margin-bottom: 44px;

            img {
                min-width: 376px;
                height: 591px;
            }
        }

        .map {
            margin: 0 auto;
            margin-top: 157px;
            padding: 0 140px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .map_img {


                img {
                    min-width: 1167px;
                }
            }
        }



        .Get_in_touch_box_big {
            margin: 0 auto;
            max-width: 1920px;

            .Get_in_touch_box {
                height: 428px;
                display: flex;
                padding-top: 16px;
                align-items: center;
                justify-content: center;
                width: 100%;
                color: #000;
                position: relative;

                .Maple_leaf_image {
                    display: inline-block;
                    width: 197px;
                    height: 201px;
                    position: absolute;
                    left: 399px;
                    top: 16px;


                    img {
                        display: inline-block;
                        width: 197px;
                        height: 201px;
                    }
                }

                .Get_in_touch_box_right {
                    display: flex;
                    //更改主轴方向
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .tel_and_mail,
                    .telephone,
                    .mailbox,
                    .address {
                        display: flex;
                    }

                    .telephone_text,
                    .mailbox_text,
                    .address_text {
                        font-size: 12px;
                    }

                    .Get_in_touch {
                        font-size: 48px;
                        font-weight: 800;
                    }

                    .connection_us {
                        font-size: 30px;
                        margin-top: 14px;
                        margin-bottom: 30px;
                    }

                    .tel_and_mail {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;

                        .telephone {
                            // align-items: center;

                            .telephone_icon {
                                margin-right: 6px;
                                width: 14.24px;
                                height: 14.239px;

                                img {
                                    vertical-align: top;
                                }
                            }


                        }

                        .mailbox {

                            align-items: center;

                            .mailbox_icon {
                                margin-left: 9px;
                                margin-right: 5px;

                                img {
                                    vertical-align: top;
                                }
                            }


                        }
                    }

                    .address {
                        align-items: start;

                        .address_icon {
                            img {
                                vertical-align: top;
                            }
                        }

                        .address_text {
                            text-align: center;
                            word-break: break-all;
                            width: 252px;
                            width: 250px;
                            margin: 0;
                            padding: 0;
                            line-height: 20px;
                        }

                    }
                }



            }


        }


    }

}
</style>