<template>
	<view class="box pos-abs">
		<view class="content pos-rel" v-for="(item,index) in locdata" :key='item.id' @click="Select(index)">
			<view class="location pos-abs">
				<image v-if="idx===index" class="zrimg" src="../../image/address/yes.png" mode=""></image>
				<image v-else  class="zrimg" src="../../image/address/zro.png" mode=""></image>
			</view>
			<view class="addres">
				<view class=" flex al-center pos-rel">
					{{item.name}}
					<view class="pos-abs  right">
						<image class="reimg" @click="edit(item)" src="../../image/address/retrue.png" mode=""></image>
					</view>
				</view>
				<view class="line"></view>
				<view class="text">
					{{item.address}}
				</view>
			</view>
			
			<view class="pos-abs botto">
				预约电梯
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				locdata: [{
						name: '怡心湖小区',
						address: '四川省成都市华府大道怡心湖小区1单元2020'
					},
					{
						name: '怡心湖小区',
						address: '四川省成都市华府大道怡心湖小区1单元2020dadadaSKDJA凯撒大帝澳大利的啊大家案例'
					},
					{
						name: '怡心湖小区',
						address: '四川省成都市华府大道怡心湖小区1单元2020dadadaSKDJA凯撒大帝澳大利的啊大家案例'
					},
					{
						name: '怡心湖小区',
						address: '四川省成都市华府大道怡心湖小区1单元2020dadadaSKDJA凯撒大帝澳大利的啊大家案例'
					},
					{
						name: '怡心湖小区',
						address: '四川省成都市华府大道怡心湖小区1单元2020dadadaSKDJA凯撒大帝澳大利的啊大家案例'
					}
				],
				idx:0
			}
		},
		methods: {
         Select(index){
			 this.idx = index
		 },
		 // 编辑
		 edit(item){
			 console.log(item);
			 uni.navigateTo({
			 	url:'/pages/auth/addediting/ADDediting'
			 })
		 },
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
	.box {
		width: 697rpx;
		padding-left: 30rpx;
		padding-right: 23rpx;
		top: 200rpx;
		margin-bottom: 160rpx;
	}

	.content {
		width: 604rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 2rpx 2rpx 6rpx #d9d9d9;
		padding-left: 60rpx;
		padding-top: 27rpx;
		padding-right: 33rpx;
		padding-bottom: 37rpx;
	}

	.zrimg {
		width: 24rpx;
		height: 24rpx;
	}

	.location {
		left: 20rpx;
		top: 24rpx;
	}

	.addres {
		height: 100%;
		width: 604rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.reimg {
		width: 17rpx;
		height: 32rpx;
	}

	.right {
		right: 0;
	}

	.line {
		margin-top: 23rpx;
		width: 604rpx;
		height: 0.5rpx;
		background: #BFBFBF;
	}

	.text {
		margin-top: 28rpx;
		width: 457rpx;
	}
	.botto{
		right: 23rpx;
		bottom: 32rpx;
		color: #F07535;
		}
</style>
