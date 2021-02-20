<template>
    <view class="">
    	<subunit :titel='till'></subunit>
		<view class="tilBox flex al-center ju-between">
				<view class="flex al-center" v-for="item in keyword" :key='item.id'>
					 {{item.name}}
					 <view class=" nextimg">
					 	▼
					 </view>
				</view>
		</view>
		
		<view class="flex-d al-center">
			<view class="contenBox m-t3 flex ju-between" @click="gotoDetail" v-for="item in arr" :key='item.id'>
				<image :src="item.image" class="itemImg" mode=""></image>
				<view class="msgBox">
					<view class="itemName">
						{{item.name}}
					</view>
					<view class="fz-12 szcolor">
						{{item.size}} {{item.brief}} 
					</view>
					<view class="">
						<image src="../../../image/lookroom/tags1.png" class="tags" mode=""></image>
						<image src="../../../image/lookroom/tags2.png" class="tags" mode=""></image>
						<image src="../../../image/lookroom/tags3.png" class="tags m-l1" mode=""></image>
					</view>
					<view class="fz-12 szcolor flex al-center pos-rel">
						<view class="itempri">
							{{item.price}}
						</view>
						<view class="m-l1">
					    {{item.unitpri}}		
						</view>
						<image src="https://oss.kuaitongkeji.com/static/img/app/classification/Healthcare/next.png" class="nextImg pos-abs" mode=""></image>
					</view>
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
	  till:'',
	  keyword:[{name:'区域'},{name:'房型'},{name:'价格'},{name:'更多'}],
	  arr:[],
	  locdata:[{name:'武海中华锦绣标准套二，带阳台，满五年',size:'71.2㎡',brief:'3室1厅/西北/武海中华锦绣',image:require('@/image/lookroom/logo1.png')
	  ,price:'120万',unitpri:'15332元/平'}],
	  locdata1:[{name:'环球融创未来城',size:'77-142㎡',brief:'仁寿县',image:require('@/image/lookroom/logo4.png')
	  ,price:'',unitpri:'10088元/平'}]
    }
  },
  methods: {
   gotoDetail(){
	   uni.navigateTo({
	   	url:'/pages/classification/lookRoom/detailRoom'
	   })
   }
  },
  mounted () {

  },
  onLoad (option) {
	    this.till =  option.title
	  if(option.title == '新房'){
		this.arr  = this.locdata1
		return;
	  }
	  this.arr = this.locdata
	  
	  
 
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
.tilBox{
	width: 650rpx;
	height: 80rpx;
	background: #FFFFFF;
	padding: 0 50rpx;
	font-size: 32rpx;
	color: #666666;
}

.nextimg{
	margin-left: 8rpx;
	margin-top: 5rpx;
	font-size: 10px;
}

.contenBox{
	width: 650rpx;
	background: #FFFFFF;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	border-radius: 10px;
	padding: 20rpx 30rpx;
}

.itemImg{
	width: 200rpx;
	height: 190rpx;
}

.msgBox{
	width: 430rpx;
}

.itemName{
	color: #333333;
	font-size: 28rpx;
}

.szcolor{
	margin-top: 10rpx;
	color: #999999;
}

.tags{
	margin-top: 10rpx;
	width: 100rpx;
	height: 30rpx;
}

.itempri{
	font-size: 14px;
color: #F07535;
}

.nextImg {
		width: 12rpx;
		height: 20rpx;
		right: 0;
	}
</style>
