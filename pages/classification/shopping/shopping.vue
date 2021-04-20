<template>
	<view class="">
		<subclass titel='购物'></subclass>
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
					<view class="details m-t1">
						{{item.Crunchies}}
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
				till: ['全部', '衣服', '鞋子', '家具'],
				idx: 0,
				getData: [],
				locadata: [{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo1.png'),
						name: '岱芙服装店',
						score: '3.5',
						distance: '11.3km',
						Views: '5624人浏览',
						label: '服装      天府新区',
						Crunchies: '”店的位置不错，环境整洁时尚“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo5.png'),
						name: '名创优品',
						score: '4.0',
						distance: '7.4km',
						Views: '1768人浏览',
						label: '居家日常      高新区',
						Crunchies: '“很喜欢在名创优品里面买东西，质量不错”',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo8.png'),
						name: '禾木艺景.品质整装',
						score: '5.0',
						distance: '14km',
						Views: '4578人浏览',
						label: '装修设计      高新区',
						Crunchies: '”性价比很高的一家装修公司“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo2.png'),
						name: '海澜之家',
						score: '3.5',
						distance: '3.6km',
						Views: '3268人浏览',
						label: '服装      天府新区',
						Crunchies: '”店的位置不错，环境整洁时尚“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo3.png'),
						name: '庄贤服装设计工作室',
						score: '4.2',
						distance: '12.4km',
						Views: '4218人浏览',
						label: '其他兴趣生活      高新区',
						Crunchies: '”体验了工业缝纫机，能玩缝纫机就很开心“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo7.png'),
						name: 'U家工场.全案美学整装',
						score: '5.0',
						distance: '14km',
						Views: '15768人浏览',
						label: '装修设计      高新区',
						Crunchies: '专业上门验房+量房',
					},
				],
				locadata1: [{

						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo1.png'),
						name: '岱芙服装店',
						score: '3.5',
						distance: '11.3km',
						Views: '5624人浏览',
						label: '服装      天府新区',
						Crunchies: '”店的位置不错，环境整洁时尚“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo2.png'),
						name: '海澜之家',
						score: '3.5',
						distance: '3.6km',
						Views: '3268人浏览',
						label: '服装      天府新区',
						Crunchies: '”店的位置不错，环境整洁时尚“', 
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo3.png'),
						name: '庄贤服装设计工作室',
						score: '4.2',
						distance: '12.4km',
						Views: '4218人浏览',
						label: '其他兴趣生活      高新区',
						Crunchies: '”体验了工业缝纫机，能玩缝纫机就很开心“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo4.png'),
						name: '观奇洋服.西服定制中心',
						score: '3.5',
						distance: '7.5km',
						Views: '3761人浏览',
						label: '西服定制      华阳',
						Crunchies: '”衣服的做工和边角都处理的不错“',
					},
				],
				locadata2: [{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo5.png'),
						name: '名创优品',
						score: '4.0',
						distance: '7.4km',
						Views: '1768人浏览',
						label: '居家日常      高新区',
						Crunchies: '“很喜欢在名创优品里面买东西，质量不错”',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo6.png'),
						name: '卓诗尼',
						score: '3.5',
						distance: '20km',
						Views: '5768人浏览',
						label: '鞋靴      春熙路',
						Crunchies: '“装修好看，特别是里面的灯光特别温馨”',
					},
				],
				locadata3: [{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo7.png'),
						name: 'U家工场.全案美学整装',
						score: '5.0',
						distance: '14km',
						Views: '15768人浏览',
						label: '装修设计      高新区',
						Crunchies: '专业上门验房+量房',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo8.png'),
						name: '禾木艺景.品质整装',
						score: '5.0',
						distance: '14km',
						Views: '4578人浏览',
						label: '装修设计      高新区',
						Crunchies: '”性价比很高的一家装修公司“',
					},
					{
						image: ('https://oss.kuaitongkeji.com/static/img/app/classification/shopping/logo9.png'),
						name: '致美优家',
						score: '4.5',
						distance: '14km',
						Views: '4578人浏览',
						label: '装修设计      高新区',
						Crunchies: '精装房上门验房检测',
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
			box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
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
