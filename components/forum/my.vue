<template>
 <view class="">
 	<view class="nav flex al-center">
 		<view class="left flex al-center ju-center" 
		v-for="(item,index) in til" 
		@click="add(index)"
		:class="{dv:index===0}"
		:key='item.id'>
                  <view :class="{dv1:index===idx}">
                  	{{item}}
                  </view>		          
 		</view>
 	</view>
	
	<!-- 我发布的 -->
   <view v-show='idx===0' class="release">
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
   
     <!-- 我参与的 -->
	 <view v-show="idx===1" class="release">
	 	<view class="">
	 		  <view class="item" v-for="item in data1" :key='item.id'>
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
	  til:['我发布的','我参与的'],
	  idx:0,
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
	  data1:[
		  {
			 portrait:require('@/image/forum/portrait.png'),
			 name:'jscfmm',
			 time:'2020年10月29日  16:21',
			 titel:'小区绿化好',
			 content:'小区绿化带里有一小丛一小丛紫色的小花儿萨达撒旦卡死很多空间和打卡时间和端口阿达是可见的哈克摇小丛紫色的小花儿摆着轻柔的腰肢，头上金黄金黄的花心一摇一摆',
			 Photo:[require('@/image/forum/zu13.jpg'),require('@/image/forum/zu14.jpg')],

		  },
		  {
		  			 portrait:require('@/image/forum/portrait.png'),
		  			 name:'你先吃克嘛',
		  			 time:'2020年10月29日  16:21',
		  			 titel:'小区绿化好',
		  			 content:'小区绿化带里有一小丛一小丛紫色的小花儿萨达撒旦卡死很多空间和打卡时间和端口阿达是可见的哈克摇小丛紫色的小花儿摆着轻柔的腰肢，头上金黄金黄的花心一摇一摆',
		  			 Photo:[require('@/image/forum/zu13.jpg'),require('@/image/forum/zu14.jpg')],
		  			 comment:'李海峰: 绿化好绿化好绿化好绿化好绿化好'
		  
		  },	  
	  ]
    }
  },
  methods: {
  add(index){
	 this.idx = index 
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
.nav{
	width: 100%;
	height: 74rpx;
	background: #FFFFFF;
	font-size: 28rpx;
	color: #666666;
}
.left{
	flex: 1;
	height: 74rpx;
}
.dv{
	border-right: 1rpx solid #C0C0C0;
}
.dv1{
	color: #F07535;
	display: flex;
	align-items: center;
	height: 42rpx;
	border-top: 4rpx solid #FFFFFF;
	border-bottom: 4rpx solid #F07535;
}
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
