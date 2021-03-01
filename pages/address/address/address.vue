<template>
	<view class=" pos-rel content">
		<subunit ref='xcoll' :retur='false' class="fled" titel="入住信息" @add='add' :image='aimg'></subunit>
		<view v-show="flag%2!==0" class="shows pos-abs ">
			<image class="showimg" @click="getto" src="https://oss.kuaitongkeji.com/static/img/app/address/ads.png" mode=""></image>
		</view>
		<image src="https://oss.kuaitongkeji.com/static/img/app/home/jx.png" class="img" mode=""></image>
		<addList :locdata='locdata' :isLoding='isLoding' :text='text' :hasMore='hasMore'></addList>
		<view v-show="showPullDownRefreshIcon == true" class="show  flex al-center ju-center">
			<view class="showcentent flex al-center ju-between">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				刷新中
			</view>
		</view>
		<view v-if="Gshow == true && Step == false" class="">
                <view class="guideBox">
                	<view class="Gposr flex">
                		  <view class="bai Gtext">
                		  	填写地址详细信息
                		  </view>
                		  <image src="../../../image/Newguidance/arrowsRU.png" class="arrowsRU" mode=""></image>
                	</view>
                </view>
				<image src="../../../image/Newguidance/addLogo.png" class="addLogo" mode=""></image>
		</view>
		<view v-if="Step == true" class="">
			<image @click="gotohome" src="../../../image/Newguidance/addressT.png" class="addressT" mode=""></image>
		</view>
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
				aimg: 'https://oss.kuaitongkeji.com/static/img/app/address/plus.png',
				flag: '', // 判断是否显示申请入驻
				text: '', //没有更多了
				locdata: [], //数据列表
				page: 1,
				ps: 15,
				isLoding: false,
				hasMore: true,
				showPullDownRefreshIcon: false,
				Gshow:false,
				Step:false,//用户第二次进入页面
			}
		},
		methods: {
			gotohome(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			// 入驻申请
			add(val) {
				this.flag = val
			},
			// 去入驻申请
			getto() {
				uni.navigateTo({
					url: '/pages/residence/checkIn/checkIn'
				})
			},
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
						if(cache.get('Gshow')&&!cache.get('step')){
							this.Gshow = true
						}else{
							this.Gshow = false
						}
						console.log(this.Gshow);
						if(cache.get('Gshow')&&cache.get('step')){
							this.Step = true
						}else{
							this.Step = false
						}
						// console.log(this.Step);
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
					}
				})


			},
		},
		mounted() {

		},
		onLoad(val) {
		},
		onShow() {
			this.loadPageData()
		},
		onHide() {
			this.flag = ''
			this.$refs.xcoll.rotateTimes = 1
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
		top: 135rpx;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 9999;
	}
	
	.arrowsRU{
		width: 130rpx;
		height: 100rpx;
	}
	
	.Gposr{
		position: fixed;
		right: 70rpx;
	}
	
	.Gtext{
		margin-top: 66rpx;
		margin-right: 20rpx;
	}
	
	.addressT{
		position: fixed;
		top: 0;
		z-index: 99999;
		width: 100%;
		height: 100vh;
	}
	
	.addLogo{
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
	}
</style>
