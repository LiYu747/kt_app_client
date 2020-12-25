<template>
	<view>
		<subunit titel='申请记录' class="fixed"></subunit>
		<view class="topLine"></view>
		<view class="flex-d al-center">
			<view class="card" @click="godetails(items)" v-for="(items,indexs) in lists" :key='items.id' :class="{bottom:indexs==lists.length-1}">
				<view class="bx1 flex al-center pos-rel">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/user.png" class="dv3" mode=""></image>
					<view class="">
						{{items.username}}
					</view>
					<view class=" pos-abs rig">
						{{items.verify_text}}
						>
					</view>
				</view>
				<view class="bx1 flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/time.png" class="dv3" mode=""></image>
					<view class="">
						{{items.created_at}}
					</view>
				</view>
				<view class="bx2 flex al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/visit/pos.png" class="dv3" mode=""></image>
					<view class="">
						{{items.village_name}}
					</view>
				</view>

			</view>
		</view>
		<view class="btmLine flex ju-center">
			{{notext}}
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				notext: '', //没有更多了
				hasMore:true,
				isLoadding:false,
				lists: [{
						username: '李钰',
						verify_text: '待处理',
						created_at: '2020-12-25 10:52',
						village_name: '腹地御香山'
					},
					{
						username: '李钰',
						verify_text: '待处理',
						created_at: '2020-12-25 10:52',
						village_name: '腹地御香山'
					},
					{
						username: '李钰',
						verify_text: '待处理',
						created_at: '2020-12-25 10:52',
						village_name: '腹地御香山'
					},
					{
						username: '李钰',
						verify_text: '待处理',
						created_at: '2020-12-25 10:52',
						village_name: '腹地御香山'
					},
					{
						username: '李钰',
						verify_text: '待处理',
						created_at: '2020-12-25 10:52',
						village_name: '腹地御香山'
					}
				]
			}
		},
		methods: {
           // 查看详情
		   godetails(item){
			   uni.navigateTo({
			   	url:'/pages/userMessenger/visitToApply/visitDetails/visitDetails'
			   })
		   }
		},
		mounted() {

		},
		onReachBottom() {
			this.notext = '没有更多了'
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
		position: fixed;
		z-index: 9;
	}

	.topLine {
		height: 148rpx;
	}

	.card {
		margin-top: 30rpx;
		width: 690rpx;
		background: #FFFFFF;
		color: #666666;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		font-size: 26rpx;
	}

	.bx1 {
		height: 80rpx;
		border-bottom: 1rpx solid #cccccc;
	}

	.bx2 {
		height: 80rpx;
	}

	.left {
		width: 70rpx;
	}


	.dv3 {
		width: 30rpx;
		height: 30rpx;
		margin: 0 20rpx;
	}

	.rig {
		right: 30rpx;
		color: rgb(229, 75, 68);
	}

	.btmLine {
		font-size: 12px;
		color: #666;
		padding: 30rpx 0;
	}
</style>
