<template>
	<view>
		<subunit titel='送货申请'></subunit>
		<view class="applicationRecord pos-abs">
			申请记录
		</view>
		<view class="flex-d al-center">
			<view class="msgBox">
				<view class="m-t1">
					<view class="msgItem flex al-center ju-between" v-for="item in locdata" :key='item.id'>
						<view class="itemLabel">
							{{item.label}}
						</view>
						<input type="text" :disabled="item.disabled" class="msgIpt" v-model="item.value" value="" />
					</view>
				</view>
			</view>

			<view class="remarkBox">
				<view class="accTitle ">
					申请备注
				</view>
					<textarea  class="frame"></textarea>
			</view>
			
			<view class="Submit move flex al-center ju-center">
					<image class="Submit pos-abs" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
					<view class="subText">
						提交
					</view>
			</view>
		</view>
		</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				locdata: [{
						label: '收货人姓名',
						value: '李海峰',
						disabled: true
					},
					{
						label: '收货人手机号',
						value: '152****4145',
						disabled: true
					},
					{
						label: '收货人地址',
						value: '怡心湖小区1单元2020',
						disabled: true
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
	.applicationRecord {
		font-size: 14px;
		color: #FFFFFF;
		right: 50rpx;
		margin-top: -60rpx;
	}

	.msgBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 40rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.msgItem {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.msgIpt {
		// background: red;
		text-align: right;
		width: 450rpx;
		font-size: 14px;
	}

	.itemLabel {
		font-size: 14px;
	}

	.remarkBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 30rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.accTitle {
		font-size: 16px;
		height: 60rpx;
		border-bottom: 1px solid #BFBFBF;
	}
	
	.frame {
		width: 94%;
		padding: 3%;
		height: 120rpx;
		background: #FFFFFF;
		font-size: 26rpx;
		color: rgb(165, 165, 165);
	}
	.move{
		margin-top: 80rpx;
	}
	.Submit {
		width: 358rpx;
		height: 68rpx;
	}
	.subText{
		color: #FFFFFF;
		z-index: 9;
	}
</style>
