<template>
    <div>
        <view class="box flex flex-w">
        	<view class="flex-d al-center loyout ju-around" v-for="(item,index) in locdata" :key='index' @click="goclass(item)">
        		   <image :src="item.image" class="itemimg" mode=""></image>
				   <view class="  text">
				   	{{item.titel}}
				   </view>
        	</view>
        </view>
    </div>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
	  locdata:
		  [{
		  		image: require('@/image/home/cz/jkcode.png'),
		  		titel: '健康码',
				url:'/pages/classification/healthCode/healthCode'
		  	},
		  	{
		  		image: require('@/image/home/cz/yl.png'),
		  		titel: '医疗健康',
				url:'/pages/classification/healthCare/healthCare'
		  	},
		  	{
		  		image: require('@/image/home/cz/supermarket.png'),
		  		titel: '便利超市',
				url:'/pages/classification/supermarket/supermarket'
		  	},
		  	{
		  		image: require('@/image/home/cz/motion.png'),
		  		titel: '运动',
				url:'/pages/classification/motion/motion'
		  	},
			{
				image: require('@/image/home/cz/food.png'),
				titel: '美食',
				url:'/pages/classification/deliciousFood/deliciousFood'
			},
			{
				image: require('@/image/home/cz/traffic.png'),
				titel: '交通出行',
				url:'/pages/classification/travel/travel'
			},
			{
				image: require('@/image/home/cz/neighbor.png'),
				titel: '友邻',
				url:`/pages/communityForum/forumlists/forumlists?id`
			},
			{
				image: require('@/image/home/cz/car.png'),
				titel: '车辆',
				url:'/pages/classification/vehicle/vehicle'
			},
			{
				image: require('@/image/home/cz/home.png'),
				titel: '社区政务',
				url:'/pages/classification/community/community'
			},
			{
				image: require('@/image/home/cz/service.png'),
				titel: '上门服务',
				url:'/pages/classification/service/service'
			},
		  ],
	  
    }
  },
  methods: {
      // 去详情
	  goclass(item){
		  // console.log(item.titel);
		  uni.navigateTo({
		  	url: item.url
		  })
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
.box{
	margin-top: 20rpx;
	width: 700rpx;
	height: 253rpx;
	padding:  20rpx;
	padding-left: 25rpx;
	padding-right: 25rpx;
}
.itemimg{
	width: 58rpx;
	height: 58rpx;
}
.loyout{
   width: 20%;
   margin-bottom: 40rpx;
}
.text{
	margin-top: 10rpx;
	font-size: 28rpx;
	color: #666666;
	font-size: 26rpx ;
}
</style>
