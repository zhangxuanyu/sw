<template>
    <div style="position:relative">
        <hd-top  style="background-color: black;"></hd-top>
        <router-view/>
        <div class="tips" @click="show"></div>
        <div class="tip" v-if="showflag">
            <div class="tipbox">
                <img src="../../static/logo.png" alt="" style="margin-bottom:30px;">
                <img src="../../static/close.png" alt="" class="close" @click="closetips">
                <p class="topfont">秀SHOW是一个基于区块链技术的虚拟形象设计平台，你可以选择秀SHOW商城的虚拟场景、道具和表情来装扮你在Dinosaur Park、Monster Tamer、恐龙星球、Monster Block等DApp应用中显示的虚拟形象。玩秀SHOW，你可以体验到虚拟资产变化的惊喜和乐趣。还可以获得土豪的打赏。</p>
                <p></p>
                <p class="topfont">怎么玩？</p>
                <p class="topfont">1.首先进入“商城”页面，选择一个你喜欢的道具进行预览效果或者直接购买</p>
                <p class="topfont">2.购买道具成功之后，进入“我的-我的道具”页面选择未装备的道具，点击装备选择想装扮的虚拟形象，成功保存装扮；</p>
                <p class="topfont">3.然后在“我的-我的装扮”中，点击SHOW则成功秀出装扮的虚拟形象，在“SHOW”页面可查看装扮的形象;</p>
                <p class="topfont">4.商城的道具数量有限，售完只能在“二手”页面购买其他用户出售的道具。</p>
                <p class="thfont">注：“SHOW”页面每笔打赏平台收取1%的维护费用，“二手”页面将收取道具出售收益1%的维护费用。</p>

                <div class="begin"  @click="closetips">开始体验</div>
            </div>
        </div>
        <ft-bottom></ft-bottom>
    </div>
</template>

<script>
import hdTop from '../components/hdtop'
import ftBottom from '../components/ftbottom'
export default {
    components:{
        hdTop,ftBottom
    },
    created(){
       
    },
    data(){
        return{
            showflag:false
        }
    },
    methods:{
        show(){
            this.showflag = true
        },
        closetips(){
            this.showflag = false
        }
    }
}
</script>

<style scoped>
.tips{
    position: fixed;
    right: 0px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    background-color: #9234BF;
    background-image: url(../../static/explain.png);
    cursor: pointer;
    transition: all 1s;
   
}
.tips:hover{
    background-color: #000;
}
.tip{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 1100;
}
.tipbox{
    position: relative;
    width: 680px;
    height: 540px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 220px;
    padding: 40px;
    text-align: center;
}
.thfont{
    font-size: 12px;
    color: #555555;
    text-align: left;
    opacity: 0.78;
    margin-top: 10px;
    margin-bottom: 37px;
}
.topfont{
    font-size: 14px;
    color: #555555;
    text-align: left;
    margin-bottom: 0px;
}
.begin{
    width: 140px;
    height: 52px;
    background-color:  #9234BF;
    color: #fff;
    font-size: 16px;
    line-height: 52px;
    margin: 0 auto;
    cursor: pointer;
    transition: all 1s;
}
.begin:hover{
    background-color: #000;
}
.close{
    position: absolute;
    top: 30px;
    right: 34px;
    width: 14px;
    cursor: pointer;
    opacity: 1;
}
@media (max-width: 520px) {
    .tipbox{
        margin-top: 0px;
        width: 100%;
        height: 700px;
    }
    .tips{
        width: 40px;
        height: 40px;
        background-size: contain;
    }
    
}
</style>
