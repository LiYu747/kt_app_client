<template>
	<view class="boxss">
		<view class="item flex al-center" v-for="(item,index) in locdata" @click="add(item,index)" :key='item.id' :class="{'dv':index<3,'top':index>3}">
			<image :src="item.image" class="itemimg" mode=""></image>
			<view class="itemtext">
				{{item.titel}}
			</view>
			<view v-if="index ==6" class="">
				<view v-if="0<informmsg && user" class="munber flex al-center ju-center">
					{{informmsg}}
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import cache from '../../vendor/cache/cache.js'
	export default {
		name: "",
		components: {

		},
		props: {
			informmsg: {
				type: Number
			},
			user: {
				type: Object
			},
			Gshow: {
				type: Number
			}
		},
		data() {
			return {
				locdata: [{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/Checkin.png',
						titel: '入驻申请',
						url: '/pages/residence/checkRecord/checkRecord'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/visit.png',
						titel: '拜访申请',
						url: '/pages/visitapplication/goRecord/goRecord'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/record.png',
						titel: '来访记录',
						url: '/pages/operation/visitRecord/visitRecord'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/scan.png',
						titel: '回家二维码',
						url: '/pages/qrcode/qrCode/qrCode'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/Trecords.png',
						titel: '出行记录',
						url: '/pages/user/travelRecords/travelRecords'
					},
					{
						image: require("@/image/lookroom/zoom.png"),
						titel: '房屋租售',
						url: '/pages/classification/lookRoom/rentAndsale/rentAndsale'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/address/msgtz.png',
						titel: '消息通知',
						url: '/pages/user/userInform/userInform'
					},
					{
						image: 'https://oss.kuaitongkeji.com/static/img/app/user/about.png',
						titel: '关于快通',
						url: '/pages/user/versionNumber/versionNumber'
					},

				],
				
			}
		},
		methods: {
			// 点击每一栏事件
			add(item, index) {
				if(this.Gshow==6) return;
				if (!item.url) return;
				uni.navigateTo({
					url: item.url
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
	.boxss {
		margin-top: 48rpx;
		width: 690rpx;
		padding: 0 30rpx;
	}

	.itemimg {
		width: 30rpx;
		height: 30rpx;
		margin-left: 19rpx;
		margin-right: 18rpx;
		
	}

	.item {
		width: 690rpx;
		height: 90rpx;
		background: #FFFFFF;
	}

	.itemtext {
		font-size: 32rpx;
	}

	.dv {
		border-bottom: 1rpx solid rgb(231, 231, 231);
	}

	.top {
		margin-top: 20rpx;
	}

	.infosImg {
		width: 34rpx;
		height: 34rpx;
	}

	.munber {
		padding: 2px 6px;
		background: red;
		border-radius: 20rpx;
		font-weight: 700;
		font-size: 10px;
		color: #FFFFFF;
		z-index: 2;
		margin-left: 20rpx;
	}
</style>
