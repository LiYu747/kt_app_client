<template>
  <view class="booy flex al-center ju-center">
  	<view class="" v-for="(item,index) in icondata"  :key='item.id' >
  	<view  class="flex-d al-center" v-show="index===one||index===two||index===three">
  			<image @click="add(index)" :class="{'oic1':index===0||index===1,'oic2':index===2||index===3,'oic3':index===4||index==5}" :src="item.icon" mode=""></image>
			<view @click="add(index)" class="sff" :class="{'top':index===2||index===3,'calor':index===1||index===5}">
				{{item.titel}}
			</view>
  	</view>
	
  	</view>
  </view>
</template>

<script>
export default {
name: "",
components: {
  
},
props: {},
data () {
  return {
	  icondata:[
		  {icon:require('@/image/forum/home1.png'),
		  titel:'主页'},
		  {icon:require('@/image/forum/home2.png'),
		  titel:'主页'},
		  {icon:require('@/image/forum/photo1.png'),
		  },
		  {icon:require('@/image/forum/photo2.png'),
		},
		  {icon:require('@/image/forum/my1.png'),
		  titel:'我的'},
		  {icon:require('@/image/forum/my2.png'),
		  titel:'我的'},
		  ],
		  one:1,
		  two:2,
		  three:4
    }
  },
  methods: {
  add(index){
	  this.$emit('add',index)
	  if(index===0){
		  this.one = 1
		  this.two = 2
		  this.three = 4
	  }
	  if(index===2){
		  this.one = 0
		  this.two = 3
		  this.three =4
	  }
	  if(index===4){
		  this.one = 0
		  this.two = 2
		  this.three =5
	  }
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
.booy{
	width: 100%;
	height: 110rpx;
	position: fixed;
	background: #FFFFFF;
	bottom: 0;
	box-shadow: -4rpx 0  4rpx #cccccc;
}
.oic1{
	width: 42rpx;
	height: 48rpx;
}
.oic2{
	position: relative;
	top: -28rpx;
	width: 140rpx;
	height: 140rpx;
	margin-left: 159rpx;
	margin-right: 148rpx;
}
.oic3{
	width: 41rpx;
	height: 44rpx;
}
.top{
	position: relative;
	top: -90rpx;
	font-size: 18rpx;
}
.sff{
	margin-top: 5rpx;
	-webkit-transform: scale(0.9);
	-webkit-transform-origin: 2
}
.calor{
		color: #F95454;
}
</style>
