<template>
	<view class="">
		<view class="pos-rel message">
			<view class="text flex al-center">
				请添加附件
			</view>
			<view class="">
				<u-upload ref="uUpload" class="uplod" @on-choose-complete='succ' width='120' max-count="3" height='120' :custom-btn=true :auto-upload="false">
					<template v-slot:addBtn>
						<view class="pos-abs move">
							请添加附件
						</view>
					</template>
				</u-upload>
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
				image: []
			}
		},
		methods: {
			succ(files){
				// console.log(files);
					if (files.length > 0) {
						files.forEach((item) => {
							uni.uploadFile({
								url: route.services.file.upload, //仅为示例，非真实的接口地址
								filePath: item.url,
								name: 'file',
								success: (val) => {
									this.image.push(JSON.parse(val.data).data.url)
									this.$emit('abb', this.image)
								}
							});
						})
					}
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
</style>
