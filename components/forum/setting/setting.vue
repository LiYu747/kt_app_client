<template>
	<view class="flex-d al-center">
		<submit titel="编辑" class="pos"></submit>
		<view class="topLine">

		</view>
		<view class=" flex al-center www">
			<view class="wid">
				<u-tabs-swiper ref="uTabs" active-color='#F07535' :list="tagdata" :current="current" @change="tabsChange"
				 :is-scroll="true" swiperWidth="750"></u-tabs-swiper>
			</view>
			分类
		</view>
		<view class="swip ">

			<view class="move">
				<swiper  :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
					<swiper-item class="swiper-item" v-for="(items, index) in tagdata" :key="index">
						<scroll-view scroll-y style="height:100%" @scrolltolower="onreachBottom">
							<view class="item" v-for="(item,index) in items.arr" @click="gotoD(item)" :key='index'>
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
										<image :src="items.url" class="items" mode="aspectFill"></image>
									</view>
								</view>
							</view>
							 <view class="flex ju-center  notext fz-12" v-if="items.notext">
							 	         {{items.notext}}
							 </view>
							<view v-show="isLoding == true &&items.arr.length!=0" class="m-t2 flex ju-center al-center lodbox">
								<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
								加载中...
							</view>
							<view class="notext fz-12 flex ju-center" v-if="items.hasMore == false&&items.arr.length>0">
								{{notext}}
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<view v-show="isLoding == true && tagdata.length==0" class="showloding flex al-center ju-center">
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
	import submit from '../../sub-unit/subunit.vue'
	import village from '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {
			submit,

		},
		props: {},
		data() {
			return {
				current: 0,
				tagdata: [],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				selectID: '',
				page: 1,
				ps: 3,
				idx: 0,
				hasMore: true,
				isLoding:false,
				notext:''
			}
		},
		methods: {
			//获取默认栏目列表
			grtColumn() {
				this.isLoding = true
				village.DefaultColumnList({
					data: {},
					fail: () => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						res.data.data.map(item => {
							item.arr = []
							item.hasMore = false
							item.page = 1
							item.notext = null
							item.nono = null
							// 获取数据
							village.communityPost({
								data: {
									villageId: this.id,
									tribune_cat: item.id,
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

									if(data.data.length>0){
									item.arr = data.data	
										}
									if(data.data.length == 0){
										item.notext = '没有您想看类型的帖子,试试其他的吧'
									}	
									item.hasMore = data.next_page_url ? true : false;
									item.page = data.current_page + 1
								},

							})

						})
						this.tagdata = res.data.data
						// this.selectID = this.tagdata[0].id

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
			 
			// tabs通知swiper切换
			tabsChange(index) {
				this.idx = index
				this.swiperCurrent = index;
				this.notext = ''
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom(e) {
				this.notext = '没有更多了'
				this.tagdata.map((item, index) => {
					// 获取数据
					if (item.hasMore == true && index == this.idx && this.isLoding==false) {
						this.isLoding = true
						village.communityPost({
							data: {
								villageId: this.id,
								tribune_cat: item.id,
								kw: this.keyword,
								page: item.page,
								pageSize: this.ps
							},
							fail: () => {
								this.isLoding = false;
								// console.log(err);
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
								console.log(res);
								this.isLoding = false;

								if (res.statusCode != 200) return;

								if (res.data.code != 200) return;

								let data = res.data.data;

								this.page = data.current_page + 1;
								this.hasMore = data.next_page_url ? true : false;
								// this.lists = data.data
								item.arr = item.arr.concat(data.data)
								item.hasMore = data.next_page_url ? true : false;
								item.page = data.current_page + 1
							},

						})
					}
				})
			}
		},
		mounted() {
			this.grtColumn()
		},
		onLoad(option) {

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
	.pos {
		position: fixed;
		z-index: 99;
	}

	.notext {
		padding: 30rpx 0;
	}

	.topLine {
		height: 148rpx;
	}

	.www {
		width: 100%;
	}

	.wid {
		width: 90%;
	}

	.swip {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
	}

	.move {
		margin-top: 240rpx;
	}

	uni-swiper {
		height: calc(80vh - 84rpx);
		box-sizing: border-box;
		// background: #F07535;
	}

	.itemimg {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.item {
		width: 690rpx;
		padding: 100rpx 30rpx;
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
		width: 150rpx;
		height: 170rpx;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
	}
	
	.lodimg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}
	
	.lodbox {
		font-size: 24rpx;
		padding: 30rpx 0;
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
</style>
