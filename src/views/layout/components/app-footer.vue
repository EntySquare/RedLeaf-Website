<script lang="ts" setup name="AppFooter"></script>
<template>
    <footer class="app_footer">
        <div class="container">
            <div class="container_body">
                <div class="container_body_left">
                    <img src="@/assets/imgs/footer_logo.png" alt="">
                    <span>2023 红叶|保留所有权利</span>
                </div>
                <div class="container_body_right">
                    <span>招聘信息 </span>
                    <span>联系我们</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped lang='less'>
.app_footer {
    background: #181818;
    min-height: 188px;

    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &_body {
            height: 56.97px;
            max-width: 1130px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            &_left {
                height: 56.97px;
                gap: 25.32px;
                display: flex;
                align-items: center;
                font-size: 12px;
                font-weight: 400;
            }

            &_right {
                display: flex;
                align-items: center;
                gap: 88px;
                font-size: 12px;
                font-weight: 400;
            }
        }
    }
}
</style>