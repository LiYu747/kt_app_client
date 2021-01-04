<template>
	<!-- 个人中心 -->
	<div class="whole">
		<view class="nav ">
			<view class="title flex al-center ju-center pos-rel">
				<view @click="goInform" class="informBox pos-abs">
					<view class="munber flex al-center ju-center pos-abs">
						{{informmsg.length}}
					</view>
					<image src="../../../image/home/infos.png" class="infosImg" mode=""></image>

				</view>
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
			<view @click="userinfo" class="portrait flex  ju-center pos-rel">
				<image v-if="user" :src="user.avatar" mode="scaleToFill" class="headimg pos-abs"></image>
				<image v-else src="https://oss.kuaitongkeji.com/static/img/app/user/headportrait.png" class="headimg pos-abs" mode=""></image>
			</view>
			<view @click="userinfo" v-if="user" class="text">
				{{user.nickname}}
			</view>
			<view @click="gologin" v-else class="text">
				{{text}}
			</view>
		</view>
		<!-- 操作栏 -->
		<actionBar></actionBar>
	</div>
</template>

<script>
	import actionBar from '../../../components/userCenter/actionBar.vue';
	import userDetails from '../../../vendor/user/userDetails.js';
	import jwt from '../../../vendor/auth/jwt.js';
	import cache from "../../../vendor/cache/cache.js";
	import home from '../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			actionBar
		},
		props: {},
		data() {
			return {
				user: null, //用户资料
				text: '未登录',
				flag: false,
				informmsg:[]
			}
		},
		methods: {
			// 消息通知
			goInform() {
				uni.navigateTo({
					url: '/pages/user/userInform/userInform'
				})
			},

			// 去设置
			install() {
				uni.navigateTo({
					url: '/pages/user/realInformation/realInformation'
				})
			},
			//用户基本信息
			userinfo() {
				uni.navigateTo({
					url: '/pages/user/personal/personal'
				})
			},
			
			// 获取消息通知
			getInform() {
				home.userMessage({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络出错',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						let data = res.data.data.data
						this.informmsg = data
						// console.log(data);
					}
				})
			},
			// 获取用户资料
			getUser() {
				userDetails.userDeta({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						this.user = res.data.data
					},

				})
			},

			// 判断用户是否登录
			loadUserData() {
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {},
					fail: () => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			},

		},
		mounted() {

		},
		onLoad(val) {},
		onShow() {
			this.getUser()
			this.loadUserData();
            this.getInform()
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
	.whole {
		background: rgb(245, 245, 245);
		height: 100%;
	}

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
		left: 50rpx;
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

	.informBox {
		right: 50rpx;
	}

	.infosImg {
		width: 34rpx;
		height: 34rpx;
	}

	.munber {
		width: 30rpx;
		height: 30rpx;
		background: red;
		border-radius: 50%;
		font-size: 12px;
		color: #FFFFFF;
		z-index: 2;
		margin-top: -12rpx;
		margin-left: 16rpx;
	}
</style>
