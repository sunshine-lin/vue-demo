<template>
<div>
<!-- 头部导航 -->
  <g-headerNav title="科室"></g-headerNav>
  <div id="AdministrativeOffice">
      <v-administrativeOffice v-for="(item, index) in dataArr" 
                            :key="index" 
                            :index="index+1"
                            :deviceName="item.fontsize"
                            :place="item.hdepart_check_set"
                            :faultType="item.hdepart_id"
                            :repairMan="item.hdepart_name"
                            :repairTime="item.hdepart_create_time" 
                            @emitClickBtn="clickBtn(index)" >
      </v-administrativeOffice>
  </div>
  <g-backBottomBtn title="返回"></g-backBottomBtn> 
</div>
</template>

<script type="ecmascript-6">
import { test } from "@/ajax/index"
import VAdministrativeOffice from './AdministrativeOffice-item.vue'
  export default {
    components: {
      VAdministrativeOffice
    },
    props: {},
    computed: {},
    data () {
      return {
        tabIndex: 1,
        dataArr: []
      }
    },
    created () {
      this.getTestData()
    },
    methods: {
      /*
        以下是运行函数
      */
      // 点击删除按钮
      clickBtn(index) {
        if (confirm('你确定要删除吗？')){
          this.dataArr.splice(index,1)
        }
      },
      /*
        以下是方法
      */
      // 获取测试数据
      getTestData () {
         test.getTestData().then((res)=>{
           console.log("res", res.data.body)
           this.dataArr = res.data.body
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
#AdministrativeOffice{
  padding: 0.88rem 0 0.92rem+0.44rem;
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
  }
}
</style>
