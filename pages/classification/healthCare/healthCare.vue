<template>
	<view class="">
		<subclass titel='医疗健康'></subclass>
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
						<view class="timer pos-abs">
							{{item.distance}}
						</view>
					</view>
					<view class="details flex">
						详情：
						<view class="databox">
							{{item.content}}
						</view>
					</view>
					<view class="m-t2 flex">
						<view v-if="item.time" class="Hours flex al-center ju-center">
							<image src="../../../image/classification/Healthcare/jianb.png" class="jianbimg " mode=""></image>
							<view class="pos-abs">
								{{item.time}}
							</view>
						</view>
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
				till: ['药店', '门诊', '妇幼保健', '理疗按摩'],
				idx: 0,
				getData: [],
				locadata: [{
						image: require('@/image/classification/Healthcare/logo1.png'),
						name: '格瑞药店（广福地铁站店）',
						score: '4.9',
						content: '直属地带主要经营生化药品、中药材、中药饮片、中成药、化学药制剂、抗生素制剂、生物制品大撒的说的说的撒旦撒',
						time: '24h营业',
						distance: '39分钟 2.9km',
						Views: '5624人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo2.png'),
						name: '叮当快药',
						score: '4.9',
						content: '叮当快药是一款基于O2O的医药健康类互联网产品，是协助药店提供便民服务的第三方信息展示...  ...',
						time: '24h营业',
						distance: '41分钟 3.5km',
						Views: '5587人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo3.png'),
						name: '德仁堂（海昌路店）',
						score: '5.0',
						content: '“德仁堂”是四川德仁堂药业连锁有限公司的注册商标。四川德仁堂药业连锁有限公司是以医药...  ...',
						time: '24h营业',
						distance: '15分钟 1.5km',
						Views: '87865人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo4.png'),
						name: '泉源堂药房（极地海洋公园站）',
						score: '4.9',
						content: '泉源堂大药房隶属成都泉源堂大药房连锁股份有限公司，是其旗下的网上药店，于2014年10月正式...  ...',
						time: '24h营业',
						distance: '36分钟 3.5km',
						Views: '2896人浏览'
					}
				],
				locadata1: [{
						image: require('@/image/classification/Healthcare/logo5.png'),
						name: '成都玛利亚天府妇幼儿童医院',
						score: '4.5',
						content: '成都玛丽亚妇产医院有限公司融合中西方优生理念，在医院文化构建中打造最和谐的沟通方式和... ...',
						distance: '36分钟 3.5km',
						Views: '5624人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo6.png'),
						name: '成都棕南妇幼医院',
						score: '4.9',
						content: '成都棕南医院位于四川省成都市武侯区二环路南二段19号，是一所以治疗妇科、精神科疾病为特色... ...',
						distance: '16分钟 1.5km',
						Views: '5587人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo7.png'),
						name: '圣贝牙科（龙腾店）',
						score: '5.0',
						content: '成都青羊圣贝医院，是由圣贝医疗投资集团投资兴建的专业性口腔连锁型医疗机构。秉承精工理念... ...',
						distance: '36分钟 4.5km',
						Views: '87865人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo8.png'),
						name: '吕医生邱良富诊所',
						score: '4.9',
						content: '吕医生社区连锁诊所是一家社区连锁诊所运营商，主要提供居家养老和家庭医生服务，目前正在和美... ...',
						distance: '30分钟 4km',
						Views: '2896人浏览'
					}
				],
				locadata2: [{
						image: require('@/image/classification/Healthcare/logo9.png'),
						name: '安琪儿妇产医院（高攀院区）',
						score: '5.0',
						content: '成都安琪儿妇产医院作为一家中外合资医疗机构，致力于为中外家庭，提供备孕、产前、分娩、月子... ...',
						distance: '60分钟 14.8km',
						Views: '87865人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo5.png'),
						name: '成都玛利亚天府妇幼儿童医院',
						score: '4.5',
						content: '成都玛丽亚妇产医院有限公司融合中西方优生理念，在医院文化构建中打造最和谐的沟通方式和... ...',
						distance: '36分钟 3.5km',
						Views: '5624人浏览'
					},
					{
						image: require('@/image/classification/Healthcare/logo6.png'),
						name: '成都棕南妇幼医院',
						score: '4.9',
						content: '成都棕南医院位于四川省成都市武侯区二环路南二段19号，是一所以治疗妇科、精神科疾病为特色... ...',
						distance: '16分钟 1.5km',
						Views: '5587人浏览'
					},

				],
			    locadata3: [{
			    		image: require('@/image/classification/Healthcare/logo10.png'),
			    		name: '金莱印象',
			    		score: '3.0',
			    		content: '天府新区成都片区华阳金莱印象足浴服务部成立于2018年12月13日，注册地位于四川省成都市... ...',
			    		distance: '50分钟 4.9km',
			    		Views: '865人浏览'
			    	},
			    	{
			    		image: require('@/image/classification/Healthcare/logo11.png'),
			    		name: '妙手推拿馆',
			    		score: '4.1',
			    		content: '专门针对各种慢性疼痛，利用反应点推拿和针刀为患者解决病痛的保健养生机构。为弘扬祖国传统... ...',
			    		distance: '36分钟 3.5km',
			    		Views: '5624人浏览'
			    	},    
			    ],
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
		margin-top: 88rpx;
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
		height: 40rpx;
	}

	.itembox {
		width: 690rpx;
		padding-bottom: 40rpx;
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
		height: 35rpx;
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
</style>
