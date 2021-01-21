<template>
	<view class="">
		<subunit class="fixed" titel="详情"></subunit>
		<view class="topLine"></view>
		<view class="woer">
			<!-- 标题 -->
			<view class="title">
				{{arr.title}}
			</view>
			<!-- 内容 -->
			<view class=" flex ju-center">
				<view class="content">
					{{arr.content}}
				</view>
			</view>
			<!-- 图片 -->
			<view class="flex al-center imgbx">
				<view class="" v-for="item in arr.album" :key='item.id'>
					<image class="itemimg" :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<view class="fz-12 m-t2 time">
				{{arr.created_at}}
			</view>


			<view class=" flex-d al-center m-t4">
				<view @click="seeShow = true" class="contentBox pos-rel">
					<view class="tabbar flex al-center">
						谁能看见
						<view class=" pos-abs rig flex al-center">
							<image :src="seeList[idx].ref" class="uplockImg" mode=""></image>
							{{seeList[idx].label}}
						</view>
						<image class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
					</view>
				</view>
				<!-- 提交 -->
				<view @click="delt" class="matop flex al-center ju-center">
					<image class="Submit" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
					<view class="bai pos-abs">
						删除帖子
					</view>
				</view>
				<u-popup mode='bottom' height="400rpx" border-radius='20' v-model="seeShow">
					<view class="seeBox">
						<view class="flex al-center seeItem" @click="addCel(item,index)" v-for="(item,index) in seeList" :key='item.id'>
							<image :src="item.ref" class="uplockImg" mode=""></image>
							<view class="itemLb">
								{{item.label}}
							</view>
							<image v-show="index==idx" src="../../../image/forum/sclyse.png" class="sclyseImg" mode=""></image>
						</view>
					</view>
					<view class="flex-d al-center">
						<view @click="seeShow = false" class="cancelBox flex al-center ju-center">
							取消
						</view>
					</view>
				</u-popup>
			</view>
		</view>

	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import village from '../../../vendor/village/village.js'

	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				id: "",
				arr: {}, //数据
				user: {},
				seeList: [{
						value: '0',
						label: ' 仅自己可见',
						ref: require('@/image/forum/lock.png')
					}, {
						value: '1',
						label: ' 所有人可见',
						ref: require('@/image/forum/uplock.png')
					},

				],
				seeShow: false,
				idx: 0,
				id: '',
			}
		},
		methods: {
			// 选择是否可见
			addCel(item, index) {
				if (this.idx == index) return;
				this.idx = index
				uni.showLoading({
					title: '加载中'
				})
				village.visiblePost({
					data: {
						id: this.id,
						visible: item.value
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: 'none'
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
							return;
						}
						this.seeShow = false
						uni.showToast({
							title: res.data.msg
						})
					}
				})
			},
			// 删除
			delt() {
				uni.showModal({
					content: '您确定要删除该条帖子吗',
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								title: '加载中'
							})
							village.delPost({
								data: {
									id: this.id
								},
								fail: () => {
									uni.hideLoading()
									uni.showToast({
										title: '网络错误',
										icon: 'none'
									})
								},
								success: (res) => {
									uni.hideLoading()
									if (res.statusCode != 200) {
										uni.showToast({
											title: '网络出错了',
											icon: 'none'
										})
										return;
									}
									if (res.data.code != 200) {
										uni.showToast({
											title: res.data.msg,
											icon: 'none'
										})
										return;
									}
									// uni.showToast({
									// 	title: res.data.msg
									// })
									uni.navigateBack({
										delta:1
									})
									this.$store.commit("isDel", res.data.code);
								}
							})
						}
					}
				})
			},

			// 详情数据 
			Data() {
				uni.showLoading({
					title:'加载中'
				})
				village.MypostDeta({
					data: {
						id: this.id
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						// console.log(res.data.data);
						if (res.statusCode != 200) return
						if (res.data.code == 200) {
							let data = res.data.data
							data.created_at = data.created_at.slice(0, 16)
							this.arr = data
							// console.log(this.arr)
							this.idx = data.visible
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 2000
							})
						}
					}
				})
			},


		},
		mounted() {
			this.$store.commit("isDel", '');
		},
		onShow() {
			this.Data()
		},
		// 下拉加载更多
		onReachBottom() {

		},
		onLoad(val) {
			this.id = val.id
		},

		filters: {

		},
		created() {

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
	.fixed {
		position: fixed;
		z-index: 66;
	}

	.topLine {
		height: 160rpx;
	}

	.actfixed {
		position: fixed;
		top: 88rpx;
		z-index: 66;
		right: 50rpx;
	}

	.actionBar {
		width: 40rpx;
		height: 40rpx;
	}

	.retunt {
		margin-top: 30rpx;
		width: 60rpx;
		height: 24rpx;
	}

	.time {
		text-align: right;
	}

	.cancelBox {
		width: 90%;
		height: 80rpx;
		background: rgb(236, 234, 245);
		position: absolute;
		bottom: 20rpx;
		border-radius: 10rpx;
	}

	.compile {
		width: 40rpx;
		height: 30rpx;
		margin: 0 30rpx;
	}

	.delete {
		width: 40rpx;
		height: 40rpx;
		margin: 0 30rpx;
	}

	.tagbox {
		width: 100%;
		height: 90rpx;
	}

	.tagTex {
		display: flex;
		align-items: center;
		width: 100%;
		height: 90rpx;
		border-bottom: 1px solid #EEEEEE;
	}

	.woer {
		width: 92%;
		padding: 0 4%;
		color: #666666;
	}

	.nav {
		width: 100%;
		height: 60rpx;
	}

	.img {
		width: 74rpx;
		height: 74rpx;
		border-radius: 50%;
	}

	.text {
		font-size: 28rpx;
		color: #F07535;
	}

	.small {
		font-size: 24rpx;
		color: #B3B3B3;
	}

	.layou {
		width: 100%;
		height: 100rpx;
	}

	.title {
		margin-top: 30rpx;
		font-size: 28rpx;
	}

	.content {
		margin-top: 20rpx;
		width: 680rpx;
		font-size: 24rpx;
	}

	.imgbx {
		margin-top: 60rpx;
		flex-wrap: wrap;
	}

	.itemimg {
		width: 150rpx;
		height: 170rpx;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
	}

	.move {
		margin-top: 30rpx;
		right: 40rpx;
	}

	.plimg {

		width: 30rpx;
		height: 27rpx;
	}

	.line {
		width: 100%;
		padding: 30rpx 0;
		border-top: 1px solid #BFBFBF;
	}

	.contentBox {
		margin-top: 30rpx;
		width: 100%;
		background: #FFFFFF;
		font-size: 28rpx;
		color: #666666;
		border-radius: 10rpx;
	}

	.tabbar {
		height: 80rpx;
		padding: 0 20rpx;
	}

	.reimg {
		position: absolute;
		right: 30rpx;
		width: 18rpx;
		height: 25rpx;
	}

	.rig {
		position: absolute;
		right: 60rpx;
	}

	.seeBox {
		padding: 40rpx;
		padding-right: 0;
	}

	.uplockImg {
		width: 30rpx;
		height: 30rpx;
	}

	.seeItem {
		height: 90rpx;
		font-size: 14px;
	}

	.itemLb {
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90rpx;
		border-bottom: 1px solid #EEEEEE;
	}

	.sclyseImg {
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		right: 30rpx;
	}

	.cancelBox {
		width: 90%;
		height: 80rpx;
		background: rgb(236, 234, 245);
		position: absolute;
		bottom: 20rpx;
		border-radius: 10rpx;
	}

	.matop {
		margin-top: 100rpx;
		font-size: 30rpx;
	}

	.Submit {
		width: 400rpx;
		height: 70rpx;

	}
</style>
