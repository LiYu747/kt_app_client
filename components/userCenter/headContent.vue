<template>
	<view>
		<view class="nav ">
			<view class="title flex al-center ju-center pos-rel">
				个人中心
				<view class="pos-abs location">
					<image @click="install" src="https://oss.kuaitongkeji.com/static/img/app/user/Settings.png" class="setimg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="">
			<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" mode="" class="jximg"></image>
		</view>
		<!-- 头像 -->
		<view class="flex-d al-center">
			<view @click="install" class="portrait flex  ju-center pos-rel">
				<image v-if="user.nickname" :src="user.avatar" mode="scaleToFill" class="headimg pos-abs"></image>
				<image v-else src="https://oss.kuaitongkeji.com/static/img/app/user/headportrait.png" class="headimg pos-abs" mode=""></image>
			</view>
			<view @click="install" v-if="user.nickname" class="text">
				{{user.nickname}}
			</view>
			<view @click="gologin" v-else class="text">
				{{text}}
			</view>
		</view>
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
					url: `/pages/user/personal/personal`
				})
			},
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
