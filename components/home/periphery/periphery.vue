<template>
	<div>
		<view class="boxss">
			<view class="flex al-center  m-b1 pos-rel">
				<image class="imgss" src="https://oss.kuaitongkeji.com/static/img/app/home/zx@2x.png" mode=""></image>
				<view class="text">
					周边消息
				</view>
				
				<view @click="lookmore" class="andMore pos-abs">
					查看更多
				</view>
			</view>

			<!-- 资讯 -->
			<view v-if="locdata.length>0" class="conten flex ju-between flex-w">
				<view class="item flex pos-rel" @click="godils(item)" v-for="(item,index) in locdata" :key='index'>
					<image :src="item.faceimg" mode="" class="itemimg"></image>
					<view class="font fz-12">
						<view class="fonts">
							{{item.title}}
						</view>
					</view>
					<view class="  pos-abs location ">
						{{item.created_at.slice(0,10)}}
					</view>
				</view>
			</view>
			<view class="nomsg" v-else>
				还没有任何周边资讯哦~
			</view>
		</view>
	</div>
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
				locdata: []  //数据
			}
		},
		methods: {
			// 去详情页面
			godils(item) {
				home.surroundingDetails({
					data: {
						id: item.id
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
						let content = {title:res.data.data.title,content:res.data.data.desc}
						this.$store.commit("homeContent",content);
						uni.navigateTo({
							url: '/pages/InformationDetails/InformationDetails/InformationDetails'
						})
					}
				})
			},
			//查看更多
			lookmore(){
				
			},
			// 数据
			getData() {
				home.news({
					data: {
						page: 1,
						pageSize:4
					},
					fail: () => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data.data);
						let data = res.data.data.data
						this.locdata = data
					},
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
	.boxss {

		margin-top: 40rpx;
		width: 690rpx;
	}

	.imgss {
		width: 24rpx;
		height: 28rpx;
		margin-right: 10rpx;
	}

	.text {
		font-size: 36rpx;
		color: #666666;
	}

	.conten {
		width: 100%;
		margin-bottom: 40rpx;
	}

	.item {
		margin-top: 20rpx;
		width: 320rpx;
		height: 185rpx;
		background: #FFFFFF;
		padding-top: 15rpx;
		padding-left: 15rpx;
	}

	.itemimg {
		width: 140rpx;
		height: 140rpx;
	}

	.font {
		margin-left: 24rpx;
		width: 144rpx;
		height: 116rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
	
	.fonts{
		word-break:break-all;
		overflow: hidden;
		line-height: 1.3;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4; 
		}

	.location {
		right: 22rpx;
		bottom: 18rpx;
		color: #808080;
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
	
	.andMore{
		right: 10rpx;
		font-size: 24rpx;
		color: rgb(247,157,70);
	}
	
	.nomsg{
	    font-size: 12px;
		color: #999999;
		margin: 20rpx ;
		}
</style>
