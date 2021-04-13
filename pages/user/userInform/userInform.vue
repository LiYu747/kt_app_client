<template>
	<view class="">
			<subunit titel='消息' class=""></subunit>
		<view class="navBox" :style="{height: this.$store.state.customBar + 'rpx'}">
			<view @click="ReadAll" class="empty pos-abs">
				全部已读
			</view>
		</view>
		<view v-if="infoLists.length>0" class="contenBox">
			<view class="flex-d al-center"  v-for="item in infoLists" :key='item.id'>
				<view class="itemTime">
					{{item.created_at}}
				</view>
				<view @click="goDetails(item)" class="itemBox flex al-center pos-rel">
					<view class="itemTxt">
						{{item.title}}
					</view>
					<view v-if="item.read_at == null" class="circle pos-abs">
					
					</view>
				</view>
			</view>
			<view v-show="isLoding == true&&infoLists.length>0" class=" flex ju-center al-center lodbox">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				加载中...
			</view>
			<view class="flex ju-center m-b2 fz-12" v-if="hasMore == false">
				{{text}}
			</view>
		</view>
		<view class="flex ju-center fz-14 nomsg" v-if="infoLists.length==0 && isLoding == false">
			暂无消息通知
		</view>
		<view v-show="isLoding == true&&infoLists.length==0" class="showloding flex al-center ju-center">
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
	import urlUtil from '../../../vendor/common/url.js';
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				page: 1,
				pageSize: 15,
				isLoding: false, //是否显示loding
				hasMore: true, //是否还有更多
				infoLists: [], //消息列表
				text: ''
			}
		},
		methods: {
			// 全部已读
			ReadAll() {
				if(this.infoLists.length == 0) return;
				uni.showLoading({
					title:'加载中'
				})
				home.allRead({
					data: {},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络出错',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出问题了',
								icon: 'none'
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
							return;
						}
						this.infoLists.map(item => {
							item.read_at = '已读'
						})
					}
				})
			},

			// 去详情页面
			goDetails(item) {
				if(!item.read_at){
					this.Read(item.id)
					this.infoLists.map( items => {
						if(items.id == item.id){
							items.read_at = '已读'
						}
					})
				}
				if (!item.page) return;
				urlUtil.to({
					pageAlias: item.page,
					options: item.params,
				})
			},
			// 消息已读
			Read(id) {
				home.userRead({
					data: {
						id: id
					},
					fail: () => {
						uni.showToast({
							title: '网络出错',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						// console.log(res);
						
					}
				})
			},
			// 获取消息通知
			getInform() {
				this.isLoding = true
				home.userMessage({
					data: {
						page: this.page,
						pageSize: this.pageSize
					},
					fail: () => {
						this.isLoding = false
						uni.showToast({
							title: '网络出错',
							icon: 'none'
						})
					},
					success: (res) => {
						this.isLoding = false
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出问题了',
								icon: 'none'
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
							return;
						}
						let data = res.data.data
						this.page = data.current_page + 1;
						this.hasMore = data.next_page_url ? true : false;
						data.data.map( item => {
							item.created_at = item.created_at.slice(0,16)
						})
						this.infoLists = this.infoLists.concat(data.data)
					}
				})
			},
		},
		onShow() {
			
		},
		// 下拉加载更多
		onReachBottom() {
			this.text = '没有更多了~'
			if (this.isLoding == true || this.hasMore == false) return;
			this.getInform();
		},
		mounted() {
           this.getInform()
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
    .navBox{
		width: 30%;
		top: 0;
		right: 0;
		position: fixed;
		z-index: 99;
	}

	.empty {
		right: 50rpx;
		bottom: 20rpx;
		color: #FFFFFF;
		font-size: 15px;
		z-index: 999;
	}

	.topLine {
		height: 148rpx;
	}

	.contenBox {
		width: 690rpx;
		padding: 30rpx;
	}

	.itemBox {
		width: 650rpx;
		padding: 30rpx 20rpx;
		background: #FFFFFF;
		margin-bottom: 30rpx;
		font-size: 12px;
		color: #666666;
		border-radius: 10rpx;
	}

	.itemTxt {
		width: 600rpx;
		display: -webkit-box;
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
		white-space: normal;
		/*规定段落中的文本不进行换行 */
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
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
		border-radius: 10rpx;
	}

	.nomsg {
		margin-top: 100rpx;
		color: #999999;
	}

	.circle {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background: red;
		right: 20rpx;
	}
	
	.itemTime{
		font-size: 12px;
		color: #999999;
		margin-bottom: 10rpx;
	}
</style>
