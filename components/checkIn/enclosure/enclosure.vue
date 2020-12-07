<template>
	<view class="">
		<view class="pos-rel message">
			<view class="text flex al-center">
				请添加附件
			</view>
			<view class="">
				<u-upload ref="uUpload" class="uplod " :deletable='false' @on-choose-complete='succ' width='120' max-count="3"
				 height='120' :custom-btn=true :auto-upload="false">
					<template v-slot:addBtn>
						<view class="pos-abs move">
							请添加附件
						</view>
					</template>
				</u-upload>
			</view>
		</view>
		
		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="../../../image/address/loading.gif" mode=""></image>
				</view>
				上传中
			</view>
		</view>
	</view>
</template>

<script>
	import route from '../../../vendor/request/routes.js'
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				image: [],
				isLoding: false
			}
		},
		methods: {
			succ(files) {
				// console.log(files);
			this.isLoding = true
				this.image = []
				if (files.length == 0) return;
				let num = files.length
				files.forEach((item) => {
					uni.uploadFile({
						url: route.services.file.upload,
						filePath: item.url,
						name: 'file',
						success: (val) => {
							// console.log(val);
							if (val.statusCode != 200) {
								this.isLoding = false
								uni.showToast({
									title: '网络请求出错',
								});
								return;
							}
							if (JSON.parse(val.data).code != 200) {
								this.isLoding = false
								uni.showToast({
									title:'上传失败',
									icon:'none'
								})
								return;
							}
							this.image.push(JSON.parse(val.data).data.url)
							this.$emit('abb', this.image)
							if (num == this.image.length) {
								this.isLoding = false
								uni.showToast({
									title: '上传成功'
								})
							}
						}
					});
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
	.message {
		margin-top: 20rpx;
		width: 644rpx;
		height: 280rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		padding-left: 20rpx;
		padding-right: 26rpx;

	}

	.text {
		height: 69rpx;
		font-size: 30rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;
		margin-bottom: 20rpx;
	}

	.move {
		top: 0;
		left: 0;
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
		opacity: 0;
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
</style>
