<template>
	<view>
		<subunit titel='详情' class="fixed"></subunit>
		<view class="topLine"></view>
		<view class="contenBox flex-d al-center">
			<view class="itemBox flex al-center ju-between" v-for="item in locdata " :key='item.id'>
                   <view class="">
                   	{{item.label}}
                   </view>
				   <view class="itemValue">
				   	{{item.value}}
				   </view>
			</view>
			
			<view class="deadline flex al-center ju-between">
				<view class="">
					有效期限
				</view>
				<view class="itemValue">
					{{time}}
					<image src="../../../../image/address/blckpd.png" class="blckpdImg" mode=""></image>
				</view>
			</view>
			
			<view class="remarkBox">
				<view class="">
					备注
				</view>
				<view class="remarkCen">
					<textarea value="" disabled="true"  class="reArea" placeholder="" />
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
				time:'2021.3.21',
				locdata: [{
						label: '姓名',
						value: '张三'
					},
					{
						label: '手机号码',
						value: '176****0164'
					},
					{
						label: '身份证号',
						value: '513**********4519'
					},
					{
						label: '是否允许添加其他成员',
						value: '是'
					}
				]
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
	.fixed {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.contenBox {
		width: 690rpx;
		padding: 30rpx;
	}
	
	.itemBox{
		width: 100%;
		height: 60rpx;
		font-size: 14px;
		color: #999999;
	}
	
	.deadline{
		margin-top: 30rpx;
		width: 100%;
		height: 100rpx;
		border-top: 1px solid #BFBFBF;
		font-size: 14px;
		color: #999999;
	}
	.blckpdImg{
		width: 24rpx;
		height: 16rpx;
		margin-left: 10rpx;
	}
	
	.remarkBox{
		width: 100%;
		color: #666666;
		font-size: 14px;
	}
	
	.remarkCen{
		margin-top: 20rpx;
		width: 650rpx;
		padding: 20rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}
	
	.reArea{
		width: 100%;
		height: 150rpx;
		font-size: 12px;
	}
	
	.itemValue{
		color: #666666;
	}
</style>
