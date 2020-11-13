<template>
	<view class="whole flex-d al-center">
		<subunit titel="个人信息"></subunit>
		<view class="activ flex al-center ju-center">
		<!-- 	<u-upload ref="uUpload" :action="action" :auto-upload="false" ></u-upload> -->
			<image src="../../../image/user/headportrait.png" class="img" mode=""></image>
		</view>
		<view class="text">
			上传头像
		</view>
		<view class="postop">
			<view class="fied flex al-center" v-for="(item,index) in parameter" :key='item.id' :class="{'dv':index===parameter.length-1,'colr':item.value==='预览'}">
				<u-field label-width=300 v-model="item.value" :label="item.label" :clearable=false input-align='right' :disabled="item.disabled">
				</u-field>
			</view>
		</view>
		
		<!-- 提交 -->
		<view class="end flex al-center ju-center">
			<image @click="Submit" src="../../../image/login/ccuc.png" class="enimg" mode=""></image>
			<view class=" pos-abs">
				提交
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

				parameter: [{
						value: '一棵树',
						label: '昵称',
					},
					{
						value: '男',
						label: '性别',
						disabled: true
					},
					{
						value: '预览',
						label: '正面免冠照',
						disabled: true
					},
					{
						value: '李海峰',
						label: '真实姓名',
						disabled: true
					},
					{
						value: '17608040164',
						label: '手机号码',
						disabled: true
					},
					{
						value: '513722******4519',
						label: '身份证号码',
						disabled: true
					}
				]
			}
		},
		methods: {
              // 提交
			  Submit(){
				uni.switchTab({
					url:'/pages/auth/userCenter/userCenter'
				})
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
	.activ {
		width: 148rpx;
		height: 148rpx;
		margin-top: 80rpx;
		border-radius: 50%;
		background: #FFFFFF;
	}

	.img {
		width: 148rpx;
		height: 148rpx;
		border-radius: 50%;
	}

	.text {
		margin-top: 21rpx;
		font-size: 36rpx;
		color: #666666;
	}

	.fied {
		width: 630rpx;
		height: 81rpx;
		padding-left: 40rpx;
		padding-right: 20rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid #BFBFBF;
		font-size: 30rpx;

		/deep/ .u-field {
			width: 100%;
			padding: 0;
		}
	}

	.postop {
		margin-top: 48rpx;
	}

	.dv {
		border: none;
	}
	.colr{
		/deep/
		.uni-input-input{
			color: #F07535;
		}
	}
	.end{
		margin-top: 61rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}
	.enimg{
		width: 358rpx;
		height: 68rpx;
	}
</style>
