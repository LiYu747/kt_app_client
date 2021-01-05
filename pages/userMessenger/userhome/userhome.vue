<template>
	<view class="">
		<subunit :retur='false' titel='快递 外卖'></subunit>
			<view class="userSelection pos-abs">
				<image @click="isShowType = !isShowType" src="https://oss.kuaitongkeji.com/static/img/app/home/sjxl.png" class="sjxlIcon"
				 mode=""></image>
				<view v-show="isShowType == true" class="typeBox flex-d al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/home/xljx.png" class="xljxImg" mode=""></image>
					<view class="typeLine">
					</view>
					<view class="fz-12 itemType flex ju-center al-center" v-for="item in userType" @click="selecType(item)" :key='item.id'>
						{{item.name}}
					</view>
				</view>
			</view>
			<view v-if="code==200" class="">
			<view class="contenBox flex">
				<!-- 左边 -->
				<view class="">
					<view @click="passQrCode" class="passQrCode">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back1.png" class="back1Img pos-abs" mode=""></image>
						<view class="prcline"></view>
						<view class="prctext">
							通行二维码
						</view>
						<view class="">
							<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/qecode.png" class="qecodeImg" mode=""></image>
						</view>
					</view>
				</view>
				<!-- 右边 -->
				<view class="m-l2">
					<view @click="ApplyingTo" class="">
						<view class="">
							<image src="../../../image/userMessenger/goto.png" class="ApplyingTo" mode=""></image>
						</view>
					</view>
					<view @click="VisitToApply" class=" m-t1">
						<view class="">
							<image src="../../../image/userMessenger/visit.png" class="ApplyingTo" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			
			<view @click="navigation" class=" flex ju-center">
				<image src="../../../image/userMessenger/path.png" class="pathImg" mode=""></image>
			</view>
		</view>
		
		<view class="flex-d al-center nointo" v-if="code==403">
		<view class="">
				您还没有申请成为外卖或者快递员
		</view>
		<view @click="ApplyingTo" class="m-t2 gointo">
			去申请成为
		</view>
		   <view class="m-t4 flex al-center">
		   	若您已申请
			<view class="m-l2 gointo" @click="application">
				去查看申请进度
			</view>
		   </view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				userType: [{
						name: '用户',
						type: 'user',
						url: '/pages/index/index'
					},
					{
						name: '物业',
						type: 'property',
						url: '/pages/propertyManagement/propertyhome/propertyhome'
					},
					{
						name: '快递、外卖',
						type: 'expressage',
						url: '/pages/userMessenger/userhome/userhome',
					}
				],
				isShowType: false,
				code:'403'
			}
		},
		methods: {
			//申请进度
			application(){
				uni.navigateTo({
					url: '/pages/userMessenger/applyingTo/applyingRecord/applyingRecord'
				})
			},
			selecType(item) {
				if (item.type == 'expressage') return;
				uni.reLaunch({
					url: item.url
				})
			},
			// 通行二维码
			passQrCode() {
				uni.navigateTo({
					url: '/pages/userMessenger/goQrCode/goQrCode'
				})
			},
			// 申请进入
			ApplyingTo() {
				uni.navigateTo({
					url: '/pages/userMessenger/applyingTo/applyingTo'
				})
			},
			// 拜访申请
			VisitToApply() {
				uni.navigateTo({
					url: '/pages/visitapplication/visit/visit?text=您好,我这边是外卖快递,请您通过一下 '
				})
			},
			// 路线导航
			navigation(){
				uni.navigateTo({
					url: '/pages/classification/travel/travel'
				})
			},
			// 获取信息
			getData() {
				uni.showLoading({
					title:'加载中'
				})
				home.lookMymsg({
					data: {},
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
						// this.code = res.data.code
					}
				})
			}

		},
		onShow() {
			this.getData()
		},
		mounted() {

		},
		onLoad() {

		},
		onHide() {
			this.isShowType = false
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
	.userSelection {
		top: 80rpx;
		left: 40rpx;
	}

	.sjxlIcon {
		width: 28rpx;
		height: 16rpx;
		margin-left: 28rpx;
	}

	.xljxImg {
		margin-top: 5rpx;
		width: 140rpx;
		height: 200rpx;
		position: absolute;
		z-index: 9;
	}

	.typeLine {
		height: 20rpx;
	}

	.typeBox {
		margin-top: 5rpx;
		width: 140rpx;
		height: 200rpx;
		color: #666666;
	}

	.itemType {
		z-index: 9;
		margin-top: 10rpx;
		width: 100%;
		height: 40rpx;
		border-bottom: 1px solid #E6E6E6;
	}

	.contenBox {
		margin-top: 20rpx;
		width: 100%;
		padding: 30rpx;
	}

	.passQrCode {
		width: 335rpx;
		height: 420rpx;
		color: #FFFFFF;
	}

	.back1Img {
		width: 335rpx;
		height: 420rpx;
	}

	.prcline {
		height: 40rpx;
	}

	.prctext {
		margin-left: 20rpx;
		font-size: 20px;
		opacity: 0.99;
	}

	.qecodeImg {
		margin-top: 97rpx;
		margin-left: 97rpx;
		width: 140rpx;
		height: 140rpx;
	}


	.ApplyingTo {
		width: 335rpx;
		height: 200rpx;
	}
	
	.pathImg{
		margin-top: -20rpx;
		width: 690rpx;
		height: 200rpx;
	}
	
	.nointo{
		margin-top: 50rpx;
		color: #666666;
		}
		
	.gointo{
		color: #01AAED;
		// text-decoration:underline;
	}	
</style>
