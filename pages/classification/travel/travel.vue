<template>
	<view class="">
		<subclass titel="交通出行" :showmap='false'></subclass>
		<!-- <view class="simulation">
			以下均为模拟数据
		</view> --> 
		<view class="topbox flex al-center ju-center">
			<view class="inbox flex">
				<view class="left flex-d al-center pos-rel">
					<view class="come">
						从
					</view>
					<view class="go pos-abs">
						到
					</view>
				</view>

				<view class="rigth">
					<input v-model="myPosition" placeholder="请输入起点" />
					<view class="line">
						<input v-model="goPosition" placeholder="请输入终点" />
					</view>
				</view>

				<view class="">
					<image src="../../../image/classification/Travel/jiah.png" class="jiaoimg" mode=""></image>
				</view>
			</view>
		</view>


		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>

		<view class=" flex ju-center">
			<view class="botombox flex al-center ju-center">
				<view class="flex ju-center ">
					<image @click="srta" src="../../../image/classification/Travel/start.png" class="startimg" mode=""></image>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
	import userDetails from '../../../vendor/user/userDetails.js'
	import cfg from '../../../vendor/config/config.js';

	export default {
		name: "",
		components: {
			subclass
		},
		props: {},
		data() {
			return {
				myPosition: '',
				goPosition: '',
				idx: '',
				num: 0,
				// 经纪人id
				latitude: 30.471306,
				longitude: 104.071657,
				covers: [{
					id: 1,
					width: 10, //宽
					height: 10, //高
					title: '我的位置', //地图标题 
					latitude: 30.471306,
					longitude: 104.071657,
					iconPath: '../../../static/pos.png'
				}],
			}
		},
		methods: {
			add(index) {
				this.idx = index
			},
			choice(index) {
				this.num = index
			},
			// 导航
			Navigation() {
				userDetails.Navigation({
					data: {},
					fail: () => {
						uni.showToast({
							title: "网络错误",
							icon: 'none'
						})
					},
					success: (res) => {
						// console.log(res.data.data);
						this.Map = res.data.data
					}
				})
			},
			// 定位
			location() {

				// console.log('location')
				uni.getLocation({
					type: 'gcj02',
					altitude: true,
					geocode: true, //设置该参数为true可直接获取经纬度及城市信息
					success: function(res) {
						this.latitude = res.latitude
						this.longitude = res.longitude
						this.addrDel = res;
						// console.log(res);
					},
					fail: function(err) {
						// console.log('err', err)
						uni.showToast({
							title: '获取地址失败，将导致部分功能不可用',
							icon: 'none'
						});
					}
				});
			},
			srta() {

				let that = this;
 
				if (that.goPosition.length === 0) {
					uni.showToast({
						title: '请输入终点',
						icon: "none"
					})
					return
				};

				cfg.ready((data) => {

					if (!data.map) return;
					let navUrl = 'https://apis.map.qq.com/tools/routeplan/eword=' + that.goPosition;

					navUrl += '?key=' + data.map.key + '&referer=' + data.map.name;

					plus.runtime.openURL(navUrl);

				})

			}

		},
		onShow() {
			this.Navigation()
			this.location()
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
	.topbox {
		width: 100%;
		height: 200rpx;
		background: #FFFFFF;
	}

	.inbox {
		width: 620rpx;
		height: 146rpx;
		background: #F5F5F5;
		border-radius: 10rpx;
	}

	.left {
		width: 66rpx;
		color: #999999;
		font-size: 26rpx;
		height: 146rpx;
	}

	.come {
		margin-top: 20rpx;
	}

	.go {
		bottom: 26rpx;
	}

	.rigth {
		margin-top: 10rpx;
		width: 488rpx;
		height: 110rpx;
	}

	.line {
		width: 100%;
		height: 1px;
		background: #CCCCCC;
	}

	input {
		// background: red;
		height: 62rpx;
		font-size: 30rpx;
		color: #333333;
	}

	.jiaoimg {
		margin-top: 50rpx;
		margin-left: 20rpx;
		width: 30rpx;
		height: 36rpx;
	}

	.tabar {
		width: 100%;
		height: 64rpx;
		background: #FFFFFF;
		color: #999999;
		font-size: 24rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.item {
		height: 64rpx;
	}

	.dv {
		color: #FF9C00;
		height: 62rpx;
		border-top: 1px solid #FFFFFF;
		border-bottom: 1px solid #FF9C00;
	}

	.mapimg {
		width: 100%;
		height: 800rpx;
	}

	.botombox {
		top: -50rpx;
		position: relative;
		width: 690rpx;
		height: 280rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
	}

	.advantage {
		color: #999999;
		font-size: 24rpx;
	}

	.time {
		color: #333333;
		font-size: 36rpx;
	}

	.distance {
		color: #999999;
		font-size: 24rpx;
	}

	.itmmbox {
		flex: 1;
		margin-top: 10rpx;
	}

	.colr {
		color: #FF9C00 !important;
	}

	.ged {
		border-right: 2rpx solid #cccccc;
	}

	.startimg {
		margin-top: 35rpx;
		width: 423rpx;
		height: 64rpx;
	}

	.simulation {
		display: flex;
		justify-content: center;
		height: 80rpx;
		align-items: center;
		font-size: 30rpx;
		color: #b3b3b3;
		// background: #FFFFFF;
	}
</style>
