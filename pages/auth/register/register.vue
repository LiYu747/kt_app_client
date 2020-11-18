<template>
	<view class="back">
		<view class="nav pos-rel flex al-center ju-center">
			<image @click="goback" class="img pos-abs" src="../../../image/login/1729908969cd5d7d911e096d6db3c70.png" mode=""></image>
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
						<u-input class="ipt"  :clearable='flag' v-model="form.nickname" placeholder="昵称" />
					</view>
				</u-form-item>
				<!-- 姓名-->
				<u-form-item label="" class="postop" prop="name">
					<view class="uiput flex al-center pos-rel">
						<image class="nameimg pos-abs" src="../../../image/register/my.png" mode=""></image>
						<u-input class="ipt"  :clearable='flag' v-model="form.name" placeholder="姓名" />
					</view>
				</u-form-item>
				<!-- 身份证号 -->
				<u-form-item label="" class="postop" prop="idcard">
					<view class="uiput flex al-center pos-rel">
						<image class="idcardimg pos-abs" src="../../../image/register/card.png" mode=""></image>
						<u-input class="ipt"  :clearable='flag' v-model="form.idcard" placeholder="身份证号码" />
					</view>
				</u-form-item>
				<!-- 上传证件照-->
				<u-form-item label="" class="postop" prop="idphoto">
					<view class="uiput flex al-center pos-rel">
						<image class="idptimg pos-abs" src="../../../image/register/photo.png" mode=""></image>
						<u-input class="ipt" :disabled="true"  :clearable='flag' v-model="form.idphoto" placeholder="上传免冠正面照" />
						<view @click="upload" class="upload pos-abs">
							上传
						</view>
					</view>
				</u-form-item>
				<!-- 手机号 -->
				<u-form-item  class="postop" label="" prop="phone">
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
	
	</view>
</template>

<script>
	import userinfo from '../../../vendor/user/userinfo.js'
	import sms from '../../../vendor/sms/sms.js'
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
					nickname:'',
					name:'',
					phone: '',
					Verification: '',
					idcard:''
				},
			}
		},
		methods: {
			// 获取验证码
			addvercode() {
				if (this.code === true) {
					sms.userRegCode({
						data:{tel:this.form.phone},
						success: (res) => {
							console.log(res);
							if(res.data.code===200){
								this.$refs.uToast.show({
									title: res.data.msg,
								})
								this.form.Verification = res.data.data.code
								const authtime = setInterval(() => {
									this.code = false
									this.timer--
									this.text = '验证码'+'('+this.timer +'s'+')' 
									if (this.timer <= 0) {
								
										this.timer = 60
										this.text = '重新发送'
										this.code = true
										clearInterval(authtime)
									}
								}, 1000)
							}
							else{
								this.$refs.uToast.show({
									title: res.data.msg,
								})
							}
						},
						fail: (err) => {
							console.log(err);
							}
					})
				}
			},
			// 注册
			register(){
			userinfo.register({
				data:{
					tel:this.form.phone,
					smsCode:this.form.Verification,
					nickname: this.form.nickname,
					username:this.form.name,
					idCardNo:this.form.idcard
				},
		      success: (res) => {
				  if(res.data.code===200){
					  this.$refs.uToast.show({
					  					title: res.data.msg,
					  					type: 'success',
										url:'/pages/auth/login/login'
					  				})
				  }
				  else{
					  this.$refs.uToast.show({
					  					title: res.data.msg,
					  					type: 'error',
										icon:false
					  				})
				  }
				  console.log(res);
			  },
			 fail: (err) => {
				 console.log(err);
			 }
				})	
	},
			// 返回按钮
			goback(){
				uni.navigateBack({
					delta:1
				})
				},
			// 上传
		  upload(){
			uni.navigateTo({
				url:'/pages/auth/preview/preview'
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
		background-image: url(../../../image/login/back.png);
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
		color: #FFFFFF;
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
		background: rgba(191, 191, 191, 0.3);
		border-radius: 34rpx;
		padding: 0 72rpx;
	}

	.ipt {
		/deep/ .uni-input-input {
			color: #FFFFFF;
			// background: red;
			width: 304rpx;
		}
      /deep/
      .uni-input-placeholder{
        color: #FFFFFF!important;
      }
	}

	.top {
		margin-top: 75rpx;
	}
  .nameimg{
	  width: 29rpx;
	  height: 28rpx;
	  left: 33rpx;
  }
  .idcardimg{
	  left: 33rpx;
	  width: 30rpx;
	  height: 22rpx;
  }
  .idptimg{
	  width: 26rpx;
	  height: 26rpx;
	  left: 35rpx;
  }
	.iptimg {
		width: 19rpx;
		height: 30rpx;
		left: 37rpx;
	}

	.iptimg2 {
		width: 24rpx;
		height: 30rpx;
		left: 37rpx;
	}

	.vcode {
		padding: 0 10rpx;
		height: 40rpx;
		border-radius: 22rpx;
		border: 1rpx solid #E6E6E6;
		right: 27rpx;
		color: #E6E6E6;


	}

	.tetxs {
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top 2
	}
	
	.dv{
		background: #FF934E;
		border: none;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top 2
	}
	
	.btn{
		margin-top: 20rpx;
		width: 576rpx;
		height: 68rpx;
	}
	.jbsimg{
		width: 576rpx;
		height: 68rpx;
		border-radius: 34rpx;
	}
	
	.lgtext{
		font-size: 30rpx;
		color: #FFFFFF;
		}
	
	.upload{
		right: 27rpx;
		color: #F07535;
		font-size: 24rpx;
	}
	.postop{
		margin-top: -20rpx;
		}
</style>
