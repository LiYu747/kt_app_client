<template>
	<view>
		<subunit class="fixed" titel='帖子详情'></subunit>
		<view class="topLine">

		</view>
		<view class="contentBox">
			<view class="state flex al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/visit/gnt.png" class="stateimg" mode=""></image>
				<view class="m-l2">
					{{infomsg.verify_status_text}}
				</view>
			</view>
			<view class=" flex-d  m-t4">
				<view class="">
					<image :src="userInfo.avatar" class="userAvatar" mode=""></image>
				</view>
				<view class="userName">
					姓名：{{userInfo.nickname}}
				</view>
				<view class="margin-t5 flex  ">
					<view class="titleTex">
						标题：
					</view>
					<view class="fz-14 conBox">
						{{infomsg.title}}
					</view>
				</view>
				<view class="m-t4 flex">
					<view class="titleTex">
						内容：
					</view>
					<view class="fz-14 conBox">
						{{infomsg.content}}
					</view>
				</view>
			</view>
		</view>

		<!-- 按钮 -->
		<view v-if="statusCode == 0"  class="flex al-center ju-around btn">
			<view @click="pass" class="btnr flex al-center ju-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" class="btnimg" mode=""></image>
				<view class=" pos-abs">
					通过
				</view>
			</view>
			<view @click="nopass" class="btnl flex al-center ju-center">
				不通过
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	import home from '../../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				id: '',
				statusCode:1,//审核状态码
				userInfo: {}, //用户信息
				infomsg: {},
				verifyStatus:'',//是否通过
			}
		},
		methods: {
			// 通过
			pass(){
			this.verifyStatus = 1	
			this.passReq()
			},
			// 不通过
			nopass(){
				this.verifyStatus = 2
				this.passReq()
			},
			// 是否通过
			passReq(){
				uni.showLoading({
					title:'加载中'
				})
				home.ReviewPosts({
					data:{
						id:this.id,
						verify_status:this.verifyStatus
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
							uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
							return;
						}
						uni.showToast({
							title: res.data.msg
						})
						const time = setTimeout(() => {
							this.getData()
							clearTimeout(time)
						}, 1500)
					}
				})
			},
			// 获取数据
			getData() {
				uni.showLoading({
					title:'加载中'
				})
				home.postDetails({
					data: {
						id: this.id
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
							uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
							return;
						}
						let data = res.data.data
						this.statusCode = data.verify_status
						this.userInfo = data.own_user
						this.infomsg = data
					}
				})
			}
		},
		mounted() {
			this.getData()
		},
		onLoad(option) {
			this.id = option.id
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
	.fixed {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.contentBox {
		padding: 0 20rpx;
		color: #666666;
	}

	.stateimg {
		width: 40rpx;
		height: 40rpx;
	}

	.state {
		width: 100%;
		height: 120rpx;
		border-bottom: 1px solid #CCCCCC;
		font-size: 15px;
		color: #F07535;
	}

	.userAvatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;

	}

	.textBox {
		font-size: 14px;
	}

	.margin-t5 {
		margin-top: 50rpx;
	}

	.userName {

		margin-top: 20rpx;
	}

	.conBox {
		margin-top: -4rpx;
		width: 560rpx;
		padding: 10rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}
	
	.btn{
		margin-top: 100rpx;
		}
	
	.btnr {
		width: 320rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}
	
	.btnimg {
		width: 320rpx;
		height: 70rpx;
	}
	
	.btnl {
		width: 318rpx;
		height: 68rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(240, 117, 53);
		font-size: 28rpx;
		color: rgb(240, 117, 53);
	}
</style>
