<template>
    <view class="flex-d al-center">
    	<subunit :titel="titel"> </subunit>
		<image @click="goback" class="pos-abs reimg" src="../../../image/login/1729908969cd5d7d911e096d6db3c70.png" mode=""></image>
		<view class="content">
				<view class="postop">
					<view class=" fied flex-d  pos-rel ju-center" v-for="(item,index) in parameter" :key='item.id' :class="{'dv':index===parameter.length-1}">
						<u-field 
						label-width="150"
						 v-model="item.value" 
						 :label="item.label" 
						 :clearable=false 
						 :disabled="item.disabled">
						</u-field>
						<view class="line  pos-abs">
						</view>
					</view>
				</view>
		</view>
		
		<view class="preservation pos-abs flex ju-center al-center">
			<image src="../../../image/login/ccuc.png" class="preimg" mode=""></image>
			  <view class="pos-abs pretext">
			  	保存
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
props: {

},
data () {
  return {
	  titel:'编辑地址',
	  parameter: [{
	  		value: '一棵树',
	  		label: '姓名',
	  	},
	  	{
	  		value: '17608040164',
	  		label: '手机号码',
	  	},
	  	{
	  		value: '四川省成都市华府大道',
	  		label: '地址',
	  	},
		{
			value: '怡心湖小区',
			label: '小区',
		},
		{
			value: '1-605',
			label: '楼栋号',
		},
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
  onLoad (val) {
console.log(val);
if(val.titel){
	this.titel = val.titel
}
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
.reimg{
	width: 22rpx;
	height: 41rpx;
	top: 61rpx;
	left: 49rpx;
}
.content{
	margin-top: 20rpx;
	width: 690rpx;
	border-radius: 10rpx;
	padding: 10rpx 0;
	background: #FFFFFF;
	box-shadow: 2rpx 2rpx 6rpx 1rpx #d9d9d9;
}
.fied {
		width: 607rpx;
		height: 81rpx;
		padding-left: 21rpx;
		padding-right: 62rpx;
		background: #FFFFFF;
		font-size: 30rpx;
		/deep/ .u-field {
			width: 100%;
			padding: 0;
		}
	}

.line{
	width: 607rpx;
	height: 1rpx;
	background:  rgba(191, 191, 191, 0.5);	
	bottom: 0;
	z-index: 9;
}
	.dv {
		margin-bottom: 40rpx;
	}
.preimg{
	width: 358rpx;
	height: 68rpx;
}	
.preservation{
	top: 943rpx;
}
.pretext{
	font-size: 30rpx;
	color: #FFFFFF;
}
</style>
