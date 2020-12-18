<template>
    <view class="">
    	<subunit titel='快通信息'></subunit>
		<view class="tabar flex al-center">
			关于
			<view class=" flex al-center pos-abs posrigth">
				 <view class="">
				 	版本号 {{version}} 
				 </view>
				<image src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png"  class="abimg" mode=""></image>
			</view>
		</view>
    </view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import clients from '../../../vendor/clients/clients.js'
export default {
name: "",
components: {
subunit
},
props: {},
data () {
  return {
	  version:'' //版本号
    }
  },
  methods: {
	  // 获取当前版本号
  getVersion(){
	    this.version =  clients.version
		clients.askUpdateClient()
  }
  },
  mounted () {

  },
  onShow() {
  	this.getVersion()
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
.marg{
	margin: 40rpx;
	font-size: 28rpx;
	color: #666666;
}

.tabar {
	color: #666666;
	margin-top: 40rpx;
    width: 100%;
	height: 80rpx;
	padding: 0 30rpx; 
	border-bottom: 1rpx solid #eeeeee;
	background: #ffffff;
}

.abimg{
	width: 20rpx;
	height: 25rpx; 
	margin-left: 20rpx; 
}
.posrigth{
	right: 30rpx;
	font-size: 24rpx;
	color: #666666;
}
</style>