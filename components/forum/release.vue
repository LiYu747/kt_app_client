<template>
	<view class="flex-d color al-center">
		<image src="../../image/home/jx.png" class="img" mode=""></image>
		<view class="nav flex-d al-center">
			<view v-if="image.length===0" class="top flex al-center ju-center">
				<image class="timg" src="../../image/forum/tuceng.png" mode=""></image>
			</view>
			<view v-else class="back flex al-center">
				<view class="" v-for="(item,index) in image" :key='item.id'>
					<image v-if="index<3" class="itemimg" :src="item" mode=""></image>
				</view>
			</view>
			<view @click="add" class="btn flex al-center ju-center">
				<image class="btnimg" src="../../image/address/plus.png" mode=""></image>
				选择文件
			</view>
		</view>
		<!-- //标题 -->
		<view class="titel flex al-center">
			<view class="tex1">
				标题 ：
			</view>
			<input class="ipt" v-model="title" type="text" value="" />
		</view>

		<!-- 内容 -->
		<view class="content flex">
			<view class="tex1">
				内容 :
			</view>
			<textarea class="are" v-model="content" maxlength='1000'></textarea>
		</view>

		<!-- 提交 -->
		<view @click="Submit" class="matop flex al-center ju-center">
			<image class="Submit" src="../../image/login/ccuc.png" mode=""></image>
			<view class="bai pos-abs">
				确认提交
			</view>
		</view>
	</view>
</template>

<script>
	import village from '../../vendor/village/village.js';
	import route from '../../vendor/request/routes.js';

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
				image: [],
				title: '', // 标题
				content: '', //内容
			}
		},
		methods: {
			add() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						let tempFilePaths = chooseImageRes.tempFilePaths;
						// console.log(tempFilePaths);
						if (tempFilePaths.length > 0) {
							tempFilePaths.forEach((item) => {
								uni.uploadFile({
									url: route.services.file.upload, //仅为示例，非真实的接口地址
									filePath: item,
									name: 'file',
									success: (val) => {
										this.image.push(JSON.parse(val.data).data.url)
										// console.log(JSON.parse(val.data).data.url);
									}
								});
							})
						}
					}
				});
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},

			// 发布
			Submit() {
				village.releasePost({
					data: {
						village_id: this.id,
						title: this.title,
						content: this.content,
						albums: this.image
					},
					fail: (err) => {
						uni.showToast({
							title: err.data.msg
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code == 200) {
							this.$emit('Submit')
							uni.showToast({
								title: res.data.msg,
								duration: 2000,
							})
							// 清空
							this.image = []
							this.title = ''
							this.content = ''
						} else {
							uni.showToast({
								title: res.data.msg,
								duration: 2000,
								icon: 'none'
							})
						}
						// console.log('发布帖子', res);
					}
				})
			}
		},
		mounted() {

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
	.color {
		color: #666666;
	}

	.img {
		width: 100%;
		height: 156rpx;
	}

	.nav {
		width: 689rpx;
		padding: 30rpx 0;
		border-radius: 20rpx;
		background: #FFFFFF;
		position: relative;
		top: -125rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.top {
		margin-top: 28rpx;
		width: 328rpx;
		height: 182rpx;
		background: rgba(9, 9, 9, 0.1);
	}

	.back {
		margin-top: 28rpx;
		background: #FFFFFF;
		height: 182rpx;
	}

	.itemimg {
		width: 180rpx;
		height: 180rpx;
		margin-right: 10rpx;
	}

	.timg {
		width: 152rpx;
		height: 131rpx;
	}

	.btn {
		margin-top: 24rpx;
		width: 326rpx;
		height: 56rpx;
		border-radius: 28rpx;
		background: #F07535;
		color: #FFFFFF;
	}

	.btnimg {
		width: 29rpx;
		height: 29rpx;
		margin-right: 20rpx;
	}

	.titel {
		margin-top: -100rpx;
		width: 649rpx;
		height: 80rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		padding: 0 20rpx;
		color: #666666;
	}

	.tex1 {
		font-size: 28rpx;
	}

	.ipt {
		font-size: 24rpx;
		width: 550rpx;
	}

	.content {
		margin-top: 30rpx;
		width: 649rpx;
		height: 250rpx;
		padding: 20rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.are {
		margin-top: 4rpx;
		margin-left: 10rpx;
		height: 240rpx;
		width: 550rpx;
		font-size: 24rpx;
		align-content: center;
	}

	.matop {
		margin-top: 100rpx;
		font-size: 30rpx;
	}

	.Submit {
		width: 400rpx;
		height: 70rpx;

	}
</style>
