<template>
	<view class="">
		<subunit  titel="申请记录" ></subunit>
		<view class="flex-d al-center">
			<view v-if="lists.length>0" class="">
				<view class="card" @click="godetails(items)" v-for="(items,indexs) in lists" :key='items.id' >
					<view class="bx1 flex al-center pos-rel">
						<image src="https://oss.kuaitongkeji.com/static/img/app/visit/user.png" class="dv3" mode=""></image>
						<view class="">
							{{username}}
						</view>
						<view class=" pos-abs rig">
							{{items.verify_status_text}}
							>
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
							{{items.own_village.name}}
						</view>
					</view>
		
				</view>
				<view v-show="isLoding == true&&lists.length>0" class=" flex ju-center al-center lodbox"> 
					<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
					加载中...
				</view>
				<view class="flex ju-center notext fz-14" v-if="hasMore == false">
					{{text}}
				</view>
			</view>
			<view  v-if="lists.length==0 && isLoding == false" class="nono flex al-center ju-center">
				您还没有申请记录哦~
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
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../vendor/home/home.js'
	import cache from '../../../vendor/cache/cache.js'
	import user from '../../../vendor/user/userDetails.js'
	import jwt from '../../../vendor/auth/jwt.js'
	import urlUtil from '../../../vendor/common/url.js';
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				username: '', //真实姓名
				text: '',
				lists: [],
				page: 1,
				ps: 15,
				isLoding: false, //是否显示loding
				hasMore: true, //是否还有更多
			}
		},
		methods: {
			// 去详情
			godetails(item) {
				uni.navigateTo({
					url: `/pages/residence/checkdetails/checkdetails?id=${item.id}`
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
					},
					success: () => {
						home.applerecord({
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
								// console.log(err);
							},
							success: (res) => {

								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;
								if(data.data.length == 0) return;
								data.data.map(item => {
									if (item.verify_status == 1) {
										item.verify_status_text = '审核中'
									}
								})

								this.page = data.current_page + 1;
								this.hasMore = data.next_page_url ? true : false;

								this.lists = this.lists.concat(data.data);
							},

						})
					}
				})


			},
			// 获取用户资料
			Userdata() {
				user.userDeta({
					data: {},
					fail: () => {
						uni.showToast({
							title: '网络出错了',
							icon:'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						let Users = res.data.data
						this.username = Users.username
					},

				})
			}


		},
		mounted() {
			this.loadPageData()
			this.Userdata()
		},
		onShow() {
			
			
		},
		// 下拉加载更多
		onReachBottom() {
			this.text = '没有更多了~'
			if (this.isLoding == true || this.hasMore == false) return;
			this.loadPageData();
			
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
	.card {
		margin-top: 30rpx;
		width: 690rpx;
		background: #FFFFFF;
		color: #666666;
		border-radius: 10rpx;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9; 
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


	.dv3 {
		width: 30rpx;
		height: 30rpx;
		margin: 0 20rpx;
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
		font-size: 14px;
		color: #666666;
	}
	
	.notext{
		padding: 30rpx 0;
		font-size: 12px;
	}

	.lodimg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}

	.lodbox {
		font-size: 24rpx;
		padding: 20rpx 0;
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
</style>
