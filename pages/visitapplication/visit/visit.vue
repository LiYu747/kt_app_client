<template>
	<view class="flex-d al-center">
		<subunit @goback='goback' class="posp fiexd" :retur=true titel="拜访申请"></subunit>
		<view @click="gorecord" class="pos-abs fiexd location">
			申请记录
		</view>
		<view class=" message">
			<view class="text flex al-center">
				基本信息
			</view>
			<view class="">
				<view class="item flex al-center pos-rel" @click="itemlabel(index)" v-for="(item,index) in  record" :key='item.id'
				 :class="{'dv':index===record.length-1}">
					<u-field v-model="item.value " :label="item.label" :placeholder="item.placeholder" :clearable=false :required='item.required'
					 input-align='right' :disabled="item.disabled" label-width="170">
					</u-field>
					<view v-if="index===record.length-1" class="pos-abs righ">
						<image @click="Onshow(index)" src="../../../image/home/xiala.png" class="xiala" mode=""></image>
					</view>
				</view>
			</view>
			<u-select v-model="show" mode="mutil-column-auto" :default-value='value' :list="renderVillageLists" @confirm="confirm"></u-select>
		</view>

		<!-- 备注 -->
		<remarks ref='marks' class="top" titel='申请备注'></remarks>
		<!-- 提交 -->
		<view class="pos-rel m-t4 bot flex al-center ju-center" @click="Submit">
			<image class="Submit" src="../../../image/login/ccuc.png" mode=""></image>
			<view class="pos-abs subtext">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	import subunit from '../../../components/sub-unit/subunit.vue'
	import enclosure from '../../../components/checkIn/enclosure/enclosure.vue'
	import remarks from '../../../components/checkIn/remarks/remarks.vue'
	import village from '../../../vendor/village/village.js'
	import home from '../../../vendor/home/home.js'
	import cache from '../../../vendor/cache/cache.js'
	import user from '../../../vendor/user/userDetails.js'
	import jwt from '../../../vendor/auth/jwt.js'
	export default {
		name: "",
		components: {
			subunit,
			enclosure,
			remarks,
			LbPicker
		},
		props: {},
		data() {
			return {
				record: [{
						label: '拜访人姓名',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '拜访人手机号',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '拜访人身份证',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '被访问人姓名',
						value: '',
						required: true,
						placeholder: '请输入被访问人姓名'
					},
					{
						label: '地址',
						value: '',
						disabled: true,
						placeholder: '请选择地址',
						required: true,
					},
				],
				//服务端返回的原始数据
				orgVillageLists: [],

				renderVillageLists: [],

				// 选择小区id
				id: [],
				show: false,
				value: [],

			}
		},
		methods: {
			// 显示选择小区
			Onshow(index) {
				if (index == this.record.length - 1) {
					this.show = true
				}
			},
			itemlabel(index) {
				if (index == this.record.length - 1) {
					this.show = true
				}
			},
			// 选择
			confirm(val) {
				// console.log(val);
				// 获取的id
				this.id = val.value
				// 获取的文本
				let arr = ''
				let index = []
				// 获取的id
				let id = []
				val.map(items => {
					id.push(items.extra)
					if (items.label != null) {
						arr += items.label
					}
					if (items.value == null) {
						items.value == 0
					}
					index.push(items.value)
				})
				this.id = id
				this.value = index
				this.record.map((item, index) => {
					if (index === 4) {
						item.value = arr

					}
				})
				// console.log(index);
			},
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 提交
			Submit() {
				uni.showLoading({
					title: '提交中...'
				})
				let remarks = this.$refs.marks.value
				home.VisitApplication({
					data: {
						hostName: this.record[3].value,
						villageId: this.id[0],
						buildingId: this.id[1],
						apartmentId: this.id[2],
						floorId: this.id[3],
						roomId: this.id[4],
						visitorRemark: remarks
					},
					fail: (err) => {
						uni.hideLoading()

						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						// console.log(res);
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络请求出错',
								icon: 'none'
							});
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
							return;
						}
						uni.showToast({
							title: res.data.msg,
							duration: 2000
						});
						this.$refs.marks.value = ''
						this.record[3].value = ''
						this.record[4].value = ''
						// console.log(res);
					},

				})
			},
			// 申请记录
			gorecord() {
				uni.navigateTo({
					url: '/pages/visitapplication/goRecord/goRecord'
				})
			},

			loadVillageLists() {
				let that = this;
				// 小区列表
				village.selectLists({
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

						this.orgVillageLists = res.data.data;
						this.renderMSelect();
					},

				})
			},

			//使用返回的数据进行渲染select
			renderMSelect() {
				//renderVillageLists
				if (!this.orgVillageLists || this.orgVillageLists.length == 0) {
					this.renderVillageLists = [];
					return;
				}

				//进行修改
				let tmp = [];

				this.orgVillageLists.forEach((item, index) => {
					let villages = {
						label: item.name,
						value: index,
						extra: item.id,
						children: [],
					};

					if (!item.buildings) return true;
					//楼栋
					item.buildings.forEach((item2, idx2) => {
						let buildings = {
							label: item2.name,
							value: idx2,
							extra: item2.id,
							children: [],
						};
						// console.log('buildings', item2, !item2.apartments)
						if (!item2.apartments) return true;
						item2.apartments.forEach((item5, idx3) => {

							//单元楼
							let ap = {
								label: item5.name,
								value: idx3,
								extra: item5.id,
								children: [],
							};

							if (!item5.floors) return true;

							item5.floors.forEach((item3, index3) => {

								//楼层
								let floors = {
									label: item3.name,
									value: index3,
									extra: item3.id,
									children: [],
								};

								// console.log('item3', item3)
								if (!item3.rooms) return true;
								//门牌号
								item3.rooms.forEach((item4, idx4) => {
									floors.children.push({
										label: item4.room_number,
										value: idx4,
										extra: item4.id,
									});
								})

								ap.children.push(floors);
							})


							buildings.children.push(ap);

						})

						villages.children.push(buildings);
					})

					tmp.push(villages);
				})


				this.renderVillageLists = tmp;
				// console.log(tmp);
			},

			// 获取用户资料
			// 判断是否登录
			loadUserData() {
				uni.showLoading({
					title: '加载中...'
				})
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						user.userDeta({
							data: {},
							fail: (err) => {
								uni.hideLoading()
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
								uni.hideLoading()
								if (res.statusCode != 200) return;
								if (res.data.code != 200) return;
								let Users = res.data.data
								this.record[0].value = Users.username
								this.record[1].value =  Users.tel.slice(0,3) + '****' + Users.tel.slice(7,11)
								this.record[2].value = Users.id_card_no.slice(0,3) + '**********' + Users.id_card_no.slice(Users.id_card_no.length-4,Users.id_card_no.length)
							},
						})
					},
					fail: () => {
						uni.hideLoading()
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			},
		},
		mounted() {
			this.loadVillageLists();
		},
		onShow() {
			this.loadUserData()
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
			width: 400rpx;
			font-size: 24rpx;
		}
	}

	.dv {
		margin-bottom: 43rpx;
	}

	.righ {
		right: 0;
	}

	.xiala {
		width: 22rpx;
		height: 12rpx;
	}

	.Submit {
		width: 358rpx;
		height: 68rpx;
	}

	.subtext {
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.posp {
		position: fixed;
	}

	.bot {
		margin-bottom: 80rpx;
	}

	.top {
		margin-top: 60rpx;
	}

	.location {
		font-size: 30rpx;
		color: #FFFFFF;
		top: 82rpx;
		right: 50rpx;
	}

	.fiexd {
		position: fixed;
		z-index: 99;
	}

	/deep/ .lb-picker-content {
		height: 500rpx !important;
	}

	/deep/ .uni-picker-view-indicator {
		height: 100rpx !important;
	}

	/deep/ .u-select__body__picker-view__item[data-v-a577ac80] {
		font-size: 24rpx !important;
		text-align: center !important;
	}

	/deep/ .uni-picker-view-indicator {
		height: 88rpx !important;
	}
</style>
