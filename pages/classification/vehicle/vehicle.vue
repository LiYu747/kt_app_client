<template>
	<view class="">
		<subclass titel='车辆'></subclass>
		<view class="tabbar flex al-center ju-around">
			<view class="item flex al-center" @click="add(index)" :class="{'dv':index == idx}" v-for="(item,index) in till" :key='item.id'>
				{{item}}
			</view>
		</view>

		<view class="flex-d top al-center">
			<view class="flex itembox pos-rel" v-for="item in getData" :key='item.id'>
				<image :src="item.image" class="itemimg" mode=""></image>
				<view class="m-t2 m-l2 name">
					{{item.name}}
					<view class="score  flex al-center">
						<view v-if='item.score' class="flex al-center">
							<image src="../../../image/classification/Healthcare/wujiao.png" class="wujiaoimg" mode=""></image>
							<view class="m-l1">
								{{item.score}}
							</view>
						</view>
						<view class="Monthly" v-else>
							{{item.Monthly}}
						</view>
						<view class="Price">
							{{item.Price}}
						</view>
						<view class="timer pos-abs">
							7.8km
						</view>
					</view>
					<view class="details flex">
						{{item.titel}}
						<view class="databox">
							{{item.address}}
						</view>
					</view>
					<view class="Monthly">
						{{item.xxadd}}
					</view>
					<view v-if="item.label" class="details m-t1">
						{{item.label}}
					</view>
					<view v-if="item.tag" class="m-t1 flex al-center">
						<view class="items" v-for="items in item.tag" :key='items.id'>
							<image :src="items" class="tagimg" mode=""></image>
						</view>
					</view>
					<view class="m-t1 flex">
						<view class="Views pos-abs flex al-center">
							{{item.Views}}
							<image src="../../../image/classification/Healthcare/next.png" class="nextimg" mode=""></image>
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
				till: ['全部', '维修4s店', '停车场', '加油站'],
				idx: 0,
				getData: [],
				locadata: [{
						image: require('@/image/classification/vehicle/logo1.png'),
						name: '新希望国际B座汇泊停车场',
						Views: '5842人浏览',
						xxadd: '地址：四川省成都市武侯区桂溪街道萃华路新希望国际B座',
						Monthly: '月租：700-1500 '
					},
					{
						image: require('@/image/classification/vehicle/logo2.png'),
						name: '天府华星锦业奔驰4s店',
						score: '5.0',
						Price: '暂无均价',
						Views: '21551人浏览',
						titel: ' 4s店',
						address: ' 华阳',
						tag: [
							require('@/image/classification/vehicle/1.png'),
							require('@/image/classification/vehicle/3.png'),
						]
					},
					{
						image: require('@/image/classification/vehicle/logo3.png'),
						name: '新元素奥迪（麓山大道店）',
						score: '4.5',
						Price: '暂无均价',
						Views: '21551人浏览',
						titel: ' 4s店 ',
						address: '    华阳    ',
						label: '“服务专业，环境没得说，高端大气上档次”',
					},
					{
						image: require('@/image/classification/vehicle/logo4.png'),
						name: '华阳天山加油站',
						score: '4.5',
						Price: '暂无均价',
						Views: '2896人浏览',
						titel: ' 加油站        ',
						address: ' 天府新区',
					},
				],
				locadata1: [{
					image: require('@/image/classification/vehicle/logo2.png'),
					name: '天府华星锦业奔驰4s店',
					score: '5.0',
					Price: '暂无均价',
					Views: '21551人浏览',
					titel: ' 4s店',
					address: ' 华阳',
					tag: [
						require('@/image/classification/vehicle/1.png'),
						require('@/image/classification/vehicle/3.png'),
					]
				}, ],
				locadata2: [{
					image: require('@/image/classification/vehicle/logo1.png'),
					name: '新希望国际B座汇泊停车场',
					Views: '5842人浏览',
					xxadd: '地址：四川省成都市武侯区桂溪街道萃华路新希望国际B座',
					Monthly: '月租：700-1500 '
				}, ],
				locadata3: [{
					image: require('@/image/classification/vehicle/logo4.png'),
					name: '华阳天山加油站',
					score: '4.5',
					Price: '暂无均价',
					Views: '2896人浏览',
					titel: ' 加油站        ',
					address: ' 天府新区',
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
		margin-top: 88rpx;
	}

	.item {
		height: 88rpx;
	}

	.dv {
		color: #F07535;
		height: 84rpx;
		border-top: 1px solid #ffffff;
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
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
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

	.Monthly {
		color: #9A9A9A;
		font-size: 24rpx;
	}
</style>
