<template>
	<div>
		<view class="box">
			<view class="flex al-center  m-b1 pos-rel">
				<image class="imgss" src="../../../image/home/zx@2x.png" mode=""></image>
				<view class="text">
					周边消息
				</view>
				
				<view @click="lookmore" class="andMore pos-abs">
					查看更多
				</view>
			</view>

			<!-- 资讯 -->
			<view class="conten flex ju-between flex-w">
				<view class="item flex pos-rel" @click="godils(item)" v-for="(item,index) in locdata" :key='index'>
					<image :src="item.faceimg" mode="" class="itemimg"></image>
					<view class="font fz-12">
						{{item.title}}
					</view>
					<view class="time  pos-abs location ">
						{{item.created_at.slice(0,10)}}
					</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script>
	import home from '../../../vendor/home/home.js'

	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				locdata: []  //数据
			}
		},
		methods: {
			// 去详情页面
			godils(item) {
				// console.log(item.id);
				home.surroundingDetails({
					data: {
						id: item.id
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.msg
						})
					},
					success: (res) => {
						// console.log(res.data.data);
						let content = res.data.data
						uni.navigateTo({
							url: `/pages/InformationDetails/InformationDetails/InformationDetails?content=${JSON.stringify(content)}&&id=0`
						})
					}
				})
			},
			//查看更多
			lookmore(){
				
			},
			// 数据
			getData() {
				home.news({
					data: {
						page: 1,
						pageSize: 15
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.msg
						})
					},
					success: (res) => {
						// console.log(res.data.data.data);
						let data = res.data.data.data
						this.locdata = data.slice(0,4)
					},
				})
			}
		},
		mounted() {
			this.getData()
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
	.box {

		margin-top: 40rpx;
		width: 690rpx;
	}

	.imgss {
		width: 24rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}

	.text {
		font-size: 30rpx;
		color: #666666;
	}

	.conten {
		width: 100%;
		margin-bottom: 40rpx;
	}

	.item {
		margin-top: 20rpx;
		width: 320rpx;
		height: 185rpx;
		background: #FFFFFF;
		padding-top: 15rpx;
		padding-left: 15rpx;
	}

	.itemimg {
		width: 140rpx;
		height: 140rpx;
	}

	.font {
		margin-left: 24rpx;
		width: 134rpx;
		height: 130rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}

	.location {
		right: 20rpx;
		bottom: 18rpx;
		color: #808080;
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
	
	.andMore{
		right: 10rpx;
		font-size: 20rpx;
		color: rgb(247,157,70);
	}
</style>
