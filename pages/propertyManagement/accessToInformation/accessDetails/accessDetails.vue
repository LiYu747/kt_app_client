<template>
    <view>
    	<subunit class="fidex"></subunit>
		<view class="topLine">
			
		</view>
		<view class="flex-d al-center ">
			<view class="itemBox" v-for="item in locdata" :key='item.id'>
				   <view class="layoutBox">
				   	  {{item.datetime}}
				   </view>
				   <view class="layoutBox">
				   	 出门时间： {{item.inTime}}
				   </view>
				   <view class="layoutBox">
				   	入门时间： {{item.goTime}}
				   </view>
			</view>
		</view>
		<view class="bomLine flex ju-center al-center">
			{{noText}}
		</view>
    </view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
export default {
name: "",
components: {
subunit
},
props: {},
data () {
  return {
	  noText: '',
	  locdata:[
		  {datetime:'2020-22-24',
		  'goTime':'7:58',
		  'inTime':'20:46'
		  },
		  {datetime:'2020-22-25',
		  'goTime':'7:45',
		  'inTime':'21:46'
		  },
		  {datetime:'2020-22-25',
		  'goTime':'7:45',
		  'inTime':'21:46'
		  },
		  {datetime:'2020-22-25',
		  'goTime':'7:45',
		  'inTime':'21:46'
		  },
		  {datetime:'2020-22-25',
		  'goTime':'7:45',
		  'inTime':'21:46'
		  }
	  ]
    }
  },
  methods: {

  },
  onReachBottom() {
  	this.noText = '没有更多了'
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
.fidex{
	position: fixed;
	z-index: 9;
}
.topLine{
	height: 158rpx;
}
.botLine{
	height: 40rpx;
}
.itemBox{
	margin-top: 30rpx;
	width: 650rpx;
	background: #FFFFFF;
	padding: 10rpx 20rpx;
	font-size: 14px;
	border-radius: 10rpx;
	color: #666666;
	padding-bottom: 40rpx;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}
.layoutBox{
	width: 100%;
	height: 80rpx;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #CCCCCC;
}
.bomLine{
		padding: 20rpx 0; 
		font-size: 12px;
	}
</style>
