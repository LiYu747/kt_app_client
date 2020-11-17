<template>
	<view class="flex-d al-center">
		<subunit class="fled" titel="来访记录" @goback='goback' :retur="true"></subunit>
		<view class="top">
		</view>
		<view class="card" v-for="(items,indexs) in arr" :key='items.id' :class="{'bottom':indexs===arr.length-1}">
			<view class="item flex al-center pos-rel" v-for="(item,index) in items.locdata" :class="{'bot':index===4}" :key='item.id'>
				<view class="left flex al-center ju-center">
					<image :src="item.icon " class="itemimg" :class="{'dv1':index===1,'dv2':index===2,'dv3':index===3,'dv4':index===4}"
					 mode=""></image>
				</view>
				{{item.name}}
				<view @click="godetails" v-if="index===0" class="pos-abs rig">
					{{item.handle}} >
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
		data() {
			return {
				arr: [{
						locdata: [{
								icon: require('@/image/visit/user.png'),
								name: '王小花',
								handle:'待处理'
							},
							{
								icon: require('@/image/visit/phone.png'),
								name: '17608040164'
							},
							{
								icon: require('@/image/visit/idcard.png'),
								name: '513722********4485'
							},
							{
								icon: require('@/image/visit/time.png'),
								name: '2018-6-24'
							},
							{
								icon: require('@/image/visit/pos.png'),
								name: '一心湖小区'
							}
						],
					},
					{
						locdata: [{
								icon: require('@/image/visit/user.png'),
								name: '王小花',
								handle:'已处理'
							},
							{
								icon: require('@/image/visit/phone.png'),
								name: '17608040164'
							},
							{
								icon: require('@/image/visit/idcard.png'),
								name: '513722********4485'
							},
							{
								icon: require('@/image/visit/time.png'),
								name: '2018-6-24'
							},
							{
								icon: require('@/image/visit/pos.png'),
								name: '一心湖小区'
							}
						]
					
				},
				{
						locdata: [{
								icon: require('@/image/visit/user.png'),
								name: '王小花',
								handle:'已处理'
							},
							{
								icon: require('@/image/visit/phone.png'),
								name: '17608040164'
							},
							{
								icon: require('@/image/visit/idcard.png'),
								name: '513722********4485'
							},
							{
								icon: require('@/image/visit/time.png'),
								name: '2018-6-24'
							},
							{
								icon: require('@/image/visit/pos.png'),
								name: '一心湖小区'
							}
						]
					
				},
				{
						locdata: [{
								icon: require('@/image/visit/user.png'),
								name: '王小花',
								handle:'已处理'
							},
							{
								icon: require('@/image/visit/phone.png'),
								name: '17608040164'
							},
							{
								icon: require('@/image/visit/idcard.png'),
								name: '513722********4485'
							},
							{
								icon: require('@/image/visit/time.png'),
								name: '2018-6-24'
							},
							{
								icon: require('@/image/visit/pos.png'),
								name: '一心湖小区'
							}
						]
					
				},
				]
}
		},
		methods: {
			// 去详情
           godetails(){
			   uni.navigateTo({
                  url:'/pages/auth/details/details'			   	
			   })
		   },
		   // 返回
		   goback(){
			   uni.navigateBack({
			   	delta:1
			   })
		   }
		},
		mounted() {

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
	.card {
		margin-top: 20rpx;
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
	}

	.left {
		width: 70rpx;
	}

	.itemimg {
		width: 28rpx;
		height: 28rpx;
	}

	.dv1 {
		width: 22rpx;
		height: 30rpx;
	}

	.dv2 {
		width: 30rpx;
		height: 22rpx;
	}

	.dv3 {
		width: 30rpx;
		height: 30rpx;
	}

	.dv4 {
		width: 32rpx;
		height: 32rpx;
	}

	.item {
		height: 80rpx;
		color: #666666;
		border-bottom: 1rpx solid #cccccc;
	}

	.bot {
		border: none;
	}

	.rig {
		right: 30rpx;
		color: rgb(229, 75, 68);
	}
	.fled{
		position: fixed;
		z-index: 9;
	}
	.top{
		margin-top: 128rpx;
	}
	.bottom{
		margin-bottom: 40rpx;
	}
</style>
