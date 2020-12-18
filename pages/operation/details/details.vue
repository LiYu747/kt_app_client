<template>
	<view class="">
		<subunit titel="详情" :retur="true" @goback='goback'></subunit>
		<view class="cont">
			<view class="nav flex al-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/visit/gnt.png" class="img" mode=""></image>
				<view class="text">
					{{text}}
				</view>
			</view>
			<view class="flex al-center pos-rel ipt" v-for="(item,index) in locadata" :key='item.id'>
				<view class="">
					{{item.titel}}
				</view>
				<view class="pos-abs rig">
					{{item.value}}
				</view>
			</view>
			<view class="line">

			</view>
			<view class="textime flex al-center">
				二维码有效时间 ：
				<view  @click="opentime" class="timebox flex al-center">
					 <view class="timer">
					 	{{valuetime}}
					 </view>
					<image src="https://oss.kuaitongkeji.com/static/img/app/home/xiala.png" class="xialaimg" mode=""></image>
				</view>
			</view>
			<u-picker :default-time='invalid_at' @confirm="ok" mode="time" v-model="show" :params="params"></u-picker>
			<view class="tex1">
				备注
			</view>
			<view class="frame">
				{{remarks}}
			</view>
			<view class="tex1">
				申请结果
			</view>
			<textarea v-model="textvalue" class="frame">
             </textarea>

			<!-- 按钮 -->
			<view v-if="text==='待处理'" class="flex al-center ju-around m-t4">
				<view @click="pass" class="btnr flex al-center ju-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" class="btnimg" mode=""></image>
					<view class=" pos-abs">
						通过
					</view>
				</view>
				<view @click="nopass" class="btnl flex al-center ju-center">
					不通过
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import home from '../../../vendor/home/home.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				text: '', //结果
				remarks: '', //备注
				result: '', //结果
				textvalue: '', //结果文本域
				valuetime: '', //二维码有效时间
				show: false,
				invalid_at: '', //传的时间
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				locadata: [{
						titel: '姓名',
						value: ''
					},
					{
						titel: '手机号码',
						value: ''
					},
					{
						titel: '申请时间',
						value: ''
					},
					{
						titel: '地址',
						value: ''
					},
				],
				id: '' //传过来的id
			}
		},
		methods: {
			// 返回
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 打开时间选择
			opentime() {
				this.show = true	
			},
			// 确定
			ok(val) {
				this.invalid_at = val.year + '-' + val.month + '-' + val.day + ' '  + val.hour + ':' + val.minute + ':' + val.second
				let time = val.year + '年' + val.month + '月' + val.day + '日'+ ' ' + val.hour + ':' + val.minute + ':' + val.second
				this.valuetime = time
			},
			// 数据
			getData() {
				uni.showLoading({
					title: '加载中...'
				})
				home.comvisitdeil({
					data: {
						id: this.id
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) return;

						if (res.data.code != 200) return;
						// console.log(res.data.data);
						let data = res.data.data
						this.text = data.verify_text
						this.locadata[0].value = data.own_visitor.username
						this.locadata[1].value =  data.own_visitor.tel.slice(0,3) + '****' + data.own_visitor.tel.slice(7,11)
						this.locadata[2].value = data.created_at.slice(0, 10)
						this.locadata[3].value = data.village_name + data.building_name + data.apartment_name + data.floor_name
						this.remarks = data.visitor_remark
						this.result = data.verify_text
					}
				})
			},
			// 通过
			pass() {
				uni.showLoading({
					title: '加载中...',
				})
				home.handlevisit({
					data: {
						id: this.id,
						verify_status: 2,
						verify_msg: this.textvalue,
						invalid_at: this.invalid_at
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络请求出错',
								icon: 'none'
							});
							return;
						}

						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
							return;
						}
                        uni.showToast({
                        	title: res.data.msg,
                        });
						   const time = setTimeout(() => {
						   	this.getData()
						   	clearTimeout(time)
						   }, 1500)
						// console.log(res);	
					}
				})

			},
			// 不通过
			nopass() {
				uni.showLoading({
					title: '加载中...',
				})
				home.handlevisit({
					data: {
						id: this.id,
						verify_status: 3,
						verify_msg: this.textvalue
					},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络请求出错',
								icon: 'none'
							});
							return;
						}

						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
							return;
						}

						uni.showToast({
							title: res.data.msg,
						});
						// console.log(res);
					const time = setTimeout(() => {
						this.getData()
						clearTimeout(time)
					}, 1500)

					}
				})
			},

			datetime() {
				let nowDate = new Date()
				let date = {
					year: nowDate.getFullYear(),
					month: nowDate.getMonth() + 1,
					date: nowDate.getDate(),
				}
				this.valuetime =  date.year + '年' + date.month + '月' + date.date + '日' + '23:59:00'
				this.invalid_at = date.year + '-' +  date.month + '-' + date.date + ' ' + '23:59:00'
			}
		},
		mounted() {
			this.getData()
			this.datetime()
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
	.cont {
		width: 710rpx;
		height: 100rpx;
		padding: 0 20rpx;
	}

	.nav {
		height: 120rpx;
		border-bottom: 1rpx solid #cccccc;
		margin-bottom: 20rpx;
	}

	.img {
		width: 40rpx;
		height: 40rpx;
	}

	.text {
		font-size: 30rpx;
		margin-left: 20rpx;
		color: #F07535;
	}

	.ipt {
		height: 60rpx;
		font-size: 30rpx;
		color: rgb(165, 165, 165);
	}

	.rig {
		right: 20rpx;
	}

	.line {
		margin-top: 30rpx;
		width: 100%;
		height: 1rpx;
		background: #cccccc;
	}

	.tex1 {
		margin: 30rpx 0;
		font-size: 30rpx;
		color: rgb(165, 165, 165);
	}
     
	.textime{
		margin: 30rpx 0;
		font-size: 28rpx;
		color: rgb(165, 165, 165);
	} 
	 
	.frame {
		width: 94%;
		padding: 3%;
		height: 120rpx;
		border-radius: 10rpx;
		background: #FFFFFF;
		font-size: 26rpx;
		color: rgb(165, 165, 165);
	}

	.btnr {
		width: 320rpx;
		height: 70rpx;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.btnimg {
		width: 320rpx;
		height: 70rpx;
	}

	.btnl {
		width: 318rpx;
		height: 68rpx;
		border-radius: 50rpx;
		border: 1rpx solid rgb(240, 117, 53);
		font-size: 28rpx;
		color: rgb(240, 117, 53);
	}

	.timebox {
		width: 460rpx;
	}
    
	.timer{
			width: 460rpx;
		 text-align: right;
		 color: #444;
		 font-size: 12px;
	}
	
	.xialaimg {
		margin: 0 20rpx;
		width: 34rpx;
		height: 18rpx;
	}
</style>
