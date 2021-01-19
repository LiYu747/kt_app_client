<template>
	<view>
		<subunit titel='我的信息'></subunit>
		<view class="contentBox">
			<view class="infoBox">
                  <view class="itemBox flex al-center ju-between" v-for="item in locdata" :key='item.id'>
                  	 <view class="itemLb">
                  	 	{{item.label}}
                  	 </view>
					 <view class="">
					 	{{item.value}}
					 </view>
                  </view>
			</view>
			
			<view class="accessoryBox">
				<view class="accessoryTxt">
					附件
				</view>
				<view class="filesBox">
					<view class="" v-for="item in files" :key='item.id'>
						<image :src="item" class="itemImg" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	import home from '../../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				files:[],
				locdata: [{
						label: '申请平台',
						value: '美团'
					},
					{
						label: '申请编号',
						value: '123456'
					},
					{
						label: '申请时间',
						value: '2020-4-15'
					},
				]
			}
		},
		methods: {

			getData() {
				uni.showLoading({
					title:'加载中'
				})
				home.lookMymsg({
					data: {},
					fail: () => {
						uni.hideLoading()
                        uni.showToast({
                        	title: '网络错误',
                        	icon: "none"
                        })
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code == 403) {
							uni.showModal({
								content: res.data.msg,
								success: (res) => {
									uni.navigateBack({
										delta: 1
									})
								}
							})
							return;
						}
						if (res.data.code == 200) {
							// console.log(res.data.data);
							let data = res.data.data
							this.locdata[0].value = data.info.platform
							this.locdata[1].value = data.info.code
							this.locdata[2].value = data.info.created_at.slice(0,16)
							this.files = data.files
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}
						
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
	.contentBox {
		padding: 40rpx;
	}

	.infoBox {
		width: 94%;
		padding: 20rpx 3%;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		font-size: 15px;
		color: #666666;
		padding-bottom: 50rpx;
	}
	
	.itemBox{
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
		}
		
	.accessoryBox{
		margin-top: 50rpx;
		width: 94%;
		padding: 0rpx 3%;
		background: #FFFFFF;
		padding-bottom: 30rpx;
		border-radius: 10rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}	
		
	.accessoryTxt{
		display: flex;
		align-items: center;
	    height: 70rpx;
		color: #666666;
		border-bottom: 1px solid #CCCCCC;
	}	
	
	.filesBox{
		margin-top: 20rpx;
		flex-wrap: wrap;
	}
	
	.itemImg{
		width: 120rpx;
		height: 140rpx;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
	}
</style>
