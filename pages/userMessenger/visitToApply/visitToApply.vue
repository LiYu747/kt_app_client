<template>
	<view>
		<subunit class="fixed" titel='拜访申请'></subunit>
		<view @click="goRecord" class="record">
			申请记录
		</view>
		<view class="topLine"></view>
		<view class="flex-d al-center">
			<view class="messageBox">
				<view class=" itemBox flex al-center ju-between pos-rel" @click="openSelect(index)" v-for="(item,index) in menu"
				 :key='item.id'>
					<view class="">
						{{item.label}}
					</view>
					<view class="flex al-center">
						<input class="ipt" :placeholder="item.placeholder" :disabled="item.disabled" type="text" v-model="item.value" />
						<view v-if="index == menu.length-1" class="pos-abs moveRig">
							<image src="https://oss.kuaitongkeji.com/static/img/app/home/xiala.png" class="xiala" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<u-select v-model="show" mode="mutil-column-auto" :list="list" @confirm="confirm"></u-select>

			<view class="remarkBox">
				<view class="remarTil">
					申请备注
				</view>
				<textarea class="remarTex" v-model="remark" maxlength="10000"></textarea>
			</view>

			<view class="Submit move flex al-center ju-center m-t4">
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
				remark: '', //备注
				show: false, //城市列表显示与隐藏
				list: [{
					value: 1,
					label: '中国',
					children: [{
							value: 2,
							label: '广东',
							children: [{
									value: 3,
									label: '深圳'
								},
								{
									value: 4,
									label: '广州'
								}
							]
						},
						{
							value: 5,
							label: '广西',
							children: [{
									value: 6,
									label: '南宁'
								},
								{
									value: 7,
									label: '桂林'
								}
							]
						}
					]
				}, ],
				menu: [{
						label: '拜访人姓名',
						value: '李海峰',
						disabled: true
					},
					{
						label: '拜访人手机号',
						value: '1455***5252',
						disabled: true
					},
					{
						label: '拜访人身份证',
						value: '23564**********654',
						disabled: true
					},
					{
						label: '被拜访人姓名',
						value: '',
						placeholder:'请输入被拜访人姓名'
					},
					{
						label: '地址',
						value: '',
						placeholder:'请选择地址',
						disabled: true
					},
				]
			}
		},
		methods: {
			//申请记录
			goRecord() {
				uni.navigateTo({
					url: '/pages/userMessenger/visitToApply/applicationRecord/applicationRecord'
				})
			},
			// 打开小区列表
			openSelect(index) {
				if (index == this.menu.length - 1) {
					this.show = true
				}
			},
			// 选择小区确定
			confirm(val){
				// console.log(val);
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
	.fixed {
		position: fixed;
		z-index: 9;
	}

	.record {
		position: fixed;
		top: 86rpx;
		font-size: 15px;
		color: #FFFFFF;
		right: 50rpx;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.messageBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 50rpx;
		color: #666666;
		font-size: 14px;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1)
	}

	.itemBox {
		width: 100%;
		height: 70rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.ipt {
		width: 400rpx;
		text-align: right;
		color: #666666;
		font-size: 14px;
		margin-right: 30rpx;
	}

	.xiala {
		width: 18rpx;
		height: 14rpx;
	}

	.moveRig {
		right: 0;
	}

	.remarkBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		color: #666666;
		font-size: 14px;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1)
	}

	.remarTil {
		font-size: 16px;
		width: 100%;
		height: 50rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.remarTex {
		width: 610rpx;
		height: 160rpx;
		font-size: 12px;
		padding: 20rpx;
	}

	.Submit {
		width: 358rpx;
		height: 68rpx;
	}

	.subText {
		color: #FFFFFF;
		z-index: 9;
	}
</style>
