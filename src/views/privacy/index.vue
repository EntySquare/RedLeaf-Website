<script setup lang='ts'>
// import TopNav from './topnav.vue'
const privacy = [
    {
        format: 'title',
        content: '红叶隐私政策'
    },
    {
        format: 'p',
        content: '欢迎使用红叶软件！请在使用本软件之前仔细阅读以下条款和条件，因为这些条款和条件构成了您与我们（红叶软件开发者）之间的法律协议。通过使用红叶软件，即表示您同意遵守本协议的所有规定和条款。'
    },
    {
        format: 'ol',
        content: '1.使用许可：红叶软件授予您个人的、不可转让的、非排他性的许可，以下载、安装、使用和访问本软件。您应确保在使用本软件时遵守适用的法律法规，并且不得以任何方式滥用、破坏或侵犯他人的权益。'
    },
    {
        format: 'ol',
        content: '2.用户义务：您在使用红叶软件时，应遵守以下义务：'
    },
    {
        format: 'li',
        content: '不得发送、传播或存储任何违法、诽谤、淫秽、骚扰、威胁、侵犯他人隐私或其他不当内容；'
    },
    {
        format: 'li',
        content: '不得利用本软件进行任何商业目的的活动，或进行未经授权的广告、推销或垃圾邮件行为；'
    },
    {
        format: 'li',
        content: '不得干扰、损害或破坏本软件的正常运行，包括但不限于使用任何自动化工具、病毒、恶意软件或其他技术手段；'
    },
    {
        format: 'li',
        content: '不得尝试未经授权的访问、篡改、复制或分发本软件的任何部分。'
    },
    {
        format: 'ol',
        content: '3.隐私保护：我们重视用户的隐私权，并采取合理的安全措施保护您的个人信息。您在使用红叶软件时，同意我们收集、存储和使用您的个人信息，以便提供更好的服务和改进软件的功能。我们承诺不会向任何第三方未经您授权的机构或个人透露您的个人信息。'
    },
    {
        format: 'ol',
        content: '4.免责声明：本软件按现状提供，不提供任何明示或暗示的担保或保证。您对本软件的使用由您自行承担风险，我们不承担任何责任或义务，包括但不限于软件的适用性、准确性、完整性和可靠性。'
    },
    {
        format: 'ol',
        content: '5.知识产权：红叶软件及其相关内容（包括但不限于文字、图标、图像、音频和视频资料）的所有权归红叶软件开发者所有。未经授权，您不得复制、修改、传播、展示或利用本软件及其相关内容。 '
    },
    {
        format: 'ol',
        content: '6.终止协议：如您违反本协议的任何条款，我们有权终止您对本软件的许可并采取适当的法律行动。您也可以随时终止协议，停止使用本软件。'
    },
    {
        format: 'p',
        content: '请注意，红叶协议条款可能会不时进行更新，您应定期查阅以了解最新的条款和条件。'
    },
    {
        format: 'p',
        content: '谢谢您阅读并遵守红叶协议条款！如有任何疑问或问题，请随时与我们联系。'
    },
    {
        format: 'footer',
        content: '编写时间：2023年06月26日'
    },


]
</script>
<script lang='ts'>
export default {
    name: 'Privacy',
}
</script>
<template>
    <div class="privacy">
        <div class="container">

            <div class="body">
                <div class="content_body">
                    <div v-for="(item, index) in privacy" :key="index">
                        <div
                            :class="[item.format == 'title' ? 'title' : '', item.format == 'li' ? 'li' : '', item.format == 'p' ? 'p' : '']">
                            {{ item.format == 'ol' ? '' : item.content }}
                            <div v-if="item.format == 'ol'" class="ol">
                                <span>{{ item.content.substring(0, item.content.indexOf('.')) + '.' }}</span>
                                <span>{{ item.content.substring(item.content.indexOf('.') + 1) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang='less'>
.container {
    margin: 0 auto;
    position: relative;

    .container-header {
        height: 100vh;
        width: 100vw;
        position: relative;
    }

}

.privacy {
    background-color: black;
    color: black;
    position: relative;
    min-height: 100vh;

    .body {
        top: 100px;
        position: relative;
        width: 100%;
        background-color: white;

        .content_body {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px;
            padding-bottom: 200px;
            width: 100%;

            .title {
                font-size: 30px;
                font-weight: bold;
                margin: 40px 0;
                text-align: center;
            }

            .ol {
                display: flex;
                margin-bottom: 20px;
                font-size: 16px;
                line-height: 1.5;
                text-align: justify;

                span {

                    &:first-child {
                        margin-right: 6px;
                        font-weight: bold;
                        opacity: .8;
                    }

                    &:last-child {
                        font-weight: 500;
                        opacity: .7;
                    }
                }
            }

            .p {
                padding-bottom: 5px;
                font-size: 17px;
                font-weight: bold;
                line-height: 1.5;
                text-align: justify;
            }

            .li {
                padding-left: 18px;
                margin-bottom: 10px;
                font-size: 16px;
                line-height: 1.5;
                text-align: justify;
                font-weight: 500;
                opacity: .7;

                &:before {
                    content: '•';
                    margin-right: 6px;
                }
            }
        }
    }

}
</style>