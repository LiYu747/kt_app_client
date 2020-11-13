<template>
    <div>
        <view class="box">
        	<view class="flex al-center">
        		<image  class="img" src="../../../image/home/sq(1)@2x.png" mode=""></image>
        		<view class="text">
        			 社区资讯
        		</view>
        	</view>
			<view class="overtxt flex al-center">
				<view class="context ">	
						<view class="ltst">
							{{loctext}}
						</view>
				</view>
				<view class="btn flex al-center ju-center">
					查看详情 >
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
	  loctext:' 桂溪街道联治街区综合党委广泛发动基层力量助力区域中小企业桂溪街道联治街区综合党委广泛发动基层力量助力区域中小企业桂溪街道联治街区综合党委广泛发动基层力量 '
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
		width: 690rpx;
		height: auto;
	}
.img{
	width: 23rpx;
	height: 27rpx;
	margin-right: 10rpx;
}
.text{
	font-size: 30rpx;
	color: #666666;
}
.overtxt{
	margin-top: 20rpx;
	width: 650rpx;
	background: #FFFFFF;
	box-shadow: 2rpx 4rpx  6rpx 0 #C0C4CC;
	padding: 20rpx;
	padding-bottom: 15rpx;
}
.context{
	width: 512rpx;
	height: 58rpx; 
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp:2;
}
.ltst{
	font-size: 26rpx;
	color: #666666;
	-webkit-transform: scale(0.8);
	-webkit-transform-origin: left top
}
.btn{
	width: 172rpx;
	height: 48rpx;
	background: #F79D46;
	border-radius: 22rpx;
	color: #FFFFFF;
	font-size: 20rpx;
	-webkit-transform: scale(0.9);
	-webkit-transform-origin: left top
}
</style>
