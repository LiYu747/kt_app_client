<template>
	<view class="">
		<view class="release">
			<view v-if="lists.length>0" class="">
				<view class="item" @click="gotoD(item)" v-for="(item,index) in lists" :key='item.id'>
					<view class="flex">
						<!-- 头像 -->
						<image :src="item.own_user.avatar" class="itemimg" mode=""></image>
						<view class="name m-l1 m-t1">
							{{item.own_user.nickname}}
							<view class="time">
								{{item.created_at.slice(0,10)}}
							</view>
						</view>
					</view>
					<!-- 内容 -->
					<view class="content">
						<view class="show">
							{{item.title}}
						</view>
					</view>
					<!-- 图片 -->
					<view class="flex al-center m-t4">
						<view v-for="(items,indexs) in item.album.slice(0,3)" :key='indexs'>
							<image :src="items.url" class="items" mode=""></image>
						</view>
					</view>
				</view>
				<view v-show="isLoding == true" class="m-t2 flex ju-center al-center lodbox">
					<image class="lodimg" src="../../image/address/loading.gif" mode=""></image>
					加载中...
				</view>
				<view class="flex ju-center m-t3 m-b2 fz-14" v-if="hasMore == false">
					{{text}}
				</view>
				<view class="btom">

				</view>
			</view>
			<view class="nono flex al-center ju-center" v-else>
				小区还没有发布帖子哦~
			</view>
		</view>
	</view>
</template>

<script>
	import village from '../../vendor/village/village.js'
	import jwt from '../../vendor/auth/jwt.js'
	export default {
		name: "",
		components: {

		},
		props: {
			id: {
				type: String
			},
		},
		data() {
			return {
				lists: [],
				page: 1,
				ps: 15,
				isLoding: false,
				hasMore: true,
				text: '',
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
					},
					success: () => {
						village.communityPost({
							data: {
								villageId: this.id,
								page: this.page,
								pageSize: this.ps
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
							fail: (err) => {
								this.isLoding = false;
								// console.log(err);
								uni.showToast({
									title: err.data.msg
								})
							}
						})
					}
				})
			},
			// 去详情
			gotoD(item) {
				// console.log(item.id);
				uni.navigateTo({
					url: `/components/forum/forumdils?id=${item.id}`
				})
			}
		},
		mounted() {
			this.loadPageData()
		},
		onShow() {

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
	.itemimg {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.item {
		width: 690rpx;
		padding: 30rpx;
		border-bottom: 1rpx solid #BFBFBF;
		color: #666666;
	}

	.name {
		font-size: 26rpx;
		color: #F07535;
	}

	.time {
		color: #B3B3B3;
		font-size: 24rpx;
		margin-top: 10rpx;
		-webkit-transform: scale(0.8);
		-webkit-transform-origin: left top
	}

	.content {
		margin-top: 10rpx;
		width: 650rpx;
		background: rgb(230, 230, 230);
		padding: 30rpx 20rpx;
		font-size: 28rpx;
	}

	.show {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.items {
		width: 130rpx;
		height: 150rpx;
		margin-right: 20rpx;
	}

	.comimg {
		width: 25rpx;
		height: 25rpx;
		margin-top: 5rpx;
		margin-right: 10rpx;
	}

	.comment {
		justify-content: flex-end;
		font-size: 24rpx;
		color: #666666;
	}

	.comtext {
		margin-top: 10rpx;
		width: 642rpx;
		background: rgb(230, 230, 230);
		padding: 14rpx 24rpx;
	}

	.release {
		margin-bottom: 100rpx;
	}

	.btom {
		height: 140rpx;
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
</style>
