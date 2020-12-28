<template>
   <view >
   	<subunit titel='申请进度'></subunit>
	<view class="topLine"></view>
	
   </view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	import home from '../../../../vendor/home/home.js'
export default {
name: "",
components: {
subunit
},
props: {},
data () {
  return {
    }
  },
  methods: {
     getData(){
		 home.applicationProgress({
			 data:{},
			 fail: () => {
				 uni.showToast({
				 	title: '网络错误',
				 	icon: "none"
				 })
			 },
			 success: (res) => {
				 console.log(res);
			 }
		 })
		 
	 }
  },
  mounted () {
 this.getData()
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
.topLine{
height: 148rpx;	
	}
</style>
