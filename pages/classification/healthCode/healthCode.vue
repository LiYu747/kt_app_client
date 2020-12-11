<template>
    <view class="">
    	<subclass titel="健康码" :showmap='false'></subclass>
		  
		<view class=" flex-d al-center">
			 <view class="simulation">
			 	以下均为模拟数据
			 </view>
			<view class="content flex-d al-center">
				<view class="time">
					{{timer}}
				</view>
				<view class="boxs">
					<view class="qrimg">
						<tki-qrcode cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground"
						 :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :showLoading='false' :onval="onval" :loadMake="loadMake"
						 :usingComponents="true" />
					</view>
				</view>
			  <view class="text">
			  	<view class="username">
			  		姓名：{{username}}
			  	</view>
			  	<view class="IDcard m-t1">
			  		身份证号：{{IDcard}}
			  	</view>
			  	<view class="address m-t1">
			  		
			  	</view>
			  </view>
			</view>
		</view>
    </view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
	import tkiQrcode from "../../../components/qrcode/tki-qrcode/tki-qrcode.vue"
	import route from '../../../vendor/request/routes.js'
	import jwt from '../../../vendor/auth/jwt.js'
	import user from '../../../vendor/user/userDetails.js'
export default {
name: "",
components: {
subclass,
tkiQrcode
},
props: {},
data () {
  return {
	  val: route.host + '?_t=675679454564354356', // 要生成的二维码值 
	  size: 500, // 二维码大小
	  unit: 'upx', // 单位
	  background: '#ffffff', // 背景色
	  foreground: '#057C0B', // 前景色
	  pdground: '#057C0B', // 角标色
	  icon: '', // 二维码图标
	  iconsize: 40, // 二维码图标大小
	  lv: 2, // 二维码容错级别 ， 一般不用设置，默认就行
	  onval: true, // val值变化时自动重新生成二维码
	  loadMake: true, // 组件加载完成后自动生成二维码
	  username:'',
	  IDcard:'',
	  timer:''
    }
  },
  methods: {
	  // 获取当前时间
	  getTime(){
		  var date = new Date(),
		  year = date.getFullYear(),
		  month = date.getMonth() + 1,
		  day = date.getDate(),
		  hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		  minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		  second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		  month >= 1 && month <= 9 ? (month = "0" + month) : "";
		  day >= 0 && day <= 9 ? (day = "0" + day) : "";
		   this.timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
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
     				fail: () => {
     					uni.hideLoading()
     					uni.showToast({
     						title: '网络错误',
     						icon:'none'
     					})
     				},
     				success: (res) => {
     					uni.hideLoading()
     					if (res.statusCode != 200) return;
     					if (res.data.code != 200) return;
     					let Users = res.data.data
						// console.log(Users);
     					this.username = Users.username
     					this.IDcard = Users.id_card_no.slice(0,3) + '**********' + Users.id_card_no.slice(Users.id_card_no.length-4,Users.id_card_no.length)
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
  mounted () {

  },
  onShow() {
  	this.loadUserData()
	this.getTime()
  },
  onLoad () {

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
.content{
	margin-top: 30rpx;
	width: 690rpx;
	height: 852rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}
.cordimg{
	width: 490rpx;
	height: 490rpx;
}
.time{
	margin-top: 60rpx;
	margin-bottom: 40rpx;
	font-size: 30rpx;
	color: #000000;
}
.text{
	margin-top: 20rpx;
	color: #333333;
	font-size: 24rpx;
}
.simulation{
	margin-top: 20rpx;
	font-size: 30rpx;
	color: #b3b3b3;
}
</style>
