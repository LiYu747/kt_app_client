<template>
<view class="">
	<view class="box pos-abs" ref='fied' >
		<view class="content pos-rel" v-for="(item,index) in locdata" :key='item.id' >
			<view class="location pos-abs" @click="Select(index)">
				<image v-if="idx===index" class="zrimg" src="../../image/address/yes.png" mode=""></image>
				<image v-else  class="zrimg" src="../../image/address/zro.png" mode=""></image>
			</view>
			<view class="addres">
				<view class=" flex al-center pos-rel">
					{{item.village_name}}
					<view class="pos-abs  right" @click="forum(item)">
						<image class="reimg"  src="../../image/address/retrue.png" mode=""></image>
					</view>
				</view>
				<view class="line"></view>
				<view class="text" @click="edit(item)">
					{{item.village_name + item.building_name + item.apartment_name + item.floor_name + item.room_name}}
				</view>
			</view>
			
			<view @click="order(item)"  class="pos-abs botto">
				预约电梯
			</view>
		</view>
	</view>
	<view v-if='flag===true && msg' @mousewheel.prevent  class="show pos-abs flex al-center ju-center">
		<view class="showbox flex-d al-center">
			<view v-show="message==true" class="flex-d al-center">
				<image src="../../image/address/scrcc.png" class="scrimg" mode=""></image>
				 <view class="msg">
				 	{{msg}}
				 </view>
			</view>
			<view v-show="message==false" class="flex-d al-center">
				<image src="../../image/address/no.png" class="noimg" mode=""></image>
				<image src="../../image/address/no1.png" class="ntimg" mode=""></image>
			</view>
		
			<view @click="sure" class="flex loca al-center ju-center">
						<view class="pos-abs sowtext bai">
							  知道了
						</view>
				<image src="../../image/address/duan.png" class="showimg"  mode=""></image>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	import address from '../../vendor/address/address.js'
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				locdata: [],
				idx:0,
				flag:false,
			  message:true,
			  msg:''
			}
		},
		methods: {
         Select(index){
			 this.idx = index
		 },
		 // 编辑
		 edit(item){
			 console.log(item);
			 uni.navigateTo({
			 	url:'/pages/auth/addediting/ADDediting'
			 })
		 },
		 // 进入论坛
		 forum(item){
			 uni.navigateTo({
			 	url:`/pages/communityForum/forum/forum?id=${item.village_id}`
			 })
			 },
		// 预约电梯
		order(item){
	    console.log(item.id);
		address.bookingElevator({
			data:{id:item.id},
			success: (res => {
					if (res.statusCode != 200) return;
					
					if(res.data.code==200){
						this.message = true
						this.msg = res.data.msg
					}
					else{
						this.msg = res.data.msg
						this.message = false
					}
		      console.log(res.data.code);
			})
		})
			this.flag = true
			
		},
		// 确定关闭遮罩
		sure(){
			this.flag = false
			},
		 // 用户所有地址
			 data(){
				 address.alladd({
					 data: {},
					 success: (res => {
						 if (res.statusCode != 200) return;
						 
						 if (res.data.code != 200) return;
						 console.log(res.data.data.data);
						 let data = res.data.data.data
						 this.locdata = data
					 })
				 })
			 }
		
		},
		mounted() {
         this.data()
		},
		onLoad() {

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
	.box {
		width: 697rpx;
		padding-left: 30rpx;
		padding-right: 23rpx;
		top: 200rpx;
		margin-bottom: 160rpx;
	}

	.content {
		width: 604rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 2rpx 2rpx 6rpx #d9d9d9;
		padding-left: 60rpx;
		padding-top: 27rpx;
		padding-right: 33rpx;
		padding-bottom: 37rpx;
	}

	.zrimg {
		width: 24rpx;
		height: 24rpx;
	}

	.location {
		left: 20rpx;
		top: 24rpx;
	}

	.addres {
		height: 100%;
		width: 604rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.reimg {
		width: 17rpx;
		height: 32rpx;
	}

	.right {
		right: 0;
	}

	.line {
		margin-top: 23rpx;
		width: 604rpx;
		height: 0.5rpx;
		background: #BFBFBF;
	}

	.text {
		margin-top: 28rpx;
		width: 457rpx;
	}
	.botto{
		right: 23rpx;
		bottom: 32rpx;
		color: #F07535;
		}
.show{
	top: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	z-index: 999;
	overflow: hidden;
	position: fixed;
}	
.dv{
	position: fixed;
}	
.showbox{
	width: 440rpx;
	height: 500rpx;
	background: #FFFFFF;
	border-radius: 20rpx;
}
.showimg{
	width: 230rpx;
	height: 60rpx;
}

.sowtext{
	font-size: 30rpx;
	z-index: 10;
}

.noimg{
	margin-top: -74rpx;
	width: 230rpx;
	height: 190rpx;
}
.ntimg{
	margin-top: 80rpx;
	width: 182rpx;
	height: 79rpx;
}
.loca{
	position: fixed;
	bottom: 537rpx;
}
.scrimg{
		margin-top: -74rpx;
	width: 384rpx;
	height: 194rpx;
}
.scrtimg{
	margin-top: 80rpx;
	width: 220rpx;
	height: 37rpx;
}
.msg{
	color: rgb(254,134,72);
	width: 90%;
	height: 200rpx;
    display: flex;
	align-items: center;
	justify-content: center;
	}
</style>
