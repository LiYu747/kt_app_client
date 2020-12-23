<template>
	<view class="">
		<subunit :retur='false' titel='快递 外卖'></subunit>
		<view class="userSelection pos-abs">
			<image @click="isShowType = !isShowType" src="https://oss.kuaitongkeji.com/static/img/app/home/sjxl.png" class="sjxlIcon" mode=""></image>
			<view v-show="isShowType == true" class="typeBox flex-d al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/home/xljx.png" class="xljxImg" mode=""></image>
				<view class="typeLine">
				</view>
				<view class="fz-12 itemType flex ju-center al-center"
				 v-for="item in userType"
				 @click="selecType(item)"
				  :key='item.id'>
					{{item.name}}
				</view> 
			</view>
		</view> 
		 
		 <view class="contenBox flex">
			 <!-- 左边 -->
		 	<view class="">
		 		<view class="passQrCode">
		 				<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back1.png" class="back1Img pos-abs" mode=""></image>
						<view class="prcline"></view>
					<view class="prctext">
						通行二维码
					</view>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/qecode.png" class="qecodeImg" mode=""></image>
					</view>
		 		</view>
				<view class="VisitToApply">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back2.png" class="back1Img pos-abs" mode=""></image>
						<view class="prcline"></view>
					<view class="prctext">
						拜访申请
					</view>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/Visitthecircle.png" class="VisitthecircleImg" mode=""></image>
					</view>
				</view>
		 	</view>
			<!-- 右边 -->
			<view class="m-l2">
				<view @click="ApplyingTo" class="ApplyingTo flex">
					<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back3.png" class="back3Img pos-abs" mode=""></image>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/Goout.png" class="GooutImg" mode=""></image>
					</view>
					<view class="attext">
						申请进入
					</view>
				</view>
				<view @click="ApplyingTo" class="ApplyingTo flex m-t3">
					<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back4.png" class="back3Img pos-abs" mode=""></image>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/service.png" class="serviceImg" mode=""></image>
					</view>
					<view class="attext">
						送货申请
					</view>
				</view>
				<view class="ApplyingTo flex m-t3">
					<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/back5.png" class="back3Img pos-abs" mode=""></image>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/userMessenger/RecordSigning.png" class="RecordSigning" mode=""></image>
					</view>
					<view class="attext">
						路线导航
					</view>
				</view>
			</view>
		 </view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
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
						url:'/pages/index/index'
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
				isShowType:false
			}
		},
		methods: {
         selecType(item){
			 if(item.type == 'expressage') return;
			 uni.reLaunch({
			 	url: item.url
			 })
		 },
		 // 申请进入
		 ApplyingTo(){
			 uni.navigateTo({
			 	url:'/pages/userMessenger/applyingTo/applyingTo'
			 })
		 },
		 // 送货申请
		 ApplyingTo(){
			 uni.navigateTo({
			 	url:'/pages/userMessenger/applyDelivery/applyDelivery'
			 })
		 }
		},
		mounted() {

		},
		onLoad() {

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
	
	.passQrCode{
		width: 335rpx;
		height: 420rpx;
		color: #FFFFFF;
	}
	.back1Img{
		width: 335rpx;
		height: 420rpx;
	}
	.prcline{
		height: 40rpx;
	}
	.prctext{
		margin-left: 20rpx;
		font-size: 20px;
		opacity: 0.99;
	}
	.qecodeImg{
		margin-top: 97rpx;
		margin-left: 97rpx;
		width: 140rpx;
		height: 140rpx;
	}
	
	.VisitToApply{
		margin-top: 30rpx;
		width: 335rpx;
		color: #FFFFFF;
	}
	.VisitthecircleImg{
		width: 147rpx;
		height: 130rpx;
		margin-top: 104rpx;
		margin-left: 94rpx;
	}
	.ApplyingTo{
		width: 335rpx;
		height: 270rpx;
		color: #FFFFFF;
	}
	
	.back3Img{
		width: 335rpx;
		height: 270rpx;
	}
	
	.attext{
		margin-top: 105rpx;
		margin-left: 20rpx;
		font-size: 20px;
		opacity: 0.99;
	}
	
	.GooutImg{
		margin-left: 27rpx;
		margin-top: 78rpx;
		width: 90rpx;
		height: 100rpx;
	}
	
	.serviceImg{
		margin-left: 27rpx;
		margin-top: 78rpx;
		width: 98rpx;
		height: 98rpx;
	}
	
	.RecordSigning{
		margin-left: 27rpx;
		margin-top: 78rpx;
		width: 104rpx;
		height: 104rpx;
	}
</style>
