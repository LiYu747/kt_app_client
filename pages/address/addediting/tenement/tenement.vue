<template>
  <view class="">
  	<submit titel="房屋报修"></submit>
	<view class="navBox" :style="{height: this.$store.state.customBar + 'rpx'}">
		<view class=" pos-abs remak">
			报修记录
		</view>
	</view>
	<view class="flex-d al-center">
		<view class="formBox">
			<view class="itemStyle" v-for="item in formData" :key="item.id">
				{{item.label}}
			</view>
		</view>
	</view>
  </view>
</template>

<script>
	import submit from '../../../../components/sub-unit/subunit.vue'
export default {
name: "",
components: {
submit
},
props: {},
data () {
  return {
	  formData:[
		  {label:'选择小区',value:''},
		  {label:'联系电话',value:''},
		  {label:'保修',value:''}
	  ]
    }
  },
  methods: {

  },
  mounted () {

  },
  onLoad (val) {
	  console.log(val);

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
.navBox{
	width: 30%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 99;
}

.remak{
	bottom: 20rpx;
	right: 50rpx;
	color: #fff;
	font-size: 15px;
}

.formBox{
	margin-top: 20rpx;
	width: 650rpx;
	height: 300rpx;
	border-radius: 10rpx;
	padding: 30rpx 20rpx;
	background: #fff;
}

.itemStyle{
	height: 60rpx;
	border-bottom: 1px solid #ccc;
	margin-bottom: 20rpx;
	
}
</style>
