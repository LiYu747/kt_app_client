<template>
	<view class="fz-12">
		<subunit class="fixed" titel='小区简介'></subunit>
		<view class="line">

		</view>
		<view class="">
			<u-swiper v-if="list.length>0" :list="list" border-radius='0' height="350"></u-swiper>
			<u-swiper v-if="list.length==0" :list="localist" border-radius='0' height="350"></u-swiper>
		</view>
		<view class="flex-d al-center">
			<view class="nav flex-d al-center pos-rel">
				<view class="tex1">
					{{arr.name}}
				</view>
				<view class="tex2 flex al-center ju-center" :class="{te2:idx===0}">
					<view class="item" v-for="(item,index) in titel" :key='item.id' @click="add(index)" :class="{'dv':index===1,'colr':idx===index}">
						{{item}}
					</view>
					<view @click="goforum" class="">
						论坛
					</view>
				</view>
				<!-- 小区简介 -->
				<view v-show="idx===0" class="content">
					<view class="addressBox flex pos-rel">
							<view class="addText">
								小区地址：
								{{detailedAddress}}
							</view>
							<view class="goHere flex pos-abs">
								<!-- 去这里 -->
								<image @click="navigation" src="https://oss.kuaitongkeji.com/static/img/app/forum/addicon.png" class="addicon" mode=""></image>
							</view>
					</view>
					<view class="m-t2">
						{{arr.brief}}
					</view>
				</view>
				<!-- 小区公告 -->
				<view v-show="idx === 1" class="twbx m-t2">
					<view v-if="Notice.length>0" class="">
						<view class="" v-for="(item,index) in Notice" :key='item.id'>
							<view @click="godils(item)" class="wid m-b1">
								{{index+1}} . {{item.title}}
							</view>
						</view>
					</view>
					<view v-else class="">
						暂无公告
					</view>
				</view>
			</view>
			<view v-if="idx===0&&arr.desc" class="foot">
				<u-parse :html="arr.desc"></u-parse>
			</view>
		</view>

		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				</view>
				加载中
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import village from '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {

		},
		data() {
			return {
				id: '', //传的id
				localist: ['https://oss.kuaitongkeji.com/static/img/app/forum/timg.jpg'],
				list: [], //轮播图
				arr: {}, //小区展示信息
				titel: [
					'简介', '公告'
				],
				Notice: [], // 公告数据
				detailedAddress: '', //小区详细地址
				idx: 0,
				isLoding: false
			}
		},
		methods: {
			// 点击
			add(index) {
				this.idx = index
			},
			// 去论坛
			goforum() {
				uni.navigateTo({
					url: `/pages/communityForum/forumlists/forumlists?id=${this.id}`
				})
			},
			// 去导航页
			navigation(){
				// console.log(this.arr);
				let addressName = this.arr.address_name
				let lat = this.arr.lat
				let lng = this.arr.lng
				uni.navigateTo({
					url:`/pages/classification/travel/travel?addressName=${addressName}&lat=${lat}&lng=${lng}`
				})
			},
			// 小区公告
			noticeData() {
				village.Notice({
					data: {
						village_id: this.id
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log(res.data.data.data);
						let data = res.data.data.data
						this.Notice = data
					}
				})
			},
			// 小区展示信息
			Information() {
				this.isLoding = true
				village.displayInformation({
					data: {
						id: this.id
					},
					fail: (err) => {
						this.isLoding = false
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						this.isLoding = false
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						// console.log('小区展示', res);
						let data = res.data.data
						data.album.map(item => {
							this.list.push(item.url)
						})
						this.arr = data
						// 小区详细地址
						this.detailedAddress = data.address + data.address_name
					}
				})
			},
			// 查看详情
			godils(item) {
				// console.log(item.id);
				village.Noticeshow({
					data: {
						id: item.id
					},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return
						if (res.data.code != 200) return
						let content = res.data.data.content
						let title = res.data.data.title
						uni.navigateTo({
							url: `/pages/InformationDetails/InformationDetails/InformationDetails?content=${content}&&title=${title}`
						})
					}
				})
			}
		},
		mounted() {
			this.noticeData()
			this.Information()
		},
		onLoad(val) {
			this.id = val.id
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

	.line {
		height: 148rpx;
	}

	/deep/ .u-swiper-indicator[data-v-a5b2d580] {
		bottom: 60rpx !important;
	}

	.nav {
		top: -42rpx;
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.tex1 {
		width: 98%;
		font-size: 36rpx;
		color: #F07535;
		margin-top: 34rpx;
		margin-left: 25rpx;
	}

	.tex2 {
		width: 100%;
		height: 100rpx;
		font-size: 28rpx;
		color: #666666;
	}

	.te2 {
		border-bottom: 1rpx solid #BFBFBF;
	}

	.item {
		height: 45rpx;
	}

	.dv {
		margin-left: 181rpx;
		margin-right: 162rpx;
	}

	.colr {
		color: #F07535;
		border-top: 4rpx solid #FFFFFF;
		border-bottom: 4rpx solid #F07535;
	}

	.nono {
		// color: #FFFFFF;
		border-top: 4rpx solid #FFFFFF;
		border-bottom: 4rpx solid #FFFFFF;
	}

	.content {
		margin-top: 31rpx;
		width: 608rpx;
		color: #666666;
		font-size: 24rpx;
		margin-bottom: 60rpx;
	}
	.addText{
		width: 500rpx;
		// background: red;
		word-break:break-all
	}
	
	.addicon{	
		width: 40rpx;
		height: 40rpx;
	}
	.goHere{
		margin-top: -40rpx;
		color: #F07535;
		width: 140rpx;
		justify-content: flex-end;
		margin-top: -6rpx;
		right: 20rpx;
	}

	.foot {
		width: 614rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 140rpx;
		padding: 20rpx 38rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		font-size: 24rpx;
		color: #666666;
		padding-bottom: 40rpx;
	}

	.fotex1 {
		margin-top: 46rpx;
	}

	.img1 {
		margin-top: 37rpx;
		width: 613rpx;
		height: 333rpx;
	}

	.twbx {
		width: 622rpx;
		background: #E6E6E6;
		padding: 20rpx 14rpx;
		color: #666666;
		margin-bottom: 60rpx;
	}

	.wid {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.showloding {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		color: #FFFFFF;
	}

	.loimg {
		width: 50rpx;
		height: 50rpx;
	}

	.loding {
		width: 260rpx;
		height: 200rpx;
		background: rgba(88, 88, 88, 0.8);
		border-radius: 10rpx;
	}
</style>
