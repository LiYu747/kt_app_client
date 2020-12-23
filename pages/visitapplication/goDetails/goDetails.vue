<template>
	<view class="">
		<subunit class="fidex" titel="详情" :retur="true" @goback='goback'></subunit>
		<view class="topline">

		</view>
		<view class="cont">
			<view class="nav flex al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/visit/gnt.png" class="img" mode=""></image>
				<view class="text">
					{{username}}
				</view>
			</view>
			<view class="flex al-center pos-rel ipt" v-for="(item,index) in locadata" :key='item.id'>
				<view class="">
					{{item.titel}}
				</view>
				<view class="pos-abs rig">
					{{item.value}}
				</view>
			</view>
			<view class="line">

			</view>
			<!-- 二维码 -->
			<view v-if="val" class="qrimg flex ju-center">
				<tki-qrcode cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground"
				 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :showLoading='false' :onval="onval" :loadMake="loadMake"
				 :usingComponents="true" />
			</view>
			<view class="tex1">
				备注
			</view>
			<view class="frame">
				{{remark}}
			</view>

			<view class="tex1">
				申请结果
			</view>
			<view class="frame">
				{{result}}
			</view>
			<view class="linet">

			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../vendor/home/home.js'
	import tkiQrcode from "../../../components/qrcode/tki-qrcode/tki-qrcode.vue"
	export default {
		name: "",
		components: {
			subunit,
			tkiQrcode
		},
		props: {},
		data() {
			return {
				username: '', //处理结果 
				remark: '', //备注
				result: '', //结果
				locadata: [{
						titel: '姓名',
						value: ''
					},
					{
						titel: '地址',
						value: ''
					},
					{
						titel: '时间',
						value: ''
					}
				],
				id: '', //传过来的id
				val: '', // 要生成的二维码值
				size: 300, // 二维码大小
				unit: 'upx', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 2, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
			}
		},
		methods: {
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取数据
			loadPageData() {
				uni.showLoading({
					title: '加载中...'
				})
				home.goapplydeil({
					data: {
						id: this.id
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res => {
						uni.hideLoading()
						if (res.statusCode != 200) return;

						if (res.data.code != 200) return;
						let data = res.data.data
						// console.log(res.data.data);
						this.locadata[0].value = data.own_host.username
						this.locadata[1].value = data.village_name + data.building_name + data.apartment_name + data.floor_name
						this.locadata[2].value = data.created_at.slice(0, 16)
						this.username = data.verify_text
						this.remark = data.visitor_remark
						this.result = data.verify_msg
						this.val = data.qr_content
					}),


				})
			}
		},
		mounted() {
			this.loadPageData()
		},
		onLoad(val) {
			// console.log(val.id);
			this.id = val.id

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
	.fidex {
		position: fixed;
		z-index: 9;
	}

	.topline {
		height: 148rpx;
	}

	.cont {
		width: 710rpx;
		height: 100rpx;
		padding: 0 20rpx;
	}

	.nav {
		height: 120rpx;
		border-bottom: 1rpx solid #cccccc;
		margin-bottom: 20rpx;
	}

	.img {
		width: 40rpx;
		height: 40rpx;
	}

	.text {
		font-size: 30rpx;
		margin-left: 20rpx;
		color: #F07535;
	}

	.ipt {
		height: 60rpx;
		font-size: 30rpx;
		color: rgb(165, 165, 165);
	}

	.rig {
		right: 20rpx;
	}

	.line {
		margin-top: 30rpx;
		width: 100%;
		height: 1rpx;
		background: #cccccc;
	}

	.linet {
		height: 30rpx;
	}

	.tex1 {
		margin: 30rpx 0;
		font-size: 30rpx;
		color: rgb(165, 165, 165);
	}

	.frame {
		width: 94%;
		padding: 3%;
		height: 120rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		font-size: 26rpx;
		color: rgb(165, 165, 165);
	}

	.btnr {
		width: 320rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.btnimg {
		width: 320rpx;
		height: 70rpx;
	}

	.btnl {
		width: 318rpx;
		height: 68rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(240, 117, 53);
		font-size: 28rpx;
		color: rgb(240, 117, 53);
	}

	.qrimg {
		padding: 60rpx 0;
		margin: 20rpx 0;
		border-bottom: 1px solid #ccc;
	}
</style>
