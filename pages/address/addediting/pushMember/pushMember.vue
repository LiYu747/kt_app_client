<template>
    <view>
    	<subunit></subunit>
		<view class="searchBox">
			<view class="itemBox flex al-center" v-for="item in locdata" :key='item.id'>
				<view class="flex al-center">
					<view class="c-red">
						*
					</view>
					<view class="">
						{{item.label}}
					</view>
				</view>
				<view class="">
					{{item.value}}
				</view>
			</view>
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
	  locdata:[
		  {
		  		  label:'姓名',
		  		  value:'张三'
		  },
		  {
		  		  label:'手机号码',
		  		  value:'17608040164'
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
.searchBox{
	width: 94%;
	padding: 0 3%;
	height: 240rpx;
	background: #FFFFFF;
}
.itemBox{
	height: 80rpx;
	border-bottom: 1px solid #CCCCCC;
}
</style>
