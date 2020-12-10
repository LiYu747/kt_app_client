<template>
	<view class="">
		<subclass titel='运动'></subclass>
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
						<image src="../../../image/classification/Healthcare/wujiao.png" class="wujiaoimg" mode=""></image>
						<view class="m-l1">
							{{item.score}}
						</view>
						<view class="Price">
							{{item.Price}}
						</view>
						<view class="timer pos-abs">
							10分钟 500m
						</view>
					</view>
					<view class="details flex">
						{{item.titel}}
						<view class="databox">
							{{item.address}}
						</view>
					</view>
					<view v-if="item.label" class="details m-t1">
						{{item.label}}
					</view>
					<view v-if="item.tag" class="m-t1">
						<image :src="item.tag" class="tagimg" mode=""></image>
					</view>
					<view class=" flex">
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
				till: ['全部', '健身馆', '篮球', '羽毛球'],
				idx: 0,
				getData: [],
				locadata: [{
						image: require('@/image/classification/motion/logo1.png'),
						name: 'VIGOR LIFE健身训练中心（复地御香...）',
						score: '5.0',
						Price: '￥1035/人',
						Views: '5624人浏览',
						titel: ' 私教工作室   ',
						address: ' 华阳',
						label: '健身爱好者，力量训练爱好者的天堂',
						tag: require('@/image/classification/motion/tag1.png')
					},
					{
						image: require('@/image/classification/motion/logo2.png'),
						name: '泳力健身游泳中心',
						score: '4.0',
						Price: '￥60/人',
						Views: '5587人浏览',
						titel: ' 游泳 ',
						address: ' 华阳',
						label: '去过恒温泳池数一数二的了',
					},
					{
						image: require('@/image/classification/motion/logo3.png'),
						name: '99PARK篮球公园',
						score: '3.5',
						Price: '￥20/人',
						Views: '87865人浏览',
						titel: ' 篮球    ',
						address: ' 航空港',
						label: '免费停车',
					},
					{
						image: require('@/image/classification/motion/logo4.png'),
						name: '弘羽羽毛球馆',
						score: '4.0',
						Price: '暂无均价',
						Views: '2896人浏览',
						titel: ' 羽毛球  ',
						address: ' 高新区',
						label: '健身爱好者，力量训练爱好者的天堂',
						tag: require('@/image/classification/motion/tag2.png')
					}
				],
				locadata1: [{
						image: require('@/image/classification/motion/logo5.png'),
						name: '原始 Fitness',
						score: '4.0',
						Price: '￥60/人',
						Views: '2587人浏览',
						titel: ' 私教工作室 ',
						address: ' 华阳',
						label: '是周围数个健身房数一数二的质量了',
					},
					{
						image: require('@/image/classification/motion/logo1.png'),
						name: 'VIGOR LIFE健身训练中心（复地御香...）',
						score: '5.0',
						Price: '￥1035/人',
						Views: '5624人浏览',
						titel: ' 私教工作室   ',
						address: ' 华阳',
						label: '健身爱好者，力量训练爱好者的天堂',
						tag: require('@/image/classification/motion/tag1.png')
					},
				],
				locadata2: [{
					image: require('@/image/classification/motion/logo3.png'),
					name: '99PARK篮球公园',
					score: '3.5',
					Price: '￥20/人',
					Views: '87865人浏览',
					titel: ' 篮球    ',
					address: ' 航空港',
					label: '免费停车',
				}, ],
				locadata3: [{
					image: require('@/image/classification/motion/logo4.png'),
					name: '弘羽羽毛球馆',
					score: '4.0',
					Price: '暂无均价',
					Views: '2896人浏览',
					titel: ' 羽毛球  ',
					address: ' 高新区',
					label: '健身爱好者，力量训练爱好者的天堂',
					tag: require('@/image/classification/motion/tag2.png')
				}]
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
		width: 240rpx;
		height: 30rpx;
	}
</style>
