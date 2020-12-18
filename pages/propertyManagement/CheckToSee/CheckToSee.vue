<template>
	<view class="">
		<view class="fiedx">
			<subunit titel='用户查询'></subunit>
			<view class="searchBox flex al-center ju-center pos-rel">
				<view class="allTxt pos-abs flex al-center">
					全部
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/pullDown.png" class="pullDown" mode=""></image>
				</view>
				<view class="searchBack flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/serach.png" class="serachImg" mode=""></image>
					<input type="text" class="ipt" value="" placeholder="请输入关键词" />
				</view>
			</view>
		</view>
		<view class="topLine">

		</view>
		
		 <view class="flex-d m-t1 al-center">
		 	<view class="itemBox" v-for="item in locdata" :key='item.id'>
				<view class="itemName flex al-center">
					<view class="">
						姓名：
					</view>
					<view class="">
						{{item.name}}
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						申请时间：
					</view>
					<view class="">
						{{item.time}}
					</view>
				</view>
				<view class="itemName flex al-center">
					<view class="">
						地址：
					</view>
					<view class="">
						{{item.address}}
					</view>
				</view>
		 	</view>
		 </view>

		<view class="bomLine flex ju-center al-center">
			{{noText}}
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
				noText: '',
				locdata: [{
						name: '李海峰',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
					{
						name: '张心如',
						time: '2020-12-09 16：03',
						address: '复地御香山',
					},
				]
			}
		},
		methods: {
			// 用户详情
			goUserDetails() {
				uni.navigateTo({
					url: '/pages/propertyManagement/theUserDetails/theUserDetails'
				})
			}
		},
		mounted() {

		},
		onReachBottom() {
			this.noText = '没有更多了'
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
	.fiedx {
		top: 0;
		width: 100%;
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 236rpx;
	}

	.searchBox {
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
		border-bottom: 1px solid #eeeeee;
	}

	.searchBack {
		width: 494rpx;
		height: 54rpx;
		background: rgba(204, 204, 204, 0.35);
		border-radius: 27rpx;
		margin-left: 30rpx;
	}

	.allTxt {
		font-size: 13px;
		left: 40rpx;
		color: #666666;
	}

	.pullDown {
		width: 20rpx;
		height: 12rpx;
		margin-left: 10rpx;
	}

	.serachImg {
		width: 34rpx;
		height: 34rpx;
		margin-left: 20rpx;
	}

	.ipt {
		margin-left: 20rpx;
		width: 400rpx;
		font-size: 14px;
		// background: red;
	}

	.uni-input-placeholder {
		font-size: 12px;
	}
	
	.itemBox{
		margin-top: 30rpx;
		width: 650rpx;
		height: 300rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 0 20rpx;
		font-size: 14px;
		color: #666666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}
	
	.itemName{
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}
</style>
