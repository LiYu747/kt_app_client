<template>
	<view class="">
		<subunit  titel="最新拜访信息" ></subunit>
		<view class="navBox" :style="{height:  this.$store.state.customBar + 'rpx'}">
			<view @click="addTo" class="pos-abs move">
				添加申请
			</view>
		</view>
		<view v-if="getmsg.info" class="cont">
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
			<view v-if="redIMG" class="">
				<view class="tex1">
				  补充图片
				</view>
				<view class="imgBox">
					<image :src="redIMG" class="redImg" mode="aspectFill"></image>
				</view>
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
		<view v-show='notInfo == true&&isLoding==false' class="onon flex al-center ju-center">
			您还没有最新的拜访申请，快去 <view @click="addTo" class="apply">申请</view> 吧~
		</view>
		
		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				</view>
				加载中
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
				getmsg: {},
				username: '', //处理结果
				remark: '', //备注
				result: '', //结果
				redIMG:'',//图片
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
				isLoding:false,
				notInfo:false
			}
		},
		methods: {
		
		
			// 添加
			addTo() {
				uni.navigateTo({
					url: '/pages/visitapplication/visit/visit'
				})
			},
			// 获取数据
			loadPageData() {
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						this.isLoding = true
						home.newapply({
							data: {
							},
							fail: (err) => {
								this.isLoding = false
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res => {
								this.isLoding = false
								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;
								let data = res.data.data
								if (!data) {
									this.notInfo = true 
									return;
								}else {
									this.notInfo = false
								}
								this.getmsg = res.data.data
								// console.log(res.data.data);
								this.locadata[0].value = data.info.own_host.username
								if(data.info.own_village){
									this.locadata[1].value = '' + data.info.own_village.name + data.info.own_building.name + data.info.own_apartment.name + data.info.own_building
									.name + data.info.own_room.room_number
								}
								this.locadata[2].value = data.info.created_at.slice(0, 16)

								if (data.info.verify_status == 2) {
									this.username = '已同意'
								} else if (data.info.verify_status == 3) {
									this.username = '未同意'
								} else {
									this.username = '已过期'
								}

								this.remark = data.info.visitor_remark
								this.result = data.info.verify_msg
								this.val = data.qr.content
								this.redIMG = data.info.ext_img 
							}),
						})
					},
					fail: () => {
					this.isLoding = false
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})

			}
		},
		mounted() {
           
		},
		onShow() {
			 this.loadPageData()
		},
		onLoad(val) {
		

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
	.navBox {
		width: 30%;
		top: 0;
		right: 0;
		position: fixed;
		z-index: 99;
	}
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
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
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
		border-bottom: 1rpx solid #cccccc;
	}

	.move {
		font-size: 15px;
		color: #FFFFFF;
		right: 50rpx;
		bottom: 20rpx;
	}

	.apply {
		color: rgb(78, 110, 242);
	}

	.onon {
		font-size: 14px;
		height: 300rpx;
	}
	
	.showloding {
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		color: #FFFFFF;
	}
	
	.loimg {
		width: 50rpx;
		height: 50rpx;
	}
	
	.loding {
		width: 260rpx;
		height: 200rpx;
		background: rgba(88, 88, 88, 0.8);
		border-radius: 10rpx;
	}
	
	.imgBox{
		width: 94%;
		padding: 3%;
		border-radius: 10rpx;
		background: #FFFFFF;
		font-size: 26rpx;
		color: rgb(165, 165, 165);
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
	}
	
	.redImg{
		width: 130rpx;
		height: 160rpx;
		border-radius: 10rpx;
	}
</style>
