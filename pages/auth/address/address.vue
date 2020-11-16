<template>
 <view class=" pos-rel content">
 	<subunit class="fled" titel="入住信息" @add='add' :image='aimg'></subunit>
	<view v-show="flag%2!==0" class="show pos-abs fled">
		<image class="showimg" @click="getto" src="../../../image/address/ads.png" mode=""></image>
	</view>
	<image src="../../../image/home/jx.png" class="img" mode=""></image>
	<addList></addList>
 </view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue';
	import addList from '../../../components/address/addlist.vue'
export default {
name: "",
components: {
subunit,
addList
},
props: {},
data () {
  return {
	  aimg:require('@/image/address/plus.png'),
	  flag:''
    }
  },
  methods: {
  add(val){
	  this.flag = val
  },
  getto(){
	 uni.navigateTo({
	 	url:'/pages/auth/addediting/ADDediting?titel=新增地址'
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
.img{
	margin-top: 128rpx;
	width: 100%;
	height: 156rpx;
}
.sj{
	    width: 0;
	    height: 0;
	    border-width: 0 20rpx 20rpx;
	    border-style: solid;
	    border-color: transparent transparent red;
		left:94rpx ;
}
.show{
	top: 108rpx;
	right: 30rpx;
	z-index: 3;
}
.showimg{
	width: 116rpx;
	height: 66rpx;
}
.fled{
	position: fixed;
	z-index: 9;
}
</style>
