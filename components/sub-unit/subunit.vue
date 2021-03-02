<template>
	<view class="box">
		<view class="nav pos-rel flex ju-center al-center">
			<image v-if="retur === true" @click="goback" src="https://oss.kuaitongkeji.com/static/img/app/login/1729908969cd5d7d911e096d6db3c70.png"
			 class="reimg pos-abs" mode=""></image>
			{{titel}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			retur: {
				type: Boolean,
				default: true
			},
			titel: {
				type: String,
				default: ''
			},
			image: {
				type: String,
			}
		},
		data() {
			return {}
		},
		methods: {
			
			goback() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		mounted() {

		},
		onShow() {

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
	.box {
		width: 100%;
		height: 148rpx;
		background: #F07535;
	}

	.nav {
		top: 60rpx;
		height: 88rpx;
		font-size: 36rpx;
		color: #FFFFFF;
	}
	
	.reimg {
		width: 22rpx;
		height: 41rpx;
		left: 40rpx;
	}
</style>
