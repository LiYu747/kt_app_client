<template>
	<view class="">
		<subunit class="fidx" titel="我的" :retur="false"></subunit> 
		<view class="line">
		</view>
		<view @touchstart="start" @touchend="end" class="">
			<view class="nav flex al-center posd">
				<view class="left flex al-center ju-center" v-for="(item,index) in til" @click="add(item,index)" :class="{dv:index===0}"
				 :key='index'>
					<view :class="{dv1:index===idx}">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="line1">

			</view>
			<!-- 我发布的 -->
			<view v-show='idx===0' class="release">
				<view v-if="lists.length>0" class="">
					<view class="item" @click="gotoD(item,index)" v-for="(item,index) in lists" :key='item.id'>
						<view class="titel">
							{{item.title}}
						</view>
						<view class="content">
							{{item.content}}
						</view>
						<!-- 图片 -->
						<view class="flex al-center m-t4">
							<view v-for="items in item.album.slice(0,3)" :key='items.id'>
								<image :src="items.url" class="items" mode="aspectFill"></image>
							</view>
						</view>
						<view class="time">
							{{item.created_at.slice(0,16)}}
						</view>
					</view>
				</view>
				<view v-if=" isLoding == true&&lists.length >0" class=" flex ju-center m-t2 al-center lodbox">
					<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
					加载中...
				</view>

				<view class="flex ju-center m-b2 m-t3 fz-12" v-if="hasMore == false">
					{{text}}
				</view>
				<view class="nono flex ju-center" v-if="lists.length == 0 && isLoding==false">
					您还没有任何发布
				</view>
				<view class="btom">

				</view>
			</view>

			<!-- 我参与的 -->
			<view v-show="idx===1" class="release">
				<view class="" v-if="data1.length>0">
					<view class="itemtext" @click="reply(item)" v-for="(item,index) in data1" :key='index'>
						<view class="flex color ju-between">
							<view class="">
								{{username}}:
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
								<view v-if="item.own_village_tribune" class="">
									{{item.own_village_tribune.title}}
								</view>
								 <view v-else class="nonoTet">
								 	*该帖子已被用户删除
								 </view>
							</view>
						</view>
					</view>
				</view>

				<view class="nono flex ju-center" v-if="data1.length==0 && isLoding1==false">
					您还没有发表评论
				</view>
				<view v-show="isLoding1 == true&&data1.length>0" class="m-t2 flex ju-center al-center lodbox">
					<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
					加载中...
				</view>
				<view class="flex ju-center m-b2 m-t3 fz-12" v-if="hasMore1 == false">
					{{text1}}
				</view>
				<view class="btom">

				</view>
			</view>

			<view v-show="isLoding == true" class="showloding flex al-center ju-center">
				<view class="loding flex-d al-center ju-center">
					<view class=" ">
						<image class="loimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
					</view>
					加载中
				</view>
			</view>
		</view>
		<submy :ids='id'></submy>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import submy from '../../../components/sub-botn/submy.vue'
	import village from '../../../vendor/village/village.js'
	import cache from '../../../vendor/cache/cache.js'
	import user from '../../../vendor/user/userDetails.js'
	import jwt from '../../../vendor/auth/jwt.js'
	export default {
		name: "",
		components: {
			subunit,
			submy
		},
		props: {},
		data() {
			return {
				id: '', //传的id
				til: [{name:'我发布的',height:0}, {name:'我参与的',height:0}],
				scrollTop: 0,
				idx: 0,
				username: '', //姓名
				lists: [], //我发布的
				page: 1,
				text: '',
				isLoding: false, //是否显示loding
				hasMore: true, //是否还有更多
				code: 1,
				data1: [], //我参与的
				page1: 1,
				pageSize1:15,
				text1: '',
				isLoding1: false, //是否显示loding
				hasMore1: true, //是否还有更多
				code1: 1,
				clientX: '',
				goindex:'' ,//查看哪一项的index
			}
		},

		methods: {
			add(item,index) {
				this.idx = index
				uni.pageScrollTo({
					scrollTop: item.height,
					duration: 0
				});
			},
			start(e) {
				this.clientX = e.changedTouches[0].clientX;
			},
			end(e) {
				// console.log(e)
				const subX = e.changedTouches[0].clientX - this.clientX;
				if (subX > 100) {
					// console.log('右滑')
					if (this.idx == 0) return
					this.idx = 0
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 0
					});
				} else if (subX < -100) {
					// console.log('左滑')
					if (this.idx == 1) return
					this.idx = 1
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 0
					});
				} else {
					// console.log('无效')
				}
			},
			// 自己发布的帖子 获取数据
			loadPageData() {
				this.isLoding = true;

				jwt.doOnlyTokenValid({
					keepSuccess: false,
					showModal: true,
					fail: () => {
						this.isLoding = false;
						uni.navigateBack({
							delta: 1
						})
					},
					success: () => {
						village.SelfComments({
							data: {
								villageId: this.id,
								page: this.page,
							},
							fail: (err) => {
								this.isLoding = false;
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
								// console.log(err);
							},
							success: (res) => {
                                // console.log(res);
								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;
								this.code = res.data.code
								let data = res.data.data;
								this.page = data.current_page + 1;
								this.hasMore = data.next_page_url ? true : false;

								this.lists = this.lists.concat(data.data);
							},

						})
					}
				})
			},
			// 自己评论的帖子
			SelfPost() {
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
								pageSize:this.pageSize1
							},
							fail: (err) => {
								this.isLoding1 = false;
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
								// console.log(err);
							},
							success: (res) => {
								// console.log(res);
								this.isLoding1 = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;
								let data = res.data.data;
								this.page1 = data.current_page + 1;
								this.hasMore1 = data.next_page_url ? true : false;

								this.data1 = this.data1.concat(data.data);
							},

						})
					}
				})
			},
			// 去详情
			gotoD(item,index) {
				this.goindex = index
				// console.log(item.id);
				uni.navigateTo({
					url: `/pages/communityForum/mypostdeta/mypostdeta?id=${item.id}`
				})
			},
			// 跳转回复的页面
			reply(item) {
				if(!item.own_village_tribune){
					uni.showToast({
						title:'该帖子已被用户删除',
						icon:'none'
					})
					return;
				}
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
							title: '网络错误',
							icon: 'none'
						})
					}),
					success: (res => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						// console.log(res);
						let Users = res.data.data
						this.username = Users.username
					}),

				})
			}
		},
		mounted() {
         	// this.SelfPost()
				this.loadPageData()
		},
		// 下拉加载更多
		onReachBottom() {
			if (this.idx == 0) {
				this.text = '没有更多了~'
				if (this.isLoding == true || this.hasMore == false) return;
				this.loadPageData()

			} else if (this.idx == 1) {
				this.text1 = '没有更多了~'
				if (this.isLoding1 == true || this.hasMore1 == false) return;
				this.SelfPost()
			}
		},
		onLoad(val) {
			this.id = val.id
		},
		onShow() {
			this.data1 = []
			this.page1 = 1
			this.SelfPost()
			this.Userdata()
			if(this.$store.state.isDel == '200'){
				 this.lists.splice(this.goindex,1)
			}
		},
		onPageScroll(val) {
			this.til.map( (item,index) => {
				if(index == this.idx){
					item.height = val.scrollTop
				}
			})
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
	.fidx {
		position: fixed;
		z-index: 9;
	}

	.line {
		height: 148rpx; 
	}

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
		width: 150rpx;
		height: 170rpx;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
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

	.line1 {
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
	
	.nonoTet{
	color: red;	
		}
</style>
