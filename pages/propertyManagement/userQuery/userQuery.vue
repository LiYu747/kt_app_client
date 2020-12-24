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
		<view class="flex-d al-center m-t1">
			<view class="itemBox" @click="goUserDetails" v-for=" item in locdata" :key='item.id'>
				<view class="flex al-center">
					<view class="itemName">
						{{item.name}}
					</view>
					<view class="itemTel">
						{{item.tel}}
					</view>
				</view>
				<view class="flex m-t3">
					<view class="itemSex flex al-center ju-center" :class="item.sex=='男'?'dv':''">
						{{item.sex}}
					</view>
					<view class="itemIDcard">
						<view class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/idcard.png" class="idcardIcon" mode=""></image>
							<view class="m-l1">
								身份证
							</view>
						</view>
						<view class="m-t1">
							{{item.idcard}}
						</view>
					</view>
					<view class="itemTime m-l3">
						<view class="flex al-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/propertyManagement/time.png" class="timeIcon" mode=""></image>
							<view class="m-l1">
								入住时间
							</view>
						</view>
						<view class="m-t1">
							{{item.checkdate}}
						</view>
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
				noText:'',
				locdata: [{
						name: '张欣如',
						tel: '19954852365',
						sex: '女',
						idcard: '255124********3921',
						checkdate: '2020-3-14'
					},
					{
						name: '李海峰',
						tel: '19954852365',
						sex: '男',
						idcard: '211381********3547',
						checkdate: '2020-3-14'
					},
					{
						name: '李海峰',
						tel: '19954852365',
						sex: '男',
						idcard: '211381********3547',
						checkdate: '2020-3-14'
					},
					{
						name: '李海峰',
						tel: '19954852365',
						sex: '男',
						idcard: '211381********3547',
						checkdate: '2020-3-14'
					},
					{
						name: '李海峰',
						tel: '19954852365',
						sex: '男',
						idcard: '211381********3547',
						checkdate: '2020-3-14'
					},
				]
			}
		},
		methods: {
         // 用户详情
		 goUserDetails(){
			 uni.navigateTo({
			 	url:'/pages/propertyManagement/userQuery/theUserDetails/theUserDetails'
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
    .topLine{
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
    
	.allTxt{
		font-size: 13px;
		left: 40rpx;
		color: #666666;
	}
	 
	.pullDown{
		width: 20rpx;
		height: 12rpx;
		margin-left: 10rpx;
	} 
	.serachImg{
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

	.itemBox {
		margin-top: 30rpx;
		width: 670rpx;
		height: 190rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding-top: 30rpx;
		padding-left: 20rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.itemName {
		color: #333333;
	}

	.itemTel {
		margin-left: 44rpx;
	}

	.itemSex {
		width: 66rpx;
		height: 66rpx;
		border-radius: 50%;
		background: rgb(255, 0, 0);
		color: #ffff;
	}

	.itemIDcard {
		margin-left: 94rpx;
		width: 260rpx;
		height: 70rpx;
		border-right: 2px solid #cccccc;
		border-left: 2px solid #CCCCCC;
		color: #999999;
		font-size: 12px;
		padding-left: 30rpx;
	}

	.idcardIcon {
		width: 30rpx;
		height: 20rpx;
	}

	.itemTime {
		color: #999999;
		font-size: 12px;
	}

	.timeIcon {
		width: 25rpx;
		height: 23rpx;
	}
	
	.bomLine{
		width: 100%;
		height: 100rpx;
		font-size: 12px;
	}
	.dv{
		background: rgb(0,178,255);
	}
</style>
