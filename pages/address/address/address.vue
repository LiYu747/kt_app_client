<template>
	<view class=" pos-rel content">
		<subunit  :retur='false' titel="入住信息" ></subunit>
		<view class="location" :class="Gshow == 2?'locIndex':''" :style="{height:  this.$store.state.customBar + 'rpx'}" >
			<view class="imgLoca pos-abs"  >
				<image src="https://oss.kuaitongkeji.com/static/img/app/address/plus.png" @click="push" class="setimg" mode=""></image>
			</view>
		</view>
		<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" class="img" mode=""></image>
		<addList :locdata='locdata' :isLoding='isLoding'  :hasMore='hasMore'></addList>
		<view v-show="showPullDownRefreshIcon == true" class="show  flex al-center ju-center">
			<view class="showcentent flex al-center ju-between">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				刷新中
			</view>
		</view>
		<view v-if="Gshow == 2" class="">
			<view class="guideBox" @touchmove.stop.prevent>
				<view class="Gposr flex" :style="{top:  this.$store.state.customBar + 'rpx'}">
					<view class="bai Gtext">
						填写地址详细信息
					</view>
					<image src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/arrowsRU.png" class="arrowsRU" mode=""></image>
				</view>
			</view>
		</view>
		<view v-if="Gshow == 4" class="">
			<view @click="gotohome"  @touchmove.stop.prevent class="guideBox2">
				<image src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/ele.png" :style="{top:  this.$store.state.customBar + 60 + 'rpx'}" mode="" class="ele pos-rel"></image>
			</view>
		</view>
			<image v-show="flag == true" src="https://oss.kuaitongkeji.com/static/img/app/Newguidance/addLogo.png" class="addLogo" mode=""></image> 
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
				updata:0,
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
								this.page = data.current_page + 1
								// console.log(res.data.data.data); 
								// let data = res.data.data.data
								data.data.map(item => {
									if (item.own_village) {
										item.address = item.own_village.name + item.own_building.name + item.own_apartment.name + item.own_floor
											.name + item.own_room.room_number
									}
								})
								if(this.updata == 0){
										this.locdata = data.data
								}else{
									this.locdata =this.locdata.concat(data.data) 
								}
							
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
		  this.page = 1
		  this.updata = 0
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
			if (this.isLoding == true || this.hasMore == false) return;
			this.updata = 1
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

<style  lang="scss"> 
	
	.lodimg {
		width: 50rpx;
		height: 50rpx;
	}
	
	page {
		background: #FFFFFF;
	}
 
	.img {
		width: 100%;
		height: 156rpx;

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
		width: 100%;
		height: 470rpx;
	}
	
	.imgLoca{
		width: 70rpx;
		height: 70rpx;
		display:  flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		bottom: 10rpx;
		right: 50rpx;
		background: #F07535;
	}

	.setimg {
		width: 40rpx;
		height: 40rpx;
	}

	.location {
		width: 30%;
		top: 0;
		right: 0;
		position: fixed;
		z-index: 9999;
	}

	.locIndex {
		z-index: 99999;
	}


</style>
