<template>
	<view class="content">
		<view class="nav ">
			<view class="ipt  ju-center flex al-center pos-rel">
				<image class="img pos-abs" src="../../image/home/ss.png" mode=""></image>
				<input class="input" type="text" v-model="value" confirm-type="search" @confirm='confirm' placeholder="请输入小区名称关键词" />
			</view>
		</view>
		<!-- 主页 -->
		<view class="flex-d al-center">
			<view class="box">
				<image class="imgjx" src="../../image/home/jx.png" mode=""></image>
			</view>
			<!-- 轮播图 -->
			<view class=" pos-abs pos">
				<u-swiper @click="addswiper" :list="list" border-radius='20' bg-color='rgba(255, 255, 255, 0)' height="340"
				 effect3d-previous-margin='60' indicator-pos='none' :effect3d="true"></u-swiper>
			</view>
			<!-- 操作 -->
			<view class="flex operation ju-between">
				<view class="flex-d al-center" v-for="(item,index) in localdata" @click="operation(item)" :key='item.id'>
					<image :src="item.image" class="itemimg" mode=""></image>
					<view class="itemtext">
						{{item.name}}
					</view>
				</view>
			</view>
			<!-- 分类 -->
			<classification ref='clas'></classification>
			<!-- 资讯 -->
			<information ref="infor"></information>
			<!-- 社区新闻 -->
			<CommunityNews  ref='news' v-if='user'></CommunityNews>
			<!-- 周边 -->
			<periphery ref='peri'></periphery>
		</view>
		<!-- 视频播放 -->
		<view v-if="paly == true" @mousewheel.prevent class=" pos-abs moive flex-d al-center ju-center">
			<view @click="close" class="showback pos-abs">
			</view>
			<video :src="videoUrl" :poster='cover'></video>
			<image @click="close" src="../../image/home/close.png" class="closeimg" mode=""></image>
		</view>
		
		<view v-show="showPullDownRefreshIcon == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="../../image/address/loading.gif" mode=""></image>
				</view>
				刷新中
			</view>
		</view>
	</view>
</template>

<script>
	import home from '../../vendor/home/home.js'
	import classification from '../../components/home/classification/classification.vue';
	import information from '../../components/home/information/information.vue';
	import periphery from '../../components/home/periphery/periphery.vue';
	import CommunityNews from '../../components/home/CommunityNews/CommunityNews.vue'
	import cache from '../../vendor/cache/cache.js'
	import user from '../../vendor/user/userDetails.js';
	import urlUtil from '../../vendor/common/url.js';

	export default {
		components: {
			classification,
			information,
			periphery,
			CommunityNews
		},
		data() {
			return {
				localdata: [],
				list: [], //轮播图
				value: '', //搜索绑定v-model
				user: {}, //用户资料
				paly: false,
				videoUrl: '', //视频地址
				cover: '', //视频封面
				showPullDownRefreshIcon:false
			}
		},
		onLoad(val) {
			// console.log(val);
		},
		methods: {
			// 回车搜索
			confirm() {
				if (this.value != '') {
					uni.navigateTo({
						url: `/pages/index/search/search?value=${this.value}`
					})
				}
			},
			// 点击轮播图
			addswiper(val) {
				let movie = this.list[val]
				// console.log(movie);
				if (movie.video) {
					this.videoUrl = movie.video
					this.cover = movie.image
					this.paly = true
					return;
				} else {
					urlUtil.to({
						pageAlias: movie.page,
						options: movie.params,
					})
				}
			},

			// 关闭视频
			close() {
				this.paly = false
			},
			// 跳转
			operation(item) {
				if (item.page) {
					urlUtil.to({
						pageAlias: item.page,
						options: item.params,
					})
					return;
				}
				if (item.web_url) {
					uni.navigateTo({
						url: '/pages/web/index/index?url=' + encodeURIComponent(item.web_url),
					})
				}
			},

			// 轮播图数据
			Chart() {
				home.chart({
					data: {
						code: 'home_index_banner'
					},
					fail: (err) => {
					  this.stopRefreshIcon()
						uni.showToast({
							title: '网络出错',
							icon:'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						  this.stopRefreshIcon()
						this.list = res.data.data.ads
						// console.log(this.list);
					},
				})
			},
			// 操作数据
			operationData() {
				home.chart({
					data: {
						code: 'home_quick_nav_1'
					},
					fail: (err) => {
						this.stopRefreshIcon()
						uni.showToast({
							title: '网络出错',
							icon:'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						this.stopRefreshIcon()
						this.localdata = res.data.data.ads
						// console.log(this.localdata);
					},
				})
			},
            // 下拉刷新
            stopRefreshIcon() {
            	if (this.showPullDownRefreshIcon == true) {
            		uni.stopPullDownRefresh();
            		this.showPullDownRefreshIcon = false;
            	}
            },


		},
		mounted() {
			this.Chart()
			this.operationData()
		},
		onShow() {
			let a = cache.get('jwt')
			if (a) {
				this.user = {}
			} else {
				this.user = null
			}
			this.value = ''
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.showPullDownRefreshIcon = true;
			this.$refs.clas.Calss()
			this.$refs.infor.Data()
			this.$refs.peri.getData()
			this.operationData()
			this.Chart()	
		},
	}
</script>

<style>
	.wrap {
		padding: 40rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgb(245, 245, 245);
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.nav {
		width: 750rpx;
		height: 132rpx;
		background: #F07535;
		position: fixed;
		z-index: 9;
	}

	.img {
		width: 33rpx;
		height: 34rpx;
		left: 168rpx;
	}

	.ipt {
		width: 750rpx;
		height: 88rpx;
		margin-top: 50rpx;
	}

	.input {
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

	.box {
		width: 750rpx;
		height: 156rpx;
		margin-top: 132rpx;
	}

	.imgjx {
		margin-top: -2rpx;
		width: 100%;
		height: 100%;
	}

	.imglb {

		width: 580rpx;
		height: 304rpx;
	}

	.pos {
		width: 100%;
		height: 304rpx;
		top: 150rpx;
	}



	.itemimg {
		width: 100rpx;
		height: 100rpx;
	}

	.operation {
		margin-top: 226rpx;
		width: 650rpx;
		height: 150rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0px 0px;
		padding: 20rpx;
		padding-top: 14rpx;
		padding-bottom: 22rpx;
	}

	.itemtext {
		margin-top: 5rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.rig {
		right: 49rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.moive {
		top: 0;
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 100vh;
		background: #000000;
	}

	.showback {
		width: 100%;
		height: 100vh;
	}

	.closeimg {
		margin-top: 80rpx;
		width: 60rpx;
		height: 60rpx;
	}

	uni-video {
		width: 100%;
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
