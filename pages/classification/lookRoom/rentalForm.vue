<template>
	<view class="">
		<subunit titel='我要出租' class="fixed"></subunit>
		<view class="topLine">

		</view>

		<view class="layoutBox flex ">
			标题
			<textarea autoHeight="true" class="textBox" maxlength="30" v-model="value" placeholder="请输入标题(30字以内)" />
			</view>
 	      <view class="contentBox m-t3">
		   <view class="itemBox flex al-center ju-between" @click="fillIn(item,index)" v-for="(item,index) in formlist" :key="item.id" :class="index==formlist.length-1?'dv':''">
			{{item.titel}}
			<view class="flex al-center">
			<input :type="item.style"  v-model="item.value" :disabled="item.disabled" class="ipt" />
			<image v-if="index!=4" class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
			<view v-if="index==4" class="">
				㎡
			</view>
			</view>
		  </view>
	    </view>
		<!-- 户型 -->
		<u-select v-model="houseType" mode="mutil-column" :default-value='defaultType' :list="listType" @confirm="confirmRoom"></u-select>
		<!-- 楼层 -->
		<u-picker range-key="label" :default-selector='defaultFloor' v-model="Isfloor" mode="multiSelector" @columnchange='change' :range="listFloor" @confirm="confirmFloor"></u-picker>
		<!-- 装修 -->
		<u-select v-model="fitmentShow" :default-value='defaultFitment'  @confirm="confirmFitment"  :list="fitmentList"></u-select>
		<!-- 电梯 -->
		<u-select v-model="elevatorShow" :default-value='defaultElevator'  @confirm="confirmElevator"  :list="elevatorList"></u-select>
		<view class="contentBox m-t3">
			  <view class="itemBox flex al-center ju-between">
			  	租金
				<view class="flex al-center">
				<input type="text"  class="ipt" />
				<view  class="">
					元
				</view>
				</view>
			  </view>
			  <view class="itemBox flex al-center dv ju-between" >
			  	押金
				<view class="flex al-center">
				<input type="text"   class="ipt" />
				<image  class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
				</view>
			  </view>
		</view>
		
		<view class="contentBox m-t3">
			<view class="roomtetx">
				房屋照片
			</view>
			<view class="">
				<image src="../../../image/lookroom/photo.png" class="photoImg" mode=""></image>
			</view>
			<view class="roomtetx">
				封面图片
			</view>
			<view class="">
				<image src="../../../image/lookroom/cover.png" class="coverImg" mode=""></image>
			</view>
		</view>
		
		<view class="contentBox m-t3">
			<view class="roomtetx">
				房源简介
			</view>
		</view>
		
		<view class="contentBox m-t3">
			<view class="roomtetx">
			联系电话
			</view>
		</view>
		
		<view class="flex ju-center">
			<view class="submit flex al-center ju-center">
				<image src="../../../image/lookroom/submit.png" class="submitImg" mode=""></image>
				<view class="pos-abs fz-16 bai">
					提交
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
	  value:'', //标题
	  houseType:false, //户型
	  listType:[[],[],[]], //户型数据
	  defaultType:[], //户型默认
	  Isfloor: false, //楼层
	  listFloor:[[],[]], //楼层数据
	  defaultFloor:[0,0], //楼层默认
	  fitmentShow:false, //装修
	  fitmentList:[{value:'well',label:'精装',extra:0},{value:'simple',label:'简装',extra:1},{value:'low',label:'清水房',extra:2}],//装修数据
	  defaultFitment :[], //装修默认
	  elevatorShow:false, //电梯
	  elevatorList:[{value:0,label:'无'},{value:1,label:'有'}], //电梯数据
	  defaultElevator:[], //电梯默认
	  formlist:[{
		  titel:'小区名字及地址',
		  value:"复地御香山3悦",
		  disabled:true,
		  style:'text'
	  },
	  {
		titel:'户型',
	    value:"",
		disabled:true,
		  style:'text'
	  },
	  {
		titel:'楼层',
		value:"",
		disabled:true,
		  style:'text'
	  },
	  {
	    titel:'装修',
	  	value:"",
		disabled:true,
		  style:'text'
	  },
	  {
	    titel:'面积',
	  	value:"",
		  style:'number'
	  },
	  {
	    titel:'电梯',
	  	value:"",
		disabled:true,
		  style:'text'
	  },
	  ]
    }
  },
  methods: {
	  // 选择操作
      fillIn(item,index){
		  if(index == 1){
			this.houseType = true  
		  }
		  if(index == 2){
			this.Isfloor = true
		  }
		  if(index == 3) {
			  this.fitmentShow = true
		  }
		  if(index == 5) {
			  this.elevatorShow = true
		  }
	  },
	  //选择电梯
	  confirmElevator(e){
		this.formlist[5].value = e[0].label
		let Default = []
		Default.push(e[0].value)
		this.defaultElevator = Default
	  },
	  // 选择装修
	  confirmFitment(e){
		 this.formlist[3].value = e[0].label
		 let Default = []
		 Default.push(e[0].extra)
		 this.defaultFitment = Default
	  },
	  // 选择楼层
	  confirmFloor(e){
		  let floor = e[0]
		  let allFloor = e[1]
		  this.defaultFloor = e
		  this.formlist[2].value = this.listFloor[0][floor].value + '/' + this.listFloor[1][allFloor].value
		  },
	  change(e){
		  if(e.column == 1) return;
		   let Floor = []
		for( var i=e.index+1 ; i<100 ; i++){
		 let allFloor = {value:i,label:'共'+i+'层'}
		 Floor.push(allFloor)
		}
		 this.listFloor[1] = Floor
	  },
	  // 选择户型
	  confirmRoom(e){
		  let Default = []
		  let value = ''
		  e.map(item => {
			 Default.push(item.value-1) 
			 value += item.label
		  })
		  this.defaultType = Default
		  this.formlist[1].value = value
	  },
	  
	  all(){
		  // 户型数据
		 for( var i=1 ; i<11;i++){
			 let room = {value: i,label: i +'室'}
			 this.listType[0].push(room)
			 let hall = {value:  i,label: i +'厅'}
			  this.listType[1].push(hall)
			  let bathroom = {value: i,label: i +'卫'}
			  this.listType[2].push(bathroom)
		 }
		 // 楼层数据
		 for( var i=1 ; i<100 ; i++){
			 let floor = {value:i,label:i+'层'}
			 let allFloor = {value:i,label:'共'+i+'层'}
			 this.listFloor[0].push(floor)
			  this.listFloor[1].push(allFloor)
		 }
		  
	  }
	  
	
  },
  mounted () {
   this.all()
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
.fixed{
	position: fixed;
	z-index: 99;
}
.topLine{
	height: 148rpx;
}

.layoutBox{
	width: 750rpx;
	background: #FFFFFF;
	padding: 20rpx 30rpx;
	color: #333333;
	font-size: 32rpx;
}
.textBox{
	width: 540rpx;
	margin-left: 20rpx;
	height: 40rpx;
	font-size: 14px;
	color: #666666;
	margin-top: 2rpx;
	}

.contentBox{
	width: 690rpx;
	padding: 0 30rpx;
	background: #FFFFFF;
}

.itemBox{
	width: 100%;
	height: 90rpx;
	border-bottom: 1px solid #CCCCCC;
	font-size: 16px;
	color: #333333;
}	

.dv{
	border-bottom: none;
}

.ipt{
	width: 380rpx;
	height: 60rpx;
	font-size: 14px;
	text-align: right;
	color: #666666;
	border: none;
	background: #FFFFFF;
	outline: none;
}

.reimg{
	width: 16rpx;
	height: 30rpx;
	margin-left: 30rpx;
}

.roomtetx{
	padding: 30rpx 0;
}

.photoImg{
	width: 56rpx;
	height: 48rpx;
}

.coverImg{
	width: 91rpx;
	height: 91rpx;
}

.submit{
	width: 360rpx;
	height: 70rpx;
	padding: 60rpx 0;
}

.submitImg{
	width: 360rpx;
	height: 70rpx;
	}
</style>
