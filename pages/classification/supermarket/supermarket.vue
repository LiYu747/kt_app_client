<template>
	<view class="">
		<subclass titel='便利超市'></subclass>
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
						<view class="timer pos-abs">
							39分钟 2.9km
						</view>
					</view>
					<view v-if="item.time" class="Hours flex al-center ju-center">
						<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/jianb.png" class="jianbimg " mode=""></image>
						<view class="pos-abs">
							{{item.time}}
						</view>
					</view>
					<view class="details m-t1 flex">
						<view class="flex-d flex al-center" v-for="items in item.images" :key='items.id'>
							<image class="itemsimg" :src="items.img" mode=""></image>
							{{items.titel}}
						</view>
					</view>
					<view class="m-t2 flex">
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
				till: ['生鲜超市', '水果超市', '24小时', '宠物用品'],
				idx: 0,
				getData:[],
				locadata: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/92.png',
						name: '鲜果汇（广福地铁站店）',
						score: '4.9',
						images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/banlala.png',
								titel:'香甜香蕉'
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/mang.png',
								titel:'鲜切芒果'
							},
						],
						time: '24h营业',
						Views: '5624人浏览'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/hongq.png',
						name: '红旗连锁（华阳海昌路店）',
						score: '暂无评分',
						images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/coco.png',
								titel:'可口可乐'
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/kamgsf.png',
								titel:'藤椒牛肉面'
							},			
						],
						time: '24h营业',
						Views: '5587人浏览'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/rongc.png',
						name: '蓉城万家（天府新区店）',
						score: '5.0',
						images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/wahaha.png',
								titel:'AD钙奶' 
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/zhi.png',
								titel:'本色纸浆抽纸'
							},	
						],
						time: null,
						Views: '87865人浏览'
					},
				],
			    locadata1: [{
			    		image: 'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo1.png',
			    		name: '鲜果汇（广福地铁站店）',
			    		score: '4.5',
			    		images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo1.1.png',
								titel:'金桔'
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo1.2.png',
								titel:'菠萝蜜'
							},
			    		],
			    		Views: '5004人浏览'
			    	},
					{
							image:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/92.png',
							name: '鲜果汇（广福地铁站店）',
							score: '4.9',
							images: [
								{
									img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/banlala.png',
									titel:'香甜香蕉'
								},
								{
									img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/mang.png',
									titel:'鲜切芒果'
								},
							],
							Views: '5624人浏览'
						},
			    ],
			    locadata2: [{
						image:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/92.png',
						name: '鲜果汇（广福地铁站店）',
						score: '4.9',
						images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/banlala.png',
								titel:'香甜香蕉'
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/mang.png',
								titel:'鲜切芒果'
							},
						],
						time: '24h营业',
						Views: '5624人浏览'
					},
					{
						image:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/hongq.png',
						name: '红旗连锁（华阳海昌路店）',
						score: '暂无评分',
						images: [
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/coco.png',
								titel:'可口可乐'
							},
							{
								img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/kamgsf.png',
								titel:'藤椒牛肉面'
							},			
						],
						time: '24h营业',
						Views: '5587人浏览'
					},
			    ],
			    locadata3: [{
			    		image:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo2.png',
			    		name: '鲜果汇（广福地铁站店）',
			    		score: '4.5',
			    		images: [
			    			{
			    				img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo2.1.png',
			    				titel:'低盐猫粮'
			    			},
			    			{
			    				img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo2.2.png',
			    				titel:'逗猫棒'
			    			},
			    		],
			    		Views: '5624人浏览'
			    	},
			    	{
			    			image:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo3.png',
			    			name: '萌宠宠物店',
			    			score: '4.1',
			    			images: [
			    			{
			    				img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo3.1.png',
			    				titel:'不锈钢猫盆'
			    			},
			    			{
			    				img:'https://oss.kuaitongkeji.com/static/img/app/classification/supermarket/logo3.2.png',
			    				titel:'猫砂'
			    			},
			    			],
			    			Views: '2424人浏览'
			    		},
			    ],
			}
		},
		methods: {
			add(index) {
				this.idx = index
				if(index==0){
					this.getData = this.locadata
				}
				if(index==1){
					this.getData = this.locadata1
				}
				if(index == 2){
					this.getData = this.locadata2
				}
				if(index == 3){
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
		border-bottom: 1px solid #F07535;
		border-top: 1px solid #FFFFFF;
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
	    padding-bottom: 60rpx; 
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

	.details {
		color: #999999;
		font-size: 24rpx;
	}

	.databox {
		width: 425rpx;
		height: 64rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.Hours {
		width: 120rpx;
		height: 38rpx;
		color: #FFFFFF;
		font-size: 22rpx;
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

	.itemsimg {
		width: 190rpx;
		height: 130rpx;
		margin-top: 10rpx;
		margin-right: 10rpx;
	}
	
	.simulation{
		display: flex;
		justify-content: center;
		margin-top: 108rpx;
		font-size: 30rpx;
		color: #b3b3b3;
	}
</style>
