<template>
	<view>
		<subunit titel='详情'></subunit>
		<view class="flex-d al-center">
			<view class="informationBar">
				<view class="message">
					基本信息
				</view>
				<view class="photoBox flex ju-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/user/toux.png" class="touxImg" mode=""></image>
				</view>
				<view class="m-t2">
					<view class="flex itemBox al-center ju-between" v-for="item in displayBox" :key='item.id'>
						<view class="">
							{{item.title}}
						</view>
						<view class="">
							{{item.content}}
						</view>
					</view>
				</view>
			</view>
			
			<view class="accessoryBox flex-d al-center">
				<view class="accTitle flex al-center ju-between">
					<view class="">
						附件信息
					</view>
					<view class="fz-12">
						租房合同.doc
					</view>
				</view>
				<view class="accessoryImgbox">
					<image src="https://oss.kuaitongkeji.com/static/img/app/forum/timg.jpg" class="timgImg" mode=""></image>
					<image src="https://oss.kuaitongkeji.com/static/img/app/forum/timg.jpg" class="timgImg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				displayBox: [{
					title: '姓名',
					content: '李海峰'
				},
				{
					title: '手机号',
					content: '152****4145'
				},
				{
					title: '身份证号',
					content: '235648********3654'
				},
				{
					title: '地址',
					content: '怡心湖小区1单元2003'
				}]
			}
		},
		methods: {

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
	.informationBar {
		margin-top: 30rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		color: #666666;
		font-size: 14px;
		padding: 20rpx;
		padding-bottom: 50rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.message {
		color: #666666;
		font-size: 18px;
	}

	.touxImg {
		width: 140rpx;
		height: 140rpx;
	}

	.photoBox {
		margin-top: 26rpx;
		width: 100%;
	}

	.itemBox {
		width: 100%;
		height: 70rpx;
		border-bottom: 1px solid #cccccc;
	}
	
	.accessoryBox{
		margin-top: 30rpx;
		width: 650rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		padding: 0 20rpx;
		color: #666666;
		padding-bottom: 30rpx;
	}
	
	.accTitle{
		margin-top: 20rpx;
		width: 100%;
		height: 60rpx;
		border-bottom: 1px solid #cccccc;
		font-size: 18px;
	}
	.accessoryImgbox{
		margin-top: 20rpx;
		width: 590rpx;
	}
	
	.timgImg{
		width: 120rpx;
		height: 142rpx;
		margin-right: 20rpx;
	}
</style>
