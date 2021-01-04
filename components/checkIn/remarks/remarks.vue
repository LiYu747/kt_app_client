<template>
	<view class="">
		<view class="pos-rel message">
			<view class="text flex al-center">
				{{titel}}
			</view>
			<view class="">
				<textarea class="tar" maxlength="1000" v-model="value"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			titel: {
				type: String,
				default: '备注'
			}
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {

		},
		mounted() {

		},
		onLoad(val) {
  
		},
		filters: {

		},
		computed: {

		},
		watch: {},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.message {
		margin-top: 22rpx;
		width: 644rpx;
		padding-bottom: 20rpx;
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
	}

	.tar {
		margin-top: 20rpx;
		padding: 10rpx;
		padding-bottom: 0;
		width: 623rpx;
		height: 130rpx;
		resize: none;
		overflow: auto;
		font-size: 24rpx;
	}
</style>
