<template>
	<view class="">
		<subunit titel='' class="fiedx" :retur='true'></subunit>
		<view class="line pos-rel">
			<view class="ipt  ju-center flex al-center pos-rel">
				<image class="img pos-abs" src="../../../image/home/ss.png" mode=""></image>
				<input class="input" type="text" v-model.trim="value"  @confirm='confirm' placeholder="请输入帖子关键词" />
				<image @click="empty" src="../../../image/forum/clier.png" class="clierimg" mode=""></image>
				<view v-show="value !=''" @click="remove" class=" pos-abs rig">
					取消
				</view>
			</view>
		</view>
		<!-- tag标签 -->
		<!-- 	 <scroll-view >
				 	<view class="tagbox flex al-center">
				 <view class="" v-for="item in tagdata" :key='item.id'>
				 	{{item}}
				 </view>
				 	</view>
			 </scroll-view> -->
	
		
		<view class="release">
			<view v-if="lists.length>0" class="">
				<view class="item" @click="gotoD(item)" v-for="(item,index) in lists" :key='index'>
					<view class="flex">
						<!-- 头像 -->
						<image :src="item.own_user.avatar" class="itemimg" mode=""></image>
						<view class="name m-l1 m-t1">
							{{item.own_user.nickname}}
							<view class="time">
								{{item.created_at.slice(0,16)}}
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
			</view>
			<view v-show="isLoding == true" class="m-t2 flex ju-center al-center lodbox">
				<image class="lodimg" src="../../../image/address/loading.gif" mode=""></image>
				加载中...
			</view>
			<view class="flex ju-center m-t3 m-b2 fz-14" v-if="hasMore == false">
				{{text}}
			</view>

		</view>

		<view class="nono flex al-center ju-center" v-if="lists.length == 0 && hasMore==false && flag==false">
			小区还没有发布帖子哦~
		</view>
		<view class="nono flex al-center ju-center" v-if="flag==true&&lists.length==0">
			没有你搜索的帖子哦~
		</view>
		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="../../../image/address/loading.gif" mode=""></image>
				</view>
				加载中
			</view>
		</view>

		<view class="btom">

		</view>
		<subbotn :id='id'></subbotn>
	</view>
</template>

<script>
	import village from '../../../vendor/village/village.js'
	import jwt from '../../../vendor/auth/jwt.js'
	import subunit from '../../../components/sub-unit/subunit.vue'
	import subbotn from '../../../components/sub-botn/subbotn.vue'
	export default {
		name: "",
		components: {
			subunit,
			subbotn
		},
		props: {

		},
		data() {
			return {
				id: '', //传的id
				lists: [], //数据列表
				page: 1,
				ps: 15,
				isLoding: false,
				hasMore: true,
				text: '', //没有更多的提示
				value: '',
				keyword: '',
				flag: false  ,//判断有没有搜索结果
				tagdata:['新鲜事','热榜','好人好事','家有喜事','宠物圈','互帮互助','组团运动','物品流转','工具借用','其他']
			}
		},
		methods: {
			//搜索
			confirm() {
				this.keyword = this.value
				this.page = 1
				this.hasMore = true
				this.lists = []
				this.loadPageData()
				this.flag = true
			},
			// 清空
			empty() {
				this.value = ''
			},
			// 取消
			remove() {
				uni.hideKeyboard()
			},

			// 获取数据
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
						village.communityPost({
							data: {
								villageId: this.id,
								kw: this.keyword,
								page: this.page,
								pageSize: this.ps
							},
							fail: (err) => {
								this.isLoding = false;
								// console.log(err);
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
								// console.log(res);
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
			
		},
		onLoad(val) {
			this.id = val.id
		},
		// 下拉刷新
		onReachBottom() {
				this.text = '没有更多了~'
	    if (this.isLoding == true || this.hasMore == false) return;
			this.loadPageData()
		
		},
		onShow() {
           this.loadPageData()
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
		margin-top: 20rpx;
		width: 650rpx;
		background: rgb(230, 230, 230);
		padding: 20rpx 20rpx;
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
		height: 170rpx;
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
		height: 50rpx;
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

	.line {
		height: 148rpx;
	}

	.fiedx {
		position: fixed;
		z-index: 9;
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

	.searchimg {
		width: 34rpx;
		height: 34rpx;
		z-index: 99;
		position: absolute;
		right: 54rpx;
		top: 74rpx;
		position: fixed;
	}

	.ipt {
		top: 100rpx;
		z-index: 99;
	}

	.img {
		width: 38rpx;
		height: 38rpx;
		left: 168rpx;
		position: fixed;
	}

	.input {
		position: fixed;
		width: 394rpx;
		height: 54rpx;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 27px;
		padding-left: 75rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #FFFFFF;
	}

	.uni-input-placeholder {
		color: #FFFFFF;
	}

	.rig {
		right: 49rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.clierimg {
		width: 24rpx;
		height: 24rpx;
		position: absolute;
		right: 170rpx;
		position: fixed;
	}
	
	.tagbox{
		width: 100%;
		height: 100rpx;
		background: #ffffff;
	}
</style>
