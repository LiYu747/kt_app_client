<template>
	<view class="flex-d al-center">
		<submit titel="编辑"></submit>
		<view @click="seeShow = true" class="contentBox pos-rel">
			<view class="tabbar flex al-center">
				谁能看见
				 <view class=" pos-abs rig flex al-center">
				 	<image :src="seeList[idx].ref" class="uplockImg" mode=""></image>
					{{seeList[idx].label}}
				 </view>
				<image class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
			</view>
		</view>
		<!-- 提交 -->
		<view @click="Submit" class="matop flex al-center ju-center">
			<image class="Submit" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
			<view class="bai pos-abs">
				保存
			</view>
		</view>
		<u-popup mode='bottom' height="400rpx" border-radius='20'  v-model="seeShow">
			<view class="seeBox">
				<view class="flex al-center seeItem" @click="addCel(item,index)" v-for="(item,index) in seeList" :key='item.id'>
					<image :src="item.ref" class="uplockImg" mode=""></image>
					<view class="itemLb">
						{{item.label}}
					</view>
					<image v-show="index==idx" src="../../../image/forum/sclyse.png" class="sclyseImg" mode=""></image>
				</view>
			</view>
			<view class="flex-d al-center">
				<view @click="seeShow = false" class="cancelBox flex al-center ju-center">
					取消
				</view>
			</view>
		</u-popup>
		
		
	</view>
</template>

<script>
	import submit from '../../sub-unit/subunit.vue'
	import village from  '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {
			submit
		},
		props: {},
		data() {
			return {
				seeList: [
					{
						value: '0',
						label: ' 仅自己可见',
						ref: require('@/image/forum/lock.png')
					},{
						value: '1',
						label: ' 所有人可见',
						ref: require('@/image/forum/uplock.png')
					},
					
				],
				seeShow:false,
				idx:0,
				id:'',
				visible:''
			}
		},
		methods: {
              // 选择是否可见
			addCel(item,index){
				this.idx = index
				this.visible = item.value
			},
			 //保存
			Submit(){
				
				}
		},
		mounted() {
          
		},
		onLoad(option) {
          console.log(option);
		  this.id = option.id
		  this.visible = option.visible
		  this.idx = option.visible
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
	.contentBox {
		margin-top: 30rpx;
		width: 90%;
		background: #FFFFFF;
		font-size: 28rpx;
		color: #666666;
	}

	.tabbar {
		height: 80rpx;
		padding: 0 20rpx;
	}

	.reimg {
		position: absolute;
		right: 30rpx;
		width: 18rpx;
		height: 25rpx;
	}
	
	.rig{
		position: absolute;
		right: 60rpx;
		}
	
	.seeBox{
		padding: 40rpx;
		padding-right: 0;	
	}
	
	.uplockImg{
		width: 30rpx;
		height: 30rpx;
		}
	
	.seeItem{
		height: 90rpx;
		font-size: 14px;	
	}
	
	.itemLb{
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90rpx;
		border-bottom: 1px solid #EEEEEE;	
	}
	
	.sclyseImg{
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		right: 30rpx;	
	}
	
	.cancelBox{
		width: 90%;
		height: 80rpx;
		background: rgb(236,234,245);
		position: absolute;
		bottom: 20rpx;
		border-radius: 10rpx;
	}
	
	.matop {
		margin-top: 100rpx;
		font-size: 30rpx;
	}
	
	.Submit {
		width: 400rpx;
		height: 70rpx;
	
	}
</style>
