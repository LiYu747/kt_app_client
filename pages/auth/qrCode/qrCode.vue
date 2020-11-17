<template>
	<view class="flex-d al-center">
		<subunit titel="我的二维码" :retur="true" @goback='goback'></subunit>
		<image src="../../../image/home/jx.png" class="img" mode=""></image>
		<view class="pack flex-d al-center">
			<view class="nav flex al-center">
				请将二维码对准扫码口
			</view>
			<image src="../../../image/qrcode/code.png" class="code" mode=""></image>
			<view class="cortt flex al-center" @click="add">
				<image v-show="flag===1" src="../../../image/qrcode/1.png" class="img1" mode=""></image>
				<image v-show="flag===0" src="../../../image/qrcode/3.png" class="img2" mode=""></image>
				{{text}}
			</view>
			<view v-show="show===1" class="m-t2 flex al-center ju-center">
				<image src="../../../image/qrcode/2.png" class="time" mode=""></image>
				<view class="pos-abs texts bai">
					{{timetext}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				text: '刷新成功',
				flag: 0,
				show: 0,
				time: 60,
				timetext: '有效时间:60s'
			}
		},
		methods: {
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 刷新
			add() {
				this.text = '刷新成功'
				this.flag = 0
				this.show = 0
				this.time = 60
				this.refurbish()
				// this.timetext = '有效时间:60s'
			},
			refurbish() {
				const time = setTimeout(() => {
					this.text = '手动刷新'
					this.flag = 1
					this.countdown()
					this.show = 1
				}, 2000)
			},
			countdown() {
				var Urtime = setInterval(() => {
					if (this.time > 0) {
						this.time--
						this.timetext = '有效时间:' + this.time + 's'
						if (this.time <= 0 || this.flag === 0) {
							this.time = 60
							this.show = 0
							clearInterval(Urtime)
						}
					}
				}, 1000)
			}
		},
		mounted() {
			this.refurbish()
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
	.img {
		width: 750rpx;
		height: 156rpx;
	}

	.pack {
		position: relative;
		top: -55rpx;
		width: 690rpx;
		height: 780rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.nav {
		height: 131rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.code {
		width: 494rpx;
		height: 484rpx;
	}

	.img1 {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}

	.img2 {
		width: 23rpx;
		height: 17rpx;
		margin-right: 10rpx;
	}

	.cortt {
		margin-top: 32rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.time {
		width: 180rpx;
		height: 44rpx;
	}
	.texts{
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
</style>
