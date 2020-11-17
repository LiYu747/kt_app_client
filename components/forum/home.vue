<template>
  <view class="fz-12">
  	<view class="">
  			<u-swiper :list="list" border-radius='0' height="350"></u-swiper>
  	</view>
  	<view class="flex-d al-center">
  		<view class="nav flex-d al-center pos-rel">
  			<view class="tex1">
  				怡心湖小区
  			</view>
  			<view class="tex2 flex al-center ju-center" :class="{te2:idx===0}">
  				<view class="item" v-for="(item,index) in titel" :key='item.id'
  				 @click="add(index)"
  				 :class="{'dv':index===1,'colr':idx===index}">
  					  {{item}}
  				</view>
  			</view>
  			<view v-show="idx===0" class="content">
  				{{value}}
  			</view>
  			<view  v-show="idx === 1" class="twbx m-t2">
  				
  				                                公告110号院各位业主：为了110号院有一个安心、干净的
  				居住条件，维护好院内的生活秩序，提升小区居民的生活质
  				量和生命财产安全保障，希望院内每一位业主严格遵守以下
  				几点（避免引起不必要的麻烦）；
  				                            
  			</view>
  		</view>
  		
  		<view v-show="idx===0" class="foot">
  			<view class="fotex1">
  				怡心湖，超宽楼间距，下沉中庭，给你不一样的湖居生活
  			</view>
  			<view class="">
  				<image src="../../image/forum/1.png" class="img1" mode=""></image>
  			</view>
  			<view class="m-t4">
  				怡心湖岸位于华府大道与牧华路交汇处。项目是由万科、新希望、中铁建地产、广东中天4大品牌联袂打造的项目。项目边上有万科投资打造的万科梦想城商业体，商业氛围很不错。项目整体占地约156亩，分两期呈现，目前销售项目的二期，且房源实现了南向面湖，视野很不错。项目目前在售：面积为105-136㎡，单价2-2.1万，总价220-260万项目总占地156亩（地块一占地87亩），分东西两地块，容积率2.5。
  			</view>
  			<view class="">
  				<image src="../../image/forum/2.png" mode=""  class="img1"></image>
  			</view>
  			<view class="m-t4">
  				项目由“四横六纵、四地铁、双机场”构成完善的立体交通网络。“四横”：三环路、四环路（绕城高速）、华府大道、五环路（牧华路）；“六纵”：红星路南延线、天府大道、益州大道、剑南大道、华府大道、成雅高速。4地铁：已经开通的1号线，贯穿成都南北（升仙湖-科学城）；5号线（城北商贸城—城南回龙路）2019年底通车，怡心湖站距离项目约1公里；地铁6号线三期（观东路站—兰家沟站），预计2020年底开通，兰家沟站距离项目约5公里；成都轨道交通第四期建设规划已于2019年6月获国家发改委正式批复，其中“怡心湖北站”（物联大道和牧华路交界处）成为TOD建设首批次特色站点；规划有地铁19号线距离项目约600米.
  			</view>
  		</view>
  	</view>
  </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
	  list: [
	  		  {
	   						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605502842195&di=f8c59619c4b0253397e41b1511d2dc74&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170731%2Fec5327043cda4f31a3c4c1df7baac2d2_th.jpg',
	   						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
	   					},
	   					{
	   						image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605502873384&di=d8f562ebc0df07da6af0cb8bad6a51cc&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190610%2Fb1c5bc66a4e847518008daa94232f5a9.jpeg',
	   						title: '身无彩凤双飞翼，心有灵犀一点通'
	   					},
	   					{
	   						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
	   						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
	   					}
	   				],
	  titel:[
	  		 '简介','公告','论坛'
	  ],
	  idx:0,
	  value:'怡心湖岸项目是万科、新希望、中铁建、中天4大品牌联手打造的项目，是怡心湖区临湖的纯住宅项目， 将打造低密度、百亩湖居大盘。项目在景观打造方面以“云中山水，都市桃源”为主题打造出业主归家的“度假之旅”。在景观上借鉴了上海星河湾的立体式园林景观设计，以及美国纽约泪珠公园的地形处理，打造约3600㎡下沉立体式园林景观，形成“一环三轴六组团的多层次自然山水景观'
    }
  },
  methods: {
  // 点击
   add(index){
	  if(index===2){
		   this.$emit("goto",6)
	  }
	   this.idx = index
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
	/deep/
	.u-swiper-indicator[data-v-a5b2d580]{
		bottom: 60rpx!important;
	}
.nav{
	top: -42rpx;
	width: 690rpx;
	height: 502rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
}
.tex1{
	width: 98%;
	font-size: 36rpx;
	color: #F07535;
	margin-top: 34rpx;
	margin-left: 25rpx;
	}
	.tex2{
	width: 100%;
height: 100rpx;
font-size: 28rpx;
color: #666666;
	}
.te2{
	border-bottom: 1rpx solid #BFBFBF;
}	
.item{
height: 45rpx;
}	
.dv{
	margin-left: 181rpx;
	margin-right: 162rpx;
}	
.colr{
	color: #F07535;
	border-top: 4rpx solid #FFFFFF;
	border-bottom: 4rpx solid #F07535;
}
.content{
	margin-top: 31rpx;
	width: 608rpx;
	height: 275rpx;
	color: #666666;
	font-size: 24rpx;
}
.foot{
	width: 614rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
	margin-bottom: 140rpx;
	padding: 0 38rpx;
	box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	font-size: 24rpx;
	color: #666666;
	padding-bottom: 40rpx;
}
.fotex1{
	margin-top: 46rpx;
}
.img1{
	margin-top: 37rpx;
	width: 613rpx;
	height: 333rpx;
}
.twbx{
	width: 622rpx;
	height: 135rpx;
	background: #E6E6E6;
	padding: 20rpx 14rpx;
	color: #666666;
}
</style>
