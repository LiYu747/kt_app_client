<template>
	<!-- 个人中心 -->
	<div class="whole">
		<view class="nav ">
			<view class="title flex al-center ju-center pos-rel">
				个人中心
			</view>
		</view>
		<view class=" location" @click="nextT" :class="Gshow==6&&idx==0?'zIndex':''" >
			<image @click="install"  src="https://oss.kuaitongkeji.com/static/img/app/user/Settings.png" class="setimg" mode=""></image>
			<view v-if='idx==0&&Gshow==6' class="pos-abs flex staTex">
				<view class="flex-d al-center m-l3 m-r2 m-t4 setTex">
					信息设置 
					<view class="bai">
						 修改密码以及退出登录等。
					</view>
				</view>
				<image src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/arrowsRU.png" mode="" class="arrowsRU "></image>
			</view>
		</view>
		<view class="topLine">

		</view>
		<view class="">
			<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" mode="" class="jximg"></image>
		</view>
		<!-- 头像 -->
		<view class="flex-d al-center" > 
			<view class="pos-rel flex-d al-center"  @click="nextT" :class="idx==1&&Gshow==6?'ative':''">
				<view @click="userinfo" class="portrait flex  ju-center pos-rel" :class="Gshow==6&&idx==1?'top0':''">
					<image v-if="user" :src="user.avatar" mode="aspectFill" class="headimg pos-abs"></image>
					<image v-if='!user' src="https://oss.kuaitongkeji.com/static/img/app/user/headportrait.png" class="headimg pos-abs"
					 mode=""></image>
				</view>
				<view @click="userinfo" v-if="user" class="text" :class="Gshow==6&&idx==1?'top1':''">
					{{user.nickname}}
				</view> 
				<view v-else class="text" >
					{{text}}
				</view>
				<view v-if="idx==1&&Gshow==6" class="pos-abs infoT flex-d al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/upward.png" class="upward" mode=""></image>
					<view class="setTex flex-d al-center m-t2">
						个人信息
						<view class="bai">
							修改个人信息
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 操作栏 -->
		<view class="pos-rel" :class="idx==2?'aceZindex':''">
			<view v-if="idx == 2" class="pos-abs find bai">
				精彩功能，正在等你发现！
			</view>
			<actionBar :Gshow='Gshow' :informmsg='informmsg' :user='user'></actionBar>
			<view  v-if="idx == 2" class="fildn pos-abs">
			<view @click="finish" class="explore flex al-center ju-center bai">
				去探索
			</view>
			</view>
		</view>
		<view class="btmLine">

		</view>

		<view @mousewheel.prevent   @touchmove.stop.prevent  v-if="Gshow == 6" class=""> 
			<view @click="nextT" class="guideBox">
				
			</view>
			<image src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/user.png" class="addLogo" mode=""></image>
		</view>
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
				informmsg: 0,
				Gshow: 0,
				idx: 0
			}
		},
		methods: {
			finish() {
				cache.set('first',true)
				cache.forget('Gshow')
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			nextT() {
				if(this.idx==2)return;
					this.idx++
			},
			// 消息通知
			goInform() {
				uni.navigateTo({
					url: '/pages/user/userInform/userInform'
				})
			},

			// 去设置
			install() {
				if(this.Gshow == 6) return;
				uni.navigateTo({
					url: '/pages/user/realInformation/realInformation'
				})
			},
			//用户基本信息
			userinfo() {
				if(this.Gshow == 6) return;
				uni.navigateTo({
					url: '/pages/user/personal/personal'
				})
			},

			// 获取消息通知数量
			getInform() {
				home.unread({
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
						let data = res.data.data
						this.informmsg = data.total_unread
						// console.log(data);
					}
				})
			},
			// 获取用户资料 
			getUser() {
				userDetails.userDeta({
					data: {},
					fail: () => {
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
			if (cache.get('Gshow')) {
				this.Gshow = cache.get('Gshow').value
			} 
			this.getUser()
			this.loadUserData();
			this.getInform()
		},
		onHide() {
			this.Gshow = 0
			this.idx = 0
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
		height: 148rpx;
		background: #F07535;
		position: fixed;
		z-index: 99;
	}

	.topLine {
		height: 148rpx;
	}

	.btmLine {
		height: 40rpx;
	}

	.setimg {
		width: 40rpx;
		height: 40rpx;
	}

	.title {
		top: 60rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		height: 88rpx;
	}

	.location {
		position: fixed;
		top: 80rpx;
		right: 50rpx;
		z-index: 99;
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
	
	.top0{
	top: 0;
	}
	.top1{
		margin-top: 0;
		z-index: 999;
	}

	.informBox {
		right: 50rpx;
	}

	.munber {
		width: 34rpx;
		height: 34rpx;
		background: red;
		border-radius: 50%;
		font-size: 12px;
		color: #FFFFFF;
		z-index: 2;
		margin-top: -12rpx;
		margin-left: 16rpx;
	}

	.munMore {
		width: 50rpx;
		height: 34rpx;
		background: red;
		border-radius: 20rpx;
		font-size: 12px;
		color: #FFFFFF;
		z-index: 2;
		margin-top: -12rpx;
		margin-left: 16rpx;
	}

	.guideBox {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 9999;
	}

	.Gitemimg {
		width: 100%;
		height: 100vh;
	}

	.itemText {
		width: 100%;
		position: absolute;
		z-index: 9999;
		color: #FFFFFF;
		bottom: 80rpx;
	}

	.textZ {
		width: 230rpx;
		height: 72rpx;
	}
	
	.zIndex{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		background:#F07535;
		z-index: 99999;
		margin-top: -20rpx;
	}
	
	.arrowsRU{
		width: 120rpx;
		height: 88rpx;
		position: relative;
		right: 40rpx;
	}
	
	.staTex{
		right: 0rpx;
		top: 80rpx;
		width: 750rpx;
		display: flex;
		justify-content: flex-end;
	}
		
	.setTex{
		color: #FFD428;
	}	
	
	
	.ative{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 250rpx;
		height: 220rpx;
		background: #FFFFFF; 
		z-index: 99999;
		margin-top: -60rpx;
	}	
	
	.upward{
		width: 60rpx;
		height: 100rpx;
	}
	
	.infoT{
		width: 750rpx;
		top: 230rpx;
	}
	
	.aceZindex{
		margin-top: -120rpx;
		background: rgb(245, 245, 245);
		z-index: 99999;
	}
	
	.find{
		width: 750rpx;
		margin-top: -70rpx;
		display: flex;
		justify-content: center;
	}
	
	.fildn{
		width: 750rpx;
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
	}
	
	.explore{
		width: 300rpx;
		height: 80rpx;
		border-radius: 10rpx;
		background: rgb(240,117,53);
		margin-bottom: 40rpx;
	}
	
	.addLogo{
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}
</style>
