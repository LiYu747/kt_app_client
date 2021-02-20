<template>
	<view class="page">
		<subunit titel='详情' class="fidex"></subunit>
		<view class="topLine">
			
		</view>
		<view class="flex-d al-center">
			<view class="backBox pos-rel m-t2 flex al-center ju-center">
				<image src="../../../image/lookroom/back1.png" class="logoImg " mode=""></image>
				<view class="cutBox pos-abs flex ju-between">
					<image src="../../../image/lookroom/left.png" class="leftImg" mode=""></image>
					<image src="../../../image/lookroom/right.png" class="leftImg" mode=""></image>
				</view>
			</view>

			<view class="contenBox">
				<view class="nameDetail">
					合租 · 复地御香山3悦 5居室 南卧
				</view>
				<view class="pritext flex m-t1">
					4000
					<view class="fz-12">
						元/月
					</view>
				</view>
				<view class="m-t1">
					<image src="../../../image/lookroom/tags1.png" class="tags" mode=""></image>
					<image src="../../../image/lookroom/tags2.png" class="tags" mode=""></image>
					<image src="../../../image/lookroom/tags3.png" class="tags m-l1" mode=""></image>
				</view>
			</view>

			<view class="houseType flex al-center">
				<view class="flex al-center" v-for="(item,index) in locdata" :key='item.id'>
					<view class="flex-d al-center">
						<view class="fz-14 itemvalue">
							{{item.value}}
						</view>
						<view class="fz-12 itemtil">
							{{item.title}}
						</view>
					</view>
					<view v-if="locdata.length-1 != index" class="line">

					</view>
				</view>
			</view>
			
			<view class="houseType">
				<view class="fz-14 itemtil flex al-center">
					电梯
					<view class="itemvalue m-l2">
						有
					</view>
				</view>
				<view class="fz-14 itemtil flex al-center">
					入住    
					<view class="itemvalue m-l2">
					随时入住
					</view>
				</view>
				<view class="fz-14 itemtil flex al-center">
					装修       
					<view class="itemvalue m-l2">
					精装
					</view>
				</view>
				<view class="fz-14 itemtil flex al-center">
					租期     
					<view class="itemvalue m-l2">
					可短租1-3个月/可长租1年
					</view>
				</view>
			</view>
			
			<view class="addressBox m-t3 flex al-center fz-14">
				<image src="../../../image/lookroom/add.png" class="addImg" mode=""></image>
				<view class="m-l2">
					位于锦江生态带  距离广福地铁站225米
				</view>
			</view>
			
			<view class="briefRoom">
				<view class="itemvalue">
					房源简介
				</view>
				<view class="fz-12 m-t2 m-b2">
					[小区介绍]
				</view>
				<view class="fz-12">
					复地御香山3悦小区紧邻繁华地段，小区周边配套成熟，交通选择多，生
					活设施全。
				</view>
				<view class="fz-12 m-t2 m-b2">
					[房屋介绍]
				</view>
				<view class="fz-12">
					复地御香山3悦小区紧邻繁华地段，小区周边配套成熟，交通选择多，生
					活设施全。
				</view>
			</view>
			
		  <view class="">
		  	<image src="../../../image/lookroom/consult.png" class="consultImg" mode=""></image>
		  </view>
		  
		  <view class="btmLine">
		  	
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
				locdata: [{
					title: '朝向',
					value: '南'
				}, {
					title: '面积',
					value: '18㎡'
				}, {
					title: '楼层',
					value: '26/33层'
				}, {
					title: '户型',
					value: '五室一厅'
				}]
			}
		},
		methods: {

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
	.page {
		background: #FFFFFF;
	}
	
	.fidex{
		position: fixed;
		z-index: 9;
	}
	
	.topLine{
		height: 148rpx;
	}

	.backBox {
		width: 690rpx;
		height: 360rpx;
	}

	.logoImg {
		width: 690rpx;
		height: 360rpx;
	}

	.cutBox {
		width: 650rpx;
		padding: 0 20rpx;
	}

	.leftImg {
		width: 32rpx;
		height: 60rpx;
	}

	.contenBox {
		width: 690rpx;
	}

	.tags {
		margin-top: 10rpx;
		width: 100rpx;
		height: 30rpx;
	}

	.nameDetail {
		margin-top: 40rpx;
		font-size: 18px;
		color: #333333;
	}

	.pritext {
		color: #F07535;
		font-size: 34rpx;
		align-items: baseline;
	}

	.houseType {
		margin-top: 30rpx;
		width: 610rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		border-radius: 10rpx;
		padding: 20rpx 40rpx;
	}

	.line {
		width: 1px;
		height: 50rpx;
		background: #BFBFBF;
		margin: 0 45rpx;
	}
	
	.itemvalue{
		color: #333333;
	}
	
	.itemtil{
		margin-top: 5rpx;
		color: #999999;
	}
	
	.addressBox{
	   width: 630rpx;
	   padding: 30rpx ;	
		background: #F5F5F5;  
		border-radius: 10rpx;
		}
		
	.addImg{
		width: 30rpx;
		height: 30rpx;
	}	
	
	.briefRoom{
		margin-top: 30rpx;
		width: 650rpx;
		padding: 20rpx;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		color: #4D4D4D;
		border-radius: 10rpx;
	}
	
	.consultImg{
		margin-top: 100rpx;
		width: 250rpx;
		height: 75rpx;
		}
	
	.btmLine{
		height: 100rpx;
	}	
</style>
