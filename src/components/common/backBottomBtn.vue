<template>
<div id="backBottomBtn">
	<button class="btn" @click="handleClick()">{{title}}</button>
</div>
</template>

<script type="ecmascript-6">
  export default {
  	props: {
  		title: ``
  	},
  	computed: {},
    data () {
      return {}
    },
    methods: {
    	handleClick () {
    		this.$router.go(-1)
    	}
    }
  }
</script>

<style rel="stylesheet" lang="scss">
@import "../../assets/scss/main.scss";
#backBottomBtn{
	position: fixed;
  left: 0;
  bottom: 0;
	@extend %flex-center-center;
	width: 100%;
	height: 0.92rem + 0.44rem;
  background: #eef2f3;
  .btn {
  	width: 7.10rem;
		border-radius: 0.05rem;
    @include font(0.34, 0.92, #4c4c4c);
		background: #fff;
	}
}
</style>
