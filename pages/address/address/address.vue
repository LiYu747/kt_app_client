<template>
	<view class=" pos-rel content">
		<subunit ref='xcoll' :retur='false' class="fled" titel="入住信息" ></subunit>
		<view class="location" :class="Gshow == 2?'locIndex':''">
			<image src="https://oss.kuaitongkeji.com/static/img/app/address/plus.png" @click="push" class="setimg" mode=""></image>
		</view>
		<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" class="img" mode=""></image>
		<addList :locdata='locdata' :isLoding='isLoding' :text='text' :hasMore='hasMore'></addList>
		<view v-show="showPullDownRefreshIcon == true" class="show  flex al-center ju-center">
			<view class="showcentent flex al-center ju-between">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				刷新中
			</view>
		</view>
		<view v-if="Gshow == 2" class="">
			<view class="guideBox">
				<view class="Gposr flex">
					<view class="bai Gtext">
						填写地址详细信息
					</view>
					<image src="../../../image/Newguidance/arrowsRU.png" class="arrowsRU" mode=""></image>
				</view>
			</view>
		</view>
		<view v-if="Gshow == 4" class="">
			<view @click="gotohome"  @touchmove.stop.prevent class="guideBox2">
				<image src="../../../image/Newguidance/ele.png" mode="" class="ele"></image>

			</view>
		</view>
			<image v-show="flag == true" src="../../../image/Newguidance/addLogo.png" class="addLogo" mode=""></image> 
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue';
	import addList from '../../../components/address/addlist.vue';
	import address from '../../../vendor/address/address.js'
	import jwt from '../../../vendor/auth/jwt.js'
	import cache from '../../../vendor/cache/cache.js'
	export default {
		name: "",
		components: {
			subunit,
			addList
		},
		props: {},
		data() {
			return { 
				text: '', //没有更多了
				locdata: [], //数据列表
				page: 1,
				ps: 15,
				isLoding: false,
				hasMore: true,
				showPullDownRefreshIcon: false,
				Gshow: 0,
				flag:false,
			}
		},
		methods: {
			push() {
				if(this.Gshow == 2){
					let num = this.Gshow+1
					cache.set('Gshow',{key:'步骤'+ num,value: num})
				}
				this.flag = false
				uni.navigateTo({
					url: '/pages/residence/checkIn/checkIn'
				})
			},
			gotohome() {
				if(this.Gshow == 4){
					let num = this.Gshow+1
					cache.set('Gshow',{key:'步骤'+ num,value: num})
				}
				this.flag = false
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			// 入驻申请
			add(val) {
				this.flag = val
			},
			// 去入驻申请

			// 下拉刷新
			stopRefreshIcon() {
				if (this.showPullDownRefreshIcon == true) {
					uni.stopPullDownRefresh();
					this.showPullDownRefreshIcon = false;
				}
			},
			// 用户所有地址
			loadPageData() {

				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						if (cache.get('Gshow')) {
							this.Gshow = cache.get('Gshow').value
						}else{
							   uni.showTabBar()								
						} 
						this.isLoding = true

						address.alladd({
							data: {
								page: this.page,
								pageSize: this.ps,
							},
							fail: (err) => {
								this.isLoding = false;
								this.stopRefreshIcon();
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
                                    
								this.stopRefreshIcon();

								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;

								// console.log(data);
								this.hasMore = data.next_page_url ? true : false;
								// console.log(res.data.data.data); 
								// let data = res.data.data.data
								data.data.map(item => {
									if (item.own_village) {
										item.address = item.own_village.name + item.own_building.name + item.own_apartment.name + item.own_floor
											.name + item.own_room.room_number
									}
								})
								this.locdata = data.data
								// console.log(this.locdata);
							}
						})
					},
					fail: () => {
						this.isLoding = false
						this.stopRefreshIcon();
						this.locdata = []
						if(cache.get('Gshow')){
							cache.set('Gshow',{'key':'开启',value:0})
						}
						uni.switchTab({
							url:'/pages/index/index'
						})
					}
				})


			},
		},
		mounted() {

		},
		onLoad(val) {},
		onShow() {
			this.loadPageData()
			if(cache.get('Gshow')){
				this.flag = true
			}else{
				this.flag = false
			}
		},
		onHide() {
          this.Gshow = 0
		  this.flag = false
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.locdata = [];
			this.page = 1;
			this.hasMore = true;
			this.showPullDownRefreshIcon = true;
			this.loadPageData();
		},
		// 下拉加载更多
		onReachBottom() {
			this.text = '没有更多了~'
			if (this.isLoding == true || this.hasMore == false) return;
			this.loadPageData()
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
	.lodimg {
		width: 50rpx;
		height: 50rpx;
	}

	.img {
		margin-top: 128rpx;
		width: 100%;
		height: 156rpx;

	}

	.sj {
		width: 0;
		height: 0;
		border-width: 0 20rpx 20rpx;
		border-style: solid;
		border-color: transparent transparent red;
		left: 94rpx;
	}

	.shows {
		position: fixed;
		top: 128rpx;
		right: 30rpx;
		z-index: 999999;
	}

	.showimg {
		width: 130rpx;
		height: 76rpx;
	}

	.fled {
		position: fixed;
		z-index: 99;
	}

	.show {
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: 9;
	}

	.showcentent {
		top: 100rpx;
		position: absolute;
		width: 200rpx;
		height: 200rpx;
		// background: red;
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
		border-radius: 10rpx;
	}

	.guideBox {
		position: fixed;
		top: 0rpx;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 9999;
	}

	.arrowsRU {
		width: 120rpx;
		height: 80rpx;
	}

	.Gposr {
		margin-top: 130rpx;
		position: fixed;
		right: 100rpx;
	}

	.Gtext {
		margin-top: 50rpx;
		margin-right: 20rpx;
	}

	.addressT {
		position: fixed;
		top: 0;
		z-index: 99999;
		width: 100%;
		height: 100vh;
	}

	.addLogo {
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}

	.guideBox2 {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 9999;
	}

	.ele {
		margin-top: 200rpx;
		width: 100%;
		height: 470rpx;
	}



	.setimg {
		width: 40rpx;
		height: 40rpx;
	}

	.location {
		position: fixed;
		top: 80rpx;
		right: 60rpx;
		z-index: 99;
	}


	.locIndex {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		background: #F07535;
		z-index: 99999;
		margin-top: -20rpx;
	}

	.reimg {
		width: 22rpx;
		height: 41rpx;
	}
</style>
