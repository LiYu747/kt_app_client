<template>
	<view class="top">
		<view class="item" v-for="item in locdata" :key="item.id">
			<view class="name flex al-center ju-between">
				{{item.name}}
				<image src="../../../image/address/retrue.png" class="nameimg" mode=""></image>
			</view>
			<view class="syntext">
				<view class="">
					小区介绍
				</view>
				<view class="synback flex al-center">
					<view class="aa">
						{{item.synopsis}}
					</view>
				</view>
			</view>
			<view class="syntext">
				<view class="">
					交通方式
					
				</view>
				<view class="synback flex al-center">
					<view class="aa">
						{{item.transport}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				locdata: [{
						name: '怡心湖',
						synopsis: '怡心湖岸项目是万科、新希望、中铁建、中天4大品牌联手打造的项目，是怡心湖区临湖的纯住宅项目四横六纵、多地铁、双机场”：“四横”是：三环路、四环路（绕城高速）',
						transport: '“四横六纵、多地铁、双机场”：“四横”是：三环路、四环路（绕城高速）、华府大道、五环路（牧华路）... ...'
					},
					{
						name: '怡心湖',
						synopsis: '怡心湖岸项目是万科、新希望、中铁建、中天4大品牌联手打造的项目，是怡心湖区临湖的纯住宅项目',
						transport: '“四横六纵、多地铁、双机场”：“四横”是：三环路、四环路（绕城高速）、华府大道、五环路（牧华路）... ...'
					},
					{
						name: '怡心湖',
						synopsis: '怡心湖岸项目是万科、新希望、中铁建、中天4大品牌联手打造的项目，是怡心湖区临湖的纯住宅项目',
						transport: '“四横六纵、多地铁、双机场”：“四横”是：三环路、四环路（绕城高速）、华府大道、五环路（牧华路）... ...'
					},
					{
						name: '怡心湖',
						synopsis: '怡心湖岸项目是万科、新希望、中铁建、中天4大品牌联手打造的项目，是怡心湖区临湖的纯住宅项目',
						transport: '“四横六纵、多地铁、双机场”：“四横”是：三环路、四环路（绕城高速）、华府大道、五环路（牧华路）... ...'
					},
				]
			}
		},
		methods: {

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
	.top{
		margin-top: 150rpx;
	}
	.item {
		width: 629rpx;
		height: 402rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding-left: 29rpx;
		padding-right: 32rpx;
		padding-top: 30rpx;
		padding-bottom: 53rpx;
	}

	.nameimg {
		width: 17rpx;
		height: 32rpx;
	}

	.name {
		font-size: 30rpx;
		color: #666666;
	}

	.syntext {
		font-size: 24rpx;
		color: #666666;
		margin-top: 29rpx;
	}

	.synback {
		margin-top: 25rpx;
		width: 609rpx;
		height: 98rpx;
		background: #E6E6E6;
		padding-right: 20rpx;
	}

	.aa {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>
