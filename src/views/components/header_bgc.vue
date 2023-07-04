<script setup lang='ts' name="video"></script>
<template>
    <div class="my_video">
        <img class="bgcimg" src="@/assets/imgs/nnn.jpeg" alt="video">
        <video muted playsinline autoplay loop>
            <source src="@/assets/imgs/nnn.mp4" type="video/mp4">
        </video>
        <div class="video_bgc">
            <div class="nav_logo">
                <img class="_img" src="@/assets/imgs/nav_logo.png" alt="logo" />
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.my_video {
    height: 100%;
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

        .nav_logo {
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
                height: 93.9px;
                width: 66.73px;
            }
        }
    }
}
</style>