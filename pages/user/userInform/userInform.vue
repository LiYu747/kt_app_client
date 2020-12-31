<template>
	<view class="">
		<view class="fixed ">
			<subunit titel='消息' class=""></subunit>
			<view class=" pos-abs empty">
				清空
			</view>
		</view>
		<view class="topLine"></view>
		
		<view class="contenBox">
			<view class="itemBox" v-for="item in locdata" :key='item.id'>
				{{item.title}}
			</view>
		</view>
		
		<view class="bomLine">
			
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
				locdata: [{
						title: '尊敬的用户，您好：于2020.12.29有一条来访申请，请立即查看。 '
					},
					{
						title: '尊敬的用户，您好：于2020.12.29您提交的审核已通过。 '
					},
					{
						title: '尊敬的用户，您好：于2020.12.29张三提交了入住申请。 '
					}
				]
			}
		},
		methods: {

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
	.fixed {
		width: 100%;
		position: fixed;
		z-index: 9;
	}

	.empty {
		top: 84rpx;
		right: 50rpx;
		color: #FFFFFF;
		font-size: 15px;
	}

	.topLine {
		height: 148rpx;
	}
	
	.contenBox{
		width: 690rpx;
		padding: 30rpx;
	}
	
	.itemBox{
		width: 650;
	   padding: 40rpx 20rpx;
	   background: #FFFFFF;
	   margin-bottom: 30rpx;
	   font-size: 12px;
	   color: #666666;
	   border-radius: 10rpx;
	}
	
	.bomLine{
		// height: 600px;
	}
</style>
