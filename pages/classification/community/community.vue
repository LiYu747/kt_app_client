<template>
    <view class="">
    	<subclass titel='社区政务'></subclass>
		<view class="flex-d al-center">
			<view class="simulation">
				以下均为模拟数据
			</view>
			<image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/logo1.png" class="topback" mode=""></image>
			<view class="conbox flex">
					<view class="content">
						<view class="Recharge flex al-center ju-center pos-rel">
							<view class="rechtext pos-abs">
								充值中心
							</view>
							<image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/Recharge.png" class="Rechargeimg" mode=""></image>
						</view>
						
						<view class="police flex al-center ju-center pos-rel">
							<view class="rechtext pos-abs">
								公安交管
							</view>
							<image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/police.png" class="policeimg" mode=""></image>
						</view>
					</view> 
					<view class="rigcontent flex-d">
						  <view class="fund flex al-center ">
						  	  <image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/fund.png" class="fundimg" mode=""></image>
							  <view class="">
							  	公积金
							  </view>
						  </view>
						  <view class="security flex al-center ">
						  	<image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/security.png" class="securityimg" mode=""></image>
						  	<view class="">
						  		社保
						  	</view>
						  </view>
						  <view class="service flex al-center "> 
						  	<image src="https://oss.kuaitongkeji.com/static/img/app/classification/community/service.png" class="serviceimg" mode=""></image>
						  	<view class="">
						  		社保
						  	</view>
						  </view>
					</view>
				</view>
		</view>
    </view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
export default {
name: "",
components: {
subclass
},
props: {},
data () {
  return {
    }
  },
  methods: {

  },
  mounted () {

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
.topback{
	width: 690rpx;
	height: 290rpx;
	margin: 30rpx 0;
}
.conbox{
	width: 100%;
}

.content{
	margin-left: 30rpx;
}
.Recharge{
	width: 335rpx;
	height: 320rpx;
	background: #4EB6E6;
	border-radius: 10rpx;
}
.rechtext{
	font-size: 40rpx;
	color: #FFFFFF;
	top: 27rpx;
	left: 20rpx;
	
}
.Rechargeimg{
		margin-top: 30rpx;
	width: 124rpx;
	height: 124rpx;
}

.police{
	margin-top: 20rpx;
	width: 335rpx;
	height: 320rpx;
	background: #40BDB4;
	border-radius: 10rpx;
}
.policeimg{
	margin-top: 30rpx;
	width: 122rpx;
	height: 140rpx;
}
.rigcontent{
	margin-left: 20rpx;
	font-size: 40rpx;
	color: #FFFFFF;
}
.fund{
	width: 335rpx;
	height: 206rpx;
	background: #E85C49;
	border-radius: 10rpx;
}

.fundimg{
	margin-right: 30rpx;
	width: 90rpx;
	height: 85rpx;
	margin-left: 38rpx;
}

.security{
	margin-top: 20rpx;
	width: 335rpx;
	height: 206rpx;
	background: #F59038;
	border-radius: 10rpx;
}
.securityimg{
	width: 88rpx;
	height: 108rpx;
	margin-right: 30rpx;
	margin-left: 38rpx;
}
.service{
	margin-top: 20rpx;
	width: 335rpx;
	height: 206rpx;
	background: #A995DD;
	border-radius: 10rpx;
}

.serviceimg{
	width: 98rpx;
	height: 89rpx;
	margin-right: 30rpx;
	margin-left: 38rpx;
}

.simulation{
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #b3b3b3;
}
</style>
