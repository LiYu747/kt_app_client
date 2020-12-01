<template>
	<view class="">
		<view class="nav flex al-center posd">
			<view class="left flex al-center ju-center" v-for="(item,index) in til" @click="add(index)" :class="{dv:index===0}"
			 :key='item.id'>
				<view :class="{dv1:index===idx}">
					{{item}}
				</view>
			</view>
		</view>
		<view class="line">

		</view>
		<!-- 我发布的 -->
		<view v-show='idx===0' class="release">
			<view v-if="lists.length>0" class="">
				<view class="item" @click="gotoD(item)" v-for="(item,index) in lists" :key='item.id'>
					<view class="titel">
						{{item.title}}
					</view>
					<view class="content">
						{{item.content}}
					</view>
					<!-- 图片 -->
					<view class="flex al-center m-t4">
						<view v-for="items in item.album.slice(0,3)" :key='items.id'>
							<image :src="items.url" class="items" mode=""></image>
						</view>
					</view>
					<view class="time">
						{{item.created_at.slice(0,16)}}
					</view>
				</view>
				<view v-show="isLoding == true" class=" flex ju-center al-center lodbox">
					<image class="lodimg" src="../../image/address/loading.gif" mode=""></image>
					加载中...
				</view>
				<view class="flex ju-center m-b2 m-t3 fz-14" v-if="hasMore == false">
					{{text}}
				</view>
				<view class="btom">

				</view>
			</view>
			<view class="nono flex ju-center" v-else>
				您还没有任何发布
			</view>
		</view>

		<!-- 我参与的 -->
		<view v-show="idx===1" class="release">
			<view class="" v-if="data1.length>0">
				<view class="itemtext" @click="reply(item)" v-for="item in data1" :key='item.id'>
					<view class="flex color ju-between">
						<view class="">
							{{name}}:
						</view>
						<view class="name ">
							{{item.content}}
						</view>
					</view>

					<view class=" flex m-t1 ju-between">
						<view class="">
							回复的主题：
						</view>
						<view class="conten">
							{{item.own_village_tribune.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="nono flex ju-center" v-else>
				您还没有发表评论
			</view>
			<view v-show="isLoding1 == true" class=" flex ju-center al-center lodbox">
				<image class="lodimg" src="../../image/address/loading.gif" mode=""></image>
				加载中...
			</view>
			<view class="flex ju-center m-b2 m-t3 fz-14" v-if="hasMore1 == false">
				{{text1}}
			</view>
			<view class="btom">

			</view>
		</view>
	</view>
</template>

<script>
	import village from '../../vendor/village/village.js'
	import cache from '../../vendor/cache/cache.js'
	import user from '../../vendor/user/userDetails.js'
	import jwt from '../../vendor/auth/jwt.js'
	export default {
		name: "",
		components: {

		},
		props: {
			id: {
				type: String
			}
		},
		data() {
			return {
				til: ['我发布的', '我参与的'],
				scrollTop: 0,
				idx: 0,
				name: '',
				lists: [],
				page: 1,
				text: '',
				isLoding: false, //是否显示loding
				hasMore: true, //是否还有更多
				data1: [],
				page1: 1,
				text1: '',
				isLoding1: false, //是否显示loding
				hasMore1: true, //是否还有更多
			}
		},
		methods: {
			add(index) {
				this.idx = index
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			// 自己发布的帖子 获取数据
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
						village.SelfComments({
							data: {
								villageId: this.id,
								page: this.page,

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
								uni.showToast({
									title: err.data.msg
								})
								// console.log(err);
							}
						})
					}
				})
			},
			// 自己评论的帖子
			SelfPost() {
				if (this.isLoding1 == true || this.hasMore1 == false) return;
				this.isLoding1 = true;

				jwt.doOnlyTokenValid({
					keepSuccess: false,
					showModal: true,
					fail: () => {
						this.isLoding1 = false;
					},
					success: () => {
						village.SelfPost({
							data: {
								page: this.page1,
							},
							success: (res) => {
								// console.log(res);
								this.isLoding1 = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;
								this.page1 = data.from + 1;
								this.hasMore1 = data.next_page_url ? true : false;

								this.data1 = this.data1.concat(data.data);
							},
							fail: (err) => {
								this.isLoding1 = false;
								uni.showToast({
									title: err.data.msg
								})
								// console.log(err);
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
			},
			// 跳转回复的页面
			reply(item) {
				// console.log(item);  
				uni.navigateTo({
					url: `/components/forum/forumdils?id=${item.tribune_id}`
				})
			},
			// 获取用户资料
			Userdata() {
				user.userDeta({
					data: {},
					fail: (err => {
						uni.showToast({
							title: err.data.msg
						})
					}),
					success: (res => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						let Users = res.data.data
						this.name = Users.username
					}),

				})
			}
		},
		mounted() {
			this.loadPageData()
			this.SelfPost()
			this.Userdata()
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
	.nav {
		width: 100%;
		height: 74rpx;
		background: #FFFFFF;
		font-size: 28rpx;
		color: #666666;
	}

	.left {
		flex: 1;
		height: 74rpx;
	}

	.dv {
		border-right: 1rpx solid #C0C0C0;
	}

	.dv1 {
		color: #F07535;
		display: flex;
		align-items: center;
		height: 42rpx;
		border-top: 4rpx solid #FFFFFF;
		border-bottom: 4rpx solid #F07535;
	}

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

	.show {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.items {
		width: 140rpx;
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

	.time {
		display: flex;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.titel {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.content {
		font-size: 26rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
		background: rgba(204, 204, 204, 0.5);
		padding: 10rpx;
		width: 89%;
	}

	.btom {
		height: 140rpx;
	}

	.itemtext {
		font-size: 24rpx;
		padding: 44rpx;
		border-bottom: 1rpx solid rgba(83, 83, 83, 0.3);
	}

	.name {
		width: 580rpx;
	}

	.color {
		color: #2D64B3;
	}

	.conten {
		width: 510rpx;
	}

	.posd {
		position: fixed;
		z-index: 99;
	}

	.line {
		height: 74rpx;
	}

	.nono {
		margin-top: 50rpx;
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
