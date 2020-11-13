<template>
<view class="box">
	<view  class="item flex al-center" v-for="(item,index) in locdata" :key='item.id' :class="{'dv':index<3,'top':index>3}">
		   <image :src="item.image" class="itemimg" mode=""></image>
		   <view class="itemtext">
		   	{{item.titel}}
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
	  locdata:[
		  {image:require('@/image/user/Checkin.png'),
		  titel:'入驻申请'
		  },
		  {image:require('@/image/user/visit.png'),
		   titel:'拜访申请'
		  },
		  {image:require('@/image/user/record.png'),
		   titel:'来访记录'
		  },
		  {image:require('@/image/user/scan.png'),
		   titel:'回家二维码'
		  },
		  {image:require('@/image/user/Trecords.png'),
		   titel:'出行记录'
		  },
		  {image:require('@/image/user/Logout.png'),
		   titel:'退出登录'
		  }
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
	margin-top: 48rpx;
	width: 690rpx;
	padding: 0 30rpx;
}
.itemimg{
	width: 30rpx;
	height: 30rpx;
	margin-left: 19rpx;
	margin-right: 18rpx;
}
.item{
	width: 690rpx;
	height: 80rpx;
	background: #FFFFFF;
}
.itemtext{
	font-size: 30rpx;
}
.dv{
	border-bottom: 1rpx solid rgb(231,231,231);
}
.top{
	margin-top: 20rpx;
}

</style>
