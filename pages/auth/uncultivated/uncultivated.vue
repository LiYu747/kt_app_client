<template>
  <view class="flex-d al-center">
  	<subunit :retur="true" :titel="titel" @goback='goback'></subunit>
	<view class="pack flex-d al-center">
		 <view class="text">
		 	正在开发中... ...
		 </view>
		 <image src="../../../image/visit/wkf.png" class="wkfimg" mode=""></image>
	</view>
  </view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
export default {
name: "",
components: {
subunit
},
props: {
	
},
data () {
  return {
	  titel:''
    }
  },
  methods: {
   // 返回
   goback(){
	   uni.navigateBack({
	   	delta:1
	   })
   }
  },
  mounted () {

  },
  onLoad (val) {
	  // 接受首页分类传来的标题
   this.titel = val.titel
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
.pack{
	width: 498rpx;
	height: 526rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin-top: 276rpx;
}
.wkfimg{
	margin-top: 77rpx;
	width: 481rpx;
	height: 260rpx;
}
.text{
	margin-top: 97rpx;
	font-size: 36rpx;
	color: #F07535;
}
</style>
