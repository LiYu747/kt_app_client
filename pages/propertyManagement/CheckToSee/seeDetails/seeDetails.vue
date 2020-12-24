<template>
	<view>
		<subunit class="feidx" titel='详情'></subunit>
		<view class="topLine"></view>
		<view class="contentBox">
			<view class="state flex al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/visit/gnt.png" class="stateimg" mode=""></image>
				<view class="m-l2">
					{{state}}
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
			<view class="line"></view>
			<view class="remarkBox">
				<view class="remarkTil">
					备注
				</view>
				<textarea class="remarkCen" disabled='true'  v-model="remark">
				</textarea>
				<view class="remarkTil">
					申请结果
				</view>
				<textarea class="remarkCen" disabled='true'  v-model="result">
				</textarea>
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
				state: '待处理',
				remark:'备注',
				result:'结果',
				locdata: [{
						label: '姓名',
						value: '李海峰'
					},
					{
						label: '地址',
						value: '复地御香山'
					},
					{
						label: '时间',
						value: '2020-12-09 16:03'
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
	.feidx {
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.stateimg {
		width: 40rpx;
		height: 40rpx;
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
	.itemBox{
		margin-top: 25rpx;
		font-size: 15px;
		color: rgb(165, 165, 165);
	}
	.line{
		margin-top: 40rpx;
		width: 100%;
		height: 1px;
		background: #CCCCCC;
	}
	.remarkTil{
		margin: 30rpx 0;
		font-size: 15px;
	    color: rgb(165, 165, 165);
	}
	.remarkCen{
		width: 94%;
		padding: 3%;
		height: 140rpx;
		background: #ffff;
		border-radius: 10rpx;
		font-size: 12px;
		color: rgb(165, 165, 165);
	}
	
</style>
