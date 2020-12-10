<template>
	<view class="flex-d al-center">
		<subunit :titel="titel"> </subunit>
		<view class="content">
			<view class="postop">
				<view class=" fied flex-d  pos-rel ju-center" v-for="(item,index) in parameter" :key='item.id' :class="{'dv':index===parameter.length-1}">
					<u-field label-width="150" v-model="item.value" :label="item.label" :clearable=false :disabled="item.disabled">
					</u-field>
					<view class="line  pos-abs">
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import address from '../../../vendor/address/address.js'
	import cache from '../../../vendor/cache/cache.js'
	import user from '../../../vendor/user/userDetails.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {

		},
		data() {
			return {
				titel: '地址详情',
				parameter: [{
						value: '',
						label: '姓名',
						disabled: true
					},
					{
						value: '',
						label: '手机号码',
						disabled: true
					},
					{
						value: '',
						label: '户型',
						disabled: true
					},
					{
						value: '',
						label: '小区',
						disabled: true
					},
					{
						value: '',
						label: '楼栋号',
						disabled: true
					},
				],
				id: ''
			}
		},
		methods: {
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 用户居住信息
			getData() {
				uni.showLoading({
					title:'加载中...'
				})
				address.listdetails({
					data: {
						id: this.id
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
							uni.hideLoading()
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data);
						let data = res.data.data
						if (data.type == 1) {
							this.parameter[2].value = '户主'
						}
						if (data.type == 2) {
							this.parameter[2].value = '家庭成员'
						}
						if (data.type == 3) {
							this.parameter[2].value = '租户'
						}
						this.parameter[3].value = data.village_name
						this.parameter[4].value = data.building_name + data.apartment_name + data.floor_name + data.room_name
					}
				})
			},


			// 获取用户资料
			Userdata() {
				user.userDeta({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						let Users = res.data.data
						this.parameter[0].value = Users.username
						this.parameter[1].value = Users.tel.slice(0,4) + '****' + Users.tel.slice(7,11)
					},
				})
			}
		},
		mounted() {

		},
		onShow() {
			this.Userdata()
			this.getData()
		},
		onLoad(val) {
			this.id = val.id
			// console.log(addlist);
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
	.reimg {
		width: 22rpx;
		height: 41rpx;
		top: 61rpx;
		left: 49rpx;
	}

	.content {
		margin-top: 20rpx;
		width: 690rpx;
		border-radius: 10rpx;
		padding: 10rpx 0;
		background: #FFFFFF;
		box-shadow: 2rpx 2rpx 6rpx 1rpx #d9d9d9;
	}

	.fied {
		width: 607rpx;
		height: 81rpx;
		padding-left: 21rpx;
		padding-right: 62rpx;
		background: #FFFFFF;
		font-size: 30rpx;

		/deep/ .u-field {
			width: 100%;
			padding: 0;
		}
	}

	.line {
		width: 607rpx;
		height: 1rpx;
		background: rgba(191, 191, 191, 0.5);
		bottom: 0;
		z-index: 9;
	}

	.dv {
		margin-bottom: 40rpx;
	}

	.preimg {
		width: 358rpx;
		height: 68rpx;
	}

	.preservation {
		top: 943rpx;
	}

	.pretext {
		font-size: 30rpx;
		color: #FFFFFF;
	}
</style>
