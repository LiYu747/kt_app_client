<template>
	<view class="top">
		<view class="item" v-for="item in locdata" :key="item.id">
			<view class="name flex al-center ju-between">
				{{item.name}}
				<image @click="gotoo(item)" src="../../../image/address/retrue.png" class="nameimg" mode=""></image>
			</view>
			<view class="syntext">
				<view class="">
					小区介绍
				</view>
				<view class="synback flex al-center">
					<view class="aa">
						{{item.brief}}
					</view>
				</view>
			</view>
			<view class="syntext">
				<view class="">
					交通方式 
				</view>
				<view class="synback flex al-center">
					<view class="aa">
						暂无
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import village from '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {

		},
		props: {
			value:{
				type:String
			}
		},
		data() {
			return {
				locdata: []
			}
		},
		methods: {
			  // 搜索数据
              Data(){
				  village.allvillage({
					  data:{kw:this.value},
					  success: (res => {
						  console.log(res.data.data.data);
						  let data = res.data.data.data
						  this.locdata = data	
				  })
				  })
			  },
			  // 去详情页
			  gotoo(item){
				  console.log(item.id);
				uni.navigateTo({
					url:`/pages/communityForum/forum/forum?id=${item.id}`
				})
				  }
		},
		mounted() {
           this.Data()
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
	.top{
		margin-top: 150rpx;
	}
	.item {
		width: 629rpx;
		height: 402rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding-left: 29rpx;
		padding-right: 32rpx;
		padding-top: 30rpx;
		padding-bottom: 53rpx;
	}

	.nameimg {
		width: 17rpx;
		height: 32rpx;
	}

	.name {
		font-size: 30rpx;
		color: #666666;
	}

	.syntext {
		font-size: 24rpx;
		color: #666666;
		margin-top: 29rpx;
	}

	.synback {
		padding: 0 20rpx;
		margin-top: 25rpx;
		width: 569rpx;
		height: 98rpx;
		background: #E6E6E6;
		padding-right: 20rpx;
	}

	.aa {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>
