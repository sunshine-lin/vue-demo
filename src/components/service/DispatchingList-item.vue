<template>
<div id="DispatchingList-item">
	<span class="left">{{index}}</span>
	<ul class="center">
		<li class="item">
			<span class="title">设备名称</span>
			<span class="text">{{deviceName}}</span>
		</li>
		<li class="item">
			<span class="title">保修点</span>
			<span class="text">{{place}}</span>
		</li>
		<li class="item">
			<span class="title">故障类型</span>
			<span class="text">{{faultType}}</span>
		</li>
		<li class="item">
			<span class="title">报修人</span>
			<span class="text">{{repairMan}}</span>
		</li>
		<li class="item">
			<span class="title">保修时间</span>
			<span class="text">{{repairTime}}</span>
		</li>
	</ul>
	<button class="btn" @click.stop="$emit('emitClickBtn')">派工</button>
</div>
</template>

<script type="ecmascript-6">
  export default {
  	props: {
  		index: ``,
  		deviceName: ``,
  		place: ``,
  		faultType: ``,
  		repairMan: ``,
  		repairTime: ``
  	},
  	computed: {},
    data () {
      return {

      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
#DispatchingList-item{
	width: 100%;
	display:flex;
	justify-content: space-between;
	align-items: center;
	width: 7.1rem;
	height: 2.36rem;
	margin:0 auto;
	font-size: 0.26rem;
	background: #fff;
	margin-bottom:0.22rem;
	padding: 0 0.33rem 0 0.22rem;
	border-radius: 0.1rem;
	&:last-child{
		margin-bottom:0;
	}
	.left{
		width: 0.38rem;
		height: 0.38rem;
		background: #f0f0f0;
		border-radius: 50%;
		font-size: 0.24rem;
		color: #a7a7a7;
		text-align: center;
		line-height: 0.38rem; 
		margin-right:0.22rem;
	}
	.center{
		flex:1;
		.item{
			display: flex;
			line-height: 0.46rem;
		}
		.title{
			color: #3d3d3d;
			width: 1.04rem;
			text-align:right;
		}
		.text{
			color: #8a8a8a;
			margin-left: 0.32rem;
		}
	}
	.btn{
		width: 1.1rem;
		height: 0.6rem;
		font-size: 0.26rem;
		color: #666;
		border: 0.01rem solid #bababa;
		border-radius:0.05rem;
		background: #fff;
	}
}
</style>
