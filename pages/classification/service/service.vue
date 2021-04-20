<template>
	<view class="">
		<subclass titel='上门服务'></subclass>
		<view class="tabbar flex al-center ju-around">
			<view class="item flex al-center" @click="add(index)" :class="{'dv':index == idx}" v-for="(item,index) in till" :key='item.id'>
				{{item}} 
			</view>
		</view>
         <view class="simulation">
         	以下均为模拟数据
         </view>
		<view class="flex-d top al-center">
			<view class="flex itembox pos-rel" v-for="item in getData" :key='item.id'>
				<image :src="item.image" class="itemimg" mode=""></image>
				<view class="m-t2 m-l2 name">
					{{item.name}}
					<view class="score  flex al-center">
						<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/wujiao.png" class="wujiaoimg" mode=""></image>
						<view class="m-l1">
							{{item.score}}
						</view>
						<view class="Price">
							{{item.Price}}
						</view>
						<view class="timer pos-abs">
							{{item.distance}}
						</view>
					</view>
					<view v-if="item.tag" class="m-t1 flex al-center">
						<view class="items" v-for="items in item.tag" :key='items.id'>
							<image :src="items" class="tagimg" mode=""></image>
						</view>
					</view>
					<view class=" flex">
						<view class="Views pos-abs flex al-center">
							{{item.Views}}
							<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/next.png" class="nextimg" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="line">

		</view>

	</view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
	export default {
		name: "",
		components: {
			subclass
		},
		props: {},
		data() {
			return {
				till: ['全部', '家电维修', '水管维修', '电脑维修'],
				idx: 0,
				getData: [],
				locadata: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo1.png',
						name: '邻家维修（华阳店）',
						score: '4.9',
						Price: '￥183/人',
						distance: '5.9km',
						Views: '12597人浏览',
						titel: ' 家电维修  ',
						address: ' 天府新区  ',
						tag: [
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/1.png',
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/3.png',
						]
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo2.png',
						name: '速达到家家电维修（华阳店）',
						score: '5.0',
						Price: '暂无均价',
						distance: '6.1km',
						Views: '12541人浏览',
						titel: ' 家电维修',
						address: ' 天府新区 ',
						tag: [
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/5.png',
						]
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo3.png',
						name: '驰瑞电脑手机维修',
						score: '4.8',
						Price: '暂无均价',
						distance: '3.9km',
						Views: '12541人浏览',
						titel: ' 电脑维修',
						address: ' 天府新区 ',
						tag: [
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/6.png',
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
						]
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo4.png',
						name: '芯维修手机上门维修（天府三街店）',
						score: '5.0',
						Price: '暂无均价',
						distance: '8.0km',
						Views: '12589人浏览',
						titel: ' 电脑维修 ',
						address: ' 天府新区 ',
						tag: [
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/3.png',
							'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
						]
					}
				],
				locadata1: [{
					image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo2.png',
					name: '速达到家家电维修（华阳店）',
					score: '5.0',
					Price: '暂无均价',
					distance: '6.1km',
					Views: '12541人浏览',
					titel: ' 家电维修',
					address: ' 天府新区 ',
					tag: [
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/5.png',
					]
				}, ],
				locadata2: [{
					image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo1.png',
					name: '邻家维修（华阳店）',
					score: '4.9',
					Price: '￥183/人',
					distance: '5.9km',
					Views: '12597人浏览',
					titel: ' 家电维修  ',
					address: ' 天府新区  ',
					tag: [
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/1.png',
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/3.png',
					]
				}, ],
				locadata3: [{
					image: 'https://oss.kuaitongkeji.com/static/img/app/classification/service/logo3.png',
					name: '驰瑞电脑手机维修',
					score: '4.8',
					Price: '暂无均价',
					distance: '3.9km',
					Views: '12541人浏览',
					titel: ' 电脑维修',
					address: ' 天府新区 ',
					tag: [
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/6.png',
						'https://oss.kuaitongkeji.com/static/img/app/classification/service/2.png',
					]
				}, ]
			}
		},
		methods: {
			add(index) {
				this.idx = index
				if (index == 0) {
					this.getData = this.locadata
				}
				if (index == 1) {
					this.getData = this.locadata1
				}
				if (index == 2) {
					this.getData = this.locadata2
				}
				if (index == 3) {
					this.getData = this.locadata3
				}
			}
		},
		onShow() {
			this.getData = this.locadata
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
	.tabbar {
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		color: #666;
		font-size: 30rpx;
		border-bottom: 1rpx solid #D2D2D2;
		position: fixed;
		z-index: 9;
	}

	.top {
		// margin-top: 88rpx;
	}

	.item {
		height: 88rpx;
	}

	.dv {
		color: #F07535;
		height: 84rpx;
		border-top: 1px solid #FFFFFF;
		border-bottom: 1px solid #F07535;
	}

	.itemimg {
		width: 144rpx;
		height: 144rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.wujiaoimg {
		width: 20rpx;
		height: 20rpx;
	}

	.jianbimg {
		width: 120rpx;
		height: 38rpx;
	}

	.itembox {
		width: 690rpx;
		padding-bottom: 50rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 30rpx;
			box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
	}

	.name {
		color: #333333;
		font-size: 32rpx;
	}

	.score {
		color: #FFA800;
		font-size: 24rpx;
		margin: 10rpx 0;
	}

	.timer {
		color: #9A9A9A;
		right: 20rpx;
	}

	.Price {
		color: #9A9A9A;
		margin-left: 15rpx;
	}

	.details {
		color: #999999;
		font-size: 24rpx;
	}

	.databox {
		margin-left: 40rpx;
	}

	.Hours {
		width: 120rpx;
		height: 38rpx;
		color: #FFFFFF;
		font-size: 24rpx;
	}

	.Views {
		color: #999999;
		font-size: 22rpx;
		right: 20rpx;
	}

	.nextimg {
		width: 10rpx;
		height: 20rpx;
		margin-left: 15rpx;
	}

	.line {
		height: 30rpx;
	}

	.tagimg {
		width: 84rpx;
		height: 25rpx;
		margin-right: 20rpx;
	}
	
	.simulation{
			display: flex;
			justify-content: center;
			margin-top: 108rpx;
			font-size: 30rpx;
			color: #b3b3b3;
	}
</style>
