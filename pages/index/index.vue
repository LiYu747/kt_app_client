<template>
	<view class="content">
		<view class="nav ">
			<view class="ipt  ju-center flex al-center pos-rel">
				<image class="img pos-abs" src="../../image/home/ss.png" mode=""></image>
				<input class="input" type="text" v-model="value" @confirm ='enter'  placeholder="请输入小区名称关键词" />
			</view>
		</view>
		<!-- 主页 -->
		<view v-if="flag === true" class="flex-d al-center">
			<view class="box">
				<image class="imgjx" src="../../image/home/jx.png" mode=""></image>
			</view>
			<!-- 轮播图 -->
			<view class=" pos-abs pos">
				<u-swiper :list="list" bg-color='rgba(255, 255, 255, 0)' height="304" effect3d-previous-margin='60' indicator-pos='none'
				 :effect3d="true"></u-swiper>
			</view>
			<!-- 操作 -->
			<view class="flex operation ju-between">
				<view class="flex-d al-center" v-for="(item,index) in localdata" @click="checkin(item)" :key='item.id'>
					<image :src="item.image" class="itemimg" mode=""></image>
					<view class="fz-12 itemtext">
						{{item.titel}}
					</view>
				</view>
			</view>
			<!-- 分类 -->
			  <classification></classification>
			 <!-- 资讯 -->
			 <information></information>
			  <!-- 社区新闻 -->
			  <CommunityNews v-if='user'></CommunityNews>
			 <!-- 周边 -->
			 <periphery></periphery>
		</view>
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text @click="sayHello">{{nickname}}</text>
		</view>
		<navigator url="/pages/auth/login/login" open-type="navigate">去登陆</navigator> -->
	</view>
</template>

<script>
	// import dater from '../../vendor/date/dater.js';
	// import req from '../../vendor/request/req.js';
	import home from '../../vendor/home/home.js'
       import classification from '../../components/home/classification/classification.vue';
	  import information from '../../components/home/information/information.vue';
	   import periphery from '../../components/home/periphery/periphery.vue';
		import CommunityNews from '../../components/home/CommunityNews/CommunityNews.vue'
		import cache from '../../vendor/cache/cache.js'
	export default {
		components:{
			classification,
			information,
			periphery,
			CommunityNews
		},
		data() {
			return {
				localdata: [{
						image: require('@/image/home/rz.png'),
						titel: '入驻申请',
						url:'/pages/residence/checkIn/checkIn'
					},
					{
						image: require('@/image/home/bf.png'),
						titel: '拜访申请',
						url:'/pages/visitapplication/visit/visit'
					},
					{
						image: require('@/image/home/lf.png'),
						titel: '来访记录',
						url:'/pages/operation/visitRecord/visitRecord'
					},
					{
						image: require('@/image/home/code.png'),
						titel: '回家二维码',
						url:'/pages/qrcode/qrCode/qrCode'
					},
				],
				list: [],
				value:'',
				user:{}
			}
		},
		onLoad(val) {
     // console.log(val);
		},
		methods: {
			// 回车搜索
			enter(){
			 if(this.value != ''){
				 uni.navigateTo({
				 	url:`/pages/index/search/search?value=${this.value}`
				 })
			 }
			},
			// 跳转
			checkin(item){
				// console.log(item.url);
				uni.navigateTo({
					url:item.url
				})
			},
			 // 轮播图
			Chart() {
				home.chart({
					data:{code:'home_index_banner'},
					success:(res) => {
						if (res.statusCode != 200) return
						if(res.data.code != 200) return
						this.list = res.data.data.ads
					},
					fail: (err) => {
						// console.log(err);
					}
				})	  
			}
		},
    mounted() {
         this.Chart()
    },
	onShow(){
		 this.flag = true
		 this.user = cache.get('user')
         this.value = ''
		}
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
		height: 130rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 0px 0px;
		padding: 20rpx;
		padding-top:14rpx ;
		padding-bottom: 22rpx;
	}
	.itemtext{
		margin-top: 5rpx;
	}
	.rig{
		right: 49rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}
</style>
