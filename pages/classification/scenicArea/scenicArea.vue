<template>
	<view class="">
		<subclass titel='旅行'></subclass>
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
						<view class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/wujiao.png" class="wujiaoimg"
							 mode=""></image>
							<view class="m-l1">
								{{item.score}}
							</view>
						</view>
						<view class="Price">
							{{item.Price}}
						</view>
						<view class="timer pos-abs">
							{{item.distance}}
						</view>
					</view>
					<view class="details flex">
						{{item.titel}}
						<view class="databox">
							{{item.address}}
						</view>
					</view>
					<view v-if="item.label" class="details ">
						{{item.label}}
					</view>
					<view v-if="item.price" class="m-t1 details flex al-center">
						门票
						<view class="price">
							{{item.price}}
						</view> 起
					</view>
					<view class="m-t1 details flex al-center" v-else>
						免费开放
					</view>
					<view class="interval ">

					</view>
					<view class="details">
						{{item.Crunchies}}
					</view>
					<view class="details">
						{{item.introduce}}
					</view>
					<view class="m-t1 flex">
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
				till: ['全部', '景点', '温泉', '滑雪'],
				idx: 0,
				getData: [],
				locadata: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo1.png',
						name: '南湖梦幻岛',
						score: '3.9',
						distance: '3.0km',
						Views: '46759人浏览',
						label: '公园游乐场      天府新区',
						price: '',
						Crunchies: '榜单：成都嗨玩游乐场人气榜 第三名',
						introduce: '项目：太空梭、失恋博物馆'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo2.png',
						name: '成都动物园',
						score: '4.6',
						distance: '26.4km',
						Views: '52658人浏览',
						label: '动物园      驷马桥',
						price: '￥18',
						Crunchies: '出行：17：00闭园，驾车43分钟到',
						introduce: '榜单：成都萌控必去景点'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo3.png',
						name: '成都海昌极地海洋公园（4A）',
						score: '4.3',
						distance: '2.1km',
						Views: '8268人浏览',
						label: '海洋馆      天府新区',
						price: '￥168',
						Crunchies: '出行：17：00闭园，骑行10分钟到',
						introduce: '榜单：成都室内玩乐景点'
					}
				],
				locadata1: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo4.png',
						name: '七彩田野',
						score: '4.0',
						distance: '9.9km',
						Views: '10268人浏览',
						label: '其他景点      锦江区',
						price: '',
						Crunchies: '出行：18:00闭园，驾车16分钟到',
						introduce: '项目：真人cs、UTV乐园、游船'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo5.png',
						name: '紫颐香薰山谷景区',
						score: '3.8',
						distance: '10.9km',
						Views: '3268人浏览',
						label: '公园游乐场      双流区',
						price: '',
						Crunchies: '出行：18：00闭园，驾车18分钟到',
						introduce: '榜单：成都萌控必去景点人气榜'
					},
				],
				locadata2: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo6.png',
						name: '诺亚方舟（创业路）',
						score: '3.9',
						distance: '16.1km',
						Views: '1768人浏览',
						label: '温泉      高棚大道',
						price: '￥149',
						Crunchies: '榜单：成都舒享温泉人气榜',
						introduce: '项目:禅意丝享区、果蔬鲜花泉'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo7.png',
						name: '蜀乐池温泉',
						score: '4.0',
						distance: '29.1km',
						Views: '5768人浏览',
						label: '温泉     凤凰大街',
						price: '￥148',
						Crunchies: '榜单：成都省心全家游景点榜',
						introduce: '项目：30多项休闲娱乐项目、温泉桑拿'
					},
				],
				locadata3: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo8.png',
						name: '美洲四季滑雪场',
						score: '4.8',
						distance: '12km',
						Views: '15768人浏览',
						label: '滑雪      石羊场',
						price: '￥102',
						Crunchies: '',
						introduce: ''
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/travel/logo9.png',
						name: '滑噜噜四季滑雪场',
						score: '4.2',
						distance: '2km',
						Views: '4578人浏览',
						label: '滑雪      华阳',
						price: '￥69',
						Crunchies: '',
						introduce: ''
					},
				]
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
		border-top: 1px solid #ffffff;
		border-bottom: 1px solid #F07535;
	}

	.itemimg {
		width: 150rpx;
		height: 150rpx;
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
		// width: 100%;
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

	.simulation {
		display: flex;
		justify-content: center;
		margin-top: 108rpx;
		font-size: 30rpx;
		color: #b3b3b3;
	}

	.interval {
		margin-top: 10rpx;
		width: 480rpx;
		height: 2rpx;
		background: #ccc;
		margin-bottom: 5rpx;
	}

	.price {
		font-size: 14px;
		color: #F07535;
	}
</style>
