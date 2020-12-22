<template>
	<view class="">
		<subclass titel='茶饮'></subclass>
        <view class="simulation">
        	以下均为模拟数据
        </view>
		<view class="flex-d top al-center">
			<view class="flex itembox pos-rel" v-for="item in locadata" :key='item.id'>
				<image :src="item.image" class="itemimg" mode=""></image>
				<view class="m-t2 m-l2 name">
					{{item.name}}
					<view class="score  flex al-center">
						<view  class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/wujiao.png" class="wujiaoimg" mode=""></image>
							<view class="m-l1">
								{{item.score}}
							</view>
						</view>
						<view class="Price">
							{{item.price}}
						</view>
						<view class="timer pos-abs">
							{{item.distance}}
						</view>
					</view>
					<view  class="details m-t1">
						{{item.label}}
					</view>
					<view class="m-t1 details flex al-center">
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
				locadata: [{
						image:  'https://oss.kuaitongkeji.com/static/img/app/classification/teaBasedDrink/logo1.png',
						name: '茶百道（复地御香山店）',
						score: '4.0',
						price:'￥16/人',
						distance:'8分钟 500m',
						label:"奶茶、果汁      华阳",
						introduce:'奥利奥的奶茶常规味道',
						Views: '5236人浏览',
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/teaBasedDrink/logo2.png',
						name: '怡茶府',
						score: '3.5',
						price:'暂无均价',  
						distance:'8分钟 500m',
						label:"茶馆      华阳",
						introduce:'“装修很有特色，茶馆环境不错”',
						Views: '3213人浏览',
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/teaBasedDrink/logo3.png',
						name: '丸摩堂',
						score: '3.5',
						price:'￥16/人',
						distance:'8分钟 500m',
						label:"奶茶、果汁      华阳",
						introduce:'“很喜欢他家奶茶，甜度可以选择”',
						Views: '5236人浏览',
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/teaBasedDrink/logo4.png',
						name: '集良茶',
						score: '4.3',
						price:'暂无均价',
						distance:'8分钟 500m',
						label:"茶馆      华阳",
						introduce:'“优雅古色古香的感觉，泡茶手艺一流”',
						Views: '2796人浏览',
					},
				],
			} 
		},
		methods: {
		
		},
		onShow() {
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
	
	.simulation{
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
		font-size: 30rpx;
		color: #b3b3b3;
	}
</style>
