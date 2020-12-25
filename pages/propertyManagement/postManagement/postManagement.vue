<template>
	<view>
		<subunit titel='帖子管理' class="fixed"></subunit>
		<view class="topLine"></view>
		<view class="flex-d al-center">
			<view class="itemBox" v-for="item in lists" :key='item.id'>
                   <view class="layoutBox flex al-center ju-between">
                   	标题 : {{item.title}}
					<view :class="item.verify_status_text=='通过审核'?'dv':'nodv'">
						{{item.verify_status_text}} >
					</view>
                   </view>
				   <view class="layoutBox">
				   	发布时间 : {{item.created_at}}
				   </view>
			</view>
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
				noText:'',
				page: 1,
				pageSize: 15,
				isLoading: false,
				hasMore: true,
				lists: []
			}
		},
		methods: {
			getData() {
				this.isLoading = true
				home.allPost({
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
							console.log(data.data);
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
		onLoad() {

		},
		onReachBottom() {
			this.noText = '没有更多了'
			if (this.isLoding == true || this.hasMore == false) return;
			this.getData()
			
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
	.fixed {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}
	
	.itemBox{
		margin-top: 30rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding:  20rpx;
		font-size: 14px;
		padding-bottom: 50rpx;
		color: #666666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}
	
	.layoutBox{
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
		display: flex;
		align-items: center;
	}
	
	.dv{
		color: #23D400;
	}
	
	.nodv{
		color: #F07535;
	}
	
	.bomLine {
		font-size: 12px;
		padding: 20rpx 0;
	}

	.showloding {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		color: #FFFFFF;
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
	.bomLine{
		height: 50rpx;
	}
</style>
