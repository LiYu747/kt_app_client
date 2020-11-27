<template>
	<view class="">
		<view class="release">
			<view v-if="arr.length>0" class="">
				<view class="item" @click="gotoD(item)" v-for="(item,index) in arr" :key='item.id'>
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
						<view v-for="items in item.album.slice(0,3)" :key='items.id'>
							<image :src="items.url" class="items" mode=""></image>
						</view>
					</view>
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
				arr: []
			}
		},
		methods: {
			// 所有帖子
			Dataall() {
				village.communityPost({
					data: {
						villageId: this.id
					},
					success: (res => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log('论坛帖子',res.data.data.data);
						let data = res.data.data.data
						this.arr = data.reverse()
					})
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
			this.Dataall()
		},
		onLoad() {

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
		height: 100rpx;
	}
	
	.nono{
		height: 300rpx;
	}
</style>
