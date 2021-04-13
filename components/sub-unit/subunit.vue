<template>
<view class="">
	<view class="box" :style="{	height:customBar + 'rpx'}">
		<view class="nav pos-abs flex ju-center al-center">
			<image v-if="retur === true" @click="goback" src="https://oss.kuaitongkeji.com/static/img/app/login/1729908969cd5d7d911e096d6db3c70.png"
			 class="reimg pos-abs" mode="" :class="titel == ''?'locod':''"></image>
			{{titel}}
		</view>
	</view>
	<view class="Line" :style="{height:customBar + 'rpx'}">
		
	</view>
</view>
</template>

<script>
	import cache from '../../vendor/cache/cache.js'
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
			abel: {
				type: Boolean,
			}
		},
		data() {
			return {
				customBar:0
			}
		}, 
		methods: {
			goback() {
				if(this.abel == true){
					uni.showModal({
						content: '您确定要退出新手指导？您也可以到个人中心、关于快通中重新开启',
						success: function (res) {
							if (res.confirm) {
								cache.forget('Gshow')
								uni.navigateBack({
									delta: 1
								});

							} else if (res.cancel) {
								
							}
							
						}
					});
					return;
					}
				uni.navigateBack({
					delta: 1
				})
			}
		},
		mounted() {
			this.customBar =  cache.get("customBar")
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
		background: #F07535;
		z-index: 99;
		position: fixed;
	}

	.nav {
		width: 100%;
		font-size: 36rpx;
		color: #FFFFFF; 
		bottom: 20rpx;
	}
	
	.reimg {
		width: 22rpx;
		height: 41rpx;
		left: 40rpx;
	}
	.locod{
		bottom: 10rpx;
	}
</style>
