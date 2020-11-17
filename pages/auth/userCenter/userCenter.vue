<template>
	<!-- 个人中心 -->
	<div class="whole">
		<!-- 头部 -->
	<headContent :user='user'></headContent>
	 <!-- 操作栏 -->
	 <actionBar @add='add'></actionBar>
	</div>
</template>

<script>
	import headContent from '../../../components/userCenter/headContent.vue';
	import actionBar from '../../../components/userCenter/actionBar.vue'
	export default {
		name: "",
		components: {
headContent,
actionBar
		},
		props: {},
		data() {
			return {
	     user:''
			}
		},
		methods: {
       add(index){
		   console.log(index);
		   if(index===5){
			   uni.clearStorageSync('user')
			   this.user = uni.getStorageSync('user')&&JSON.parse(uni.getStorageSync('user'))
		   }
	   }
		},
		mounted() {

		},
		onLoad(val) {
		},
		onShow() {
			this.user = uni.getStorageSync('user')&&JSON.parse(uni.getStorageSync('user'))
		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.whole{
		background: rgb(245,245,245);
		height: 100%;
	}
</style>
