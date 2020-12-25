<template>
	<view class="flex-d al-center">
		<subunit titel="通行二维码" :retur="true" @goback='goback'></subunit>
		<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" class="img" mode=""></image>
		<view class="pack flex-d al-center">
			<view class="nav flex al-center">
				请将二维码对准扫码口
			</view>
			<view class="boxs">
				<view class="qrimg">
					<tki-qrcode cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground"
					 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :showLoading='false' :onval="onval" :loadMake="loadMake"
					 :usingComponents="true" />
				</view>
			</view>
			<view class="cortt flex al-center" @click="add">
				<image v-show="flag===1" src="https://oss.kuaitongkeji.com/static/img/app/qrcode/1.png" class="img1" mode=""></image>
				<image v-show="flag===0" src="https://oss.kuaitongkeji.com/static/img/app/qrcode/3.png" class="img2" mode=""></image>
				{{text}}
			</view>
			<view v-show="show===1" class="m-t2 flex al-center ju-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/qrcode/2.png" class="time" mode=""></image>
				<view class="pos-abs texts bai">
					{{timetext}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../vendor/home/home.js'
	import tkiQrcode from "../../../components/qrcode/tki-qrcode/tki-qrcode.vue"
	import jwt from '../../../vendor/auth/jwt.js'

	export default {
		name: "",
		components: {
			subunit,
			tkiQrcode
		},
		props: {},
		data() {
			return {
				val: '', // 要生成的二维码值
				size: 500, // 二维码大小
				unit: 'upx', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				text: '刷新成功',
				flag: 0,
				show: 0,
				time: 60,
				timetext: '有效时间:60s',
			}
		},
		methods: {
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 手动刷新
			add() {
				this.text = '刷新成功'
				this.flag = 0
				this.show = 0
				this.time = 60
				this.loadUserData()
				// this.timetext = '有效时间:60s'
			},
			// 判断是否登录
			loadUserData() {
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						this.data()
						const time = setTimeout(() => {
							this.text = '手动刷新'
							this.flag = 1
							this.countdown()
							this.show = 1
						}, 2000)
					},
					fail: () => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			},
			// 倒计时
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
			},
			// 获取二维码
			data() {
				home.obtaincode({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						// console.log(res.data.data.content);
						if (res.statusCode != 200) return;

						if (res.data.code != 200) return;
						this.val = res.data.data.content
					}
				})
			}
		},
		onShow() {
			this.loadUserData()
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
	.img {
		width: 750rpx;
		height: 156rpx;
	}

	.pack {
		position: relative;
		top: -75rpx;
		width: 690rpx;
		height: 800rpx;
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

	.texts {
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}

	.boxs {
		// width: 100%;
		// background: red;
	}

	.mrl {
		margin-right: 0;
	}
</style>
