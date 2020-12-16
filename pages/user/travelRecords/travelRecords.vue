<template>
	<view class="">
		<subunit class="pos" :retur='true' @goback='goback' titel='出行记录'></subunit>
		<view class="line"> </view>
		<view v-if="lists.length>0" class=" flex-d al-center">
			<view class="item" v-for="item in lists" :key='item.id'>
				<!-- 时间 -->
				<view class="bx1 flex al-center">
					<image src="../../../image/visit/time.png" class="dv3" mode=""></image>
					{{item.open_gate_at.slice(0,16)}}
				</view>
				<!-- 地点 -->
				<view class="bx1 flex al-center">
					<image src="../../../image/visit/pos.png" class="dv3" mode=""></image>
					{{item.village_name}}
				</view>
				<!-- 提示 -->
				<view class="bx2 flex al-center">
					{{item.desc}}
				</view>
			</view>
			<view v-show="isLoding == true" class=" flex ju-center m-t2 al-center lodbox">
				<image class="lodimg" src="../../../image/address/loading.gif" mode=""></image>
				加载中...
			</view>
			<view class="flex ju-center m-b2 fz-14 m-t2" v-if="hasMore == false">
				{{text}}
			</view>
		</view>
		<view class="nono flex al-center ju-center" v-if='lists.length==0&&isLoding==false'>
			暂无出行记录
		</view>
		
		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="../../../image/address/loading.gif" mode=""></image>
				</view>
				加载中
			</view>
		</view>
	</view>
</template>

<script>
	import home from '../../../vendor/home/home.js'
	import subunit from '../../../components/sub-unit/subunit.vue'
	import jwt from '../../../vendor/auth/jwt.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				text: '',  //是否还有更多
				lists: [],  //出行记录数据
				page: 1,
				ps: 15,
				isLoding: false, //是否显示loding
				hasMore: true, //是否还有更多
			}
		},
		methods: {
			// 获取数据
			loadPageData() {

				if (this.isLoding == true || this.hasMore == false) return;

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
						home.travelRecords({
							data: {
								page: this.page,
								pageSize: this.ps

							},
							fail: (err) => {
								this.isLoding = false;
								uni.showToast({
									title: '网络错误',
									icon:'none'
								})
								// console.log(err);
							},
							success: (res) => {

								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;
								this.page = data.current_page + 1;
								this.hasMore = data.next_page_url ? true : false;

								this.lists = this.lists.concat(data.data);
							},
							
						})
					}
				})
			},
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		mounted() {
			this.loadPageData()
		},
		// 下拉触底
		onReachBottom() {
			this.loadPageData();
			this.text = '没有更多了~'
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
	.pos {
		position: fixed;
		z-index: 99;
	}

	.line {
		height: 148rpx;
	}

	.dv3 {
		width: 30rpx;
		height: 30rpx;
		margin: 0 20rpx;
	}

	.item {
		font-size: 28rpx;
		width: 90%;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		margin-top: 30rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		color: #666666;
	}

	.bx1 {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #cccccc;

	}

	.bx2 {
		padding: 20rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.nono {
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
