<template>
<div id="index">
	<router-link class="link" :to="{name: 'Dispatchinglist'}" tag="div">派工列表</router-link>
	<router-link class="link" :to="{name: 'AdministrativeOffice'}" tag="div">科室</router-link>
</div>
</template>

<script type="ecmascript-6">
  export default {
  	props: {},
  	computed: {},
    data () {
      return {}
    }
  }
</script>

<style rel="stylesheet" lang="scss">
@import '../assets/scss/main.scss';
#index{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	@extend %flex-between-center;
	.link{
		flex: 1;
		margin: 0.2rem;
		font-size: 0.3rem;
		line-height: 3em;
		background: #abcdef;
		text-align: center;
		color: #fff;
		border-radius: 0.1rem;
	}
}

</style>
