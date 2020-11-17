<template>
 <view class="">
 	<subunit class="fidx" titel="小区论坛" :retur="true" @goback='goback'></subunit>
	<view v-show='flag===6||flag===4||flag===5' class="pos-abs location">
		<image @click="gotosearch" class="ssimg" src="../../../image/forum/icon-test.png" mode=""></image>
	</view>
	<view class="line">
		
	</view>
     <home ref='change'  @goto='gotos' v-show="flag===0||flag===1"></home>
	 <release v-show="flag===2||flag===3"></release>
	 	<my v-show="flag===4||flag===5"></my>
		<forumCircle v-show='flag===6'></forumCircle>
	<subbotn @add='add'></subbotn>

 </view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../components/forum/home.vue'
	import my from '../../../components/forum/my.vue'
	import subbotn from '../../../components/sub-botn/subbotn.vue'
	import forumCircle from '../../../components/forum/forumCircle.vue'
	import release from '../../../components/forum/release.vue'
export default {
name: "",
components: {
subunit,
subbotn,
home,
my,
forumCircle,
release
},
props: {},
data () {
  return {
	flag:0
    }
  },
  methods: {
	  // 返回
   goback(){
	   uni.switchTab({
	   	url:'/pages/auth/address/address'
	   })
	   },
   add(val){
	   this.flag = val
	this.$refs.change.idx = 0
   },
   gotos(val){
	   this.flag = val
   },
   gotosearch(){
	   uni.navigateTo({
	   	url:'/components/forum/forumSearch/forumSearch'
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
.fidx{
	position: fixed;
	z-index: 9;
}
.line{
	height: 128rpx;
}
.location{
	top: 62rpx;
	right: 80rpx;
}
.ssimg{
	position: fixed;
	width: 42rpx;
	height: 42rpx;
	z-index: 12;
}
</style>
