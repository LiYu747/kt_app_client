<template>
  <view class="box">
  	<view class="nav pos-rel flex ju-center al-center">
		 	<image v-if="retur === true" @click="goback" src="../../image/login/1729908969cd5d7d911e096d6db3c70.png" class="reimg pos-abs" mode=""></image>
  		{{titel}}
		<view ref='lll' class="pos-abs location">
			<image  :class="{'dv':rotateTimes%2===0}"  :src="image" @click="push" class="setimg" mode=""></image>
		</view>
  	</view>
  </view>
</template>

<script>
	 
export default {
name: "",
components: {

},
props: {
	retur:{
		type:Boolean,
		default:true
	},
	titel:{
		type:String,
	    default:'标题'
	},
	image:{
	type:String,
		}
},
data () {
  return {
	  rotateTimes:1
    }
  },
  methods: {
  push(){
	  this.$emit('add',this.rotateTimes)
	  this.rotateTimes++
	  },
	 goback(){
		 uni.navigateBack({
		 	delta:1
		 })
	 }
  },
  mounted () {

  },
  onShow() {
  	
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
.box{
	width: 100%;
	height: 148rpx;
	background: #F07535;
}
.nav{
	top: 60rpx;
	height: 88rpx;
font-size: 36rpx;
		color: #FFFFFF;
}
.setimg{
		width: 40rpx;
		height: 40rpx;
	}
	.location{
		right: 50rpx;
	}
	.dv{
		transform:  rotate(45deg);
	}
	.reimg{
		width: 22rpx;
		height: 41rpx;
		left: 50rpx;
	}
</style>
