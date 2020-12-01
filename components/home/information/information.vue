<template>
	<div>
		<view class="box">
			<view class="flex al-center">
				<image class="imgss" src="../../../image/home/sq(1)@2x.png" mode=""></image>
				<view class="text">
					社区资讯
				</view>
			</view>
			<view class="overtxt flex al-center">
				<view class="context ">
					<view class="ltst ">
						{{loctext.title}}
					</view>
				</view>
				<view @click="lookup" class="btn flex al-center ju-center">
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
				loctext: {}
			}
		},
		methods: {
			// 查看详情
			lookup() {
				home.infordils({
					data: {
						id: this.loctext.id
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.msg
						})
					},
					success: (res) => {
						// console.log(res.data.data);
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						let content = res.data.data
						uni.navigateTo({
							url: `/pages/InformationDetails/InformationDetails/InformationDetails?content=${JSON.stringify(content)}&&id=1`
						})
					}
				})
			},
			// 数据
			Data() {
				home.infortion({
					data: {
						page: 1,
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.msg
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data.data);
						this.loctext = res.data.data.data[0]
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
		width: 23rpx;
		height: 27rpx;
		margin-right: 10rpx;
	}

	.text {
		font-size: 30rpx;
		color: #666666;
	}

	.overtxt {
		margin-top: 20rpx;
		width: 650rpx;
		background: #FFFFFF;
		box-shadow: 2rpx 4rpx 6rpx 0 #C0C4CC;
		padding: 20rpx;
		padding-bottom: 15rpx;
	}

	.context {
		width: 512rpx;
		height: 58rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.ltst {
		font-size: 26rpx;
		color: #666666;
		-webkit-transform: scale(0.8);
		-webkit-transform-origin: left top
	}

	.btn {
		width: 172rpx;
		height: 48rpx;
		background: #F79D46;
		border-radius: 22rpx;
		color: #FFFFFF;
		font-size: 20rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
</style>
