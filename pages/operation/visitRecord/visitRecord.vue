<template>
	<view class="flex-d al-center">
		<subunit class="fled" titel="来访记录" @goback='goback' :retur="true"></subunit>
		<view class="top">
		</view>
		<view v-if="lists.length > 0" class="">
			<view class="card" v-for="(items,indexs) in lists" @click="godetails(items)" :key='items.id' :class="{'bottom':indexs===lists.length-1}">
				<view class="bx1 flex al-center pos-rel">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/user.png" class="dv3" mode=""></image>
					<view class="">
						{{items.own_visitor.username}}
					</view>
					<view class=" pos-abs rig">
						{{items.verify_text}}
						>
					</view>
				</view>
				<view class="bx1 flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/phone.png" class="dv1" mode=""></image>
					<view class="">
						{{items.own_visitor.tel}}
					</view>
				</view>
				<view class="bx1 flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/time.png" class="dv3" mode=""></image>
					<view class="">
						{{items.created_at.slice(0,16)}}
					</view>
				</view>
				<view class="bx2 flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/pos.png" class="dv3" mode=""></image>
					<view class="">
						{{items.village_name}}
					</view>
				</view>
			</view>
			<view v-show="isLoding == true" class=" flex ju-center al-center lodbox">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				加载中...
			</view>
			<view class="flex ju-center m-b2 fz-14" v-if="hasMore == false">
				{{text}}
			</view>
		</view>
		<view v-if='lists.length == 0 && isLoding == false' class="nono flex al-center ju-center">
			您还没有来访记录
		</view>
		
		<view v-show="isLoding == true&&lists.length==0" class="showloding flex al-center ju-center">
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
	import home from '../../../vendor/home/home.js';
	import jwt from '../../../vendor/auth/jwt.js';

	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				text: '',  //没有有更多提示
				lists: [],  //数据列表
				page: 1,
				ps: 15,
				isLoding: false,  //是否显示loding
				hasMore: true, //是否还有更多
			}
		},
		methods: {
			// 去详情
			godetails(item) {
				uni.navigateTo({
					url: `/pages/operation/details/details?id=${item.id}`
				})
			},
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 获取数据
			loadPageData() {

				this.isLoding = true;

				jwt.doOnlyTokenValid({
					keepSuccess: false,
					showModal: true,
					fail: () => {
						this.isLoding = false;
						uni.switchTab({
							url: '/pages/index/index'
						})
					},
					success: () => {
						home.Visitrecord({
							data: {
								page: this.page,
								pageSize: this.ps
							},
							fail: () => {
								this.isLoding = false;
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
                                
								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;

								this.page = data.current_page + 1;
								this.hasMore = data.next_page_url ? true : false;
                                data.data.map(item => {
									item.own_visitor.tel = item.own_visitor.tel.slice(0,3) + '****' +item.own_visitor.tel.slice(7,11)
								})
								this.lists = this.lists.concat(data.data);
								
								// console.log(this.lists);
							},
							
						})
					}
				})


			}
		},
		mounted() {

		},
		onLoad() {

		},
		onShow() {
			this.lists = []
			this.page = 1
			this.loadPageData()
		},
		// 下拉触底
		onReachBottom() {
			this.text = '没有更多了~'
		if (this.isLoding == true || this.hasMore == false) return;
			this.loadPageData();
			
		},
		onPullDownRefresh() {

			// this.loadPageData();
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
	.card {
		margin-top: 20rpx;
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		font-size: 26rpx;
	}

	.bx1 {
		height: 80rpx;
		border-bottom: 1rpx solid #cccccc;
	}

	.bx2 {
		height: 80rpx;
	}

	.left {
		width: 70rpx;
	}

	.itemimg {
		width: 28rpx;
		height: 28rpx;
	}

	.dv1 {
		width: 22rpx;
		height: 30rpx;
		margin: 0 24rpx;
	}

	.dv2 {
		width: 30rpx;
		height: 22rpx;
		margin: 0 20rpx;
	}

	.dv3 {
		width: 30rpx;
		height: 30rpx;
		margin: 0 20rpx;
	}

	.dv4 {
		width: 32rpx;
		height: 32rpx;
		margin: 0 20rpx;
	}

	.item {
		height: 80rpx;
		color: #666666;
		border-bottom: 1rpx solid #cccccc;
	}

	.bot {
		border: none;
	}

	.rig {
		right: 30rpx;
		color: rgb(229, 75, 68);
	}

	.fled {
		position: fixed;
		z-index: 9;
	}

	.top {
		margin-top: 148rpx;
	}

	.bottom {
		margin-bottom: 40rpx;
	}

	.nono {
		width: 100%;
		height: 300rpx;
	}

	.lodimg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}

	.lodbox {
		font-size: 24rpx;
	}
	
	.showloding {
		position: absolute;
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
	}
</style>
