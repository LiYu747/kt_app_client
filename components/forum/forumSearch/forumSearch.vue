<template>
   <view class="">
   	 <subunit titel=""></subunit>
	<view class="location pos-abs flex al-center">
		 <view class="">
		 	<image src="../../../image/home/ss.png" class="img" mode=""></image>
		 </view>
            <input class="ipt" type="text" v-model="keyword" @keydown.enter='enter' placeholder="请搜索小区关键字" value="" />
	</view>
	<view @click="cancel" class="pos-abs rig">
		取消
	</view>
   </view>
</template>

<script>
	import subunit from '../../sub-unit/subunit.vue'
export default {
name: "",
components: {
subunit
},
props: {},
data () {
  return {
	  keyword:''
    }
  },
  methods: {
	  // 取消
   cancel(){
	   uni.navigateTo({
	   	url:'/pages/auth/forum/forum'
	   })
   },
   // 搜索
   enter(){
	   console.log(this.keyword);
   }
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
.location{
	left: 128rpx;
	top: 57rpx;
	width: 494rpx;
	height: 54rpx;
	border-radius: 27rpx;
	background: rgba(255, 255, 255, 0.35);
}
.img{
	width: 34rpx;
	height: 34rpx;
	margin: 0 20rpx;
	
}
.ipt{
  color: #FFFFFF;
  font-size: 24rpx;
}
.uni-input-placeholder{
	 color: rgba(255,255,255,0.8);
}
.rig{
	top: 60rpx;
	right: 51rpx;
	color: #FFFFFF;
	font-size: 30rpx;
}
</style>
