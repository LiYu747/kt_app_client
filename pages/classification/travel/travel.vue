<template>
   <view class="">
   	     <subclass titel="交通出行" :showmap='false'></subclass> 
		 <view class="simulation">
		 	以下均为模拟数据
		 </view>
		 <view class="topbox flex al-center ju-center">
		 	 <view class="inbox flex">
		 	 	 <view class="left flex-d al-center pos-rel">
		 	 	 	<view class="come">
		 	 	 		从
		 	 	 	</view>
                    <view class="go pos-abs">
                    	到
                    </view>
		 	 	 </view>
				 
				 <view class="rigth">
				 	<input  v-model="myPosition" />
					<view class="line">
					<input  v-model="goPosition"  placeholder="请输入终点" /> 
					</view>
				 </view>
				 
				 <view class="">
				 	<image src="../../../image/classification/Travel/jiah.png" class="jiaoimg" mode=""></image>
				 </view>
		 	 </view>
		 </view>
		 
		  <view class="tabar flex al-center ju-around">
		  	<view class="item flex al-center" @click="add(index)" :class="{'dv':index == idx}"  v-for="(item,index) in till" :key='item.id'>
		  		     {{item}}
		  	</view>
		  </view>
		 <view class="">
			<image src="../../../image/classification/Travel/map.png" class="mapimg" mode=""></image>
		 </view>
		 
		<view class=" flex ju-center">
			<view class="botombox ">
				<view class="flex">
					<view class="flex-d al-center itmmbox" @click="choice(index)" :class="{'ged':index==0}"  v-for="(item,index) in msgdata" :key='item.id'>
						 <view :class="{'colr':index==num}" class="advantage">
						 	  {{item.advantage}}
						 </view>
						 <view :class="{'colr':index==num}" class="time">
						 	   {{item.time}}
						 </view>
						<view :class="{'colr':index==num}" class="distance">
							  {{item.distance}}
						</view>
						 
					</view>
				</view>
				<view class="flex ju-center">
					<image src="../../../image/classification/Travel/start.png" class="startimg" mode=""></image>
				</view>
			</view>
		</view>
   </view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
export default {
name: "",
components: {
subclass
},
props: {},
data () {
  return {
	  myPosition:'我的位置',
	  goPosition:'',
	  till:[
		  '驾车','公交地铁','打车','骑行','步行'
	  ],
	  idx:'',
	  msgdata:[
		  {advantage:'时间短',time:'23分钟',distance:'11公里'},
		  {advantage:'红路灯少',time:'26分钟',distance:'10公里'}
	  ],
	  num:0
    }
  },
  methods: {
     add(index){
		 this.idx = index
	 },
	 choice(index){
		 this.num = index
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
.topbox{
	width: 100%;
	height: 200rpx;
	background: #FFFFFF;
}
.inbox{
	width: 620rpx;
	height: 146rpx;
	background: #F5F5F5;
	border-radius: 10rpx;
}
.left{
	width: 66rpx;
	color: #999999;
	font-size: 26rpx;
	height: 146rpx;
	}
.come{
	margin-top: 20rpx;
}

.go{
	bottom: 26rpx;
}
.rigth{
	margin-top: 10rpx;
	width: 488rpx;
	height: 110rpx;
}	
.line{
	width: 100%;
	height: 1px;
	background: #CCCCCC;
}
input{
	// background: red;
	height: 62rpx;
	font-size: 30rpx;
	color: #333333;
}
.jiaoimg{
	margin-top: 50rpx;
	margin-left: 20rpx;
	width: 30rpx;
	height: 36rpx;
}
.tabar{
	width: 100%;
	height: 64rpx;
	background: #FFFFFF;
	color: #999999;
	font-size: 24rpx;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}
.item{
	height: 64rpx;
}
.dv{
	color:#FF9C00;
	height: 62rpx;
	border-top: 1px solid #FFFFFF;
	border-bottom: 1px solid #FF9C00;
}
.mapimg{
	width: 100%;
	height: 800rpx;
}
.botombox{
	top: -50rpx;
	position: relative;
	width: 690rpx;
	height: 280rpx;
	background: #FFFFFF;
	border-radius: 10rpx;
}
.advantage{
	color: #999999;
	font-size: 24rpx;
}
.time{
	color: #333333;
	font-size: 36rpx;
}
.distance{
	color:#999999;
	font-size: 24rpx;
}
.itmmbox{
	flex: 1;
	margin-top: 10rpx;
}
.colr{
	color: #FF9C00 !important;
}
.ged{
	border-right: 2rpx solid #cccccc;
}
.startimg{
	margin-top: 35rpx;
	width: 423rpx;
	height: 64rpx;
}

.simulation{
		display: flex;
		justify-content: center;
	    height: 80rpx;
		align-items: center;
		font-size: 30rpx;
		color: #b3b3b3;
		// background: #FFFFFF;
	}
</style>
