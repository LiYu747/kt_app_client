<template>
	<view class="flex-d al-center">
		<subunit @goback='a' class="posp" :retur=true titel="申请入住"></subunit>
		<view class=" message">
			<view class="text flex al-center">
				基本信息
			</view>
			<view class="">
				<view class="item flex al-center pos-rel" v-for="(item,index) in  record" :key='item.id' :class="{'dv':index===record.length-1}">
					<u-field v-model="item.value " :label="item.label" :clearable=false :required='item.required' input-align='right'
					 :disabled="item.disabled">
					</u-field>
					<view v-if="index===record.length-1" class="pos-abs righ">
						<image @click="show = true" src="../../../image/home/xiala.png" class="xiala" mode=""></image>
					</view>
				</view>
			</view>
			<u-select v-model="show" mode="mutil-column-auto" @confirm='confirm' :list="list"></u-select>
		</view>
		
		 <!-- 附件 -->
		 <enclosure ref='encl' @abb='add'></enclosure>
		 
		  <!-- 备注 -->
		  <remarks ref='marks'></remarks>
		 <!-- 提交 -->
		 <view class="pos-rel m-t4 bot flex al-center ju-center" @click="end">
			 <image class="Submit" src="../../../image/login/ccuc.png" mode=""></image>
		 	<view class="pos-abs subtext">
		 		提交
		 	</view>
		 </view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import enclosure from '../../../components/checkIn/enclosure/enclosure.vue'
	import remarks from '../../../components/checkIn/remarks/remarks.vue'
	export default {
		name: "",
		components: {
			subunit,
			enclosure,
			remarks
		},
		props: {},
		data() {
			return {
				record: [{
						label: '姓名',
						value: '李海峰',
						required: true
					},
					{
						label: '手机号',
						value: '17608040164',
						required: true
					},
					{
						label: '身份证',
						value: '513722******4519',
						required: true
					},
					{
						label: '地址',
						value: '大撒大撒是',
						required: true,
						disabled: true
					},
				],
				show: false,
				list: [{
						label: '怡心湖小区',
						children: [{
								label: '1单元',
								children: [{
										label: '2020'
									},
									{
										label: '2021'
									}
								]
							},
							{
								label: '2单元',
								children: [{
										label: '2023'
									},
									{
										label: '2023'
									}
								]
							}
						]
					},
					{
						value: 8,
						label: '十大小区',
						children: [{
							label: '一单元',
							children: [{
								label: '1122'
							}]
						}]
					}
				]
			}
		},
		methods: {
			confirm(val) {
		     var str1 = "";  
		     for (let i = 0; i < val.length; i++) {
		             str1 += val[i].label ;
		         }
               this.record.map(item => {
				   if(item.label === '地址'){
					  item.value = str1
				   }
			   })
			},
			a(){
				uni.navigateBack({
					delta:1
				})
			},
		  add(val){
              console.log(val);
		  }	,
		  end(){
			this.$refs.encl.add()
			this.$refs.marks.value
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
	.message {
		
		margin-top: 150rpx;
		width: 644rpx;
		height: 491rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		padding-left: 20rpx;
		padding-right: 26rpx;
	}

	.text {
		height: 69rpx;
		font-size: 30rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;
	}

	.item {
		height: 69rpx;
		font-size: 24rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;

		/deep/ .u-field {
			padding-left: 20rpx;
		}

		/deep/ .uni-input-input {
			width: 480rpx;
			font-size: 24rpx;
		}
	}

	.dv {
		/deep/ .uni-input-input {
			width: 440rpx;
		}
	}

	.righ {
		right: 0;
	}

	.xiala {
		width: 22rpx;
		height: 12rpx;
	}
	.Submit{
		width: 358rpx;
		height: 68rpx;
	}
	.subtext{
		font-size: 30rpx;
		color: #FFFFFF;
	}
	.posp{
		position: fixed;
	}
	.bot{
		margin-bottom: 80rpx;
	}
</style>
