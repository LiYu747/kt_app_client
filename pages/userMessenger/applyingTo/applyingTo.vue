<template>
	<view>
		<subunit titel='申请进入' class="fixed"></subunit>
		<view class="lineTop">
			
		</view>
		<view class="flex-d al-center">
			<view class="msgBox">
				<view class="msgTil">
					基本信息
				</view>
				<view class="m-t2">
					<view class="msgItem flex al-center ju-between" v-for="item in locdata" :key='item.id'>
						<view class="itemLabel">
							{{item.label}}
						</view>
						<input type="text" :disabled="item.disabled" class="msgIpt" v-model="item.value" value="" />
					</view>
				</view>
			</view>

			<view class="accessoryBox">
				<view class="accTitle flex al-center">
					附件凭证
					<view class="annotation">
						（免冠照，工牌照等）
					</view>
				</view>
				<view class="flex ju-center">
					<view class="fileBox flex">
						<view class="pushBtn flex-d al-center ju-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/home/push.png" class="pushimg" mode=""></image>
							<view class="fz-12">
								上传文件
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="Submit mar-t  flex al-center ju-center">
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
						label: '姓名',
						value: '李海峰',
						disabled: true
					},
					{
						label: '手机号',
						value: '152****4145',
						disabled: true
					},
					{
						label: '身份证',
						value: '235648********3654',
						disabled: true
					},
					{
						label: '所属平台',
						value: '美团',
						disabled: false
					},
					{
						label: '工号',
						value: '123456',
						disabled: false
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
	.fixed{
		position: fixed;
		z-index: 9;
	}
	.lineTop{
		height: 148rpx;
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

	.msgTil {

		font-size: 16px;
	}

	.msgItem {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.msgIpt {
		// background: red;
		text-align: right;
		width: 500rpx;
		font-size: 14px;
	}

	.itemLabel {
		font-size: 14px;
	}

	.accessoryBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 40rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.accTitle {
		font-size: 16px;
		height: 60rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.annotation {
		font-size: 12px;
		color: red;
	}

	.fileBox {
		margin-top: 20rpx;
		width: 600rpx;
		flex-wrap: wrap;
	}

	.pushBtn {
		width: 130rpx;
		height: 150rpx;
		background: rgb(244, 245, 246);
	}

	.pushimg {
		width: 50rpx;
		height: 50rpx;
	}

	.Submit {
		width: 358rpx;
		height: 68rpx;
	}

	.subText {
		color: #FFFFFF;
		z-index: 9;
	}
	.mar-t{
		margin-top: 80rpx;
		margin-bottom: 20rpx;
	}
</style>
