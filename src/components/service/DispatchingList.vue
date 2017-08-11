<template>
<div class="">
<!-- 头部导航 -->
  <g-headerNav title="派工列表"></g-headerNav>
  <div id="DispatchingList">
  <!-- tab切换 -->
    <div class="tab">
      <span class="text" :class="{active: tabIndex === 1}" @click="tabClick(1)">待派工列表</span>
      <span class="text" :class="{active: tabIndex === 2}" @click="tabClick(2)">已派工列表</span>
    </div>
      <!-- 主体 -->
    <div class="main">
      <v-dispatchingListItem v-for="(item, index) in dataArr" 
                            :key="index" 
                            :index="index+1"
                            :deviceName="item.deviceName"
                            :place="item.place"
                            :faultType="item.faultType"
                            :repairMan="item.repairMan"
                            :repairTime="item.repairTime" 
                            @emitClickBtn="clickBtn(index)" >
      </v-dispatchingListItem>
    </div>
    
  </div>
  <g-backBottomBtn title="返回"></g-backBottomBtn> 
</div>
</template>

<script type="ecmascript-6">
import $ from 'jquery'
import { test } from "@/ajax/index"
import VDispatchingListItem from './DispatchingList-item.vue'
  export default {
    components: {
      VDispatchingListItem
    },
    props: {},
    computed: {},
    data () {
      return {
        tabIndex: 1,
        dataArr: [],
        waitingArr: [
        {
          deviceName: '呼吸机',
          place: '科室1',
          faultType: '骨科',
          repairMan: '张三',
          repairTime: '2017.6.27 16:04:29'
        },
        {
          deviceName: '呼吸机',
          place: '科室2',
          faultType: '骨科',
          repairMan: '张三',
          repairTime: '2017.6.27 16:04:29'
        },
        {
          deviceName: '呼吸机',
          place: '科室3',
          faultType: '骨科',
          repairMan: '张三',
          repairTime: '2017.6.27 16:04:29'
        },
        {
          deviceName: '呼吸机',
          place: '科室4',
          faultType: '骨科',
          repairMan: '张三',
          repairTime: '2017.6.27 16:04:29'
        },
        {
          deviceName: '呼吸机',
          place: '科室5',
          faultType: '骨科',
          repairMan: '张三',
          repairTime: '2017.6.27 16:04:29'
        }
      ],
        sentArr: [
          {
            deviceName: '呼吸机',
            place: '科室6',
            faultType: '骨科',
            repairMan: '张三',
            repairTime: '2017.6.27 16:04:29'
          },
          {
            deviceName: '呼吸机',
            place: '科室7',
            faultType: '骨科',
            repairMan: '张三',
            repairTime: '2017.6.27 16:04:29'
          },
          {
            deviceName: '呼吸机',
            place: '科室8',
            faultType: '骨科',
            repairMan: '张三',
            repairTime: '2017.6.27 16:04:29'
          },
          {
            deviceName: '呼吸机',
            place: '科室9',
            faultType: '骨科',
            repairMan: '张三',
            repairTime: '2017.6.27 16:04:29'
          },
          {
            deviceName: '呼吸机',
            place: '科室10',
            faultType: '骨科',
            repairMan: '张三',
            repairTime: '2017.6.27 16:04:29'
          }
        ]
      }
    },
    created () {
      this.dataArr = this.waitingArr
      this.getTestData()
    },
    mounted () {
      console.log($)
      $('.tab .text').addClass
    },
    methods: {
      /*
        以下是运行函数
      */
      // tab切换
      tabClick (index) {
        this.tabIndex = index
        if (index ===1) {
          this.dataArr = this.waitingArr
        } else {
          this.dataArr = this.sentArr
        }
      },
      // 点击派工按钮
      clickBtn(index) {
       alert(index)
      },
      /*
        以下是方法
      */
      // 获取测试数据
      getTestData () {
         test.getTestData().then((res)=>{
           console.log("res",res);
        })
      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
// lang="scss" 意思是sass语法
// 用sass提取比如说字体大小 颜色等数据 便于改版
// 同时提取公共的样式 比如文本溢出 flex布局等 经常用的到的 减少代码量
@import "../../assets/scss/main.scss";
.container{
  background: #eef2f3;
}
#DispatchingList{
  padding: 1.88rem 0 0.92rem+0.44rem;
  .tab{
    position: fixed;
    top: 0.88rem;
    background: #fff;
    left: 0;
    @extend %flex-between-center;
    width: 100%;
    padding: 0 0.67rem;
    font-size: $fontL + rem;
    color: $blue;
    height: 1rem;
    .text{
      width: 2.3rem;
      text-align:center;
      line-height: 1rem;
      box-sizing:border-box;
    }
    .active{
      border-bottom: 0.06rem solid $blue;
    }
  }
  .main{
    background: #eef2f3;
    padding-top: 0.22rem;
  }
}
</style>
