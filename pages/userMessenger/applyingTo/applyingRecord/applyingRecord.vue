<template>
	<view>
		<subunit class="fixed" titel='申请进度'></subunit>
		<view @click="gomyMsg" class="myMsg">
			我的信息
		</view>
		<view class="topLine"></view>
		<view class="contentBox">
			<view class="state flex al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/visit/gnt.png" class="stateimg" mode=""></image>
				<view class="m-l1 flex al-center">
					<view v-if="userInfo.verify_res_msg" class="">
						{{userInfo.verify_res_msg}}
					</view> 
					<view class="m-l1">
						{{ userInfo.verify_status_text}}
					</view>
				</view>
			</view>
			
			<view class="">
				<view class="itemBox flex al-center ju-between" v-for=" item in locdata" :key='item.id'>
					<view class="">
						{{item.label}}
					</view>
					<view class="">
						{{item.value}}
					</view>
				</view>
			</view>
			
			<view class="midLine">
				
			</view>
			
			<view class="">
				<view class="remarkTxt">
					备注
				</view>
				<textarea :value="userInfo.user_remark" disabled="true"  class="reArea" placeholder="" />
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
				userInfo: {},
				locdata: [{
						label: '申请平台',
						value: ''
					},
					{
						label: '申请工号',
						value: ''
					},
					{
						label: '申请时间',
						value: ''
					}
				]
			}
		},
		methods: {
			// 我的信息
			gomyMsg(){
			 uni.navigateTo({
			 	url:'/pages/userMessenger/applyingTo/myInformation/myInformation'
			 })	
			},
			// 数据
			getData() {
				uni.showLoading({
					title:'加载中'
				})
				home.applicationProgress({
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
						if (res.data.code == 404) {
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
							let data = res.data.data
							this.userInfo = data
							this.locdata[0].value = data.platform
							this.locdata[1].value = data.code
							this.locdata[2].value = data.created_at.slice(0,16)
								console.log(data);
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
	.fixed {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.contentBox {
		padding: 0 20rpx;
	}

	.state {
		width: 100%;
		height: 120rpx;
		border-bottom: 1px solid #CCCCCC;
		font-size: 15px;
		color: #F07535;
	}

	.stateimg {
		width: 40rpx;
		height: 40rpx;
	}
	
	.itemBox {
		margin-top: 30rpx;
		font-size: 15px;
		color: rgb(165, 165, 165);
	}
	
	.midLine{
		margin-top: 40rpx;
		width: 100%;
		height: 1px;
		background: #CCCCCC;
	}
	
	.remarkTxt{
		color: rgb(165, 165, 165);
		margin-top: 50rpx;
	}
	
	.reArea{
		margin-top: 20rpx;
		width: 94%;
		height: 160rpx;
		padding: 20rpx 3%;
		background: #FFFFFF;
		font-size: 14px;
		color: rgb(165, 165, 165);
	}
	
	.myMsg{
		position: fixed;
		z-index: 10;
		font-size: 15px;
		top: 84rpx;
		right: 50rpx;
		color: #FFFFFF;
	}
</style>
