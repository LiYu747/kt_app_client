<template>
	<view class="">
		<view class="conten">
			<view class="flex al-center">
				<view class="">
					<image src="../../../image/home/news.png" class="imgss" mode=""></image>
				</view>
				<view class="textss">
					社区新闻
				</view>
			</view>
			<!-- 新闻 -->
			<view class="Notice flex al-center">
					<u-notice-bar mode="vertical" font-size='24'  :is-circular='false' @click="godils" type="warning" class="notice"  :list="list"></u-notice-bar>
			</view>
		</view>
	</view>
</template>

<script>
	import home from '../../../vendor/home/home.js'
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				news: [],//资讯数据
				list: []  //数据转化后的
			}
		},
		methods: {
			getData() {
				home.CommunityNews({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						// console.log('新闻',res.data.data.data);
						let data = res.data.data.data
						this.news = data
						data.map( item => {
							this.list.push(item.title)
						})
						// console.log(this.list);  
					}
				})
			},
			// 查看详情
			godils(idx) {
				let id = ''
				this.news.map( (item,index) => {
					if(idx == index){
						id = item.id
					}
				}) 
				home.NewsDils({
					data: {
						id: id
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data);
						let content = res.data.data
						uni.navigateTo({
							url: `/pages/InformationDetails/InformationDetails/InformationDetails?content=${JSON.stringify(content)}&&id=1`
						})

					}
				})
			}
		},
		mounted() {
			this.getData()
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
	.conten {
		margin-top: 40rpx;
		width: 690rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.Notice {
		margin-top: 20rpx;
		width: 690rpx;
		height: 66rpx;
		background: #FFFFFF;
		padding: 5rpx 0;
	}
    
	.notice{
		width: 650rpx;  
	}
	
	.textss{
		font-size: 36rpx;
	}
	
	/deep/
	.u-swiper-item{
		color: #FFAD4C;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		
	}
	.imgnb {
		width: 23rpx;
		height: 20rpx;
	}

	.text {
		color: #FFAD4C;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.imgss {
		width: 28rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}
</style>
