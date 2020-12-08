<template>
  <view class="booy flex al-center ju-center">
  	<view class=" flex-d al-center" @click="add(item)" v-for="(item,index) in icondata"  :key='item.id' >
  	        <image :class="{'oic2':index==1}" :src="item.icon" class="oic1" mode=""></image>
			 <view :class="{'calor':index==0}" class="itemtext">
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
props: {
	id:{
		type:String
	}
}, 
data () {
  return {
	  icondata:[ 
		  {
		  icon:require('@/image/forum/home2.png'),
		  titel:'论坛主页',
		  },
		  {
			 icon:require('@/image/forum/photo1.png'),
		    url:`/pages/communityForum/release/release?id=${this.id}`
		  },
		  {
		  icon:require('@/image/forum/my1.png'),
		  titel:'我的',
		  url:`/pages/communityForum/myforum/forum?id=${this.id}`
		  },
		  ],

    }
  },
  methods: {
  add(item,index){
	  this.$emit('add',index)
	  uni.redirectTo({
	  	url:item.url
	  })
	  console.log(item.url);
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
	color: #a6a6a6;
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
	width: 150rpx;
	height: 150rpx;
	margin-left: 100rpx;
	margin-right: 130rpx;
}
.itemtext{
	font-size: 26rpx;
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

.calor{
		color: #F95454;
}
</style>
