<template>
	<view class="page">
		<subunit titel='详情' class="fidex"></subunit>
		<view class="topLine">

		</view>
		<view class="flex-d al-center">
			<view class="backBox pos-rel m-t2 flex al-center ju-center">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="item in roomInof.album"  :key="item.id" class="flex ju-center">
						<image :src="item" class="logoImg " mode="heightFix"></image>
					</swiper-item>
				</swiper>
			</view>

			<view class="contenBox">
				<view class="nameDetail">
					{{roomInof.title}}
				</view>
				<view class="pritext flex m-t1">
					{{roomInof.rents}}
					<view class="fz-12">
						元/月
					</view>
				</view>
			</view>

			<view class="houseType flex al-center ju-between">
				<view class="flex al-center itemwidth ju-center pos-rel" v-for="(item,index) in locdata" :key='item.id'>
					<view class="flex-d al-center">
						<view class="fz-14 itemvalue">
							{{item.value}}
						</view>
						<view class="fz-12  itemtil">
							{{item.title}}
						</view>
					</view>
					<view class="line" v-if="locdata.length-1 != index">

					</view>
				</view>
			</view>

			<view class="isHave">
				<view class="fz-14 m-b1 flex al-center">
					电梯
					<view class="isResult m-l2">
						暂无
					</view>
				</view>
				<view class="fz-14  m-b1 flex al-center">
					入住
					<view class="isResult m-l2">
						随时入住
					</view>
				</view>
				<view class="fz-14  m-b1 flex al-center">
					装修
					<view class="isResult m-l2">
						{{roomInof.zx}}
					</view>
				</view>
				<view class="fz-14  m-b1 flex al-center">
					租期
					<view class="isResult m-l2">
						可短租1-3个月/可长租1年
					</view>
				</view>
			</view>

			<view class="addressBox m-t3 flex  fz-14">
				<image src="../../../../image/lookroom/add.png" class="addImg" mode=""></image>
				<view class="m-l2 addressmsg">
					{{roomInof.village}}
				</view>
			</view>

			<view class="briefRoom">
				<view class="itemvalue">
					房屋概况
				</view>
				<view class="fz-12 m-t2 m-b2">
				   {{roomInof.desc}}
				 <!--  复地御香山3悦小区紧邻繁华地段，小区周边配套成熟，交通选择多，生
				   活设施全。 -->
				</view>
			</view>

			<view class="">
				<image src="../../../../image/lookroom/consult.png" class="consultImg" mode=""></image>
			</view>

			<view class="btmLine">

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
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				locdata: [{
					title: '面积',
					value: ''
				}, {
					title: '楼层',
					value: ''
				}, {
					title: '户型',
					value: ''
				}],
				roomInof: {},
			}
		},
		methods: {
			
			getData(id) {
				home.roomDateils({
					data: {
						id: id
					},
					fail: () => {

					},
					success: (res) => {
						console.log(res);
						let data = res.data.data
						if (data.album&&data.album.length > 1) {
							this.indicatorDots = true
						}
						if(data.bathroom  == null){
							data.bathroom = 0
						}
                        this.locdata[0].value = data.area + '㎡'
						this.locdata[1].value = data.floor + '/' + data.total_floor + '层'
						this.locdata[2].value = data.room + '室' + data.hall + '厅' + data.bathroom + '卫'
						if (data.zx == 'low') {
							data.zx = '清水房'
						}
						if (data.zx == 'simple') {
							data.zx = '简装'
						}
						if (data.zx == 'well') {
							data.zx = '精装'
						}
						this.roomInof = data
					}
				})
			}
		},
		mounted() {

		},
		onLoad(option) {
			this.getData(option.id)
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

	.fidex {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.backBox {
		width: 690rpx;
		height: 360rpx;
	}

	.swiper {
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
		width: 690rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		border-radius: 10rpx;
		padding: 20rpx 0rpx;
	}

	.itemwidth {
		width: 33%;
	}

	.line {
		width: 1px;
		height: 50rpx;
		background: #BFBFBF;
		position: absolute;
		right: 0;
	}

	.itemvalue {
		color: #F07535;
		font-size: 34rpx;
	}

	.itemtil {
		margin-top: 10rpx;
		color: #999999;
	}

	.isHave {
		margin-top: 30rpx;
		width: 650rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		border-radius: 10rpx;
		padding: 20rpx;
		color: #999999;
	}

	.isResult {
		color: #333333;
	}

	.addressBox {
		width: 630rpx;
		padding: 30rpx;
		background: #F5F5F5;
		border-radius: 10rpx;
	}

	.addImg {
		margin-top: 5rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.briefRoom {
		margin-top: 30rpx;
		width: 650rpx;
		padding: 20rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		color: #4D4D4D;
		border-radius: 10rpx;
	}

	.consultImg {
		margin-top: 100rpx;
		width: 250rpx;
		height: 75rpx;
	}
	
	.addressmsg{
		width: 560rpx;
	}

	.btmLine {
		height: 100rpx;
	}
	
	.showBox{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		background: #000000;
		z-index: 99;
	}
	
	.showSwiper{
		width: 100%;
		height: 360rpx;
	}
	
	.showImg{
	  width: 100%;	
	  height: 360rpx;
	}
</style>
