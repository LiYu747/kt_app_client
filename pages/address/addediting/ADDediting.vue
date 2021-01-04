<template>
	<view class="flex-d al-center">
		<subunit titel="地址详情" class="fixed"> </subunit>
		<view class="topLine">
			
		</view>
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
        
		<view class="memberBox">
			<view class="memberTil flex al-center ju-between">
				成员
			<image @click="pushMember" src="https://oss.kuaitongkeji.com/static/img/app/forum/pushtag.png" class="pushtagimg" mode=""></image>
			</view>
			<view class="">
				<view class="itemBox flex ju-between al-center"
				 @click="memberInfo(item)"
				  :class="{'itemBtm':index==Members.length-1}"
				   v-for="(item,index) in Members" :key='item.id'>
					<view class="">
						<view class="flex">
							姓名
							<view v-if='item.own_user' class="m-l2">
								{{item.own_user.username}}
							</view>
						</view>
						<view class="flex m-t2">
							手机号码
							<view v-if='item.own_user' class="m-l2">
								{{item.own_user.tel}}
							</view>
						</view>
					</view>
					<view class="">
						<image class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 提交 -->
		<view class="pos-rel m-t4 bot flex al-center ju-center" @click="Submit">
			<image class="Submit" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
			<view class="pos-abs subtext">
				提交
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
						label: '入住身份',
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
				id: '',
				Members:[],//所有成员 
				typeid:''//用户类型
			}
		},
		methods: {
			// 添加成员
			pushMember(){
				uni.navigateTo({
					url:'/pages/address/addediting/pushMember/pushMember?addressid=' + this.id + '&typeid=' + this.typeid
				})
			},
			// 用户成员详情信息
			memberInfo(item){
				console.log(item);
				uni.navigateTo({
					url:'/pages/address/addediting/memberInfo/memberInfo'
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
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
							uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: 'none'
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
						// console.log(res.data.data);
						let data = res.data.data
						this.typeid = data.type
						if (data.type == 1) {
							this.parameter[2].value = '户主'
						}
						if (data.type == 2) {
							this.parameter[2].value = '家庭成员'
						}
						if (data.type == 3) {
							this.parameter[2].value = '租户'
						}
						this.parameter[3].value = data.own_village.name
						this.parameter[4].value = data.own_building.name + data.own_apartment.name + data.own_floor.name + data.own_room.room_number
					}
				})
			},

             //查看住所内的所有成员
			  allMembers(){
				  uni.showLoading({
				  	titel:'加载中'
				  })
				 address.lookMember({
					 data:{
						 id:this.id
					 },
					 fail: () => {
					 	uni.hideLoading()
					 	uni.showToast({
					 		title: '网络错误',
					 		icon: 'none'
					 	})
					 },
					 success: (res) => {
						 uni.hideLoading()
						 if (res.statusCode != 200) {
						 	uni.showToast({
						 		title: '网络出错了',
						 		icon: 'none'
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
						 let data = res.data.data
						 this.Members = data
						 console.log(data);
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
			this.allMembers()
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
	.fixed{
		position: fixed;
		z-index: 9;
	}
	.topLine{
		height: 148rpx;
	}


	.content {
		margin-top: 40rpx;
		width: 650rpx;
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		box-shadow: 2rpx 2rpx 6rpx 1rpx #d9d9d9;
	}

	.fied {
		width: 100%;
		height: 80rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		color: #666666;

		/deep/ .u-field {
			width: 100%;
			padding: 0;
		}
	}

	.line {
		width: 100%;
		height: 1px;
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


	.pretext {
		font-size: 30rpx;
		color: #FFFFFF;
	}
	
	.memberBox{
		margin-top: 40rpx;
		width: 650rpx;
		border-radius: 10rpx;
		padding: 20rpx;
		background: #FFFFFF;
		box-shadow: 2rpx 2rpx 6rpx 1rpx #d9d9d9;
		font-size: 15px;
			color: #666666;
		padding-bottom: 30rpx;
	}
	.memberTil{
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.pushtagimg {
		width: 40rpx;
		height: 40rpx;
	}
	
	.itemBox{
		padding: 20rpx 0;
		border-bottom: 1px solid #CCCCCC;
		font-size: 14px;
	}
	
	.reimg {
		width: 18rpx;
		height: 28rpx; 
		margin-right: 10rpx;
	}
	
	.itemBtm{
		border-bottom: none;
	}
	
	.Submit {
		width: 358rpx;
		height: 68rpx;
	}
	
	.subtext {
		font-size: 30rpx;
		color: #FFFFFF;
	}
	.bot{
		margin-bottom: 40rpx;
	}
</style>
