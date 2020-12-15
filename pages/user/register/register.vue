<template>
	<view class="back">
		<view class="nav pos-rel flex al-center ju-center">
			<image @click="goback" class="img pos-abs" src="../../../image/login/fanhui.png" mode=""></image>
			<view class="text">
				注册
			</view>
		</view>

		<!-- logo -->
		<view class="logo flex ju-center">
			<image src="../../../image/login/logo.png" class="logoimg" mode=""></image>
		</view>
		<!-- 输入框 -->
		<view class="top flex-d al-center">
			<u-form :model="form" ref="uForm">
				<!-- 昵称-->
				<u-form-item label="" class="postop" prop="nickname">
					<view class="uiput flex al-center pos-rel">
						<image class="nameimg pos-abs" src="../../../image/register/my.png" mode=""></image>
						<u-input class="ipt" :clearable='flag' v-model="form.nickname" placeholder="昵称" />
					</view>
				</u-form-item>
				<!-- 姓名-->
				<u-form-item label="" class="postop" prop="name">
					<view class="uiput flex al-center pos-rel">
						<image class="nameimg pos-abs" src="../../../image/register/my.png" mode=""></image>
						<u-input class="ipt" :clearable='flag' v-model="form.name" placeholder="真实姓名" />
					</view>
				</u-form-item>
				<!-- 身份证号 -->
				<u-form-item label="" class="postop" prop="idcard">
					<view class="uiput flex al-center pos-rel">
						<image class="idcardimg pos-abs" src="../../../image/register/card.png" mode=""></image>
						<u-input class="ipt" :clearable='flag' v-model="form.idcard" placeholder="身份证号码" />
					</view>
				</u-form-item>
				<!-- 上传证件照-->
				<u-form-item label="" class="postop" prop="idphoto">
					<view class="uiput flex al-center pos-rel">
						<image class="idptimg pos-abs" src="../../../image/register/photo.png" mode=""></image>
						<u-input class="ipt" :disabled="true" :clearable='flag' v-model="form.idphoto" placeholder="上传人像照片" />
						<view v-if="toot == false" @click="upload" class="upload pos-abs">
							上传
						</view>
						<view v-else @click="preview" class="upload pos-abs">
							预览
						</view>
					</view>
				</u-form-item>
				<!-- 手机号 -->
				<u-form-item class="postop" label="" prop="phone">
					<view class="uiput flex al-center pos-rel">
						<image class="iptimg pos-abs" src="../../../image/login/phone.png" mode=""></image>
						<u-input class="ipt" type="number" :clearable='flag' v-model="form.phone" placeholder="手机号" />
					</view>
				</u-form-item>
				<!-- 验证码 -->
				<u-form-item class="postop" label="" prop="Verification">
					<view class="uiput flex al-center pos-rel">
						<image class="iptimg2 pos-abs" src="../../../image/login/security.png" mode=""></image>
						<u-input class="ipt" type="number" :clearable='flag' v-model="form.Verification" placeholder="验证码" />
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

		<!-- 注册按钮 -->
		<view class="flex-d al-center">
			<view @click="register" class="btn pos-rel flex ju-center al-center">
				<image src="../../../image/login/jbs.png" class="jbsimg" mode=""></image>
				<view class="lgtext pos-abs">
					注册
				</view>
			</view>
		</view>

		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="../../../image/address/loading.gif" mode=""></image>
				</view>
				上传中
			</view>
		</view>
	</view>
</template>

<script>
	import userinfo from '../../../vendor/user/userinfo.js'
	import sms from '../../../vendor/sms/sms.js'
	import route from '../../../vendor/request/routes.js'
	import cache from '../../../vendor/cache/cache.js'
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				flag: false, //验证码变量
				toot: false, //预览变量
				text: '获取验证码',
				code: true, //验证码按钮
				timer: 60, //倒计时时间
				avatar: 'https://oss.kuaitongkeji.com/static/img/avatar/male_64.png', //用户头像
				photo: '', //证件照
				form: {
					nickname: '',
					name: '',
					phone: '',
					Verification: '',
					idcard: ''
				},
				isLoding: false //上传照片 
			}
		},
		methods: {
			// 获取验证码
			addvercode() {
				if (this.code != true) return;
				if (this.form.phone == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					})
					return;
				}
				uni.showLoading({
					title: '加载中...'
				})
				sms.userRegCode({
					data: {
						tel: this.form.phone
					},
					fail: () => {
						this.isLoding = false;
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
			// 注册
			register() {
				if (this.isLoding == true) return;
				if( this.form.nickname == ''){
					uni.showToast({
					title:'请输入昵称',
					icon:'none'
					})
					return;
				}
				if( this.form.name == ''){
					uni.showToast({
					title:'请输入姓名',
					icon:'none'
					})
					return;
				}
				if( this.form.idcard == ''){
					uni.showToast({
					title:'请输入身份证',
					icon:'none'
					})
					return;
				}
				if( this.form.phone == ''){
					uni.showToast({
					title:'请输入手机号',
					icon:'none'
					})
					return;
				}
				if( this.form.Verification == ''){
					uni.showToast({
					title:'请输入验证码',
					icon:'none'
					})
					return;
				}
				uni.showLoading({
					title: '加载中...'
				})
				userinfo.register({
					data: {
						tel: this.form.phone,
						smsCode: this.form.Verification,
						nickname: this.form.nickname,
						username: this.form.name,
						idCardNo: this.form.idcard,
						avatar: this.avatar,
						faceimg: this.photo,
						sex: 1
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
							this.$refs.uToast.show({
								title: res.data.msg,
								type: 'error',
								icon: false
							});
							return;
						}

						this.$refs.uToast.show({
							title: res.data.msg,
							type: 'success',
							url: `/pages/auth/login/login?register=${true}`
						});

						// console.log(res);
					},

				})
			},
			// 返回按钮
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 上传
			upload() {
				cache.forget('photo')
				this.$u.route({
					// 关于此路径，请见下方"注意事项"
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					// 内部已设置以下默认参数值，可不传这些参数
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 250,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 250,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			// 预览
			preview() {
				uni.navigateTo({
					url: `/pages/user/register/headSculpture`
				})
			}
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.isLoding = true
				// 可以在此上传到服务端
				uni.uploadFile({
					url: route.services.file.upload,
					filePath: path,
					name: 'file',
					complete: (res) => {
						this.isLoding = false;
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络请求出错',
								icon: 'none'
							});
							return;
						}

						let data = JSON.parse(res.data)

						if (data.code != 200) {
							uni.showToast({
								title: data.msg,
								icon: 'none'
							});
							return;
						}
						uni.showToast({
							title: '上传成功',
							icon: 'none'
						})
						// console.log(res);
						this.photo = data.data.url
						cache.set('photo', data.data.url)
						this.toot = true
					}
				});
			})
		},
		mounted() {

		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onShow() {
			if (cache.get('photo')) {
				this.photo = cache.get('photo')
				// console.log(this.photo);
			}
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
		font-size: 36rpx;
		color: #FF773C;
		opacity: 0;
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
			font-size: 12px;
			// background: red;
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

	.nameimg {
		width: 30rpx;
		height: 30rpx;
		left: 33rpx;
	}

	.idcardimg {
		left: 33rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.idptimg {
		width: 30rpx;
		height: 30rpx;
		left: 35rpx;
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

	.upload {
		right: 27rpx;
		color: #FF773C;
		font-size: 24rpx;
	}

	.postop {
		margin-top: -20rpx;
	}

	.showloding {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		color: #FFFFFF;
	}

	.loimg {
		width: 50rpx;
		height: 50rpx;
	}

	.loding {
		width: 260rpx;
		height: 200rpx;
		background: rgba(88, 88, 88, 0.8);
	}
</style>
