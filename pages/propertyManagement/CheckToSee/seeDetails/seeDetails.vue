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
			<view class="accessoryBox">
				<view class="remarkTil">
					附件
				</view>
				<view class="accessoryCtn flex">
					<view class="" v-for="item in files" :key="item.id">
						<image :src="item.url" class="itemUrl" mode=""></image>
					</view>
				</view>
			</view>
			<view class="remarkBox">
				<view class="remarkTil">
					备注
				</view>
				<textarea class="remarkCen" disabled='true' v-model="remark">
				</textarea>
				<view class="remarkTil">
					申请结果
				</view>
				<textarea class="remarkCen" placeholder="您可以在这里填写您不同意的原因哦" v-model="result">
				</textarea>
			</view>

			<!-- 按钮 -->
			<view v-if="stateCode == 1" class="flex al-center ju-around m-t4">
				<view @click="pass" class="btnr flex al-center ju-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" class="btnimg" mode=""></image>
					<view class=" pos-abs">
						通过
					</view>
				</view>
				<view @click="nopass" class="btnl flex al-center ju-center">
					不通过
				</view>
			</view>
		</view>
		<view class="btmLine">
			
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	import home from '../../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				id: '',
				state: '', //处理状态
				stateCode:'',//处理状态码
				remark: '', //备注
				result: '', //结果
				files:[],//附件
				verify_status: '', //选择结果
				locdata: [{
						label: '姓名',
						value: ''
					},
					{
						label: '电话',
						value: ''
					},
					{
						label: '身份证号',
						value: ''
					},
					{
						label: '地址',
						value: ''
					},
					{
						label: '时间',
						value: ''
					}
				]
			}
		},
		methods: {
			// 获取数据
			getData() {
				uni.showLoading({
					title: '加载中'
				})
				home.checkinDetails({
					data: {
						id: this.id
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
							return;
						}
						let data = res.data.data
						// console.log(data);
						this.state = data.verify_status_text
						this.stateCode = data.verify_status
						this.remark = data.user_remark
						this.files = data.files
						this.locdata[0].value = data.own_user.username
						this.locdata[1].value = data.own_user.tel.slice(0,3) + '****' + data.own_user.tel.slice(7,11)
						this.locdata[2].value = data.own_user.id_card_no.slice(0,3) + '***********' + data.own_user.id_card_no.slice(14,18)
						this.locdata[3].value = data.own_village.name + data.own_building.name + data.own_apartment.name + data.own_floor
							.name + data.own_room.room_number
						this.locdata[4].value = data.created_at.slice(0, 16)
					}
				})
			},

			auditreq() {
				uni.showLoading({
					title: '加载中'
				})
				home.auditRecord({
					data: {
						id: this.id,
						verify_status: this.verify_status,
						verify_msg: this.result
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
							return;
						}
						uni.showToast({
							title: res.data.msg
						})
						const time = setTimeout(() => {
							this.getData()
							clearTimeout(time)
						}, 1500)
					}
				})
			},
			// 通过
			pass() {
				this.verify_status = '2'
				this.auditreq()
			},
			//不通过
			nopass() {
				this.verify_status = '3'
				this.auditreq()
			}
		},
		mounted() {
			this.getData()
		},
		onLoad(option) {
			this.id = option.id
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
	
	.stateimg {
		width: 40rpx;
		height: 40rpx;
	}

	.itemBox {
		margin-top: 25rpx;
		font-size: 15px;
		color: rgb(165, 165, 165);
	}

	.line {
		margin-top: 40rpx;
		width: 100%;
		height: 1px;
		background: #CCCCCC;
	}

	.remarkTil {
		margin: 30rpx 0;
		font-size: 15px;
		color: rgb(165, 165, 165);
	}

	.remarkCen {
		width: 94%;
		padding: 3%;
		height: 100rpx;
		background: #ffff;
		border-radius: 10rpx;
		font-size: 12px;
		color: rgb(165, 165, 165);
	}

	.textarea-placeholder {
		color: #999999;
	}

	.btnr {
		width: 320rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.btnimg {
		width: 320rpx;
		height: 70rpx;
	}

	.btnl {
		width: 318rpx;
		height: 68rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(240, 117, 53);
		font-size: 28rpx;
		color: rgb(240, 117, 53);
	}
	
	.accessoryCtn{
		width: 94%;
		padding: 20rpx 3%;
		background:#FFFFFF;
		border-radius: 10rpx;
		flex-wrap: wrap;
	}
	
	.itemUrl{
		margin-right: 20rpx;
		margin-bottom: 10rpx;
		width: 120rpx;
		height: 160rpx;
	}
	
	.btmLine{
		height: 60rpx;
	}
</style>
