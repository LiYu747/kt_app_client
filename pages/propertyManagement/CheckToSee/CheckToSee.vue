<template>
	<view class="">
		<subunit titel='入住查看'></subunit>
		<view class="navBox" :style="{height: this.$store.state.customBar + 'rpx'}">
			<view class="searchBox ">
				<view @click="xlshow = !xlshow" class="allTx flex al-center">
					筛选
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/pullDown.png" class="pullDown" mode=""></image>
				</view>
				<view v-show="xlshow==true" class="celBox pos-abs flex-d al-center">
					<view class="trilateral">

					</view>
					<view class="xlshow flex-d al-center">
						<view class="itemLabel flex al-center ju-center" @click="select(item,index)" :class="{'back':index==idx}" v-for="(item,index) in condition"
						 :key='item.id'>
							{{item.label}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="lists.length>0" class="flex-d m-t1 al-center">
			<view class="itemBox" @click="goDetails(item,index)" v-for="(item,index) in lists" :key='item.id'>
				<view class="itemName flex al-center ju-between">
					<view class="">
						姓名：{{item.own_user.username}}
					</view>
					<view :class="item.verify_status_text=='已通过'?'dv':'nodv'">
						{{item.verify_status_text}}>
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						电话：
					</view>
					<view class="">
						{{item.own_user.tel}}
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
		<view v-if="lists.length==0&&isLoading == false&&falg == false" class="nocheckin flex ju-center">
			暂时没有用户申请
		</view>
		<view v-if="lists.length==0&&isLoading == false&&falg == true" class="nocheckin flex ju-center">
			没有筛选条件的用户申请
		</view>

		<view v-if="hasMore==false&&lists.length>0" class="bomLine flex ju-center al-center">
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
		
		<view v-show="xlshow==true" @click="xlshow = false"  class="showBox">
			
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
				xlshow: false, //是否显示筛选框
				falg: false, //判断是否有筛选内容
				idx: 0,
				noText: '',
				page: 1,
				pageSize: 15,
				status: '', //筛选的条件
				isLoading: false,
				hasMore: true,
				lists: [],
				condition: [{
						label: '全部',
						status: ''
					},
					{
						label: '待审核',
						status: '1'
					},
					{
						label: '已通过',
						status: '2'
					},
					{
						label: '未通过',
						status: '3'
					},
				],
				index1: 0
			}
		},
		methods: {
			// 筛选
			select(item, index) {
				this.idx = index
				this.xlshow = false
				this.falg = true
				this.status = item.status
				this.page = 1
				this.noText = ''
				this.lists = []
				this.getData()
			},
			// 用户详情
			goDetails(item, index) {
				this.index1 = index
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
							// console.log(data);
							data.data.map(item => {
								item.address = item.own_village.name + item.own_building.name + item.own_apartment.name + item.own_floor.name +
									item.own_room.room_number
								item.created_at = item.created_at.slice(0, 16)
								item.own_user.tel = item.own_user.tel.slice(0, 3) + '****' + item.own_user.tel.slice(7, 11)
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
			this.getData()
		},
		onShow() {
			if (!this.$store.state.checkIspass) return;
			this.lists.map((item, index) => {
				if (this.index1 == index) {
					item.verify_status_text = this.$store.state.checkIspass
				}
			})

		},
		onReachBottom() {
			this.noText = '没有更多了'
			if (this.isLoding == true || this.hasMore == false) return;
			this.getData()

		},
		onHide() {
			this.$store.commit('checkIspass', '')
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
	.navBox {
		width: 30%;
		top: 0;
		right: 0;
		position: fixed;
		z-index: 999;
	}

	.topLine {
		height: 148rpx;
	}

	.searchBox {
		position: absolute;
		right: 50rpx;
		color: #FFFFFF;
		font-size: 16px;
		z-index: 9;
		bottom: 20rpx;
	}

	.xlshow {
		width: 160rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		z-index: 9;
		padding-bottom: 30rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.itemLabel {
		font-size: 14px;
		color: #666666;
		margin-top: 20rpx;
	}

	.back {
		width: 90%;
		background: #F07535;
		color: #FFFFFF;
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
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 0 20rpx;
		padding-bottom: 40rpx;
		font-size: 14px;
		color: #666666;
			box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
	}

	.itemName {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.bomLine {
		font-size: 12px;
		padding: 30rpx 0;
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
		padding: 20rpx 0;
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
		border-radius: 10rpx;
	}

	.nocheckin {
		margin-top: 100rpx;
		font-size: 14px;
		color: #666666;
	}

	.celBox {
		right: -32rpx;
		margin-top: 10rpx;
 	}

	.trilateral {
		width: 0;
		height: 0;
		border-width: 0 20rpx 20rpx;
		border-style: solid;
		border-color: transparent transparent #FFFFFF;
	}
	
	.showBox{
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		z-index: 99;
	}
</style>
