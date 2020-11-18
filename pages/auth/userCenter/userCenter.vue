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
	import actionBar from '../../../components/userCenter/actionBar.vue';
	import userDetails from '../../../vendor/user/userDetails.js';
	import jwt from '../../../vendor/auth/jwt.js';
	
	export default {
		name: "",
		components: {
			headContent,
			actionBar
		},
		props: {},
		data() {
			return {
				user:null
			}
		},
		methods: {
		   add(index){
			   console.log(index);
			   if(index===5){
				   uni.clearStorageSync('cache:jwt')
				   this.user = null
			   }
		   }
		},
		mounted() {
		 
		},
		onLoad(val) {
		},
		onShow() {
			
			jwt.doOnlyTokenValid({
				showModal : true,
				success : ()=>{
					userDetails.userDeta({
						  
						  success: (res) => {
							  console.log('success',res);
						  },
						  fail: (err) => {
							  console.log(err);
						  }
					})
				}
			})
			
		
			
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
