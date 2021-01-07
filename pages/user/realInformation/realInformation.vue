<template>
	<view>
		<subunit titel='实名信息' class="fixed"></subunit>
		<view class="topLine">

		</view>
		<view class="flex-d al-center">
			<view class="contenBox">
				<view class="flex al-center ju-between itemBox pos-rel" @click="settingPsw(index)" v-for=" (item,index) in locdata" :key='item.id'>
					<view class="">
						{{item.label}}
					</view>
					<view class="">
						<input type="text" class="ipt" :focus="item.focus" :disabled="item.disabled" :placeholder="item.placeholder"
						 v-model="item.value" />
					</view>
					<view v-if="index==2" class="pos-abs rigth">
						<image class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
					</view>
				</view>
			</view>

			<!-- 保存 -->
			<view @click="save" class="flex al-center ju-center save">
				<image src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" class="enimg" mode=""></image>
				<view class="pos-abs">
					保存
				</view>
			</view>

			<!-- 退出登录 -->
			<view @click="logOut" class="end flex al-center ju-center">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import user from '../../../vendor/user/userDetails.js'
	import jwt from '../../../vendor/auth/jwt.js';
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				idcard:'',//身份证信息
				originalId:'',//原数据
				locdata: [{
						label: '真实姓名',
						value: ''
					},
					{
						label: '身份证号',
						value: '',
						focus: false,
						placeholder: '请输入您的身份证号'
					},
					{
						label: '设置新密码',
						value: '',
						disabled:true
					},
				]
			}
		},
		methods: {
			
			// 设置密码
			settingPsw(index){
				if(index != 2) return;
				uni.navigateTo({
				 url:'/pages/user/realInformation/setPassword/setPassword'	
				})
			},

			//保存
			save() {
				let idcard = ''
				if(this.locdata[1].value == this.idcard){
					idcard = this.originalId
				}
				else{
					idcard = this.locdata[1].value
				}
				uni.showLoading({
					title:'加载中'
				})
				user.updataRealname({
					data: {
						username: this.locdata[0].value,
						id_card_no:idcard
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
						};
						uni.showToast({
							title: res.data.msg,
						})
					}
				})
			},
			// 退出登录
			logOut() {
				uni.showModal({
					content: '您确定要退出吗',
					success: (res => {
						if (res.confirm) {
							jwt.flush({
								success: () => {
									uni.navigateBack({
										delta: 1
									})
								}
							});
						}
					})
				})
			},
			//用户信息
			getUserinfo() {
				uni.showLoading({
					title:'加载中'
				})
				user.userDeta({
					data: {},
					fail: () => {
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
						this.locdata[0].value = Users.username
						if (!Users.id_card_no) {
							this.locdata[1].focus = true
							return;
						}
						this.locdata[1].value = Users.id_card_no.slice(0, 3) + '**********' + Users.id_card_no.slice(Users.id_card_no.length -
							4, Users.id_card_no.length)
						this.idcard = 	 Users.id_card_no.slice(0, 3) + '**********' + Users.id_card_no.slice(Users.id_card_no.length -
							4, Users.id_card_no.length)
						this.originalId = 	Users.id_card_no
					},

				})
			}
		},
		mounted() {

		},
		onShow() {
			this.getUserinfo()
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
	.fixed {
		position: fixed;
	}

	.topLine {
		height: 148rpx;
	}

	.contenBox {
		margin-top: 50rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		color: #666666;
		padding-bottom: 50rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		font-size: 15px;
	}

	.itemBox {
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.ipt {
		width: 400rpx;
		text-align: right;
		font-size: 15px;
	}

	.rigth {
		right: 20rpx;
	}

	.reimg {
		width: 18rpx;
		height: 25rpx;
	}

	.uni-input-placeholder {
		font-size: 14px;
		color: #999999;
	}

	.end {
		margin-top: 50rpx;
		width: 358rpx;
		height: 75rpx;
		border-radius: 30rpx;
		background: #FFFFFF;
		color: red;
	}

	.enimg {
		width: 358rpx;
		height: 68rpx;
	}

	.save {
		margin-top: 50rpx;
		color: #FFFFFF;
	}
</style>
