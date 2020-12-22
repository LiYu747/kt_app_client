<template>
	<div>
		<view class="box">
			<view class="flex al-center">
				<image class="imgss" src="https://oss.kuaitongkeji.com/static/img/app/home/sq(1)@2x.png" mode=""></image>
				<view class="text">
					社区资讯
				</view>
			</view>
			<view  class="overtxt flex al-center">
				<view v-if="loctext.length > 0" class="context">
					<view v-for="item in loctext" :key='item.id' class="ltst ">
						{{item.title}}
					</view>
				</view>
				<view class="onmsg" v-else>
					暂无社区资讯...
				</view>
				<view v-if="loctext.length > 0" @click="lookup" class="btn flex al-center ju-center">
					查看详情 >
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
				loctext: [] //数据
			}
		},
		methods: {
			// 查看详情
			lookup() {

				home.infordils({
					data: {
						id: this.loctext[0].id
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						// console.log(res.data.data);
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						let content = res.data.data.content
						let title =  res.data.data.title
						uni.navigateTo({
							url: `/pages/InformationDetails/InformationDetails/InformationDetails?content=${content}&&title=${title}`
						})
					}
				})
			},
			// 数据
			Data() {
				home.infortion({
					data: {
						page: 1,
						pageSize:1
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data.data);
						this.loctext = res.data.data.data
					},
				})
			}
		},
		mounted() {
			this.Data()
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
		margin-top: 20rpx;
		width: 690rpx;
		height: auto;
	}

	.imgss {
		width: 28rpx;
		height: 35rpx;
		margin-right: 10rpx;
	}

	.text {
		font-size: 36rpx;
		color: #666666;
	}

	.overtxt {
		margin-top: 20rpx;
		width: 650rpx;
		background: #FFFFFF;
		box-shadow: 2rpx 4rpx 6rpx 0 #C0C4CC;
		padding: 20rpx ;
	}

	.context {
		width: 400rpx;
		height: 78rpx;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.ltst {
		font-size: 24rpx;
		color: #666666;
	}

	.btn {
		width: 150rpx;
		height: 48rpx;
		background: #F79D46;
		border-radius: 30rpx;
		color: #FFFFFF;
		font-size: 24rpx;
		margin-left: 60rpx;
	}
	
	.onmsg{
		font-size: 12px;
		color: #999999;
	}
</style>
