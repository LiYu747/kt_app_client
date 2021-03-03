<template>
	<view class="flex-d al-center">
		<subunit :abel=able   class="posp"  titel="申请入住"></subunit>
		<view @click="Application" class=" pos-abs move">
			申请记录
		</view> 
		<view class=" message">
			<view class="text flex al-center">
				基本信息
			</view>
			<view>
				<view class="item flex al-center pos-rel" v-for="(item,index) in  record" @click="Onshow(index)" :key='item.id'
				 :class="[index==record.length-1?'dv':'',index==4&&idx==0&&Gshow==3?'zIndex':'']" >
					<u-field  v-model="item.value " :placeholder="item.placeholder" :label="item.label" :clearable=false :required='item.required'
					 input-align='right' :disabled="item.disabled">
					</u-field>
					<view class="pos-abs righ" v-if="index===record.length-2">
						<image src="https://oss.kuaitongkeji.com/static/img/app/home/xiala.png" class="xiala" mode=""></image>
						<view v-show="iSidentity==true" class="content">
							<view class="itemBox" @click="selectOne(item)" v-for="item in options" :key='item.id'>
								{{item.label}}
							</view>
						</view>
					</view>
					<view v-if="Gshow == 3&&idx==0"  class="Lutext bai fz-16 ">
						 <image src="../../../image/Newguidance/arrowsLU.png" class="arrowsLU m-r1" mode=""></image>
						 选择您的小区地址
					</view>
					<view v-if="index===record.length-1" class="pos-abs righ">
						<image src="https://oss.kuaitongkeji.com/static/img/app/home/xiala.png" class="xiala" mode=""></image>
					</view>
				</view>
			</view>
			<u-select v-model="show" mode="mutil-column-auto" :default-value='value' :list="renderVillageLists" @confirm="confirm"></u-select>
		</view>

		<!-- 附件 -->
		<view class="pos-rel" @click="nextTo" :class="idx==1?'enclText':''">
			<enclosure ref='encl' :Gshow='Gshow'   @abb='add'></enclosure>
			<view v-if="Gshow == 3" class="pos-abs">
				<image src="../../../image/Newguidance/arrowsLU.png" mode="" class="arrowsLU m-l4 m-t2"></image>
				<view class="bai pushMsg">
					添加附件，租房合同、房产证等
				</view>
			</view>
		</view>
           
		<!-- 备注 -->
		<view class="pos-rel" @click="nextTo" :class="idx==2?'enclText':''">
			<view v-if="Gshow == 3" class=" m-l4 pos-abs llText flex bai">
				<image src="../../../image/Newguidance/leftLower.png" class="leftLower m-t2" mode=""></image>
				<view class="m-l1">
					备注文字，审核人员可以看到
				</view>
			</view>
			<remarks :Gshow='Gshow' ref='marks'></remarks>
		</view>
		<!-- 提交 -->
		<view class="pos-rel m-t4 bot flex al-center ju-center" @click="Submit">
			<image class="Submit" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
			<view class="pos-abs subtext">
				提交
			</view>
		</view>

       <view v-if="Gshow == 3" @click="nextTo"  @touchmove.stop.prevent class="guideBox">
       
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
			LbPicker,
		},
		props: {},
		data() {
			return {
				value: [], //地址绑定v-model
				options: [{
						value: '1',
						label: '户主'
					},
					{
						value: '2',
						label: '家庭成员'
					},
					{
						value: '3',
						label: '租户'
					}
				],
				record: [{
						label: '姓名',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '手机号',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '身份证号',
						value: '',
						required: true,
						disabled: true
					},
					{
						label: '入住身份',
						value: '',
						placeholder: '请选择',
						required: true,
						disabled: true
					},
					{
						label: '地址',
						value: '',
						placeholder: '请选择',
						required: true,
						disabled: true
					},
				],
				iSidentity: false, //身份显示与隐藏
				show: false,
				//服务端返回的原始数据
				orgVillageLists: [],

				renderVillageLists: [],

				// 选择的id
				id: [],
				// 住户选择
				household: '',
				// 附件
				files: [],
				Gshow:0,
                idx:0,
				disb:'',
				able:false
			}
		},
		methods: {
			nextTo(index){
				this.idx ++
				if(this.idx == 3){
					this.Gshow = 4
				}
			},
			//申请记录
			Application() {
				uni.navigateTo({
					url: '/pages/residence/checkRecord/checkRecord'
				})
			},
			// 选择住户类型
			selectOne(options) {
				this.record[3].value = options.label
				this.household = options.value
				this.iSidentity = true
			},
		
			
			// 显示选择小区
			Onshow(index) {
				if (index == this.record.length - 2) {
					this.iSidentity = !this.iSidentity
				}
				if (index == this.record.length - 1) {
					if(this.Gshow == 3){
						this.idx++
						return;
					}
					this.show = true
				}
			},
			// 点击确定
			confirm(val) {
				// console.log(val);

				// 获取的文本
				let arr = ''
				// 获取默认选中
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
			// 获取附件
			add(val) {
				this.files = val
				// console.log(this.files);
			},
			// 提交
			Submit() {
			     if(cache.get('Gshow')){
			     	cache.set('Gshow',this.Gshow)
			      const time = setTimeout(() => {
			     	uni.switchTab({
			     		url:'/pages/address/address/address'
			     	})
			     	clearTimeout(time)
			      }, 2000)
			      return;
			     }
				// 获取备注
				if (this.$refs.encl.isLoding == true) return;
				if (this.household == '') {
					uni.showToast({
						title: '请选择住户类型',
						icon: 'none'
					})
					return;
				}
				if (this.id.length == 0) {
					uni.showToast({
						title: '请选择地址',
						icon: 'none'
					})
					return;
				}
				uni.showLoading({
					title: '提交中...'
				})
				let mrak = this.$refs.marks.value
				home.moveInApply({
					data: {
						type: this.household,
						villageId: this.id[0],
						buildingId: this.id[1],
						apartmentId: this.id[2],
						floorId: this.id[3],
						roomId: this.id[4],
						user_remark: mrak,
						files: this.files
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res => {
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
					   
						const time = setTimeout(() => {
							uni.redirectTo({
								url: '/pages/residence/checkRecord/checkRecord'
							})
							clearTimeout(time)
						}, 2000)
					}),
				})
			},


			loadVillageLists() {
				let that = this;
				// 小区列表
				village.selectLists({
					data: {},
					fail: (err => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					}),
					success: (res) => {
						// console.log(res);
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
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						user.userDeta({
							data: {},
							fail: () => {
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
								if (res.statusCode != 200) return;
								if (res.data.code != 200) return;
								let Users = res.data.data
								this.record[0].value = Users.username
								this.record[1].value = Users.tel.slice(0, 3) + '****' + Users.tel.slice(7, 11)
								if (!Users.id_card_no&&!cache.get('Gshow')) { 
									uni.showModal({
										content: '请完善您的身份信息',
										success: function(res) {
											if (res.confirm) {
												uni.navigateTo({
													url: '/pages/user/realInformation/realInformation'
												})
											} else if (res.cancel) {
												uni.navigateBack({
													delta: 1
												})
											}
										}
									})
									return;
								}
								this.record[2].value = Users.id_card_no.slice(0, 3) + '**********' + Users.id_card_no.slice(Users.id_card_no
									.length - 4, Users.id_card_no.length)
							},

						})
					},
					fail: () => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			},

		},
		mounted() {
			// console.log(obj);
			if(cache.get('Gshow')){
				this.Gshow = cache.get('Gshow')
				this.able = true
			}
			this.loadVillageLists();
		},
		onShow() {
			this.loadUserData()
		},
		onBackPress(e){
			if(!cache.get('Gshow')) return;
			if (e.from == 'backbutton') { 
				uni.showModal({
					content: '您确定要退出新手指导？您也可以到个人中心、关于快通中重新开启',
					success: function (res) {
						if (res.confirm) {
							cache.forget('Gshow')
							uni.navigateBack({
								delta: 1
							});
						} else if (res.cancel) {
							
						}
						
					}
				});
				return true; //阻止默认返回行为
			}
		},
		onLoad() {

		},
		onHide() {
			this.Gshow = 0
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
	.easy {
		width: 160rpx !important;
		height: 60rpx !important;
		font-size: 32rpx !important;
		border: none !important;
		direction: rtl !important;

		/deep/ .uni-input-placeholder {
			font-size: 24rpx;
		}
	}

	.message {

		margin-top: 170rpx;
		width: 644rpx;
		padding-bottom: 40rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		padding-left: 20rpx;
		padding-right: 26rpx;
	}

	.content {
		position: absolute;
		right: 0;
		margin-top: 10rpx;
		padding: 0 20rpx;
		width: 120rpx;
		height: 200rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		border: 1px solid #EEEEEE;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		z-index: 9;
	}

	.itemBox {
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.text {
		height: 69rpx;
		font-size: 30rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;
	}
     
	 .zIndex{
		z-index: 99999;
		background: #FFFFFF; 
	 }
	 
	.item {
		height: 75rpx;
		font-size: 24rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;
		
		/deep/ .u-field {
			padding-left: 20rpx;
		
		}

		/deep/ .uni-input-input {
			width: 425rpx;
			font-size: 24rpx;
		}

		/deep/ .uni-input-placeholder {
			font-size: 24rpx;
		}
	}

	.dv {
		/deep/ .uni-input-input {
			width: 425rpx;
		}
	}

	.righ {
		right: 0;
	}

	.xiala {
		width: 16rpx;
		height: 16rpx;
		margin-right: 15rpx;
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

	.a {
		font-size: 24rpx;

		/deep/ .uni-picker-view-indicator {
			height: 100rpx !important;
		}

		/deep/ .lb-picker-content {
			height: 500rpx !important;
		}
	}

	.move {
		top: 82rpx;
		right: 50rpx;
		position: fixed;
		color: #FFFFFF;
		font-size: 30rpx;
	}

	/deep/ .u-select__body__picker-view__item[data-v-a577ac80] {
		font-size: 24rpx !important;
		text-align: center !important;
	}

	/deep/ .uni-picker-view-indicator {
		height: 88rpx !important;
	}
	
	.guideBox{
	  position: fixed;
	  top: 0;
	  width: 100%;
	  height: 100vh;
	  background: rgba(0,0,0,0.75);  
	  z-index: 999;
	}
    
	.Gitem{
		width: 100%;
		height: 100vh;
	}
	
	.arrowsLU{
		width: 120rpx;
		height: 88rpx;
	}
	
	.Lutext{
		position: absolute;
		left: 50rpx;
		top: 90rpx;
	}
	
	.enclText{
		z-index: 99999;
	}
	
	.llText{
		margin-top: -100rpx;
	}
	
	.leftLower{
		width: 100rpx;
		height: 88rpx;
	}
	
	.pushMsg{
		margin-left: 170rpx;
		margin-top: -40rpx;
	}
</style>
