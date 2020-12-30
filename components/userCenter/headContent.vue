<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			//用户资料
			user: {
				type: Object,
				required: true
			}  
		},
		data() {
			return {
				text: '未登录',
			}
		},
		methods: {
			// 去登陆
			gologin() {
				uni.navigateTo({
					url: '/pages/auth/login/login'
				})
			},
			// 去设置
			install() {
				uni.navigateTo({
					url:'/pages/user/realInformation/realInformation'
				})
			},
			//用户基本信息
			userinfo(){
				uni.navigateTo({
					url:'/pages/user/personal/personal'
				})
			}
		},
		onLoad() {

		},
		onShow() {

		},
		mounted() {

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
	.nav {
		width: 100%;
		height: 128rpx;
		background: #F07535;
	}

	.setimg {
		width: 40rpx;
		height: 40rpx;
	}

	.title {
		top: 40rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		height: 88rpx;
	}

	.location {
		right: 50rpx;
	}

	.jximg {
		width: 100%;
		height: 156rpx;
	}

	.portrait {
		width: 148rpx;
		height: 148rpx;
		background: #FFFFFF;
		border-radius: 50%;
		position: relative;
		top: -82rpx;
	}

	.headimg {
		width: 148rpx;
		height: 148rpx;
		border-radius: 50%;
		bottom: 0;
	}

	.text {
		margin-top: -62rpx;
		font-size: 36rpx;
		font-weight: 400;
		font-family: Microsoft YaHei;
		color: #666666;
	}
</style>
