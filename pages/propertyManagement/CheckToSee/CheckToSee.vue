<template>
	<view class="">
		<view class="fiedx">
			<subunit titel='入住查看'></subunit>
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

		<view v-if="lists.length>0" class="flex-d m-t1 al-center">
			<view class="itemBox" @click="goDetails(item)" v-for="item in lists" :key='item.id'>
				<view class="itemName flex al-center ju-between">
					<view class="">
						姓名：{{item.name}}
					</view>
					<view :class="item.verify_status_text=='已通过'?'dv':'nodv'">
						{{item.verify_status_text}}>
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						申请时间：
					</view>
					<view class="">
						{{item.created_at}}
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
		<view v-if="lists.length==0&&isLoading == false" class="nocheckin flex ju-center">
			     暂时没有用户申请
		</view>

		<view v-if="hasMore==false" class="bomLine flex ju-center al-center">
			{{noText}}
		</view>
		<view v-show="isLoading == true && lists.length>0" class=" flex ju-center al-center lodbox">
			<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
			加载中...
		</view>
		<view v-show="isLoading == true && lists.length == 0" class="showloding flex al-center ju-center">
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
				status: '',
				isLoading: false,
				hasMore: true,
				lists: []
			}
		},
		methods: {
			// 用户详情
			goDetails(item) {
				// console.log(item);
				uni.navigateTo({
					url: '/pages/propertyManagement/CheckToSee/seeDetails/seeDetails?id=' + item.id
				})
			},
			getData() {
				this.isLoading = true
				home.checkinRecord({
					data: {
						page: this.page,
						pageSize: this.pageSize,
						verify_status: this.status
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
						if (res.data.code == 403) {
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
						if (res.data.code == 200) {
							let data = res.data.data
							console.log(data);
							data.data.map(item => {
								item.address = item.own_village.name + item.own_building.name + item.own_apartment.name + item.own_floor.name +
									item.own_room.room_number
								item.created_at = item.created_at.slice(0, 16)
							})
							this.page = data.current_page + 1;
							this.hasMore = data.next_page_url ? true : false;
							this.lists = this.lists.concat(data.data)
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
						}


					}
				})
			}
		},
		mounted() {

		},
		onShow() {
			this.page = 1
			this.lists = []
			this.getData()
		},
		onReachBottom() {
			this.noText = '没有更多了'
			if (this.isLoding == true || this.hasMore == false) return;
			this.getData()

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

	.bomLine {
		font-size: 12px;
		padding: 20rpx 0;
	}

	.dv {
		color: #23D400;
	}

	.nodv {
		color: #F07535;
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
		border-radius: 10rpx;
		background: rgba(88, 88, 88, 0.8);
	}
	
	.nocheckin{
		margin-top: 100rpx;
		font-size: 14px;
		color: #666666;
	}
</style>
