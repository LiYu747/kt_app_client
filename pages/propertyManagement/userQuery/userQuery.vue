<template>
	<view class="">
		<view class="fiedx">
			<subunit titel='用户查询'></subunit>
			<view class="searchBox flex al-center ju-center pos-rel">
				<view class="searchBack flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/serach.png" class="serachImg" mode=""></image>
					<input type="text" class="ipt" v-model="username" @confirm="search" placeholder="请输入关键词" />
				</view>
				<view @click="cancel" v-show="falg==true" class="cancel pos-abs">
					取消
				</view>
			</view>
		</view>
		<view class="topLine">

		</view>
		<view v-if="lists.length>0" class="flex-d al-center m-t1">
			<view class="itemBox" @click="goUserDetails" v-for=" item in lists" :key='item.id'>
				<view class="flex al-center">
					<view class="itemName">
						{{item.username}}
					</view>
					<view class="itemTel">
						{{item.tel}}
					</view>
				</view>
				<view class="flex m-t3">
					<view class="itemSex flex al-center ju-center" :class="item.sex=='男'?'dv':''">
						{{item.sex}}
					</view>
					<view class="itemIDcard">
						<view class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/idcard.png" class="idcardIcon" mode=""></image>
							<view class="m-l1">
								身份证号
							</view>
						</view>
						<view class="m-t1">
							{{item.id_card_no}}
						</view>
					</view>
					<!-- <view class="itemTime m-l3">
						<view class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/time.png" class="timeIcon" mode=""></image>
							<view class="m-l1">
								入住时间
							</view>
						</view>
						<view class="m-t1">
							{{item.checkdate}}
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<view v-if="isLoading==false&&lists.length==0" class="noQuery flex ju-center">
			暂无用户可查询
		</view>
		<view v-if="hasMore==false&&lists.length>0" class="bomLine flex ju-center">
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
				falg:false,
				noText: '',
				page: 1,
				pageSize: 15,
				username: '',
				isLoading: false,
				hasMore: true,
				locdata: [],
				lists: []
			}
		},
		methods: {
			// 用户详情
			goUserDetails() {
				return;
				uni.navigateTo({
					url: '/pages/propertyManagement/userQuery/theUserDetails/theUserDetails'
				})
			},
			// 搜索
			search(){
				this.falg = true
				this.lists = []
				this.page = 1
				this.getData()
				
			},
			// 取消
			cancel(){
				this.falg = false
				this.username = ''
				this.page = 1
				this.lists = []
				this.getData()
			},
            //获取数据
			getData() {
				this.isLoading = true
				home.allResident({
					data: {
						username: this.username,
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
						if(res.data.code == 200) {
							let data = res.data.data
							data.data.map(item => {
								item.tel = item.tel.slice(0, 3) + '****' + item.tel.slice(7, 11)
								item.id_card_no = item.id_card_no.slice(0, 3) + '*************' + item.id_card_no.slice(item.id_card_no.length -
									4, item.id_card_no.length)
								if (item.sex == 1) {
									item.sex = '男'
								}
								if (item.sex == 2) {
									item.sex = '女'
								}
							})
							this.page = data.current_page + 1;
							this.hasMore = data.next_page_url ? true : false;
							this.lists = this.lists.concat(data.data)
							// console.log(data.data);
						}
						else{
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
		onReachBottom() {
			this.noText = '没有更多了'
			if (this.isLoding == true || this.hasMore == false) return;
			this.getData()
		},
		onShow() {

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
	}

  
   .cancel{
	   font-size: 14px;
	   color: #666666;
	   margin-left: 30rpx;
	   right: 50rpx;
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
		width: 670rpx;
		height: 190rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding-top: 30rpx;
		padding-left: 20rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.itemName {
		color: #333333;
	}

	.itemTel {
		margin-left: 44rpx;
	}

	.itemSex {
		width: 66rpx;
		height: 66rpx;
		border-radius: 50%;
		background: rgb(255, 0, 0);
		color: #ffff;
	}

	.itemIDcard {
		margin-left: 94rpx;
		width: 260rpx;
		height: 70rpx;
		// border-right: 2px solid #cccccc;
		border-left: 2px solid #CCCCCC;
		color: #999999;
		font-size: 12px;
		padding-left: 30rpx;
	}

	.idcardIcon {
		width: 30rpx;
		height: 20rpx;
	}

	.itemTime {
		color: #999999;
		font-size: 12px;
	}

	.timeIcon {
		width: 25rpx;
		height: 23rpx;
	}

	.bomLine {
		margin-top: 20rpx;
		width: 100%;
		font-size: 12px;
	}

	.dv {
		background: rgb(0, 178, 255);
	}
	
	.noQuery {
		margin-top: 100rpx;
		font-size: 14px;
		color: #666666;
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
	
</style>
