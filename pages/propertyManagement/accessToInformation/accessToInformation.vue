<template>
	<view class="">
		<view class="fiedx">
			<subunit titel='进出记录'></subunit>
			<view class="searchBox flex al-center ju-center pos-rel">
				<view class="allTxt pos-abs flex al-center">
					全部
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/pullDown.png" class="pullDown" mode=""></image>
				</view>
				<view class="searchBack flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/serach.png" class="serachImg" mode=""></image>
					<input type="text" class="ipt" value="" placeholder="请输入关键词" />
				</view>
			</view>
		</view>
		<view class="topLine">

		</view>

		<view class="flex-d m-t1 al-center">
			<view class="itemBox" v-for="item in locdata" @click="goDetails" :key='item.id'>
				<view class="itemName flex al-center ju-between">
					<view class="">
						姓名：{{item.name}}
					</view>
					<view class="">
						<image src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" class="retrueImg" mode=""></image>
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						申请时间：
					</view>
					<view class="">
						{{item.time}}
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						地址：
					</view>
					<view class="">
						{{item.address}}
					</view>
				</view>
			</view>
		</view>

		<view class="bomLine flex ju-center al-center">
			{{noText}}
		</view>
		
		<view v-show="isLoading == true" class="showloding flex al-center ju-center">
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
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				noText: '',
				page: 1,
				pageSize: 15,
				isLoading: false,
				hasMore: true,
				locdata: [{
						name: '李海峰',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
					{
						name: '张心如',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
					{
						name: '张心如',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
					{
						name: '张心如',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
					{
						name: '张心如',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
				]
			}
		},
		methods: {
			// 用户详情
			goDetails() {
				uni.navigateTo({
					url: '/pages/propertyManagement/accessToInformation/accessDetails/accessDetails'
				})
			},
			getData() {
				this.isLoading = true
				home.recordOfAccess({
					data: {
						page: this.page,
						pageSize: this.pageSize
					},
					fail: () => {
						this.isLoading = false
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
						this.isLoading = false
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							this.locdata = []
							uni.showModal({
								content: res.data.msg + '访问',
								success: (res) => {
									uni.navigateBack({
										delta: 1
									})
								}
							})
							return;
						}

						console.log(res);
					}
				})
			}
		},
		mounted() {
			this.getData()
		},
		onReachBottom() {
			this.noText = '没有更多了'
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
	.fiedx {
		top: 0;
		width: 100%;
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 236rpx;
	}

	.searchBox {
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		border-bottom: 1px solid #eeeeee;
	}

	.searchBack {
		width: 494rpx;
		height: 54rpx;
		background: rgba(204, 204, 204, 0.35);
		border-radius: 27rpx;
		margin-left: 30rpx;
	}

	.allTxt {
		font-size: 13px;
		left: 40rpx;
		color: #666666;
	}

	.pullDown {
		width: 20rpx;
		height: 12rpx;
		margin-left: 10rpx;
	}

	.serachImg {
		width: 34rpx;
		height: 34rpx;
		margin-left: 20rpx;
	}

	.ipt {
		margin-left: 20rpx;
		width: 400rpx;
		font-size: 14px;
		// background: red;
	}

	.uni-input-placeholder {
		font-size: 12px;
	}

	.itemBox {
		margin-top: 30rpx;
		width: 650rpx;
		height: 300rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 0 20rpx;
		font-size: 14px;
		color: #666666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.itemName {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.retrueImg {
		width: 14rpx;
		height: 20rpx;
	}

	.bomLine {
		padding: 20rpx 0;
		font-size: 12px;
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
		border-radius: 10rpx;
		background: rgba(88, 88, 88, 0.8);
	}
</style>
