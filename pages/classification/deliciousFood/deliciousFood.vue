<template>
	<view class="">
		<subclass titel='美食'></subclass>
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
				till: ['全部', '火锅', '烧烤', '快餐小吃'],
				idx: 0,
				getData:[],
				locadata: [{
						image: require('@/image/classification/deliciousFood/logo1.png'),
						name: '大鱼海塘纸包烤鱼（海昌路店）',
						score: '4.2',
						Price: '￥49/人',
						Views: '5624人浏览',
						titel:' 烤鱼    ',
						address:' 天府新区',
						label:'掌柜说：全家都能吃的“经典蒜香”烤鱼。',
					},
					{
						image: require('@/image/classification/deliciousFood/logo2.png'),
						name: '乡村基（华阳家乐福店）',
						score: '3.2',
						Price: '￥60/人',
                        Views: '5587人浏览',
						titel:' 快餐简餐   ',
						address:' 华阳',
					    tag:require('@/image/classification/deliciousFood/tag1.png') 
					},
					{
						image: require('@/image/classification/deliciousFood/logo3.png'),
						name: '安德鲁森（复地御香山店）',
						score: '3.0',
						Price: '￥20/人',
						Views: '87865人浏览',
						titel:' 面包蛋糕   ',
						address:'    华阳    ',
						label:'从这边出去比较方便',
					},
					{
						image: require('@/image/classification/deliciousFood/logo4.png'),
						name: '锅首老火锅（华阳店）',
						score: '5.0',
						Price: '暂无均价',
						Views: '2896人浏览',
						titel:' 火锅  ',
						address:' 高新区',
						label:'主要价格很合理',
					},
				],
				locadata1: [{
						image: require('@/image/classification/deliciousFood/logo5.png'),
						name: '稳拈市井老灶火锅',
						score: '4.0',
						Price: '￥49/人',
						Views: '5024人浏览',
						titel:' 四川火锅     ',
						address:' 华阳',
						label:'“餐厅环境优美，每处细节都特别用心”',
					},
					{
						image: require('@/image/classification/deliciousFood/logo6.png'),
						name: '牛杂火锅',
						score: '3.2',
						Price: '￥60/人',
				        Views: '5587人浏览',
						titel:' 火锅     ',
						address:' 华阳',
						label:'“只能用软嫩耙糯来形容，安逸得板”'
					},
					{
						image: require('@/image/classification/deliciousFood/logo4.png'),
						name: '锅首老火锅（华阳店）',
						score: '5.0',
						Price: '暂无均价',
						Views: '2896人浏览',
						titel:' 火锅 ',
						address:' 高新区',
						label:'主要价格很合理',
					},
				],
			    locadata2: [{
			    		image: require('@/image/classification/deliciousFood/logo7.png'),
			    		name: '宜宾把把烧',
			    		score: '4.0',
			    		Price: '￥19/人',
			    		Views: '524人浏览',
			    		titel:' 烧烤烤串      ',
			    		address:' 华阳',
			    		label:'“只能用软嫩耙糯来形容，安逸得板”',
			    	},
			    	{
			    		image: require('@/image/classification/deliciousFood/logo8.png'),
			    		name: '乐山刘记烧烤（华阳店）',
			    		score: '3.2',
			    		Price: '￥26/人',
			            Views: '557人浏览',
			    		titel:' 烧烤     ',
			    		address:' 华阳',
			    		label:'“走在门口很有礼貌的们你吃烧烤吗”'
			    	},
			    ],
				locadata3: [{
						image: require('@/image/classification/deliciousFood/logo9.png'),
						name: '炸小明',
						score: '4.0',
						Price: '￥39/人',
						Views: '324人浏览',
						titel:' 小吃快餐       ',
						address:'  天府新区',
						label:'“小龙虾推荐香辣味，48元一斤，很实在”',
					},
				]
			}
		},
		methods: {
			add(index) {
				this.idx = index
				if(index == 0){
				this.getData = this.locadata	
				}
				if(index == 1){
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
	
	.Price{
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
	
	.tagimg{
		width: 240rpx;
		height: 30rpx;
	}
	
	.simulation{
		display: flex;
		justify-content: center;
		margin-top: 108rpx;
		font-size: 30rpx;
		color: #b3b3b3;
	}
</style>
