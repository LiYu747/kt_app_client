<template>
	<view class="back">
		<view class="nav pos-rel flex al-center ju-center">
			<image @click="goback" class="img pos-abs" src="../../../image/login/1729908969cd5d7d911e096d6db3c70.png" mode=""></image>
			<view class="text">
				登录
			</view>
		</view>

		<!-- logo -->
		<view class="logo flex ju-center">
			<image src="../../../image/login/logo.png" class="logoimg" mode=""></image>
		</view>
		<!-- 输入框 -->
		<view class="top flex-d al-center">
			<u-form :model="form" ref="uForm">
				<!-- 手机号 -->
				<u-form-item label="" prop="phone">
					<view class="uiput flex al-center pos-rel">
						<image class="iptimg pos-abs" src="../../../image/login/phone.png" mode=""></image>
						<u-input class="ipt" type="number" :clearable='flag' v-model="form.phone" placeholder="输入手机号" value="" />
					</view>
				</u-form-item>
				<!-- 验证码 -->
				<u-form-item label="" prop="Verification">
					<view class="uiput flex al-center pos-rel">
						<image class="iptimg2 pos-abs" src="../../../image/login/security.png" mode=""></image>
						<u-input class="ipt" type="number" :clearable='flag' v-model="form.Verification" placeholder="输入验证码" />
						<view @click="addvercode" ref='code' :class="{'dv':code===false}" class="vcode pos-abs flex al-center ju-center">
							<view class="tetxs">
								{{text}}
							</view>
						</view>
					</view>
					<u-toast ref="uToast" />
				</u-form-item>
			</u-form>
		</view>

		<!-- 登录按钮 -->
		<view class="flex-d al-center">
			<view @click="Login" class="btn pos-rel flex ju-center al-center">
				<image src="../../../image/login/jbs.png" class="jbsimg" mode=""></image>
				<view class="lgtext pos-abs">
					登录
				</view>
			</view>

			<!-- 找回密码 -->
			<view class="flex al-center retrieve">
				<view @click="find" class="">
					找回密码
				</view>
				<view class="line">

				</view>
				<view @click="register" class="">
					注册账号
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import sms from '../../../vendor/sms/sms.js';
	import userinfo from '../../../vendor/user/userinfo.js'
	import jwt from '../../../vendor/auth/jwt.js';


	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				flag: false,
				text: '获取验证码',
				code: true,
				timer: 60,
				form: {
					phone: '',
					Verification: ''
				},
				rules: {
					phone: [
						// 对name字段进行长度验证
						{
							min: 11,
							max: 11,
							message: '手机号码格式不正确',
							trigger: 'blur'
						},
						// 对name字段进行必填验证
						{
							required: true,
							message: '请输入手机号码',
							trigger: 'blur'
						},
					],
				}
			}
		},
		methods: {
			// 获取验证码
			addvercode() {

				if (this.code != true )  return;
				if( this.form.phone == ''){
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					})
					return;
				}
				uni.showLoading({
					title: '发送中...'
				})
				sms.userLoginCode({
						data: {
							tel: this.form.phone,
						},
						fail: () => {
							uni.hideLoading()
							uni.showToast({
								title: '网络错误',
							})
						},
						success: (res) => {
							// console.log(res);
							// 发送成功
							uni.hideLoading()
							if (res.statusCode != 200) {
								uni.showToast({
									title: '网络请求出错',
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
								})
								this.form.Verification = res.data.data.code
								const authtime = setInterval(() => {
									this.code = false
									this.timer--
									this.text = '验证码' + '(' + this.timer + 's' + ')'
									if (this.timer <= 0) {

										this.timer = 60
										this.text = '重新发送'
										this.code = true
										clearInterval(authtime)
									}
								}, 1000)
						},
					})

			},
			// 返回按钮
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 去注册
			register() {
				uni.navigateTo({
					url: '/pages/user/register/register'
				})
			},
			// 找回密码
			find() {
				uni.showToast({
					title: '功能还未开发',
					duration: 2000,
					icon: "none"
				})
			},
			// 登录
			Login() {
				uni.showLoading({
					title: '加载中...'
				})
				userinfo.Signin({
					data: {
						tel: this.form.phone,
						smsCode: this.form.Verification
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
						})
					},
					success: (res) => {
						uni.hideLoading()
						// console.log(res);
						if (res.statusCode != 200) {
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
							return;
						}

						let info = jwt.parseToken(res.data.data.jwt_token);

						if (!info) return;

						// console.log('login data',info);

						jwt.setToken(res.data.data.jwt_token, info.exp * 1000 - 10000, () => {
							jwt.execTask();
						})
						// 
						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success',
							url: '/pages/user/userCenter/userCenter',
							isTab: true
						})
					},
				})
			}
		},
		mounted() {

		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
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
	.back {
		position: relative;
		background-image: url(../../../image/login/backg.png);
		height: 100vh;
		background-repeat: no-repeat; //不重复
		background-size: 100% 100%; // 满屏
	}

	.nav {
		top: 67rpx;
	}

	.img {
		width: 22rpx;
		height: 41rpx;
		left: 50rpx;
	}

	.text {
		font-size: 18px;
	}

	.logo {
		margin-top: 200rpx;
		width: 100%;
	}

	.logoimg {
		width: 128rpx;
		height: 169rpx;
	}

	.uiput {
		width: 432rpx;
		height: 68rpx;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 34rpx;
		padding: 0 72rpx;
	}

	.ipt {
		/deep/ .uni-input-input {
			color: #FF773C;
			// background: red; 
			font-size: 12px;
			width: 350rpx;
		}

		/deep/ .uni-input-placeholder {
			color: #FF773C !important;
			font-size: 12px;
		}
	}


	.top {
		margin-top: 75rpx;
	}

	.iptimg {
		width: 30rpx;
		height: 30rpx;
		left: 37rpx;
	}

	.iptimg2 {
		width: 30rpx;
		height: 30rpx;
		left: 37rpx;
	}

	.vcode {
		padding: 0 10rpx;
		height: 40rpx;
		border-radius: 22rpx;
		border: 1rpx solid #FF773C;
		right: 27rpx;
		color: #FF773C;
	}

	.tetxs {
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top 2
	}

	.dv {
		background: #FF934E;
		border: none;
		color: #FFFFFF;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top 2
	}

	.btn {
		margin-top: 20rpx;
		width: 576rpx;
		height: 68rpx;
	}

	.jbsimg {
		width: 576rpx;
		height: 68rpx;
		border-radius: 34rpx;
	}

	.lgtext {
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.line {
		width: 1rpx;
		height: 26rpx;
		background: #FF773C;
		margin: 0 28rpx;
	}

	.retrieve {
		color: #FF773C;
		font-size: 12px;
		margin-top: 57rpx;
	}
</style>
