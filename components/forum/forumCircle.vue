<template>
    <view class="">
    	<view  class="release">
    		<view class="">
    			  <view class="item" v-for="item in data" :key='item.id'>
    			  	  <view class="flex">
    			  	  	<image src="../../image/forum/portrait.png" class="itemimg" mode=""></image>
    			  	  	<view class="name">
    			  	  		{{item.name}}
    						<view class="time">
    							{{item.time}}
    						</view>
    			  	  	</view>
    			  	  </view>
    				  <view class="titel">
    				  	{{item.titel}}
    				  </view>
    				  <view class="content">
    				  	<view class="show">
    				  		{{item.content}}
    				  	</view>
    				  </view>
    				  <!-- 照片 -->
    				  <view class="flex al-center m-t4">
    				  	<view  v-for="items in item.Photo" :key='items.id'>
    				  		 <image :src="items" class="items" mode=""></image>
    				  	</view>
    				  </view>
    				  <!-- 评论 -->
    				<view v-if="item.comment" class="">
    					<view  class="comment flex al-center m-t2 ">
    						<image class="comimg" src="../../image/forum/plun.png" mode=""></image>
    									全部评论
    					</view>
    					<view class="comtext">
    						{{item.comment}}
    					</view>
    				</view>
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
	  data:[
	  		  {
	  			 portrait:require('@/image/forum/portrait.png'),
	  			 name:'李海峰',
	  			 time:'2020年10月29日  16:21',
	  			 titel:'小区绿化好',
	  			 content:'小区绿化带里有一小丛一小丛紫色的小花儿萨达撒旦卡死很多空间和打卡时间和端口阿达是可见的哈克摇小丛紫色的小花儿摆着轻柔的腰肢，头上金黄金黄的花心一摇一摆',
	  			 Photo:[require('@/image/forum/zu13.jpg'),require('@/image/forum/zu14.jpg')],
	  
	  		  },
	  		  {
	  		  			 portrait:require('@/image/forum/portrait.png'),
	  		  			 name:'李海峰',
	  		  			 time:'2020年10月29日  16:21',
	  		  			 titel:'小区绿化好',
	  		  			 content:'小区绿化带里有一小丛一小丛紫色的小花儿萨达撒旦卡死很多空间和打卡时间和端口阿达是可见的哈克摇小丛紫色的小花儿摆着轻柔的腰肢，头上金黄金黄的花心一摇一摆',
	  		  			 Photo:[require('@/image/forum/zu13.jpg'),require('@/image/forum/zu14.jpg')],
	  		  			 comment:'李海峰: 绿化好绿化好绿化好绿化好绿化好'
	  		  
	  		  },	  
	  ],
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
.itemimg{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
.item{
	width: 690rpx;
	padding: 30rpx;
	border-bottom: 1rpx solid #BFBFBF;
	color: #666666;
	} 
.name{
	font-size: 26rpx;
	color: #F07535;
}
.time{
	color: #B3B3B3;
	font-size: 24rpx;
	margin-top: 10rpx;
	-webkit-transform: scale(0.8);
	-webkit-transform-origin: left top
}
.content{
	margin-top: 22rpx;
	width: 650rpx;
	background: rgb(230,230,230);
	padding: 30rpx 20rpx;
}
.show{
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp:2;
}
.items{
	width: 140rpx;
	height: 140rpx;
	margin-right: 20rpx;
}
.comimg{
	width: 25rpx;
	height: 25rpx;
	margin-top: 5rpx;
	margin-right: 10rpx;
}
.comment{
	justify-content: flex-end;
	font-size: 24rpx;
	color: #666666;
	}
.comtext{
	margin-top: 10rpx;
	width: 642rpx;
	background:  rgb(230,230,230);
	padding: 14rpx 24rpx;
}	
.release{
	margin-bottom: 100rpx;
}
</style>
