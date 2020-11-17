<template>
   <view class="">
   	 <subunit titel="详情" :retur="true" @goback='goback'></subunit>
	 <view class="cont">
	 	<view class="nav flex al-center">
	 		<image src="../../../image/visit/gnt.png" class="img" mode=""></image>
			<view class="text">
				{{text}}
			</view>
	 	</view>
		<view class="flex al-center pos-rel ipt" v-for="(item,index) in locadata" :key='item.id'>
			<view class="">
				{{item.titel}}
			</view>
			<view class="pos-abs rig">
				{{item.value}}
			</view>
		</view>
		<view class="line">
			
		</view>
		<view class="tex1">
			备注
		</view>
		<view class="frame">
			{{tete1}}
		</view>
		<view class="tex1">
			申请结果
		</view>
		<view class="frame">
			{{tete2}}
		</view>
		<!-- 按钮 -->
		<view v-if="text==='待处理'" class="flex al-center ju-between m-t4">
			<view class="btnr flex al-center ju-center">
				<image src="../../../image/login/ccuc.png" class="btnimg" mode=""></image>
				<view class=" pos-abs">
					通过
				</view>
			</view>
			<view class="btnl flex al-center ju-center">
				不通过
			</view>
		</view>
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
props: {},
data () {
  return {
	  text:'待处理',
	  tete1:'我是王小花',
	  	  tete2:'空',
	  locadata:[
		  {
			  titel:'姓名',
			  value:'王小花'
		  },
		  {
		  	titel:'地址',
		  	 value:'光明城市一栋一单元502'
		  },
	{
		titel:'时间',
		 value:'2020-07-24'
	}
	  ]
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
.cont{
	width: 710rpx;
	height: 100rpx;
	padding: 0 20rpx;
}
.nav{
	height: 120rpx;
	border-bottom: 1rpx solid #cccccc;
	margin-bottom: 20rpx;
}
.img{
	width: 40rpx;
	height: 40rpx;
}
.text{
	font-size: 30rpx;
	margin-left: 20rpx;
	color: #F07535;
}
.ipt{
	height: 60rpx;
	font-size: 30rpx;
	color: rgb(165,165,165);
}
.rig{
	right: 20rpx;
}
.line{
	margin-top: 30rpx;
	width: 100%;
	height: 1rpx;
	background: #cccccc;
}
.tex1{
	margin: 30rpx 0;
	font-size: 30rpx;
color: rgb(165,165,165);
}
.frame{
	width: 94%;
	padding: 3%;
	height: 120rpx;
	border-radius: 10rpx;
	background: #FFFFFF;
	font-size: 26rpx;
	color: rgb(165,165,165);
}
.btnr{
	width: 320rpx;
	height: 70rpx;
	color: #FFFFFF;
	font-size: 28rpx;
	}
.btnimg{
	width: 320rpx;
	height: 70rpx;
	}
.btnl{
		width: 318rpx;
		height: 68rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(240,117,53);
		font-size: 28rpx;
		color:  rgb(240,117,53);
		}
</style>
