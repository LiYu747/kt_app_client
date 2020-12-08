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
					<!-- 	的圣诞节喀什年代开始就豆瓣喀山举办的凯撒举办的喀山举办的卡世界杯打开时间吧刷卡
						说的暗示肯德基那块缴纳喀什觉得那可就是那可是加拿大昆山声卡的呢说的 -->
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
				loctext: {} //数据
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
							title: '网络错误',
							icon: 'none'
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
							title: '网络错误',
							icon: 'none'
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
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
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
</style>
