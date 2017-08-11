<template>
  <!--头部组件一 带返回分享功能 分享功能 全局组件-->
  <div class="headerNav" v-if="headerNavShow">
    <!--返回按钮-->
    <div v-if='leftShow' class="left" @click="$router.go(-1)">
      <img class="icon-leftArrow icon" src="./images/icon-leftArrow.png" alt="">
      <span class="text">返回</span>
    </div>
    <!--中间的 导航标题-->
    <span class="center">{{title}}</span>
    <!--分享图标按钮-->
    <img v-if='rightShow' class="icon" src="./images/icon-share.png" alt="分享图标"
         @click="$emit('emitClickIconShare')">
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      title: '',
      leftShow: {
        type: Boolean,
        default: true
      },
      rightShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        headerNavShow: true
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/scss/main.scss";

  .headerNav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5000;
    width: 100%;
    height: 0.88rem;
    padding: 0 0.3rem;
    background: $headerBg;
    @extend %flex-between-center;
    color: $white;
    user-select: none;
    .icon {
      width: 0.44rem;
      height: 0.44rem;
    }
    .left {
      @extend %flex-center;
      .text {
        @include font($fontXL,0.88)
      }
    }
    .center {
      max-width: 4.5rem;
      @extend %ellipsis;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @include font($fontXXL)
    }
  }

</style>
