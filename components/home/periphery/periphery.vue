<template>
    <div>
        <view class="box">
        	<view class="flex al-center  m-b1">
        		<image  class="img" src="../../../image/home/zx@2x.png" mode=""></image>
        		<view class="text">
        			 周边消息
        		</view>
        	</view>
			
			<!-- 资讯 -->
			<view class="conten flex ju-between flex-w">
			   	 <view class="item flex pos-rel" v-for="(item,index) in locdata" :key='index'>
			   	 	   <image :src="item.image" mode="" class="itemimg"></image>
					   <view class="font fz-12">
					   	{{item.content}}
					   </view>
					   <view class="time pos-abs location ">
					   	  {{item.time}}
					   </view>
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
	  locdata:[
		  {image:require('@/image/home/zu221.png'),
		  content:'油价迎年内第四降!95号汽油重回6.9的价格快进详细看一下把',
		  time:'2020-9-17'},
		  {image:require('@/image/home/zu222.png'),
		  content:'一印尼进口冻带鱼外包装阳性海关总署紧急行动dsds',
		   time:'2020-9-18'},
		  {image:require('@/image/home/zu221.png'),
		  content:'油价迎年内第四降!95号汽油重回6.9的价格快进详细看一下把',
		   time:'2020-9-17'},
		  {image:require('@/image/home/zu222.png'),
		  content:'一印尼进口冻带鱼外包装阳性海关总署紧急行动dsds',
		   time:'2020-9-18'}
	  ]
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
	.box{
		
		margin-top: 30rpx;
		width: 690rpx;
	}
.img{
	width: 24rpx;
	height: 28rpx;
	margin-right: 10rpx;
	}
	.text{
		font-size: 30rpx;
		color: #666666;
	}
	.conten{
		width: 100%;
		margin-bottom: 40rpx;
		}
	.item{
		margin-top: 20rpx;
		width: 320rpx;
		height: 185rpx;
		background: #FFFFFF;
		padding-top: 15rpx;
		padding-left: 15rpx;
	}	
	.itemimg{
		width: 140rpx;
		height: 140rpx;
	}	
	.font{
		margin-left: 24rpx;
		width: 134rpx;
		height: 130rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:4;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
	.location{
		right: 20rpx;
		bottom: 18rpx;
		color: #808080;
		font-size: 24rpx;
		-webkit-transform: scale(0.9);
		-webkit-transform-origin: left top
	}
</style>
