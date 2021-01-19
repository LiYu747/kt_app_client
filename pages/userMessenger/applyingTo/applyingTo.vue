<template>
	<view>
		<subunit titel='申请成为' class="fixed"></subunit>
		<view @click="goRecord" class="record">
			申请进度
		</view>
		<view class="lineTop">

		</view>
		<view class="flex-d al-center">
			<view class="msgBox">
				<view class="msgTil">
					基本信息
				</view>
				<view class="m-t2">
					<view class="msgItem flex al-center ju-between" v-for="item in locdata" :key='item.id'>
						<view class="itemLabel">
							{{item.label}}
						</view>
						<input type="text" :placeholder="item.placeholder" :disabled="item.disabled" class="msgIpt" v-model="item.value"
						 value="" />
					</view>
				</view>
			</view>

			<view class="accessoryBox">
				<view class="accTitle flex al-center">
					附件凭证
					<view class="annotation">
						（截图、拍照 不超过三张）
					</view>
				</view>
				<view class="flex ju-center">
					<view class="fileBox flex">
						<view class="" v-for="item in image" :key='item.id'>
							<image :src="item" class="itenImg" mode="aspectFill"></image>
						</view>
						<view @click="pushBtn" class="pushBtn flex-d al-center ju-center">
							<image src="https://oss.kuaitongkeji.com/static/img/app/home/push.png" class="pushimg" mode=""></image>
							<view class="fz-12">
								上传文件
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="remarkBox">
				<view class="reTil">
					备注
				</view>
				<textarea v-model="remark" class="reArea"></textarea>
			</view>

			<view @click="submit" class="Submit mar-t  flex al-center ju-center">
				<image class="Submit pos-abs" src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" mode=""></image>
				<view class="subText">
					提交
				</view>
			</view>
		</view>

		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				</view>
				上传中
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import route from '../../../vendor/request/routes.js'
	import home from '../../../vendor/home/home.js'
	import user from '../../../vendor/user/userDetails.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				remark: '', //备注
				image: [], //上传图片
				isLoding: false,
				locdata: [{
						label: '姓名',
						value: '',
						disabled: true
					},
					{
						label: '所属平台',
						value: '',
						placeholder: '请输入平台',
						disabled: false
					},
					{
						label: '工号',
						value: '',
						placeholder: '请输入工号',
						disabled: false
					},
				]
			}
		},
		methods: {
			//申请记录
			goRecord() {
				uni.navigateTo({
					url: '/pages/userMessenger/applyingTo/applyingRecord/applyingRecord'
				})
			},
			// 选择附件
			pushBtn() {
				uni.chooseImage({
					extension: ['jpg', 'jpeg', 'png', 'gif'],
					success: (chooseImageRes) => {
						const files = chooseImageRes.tempFilePaths;
						this.isLoding = true;
						let that = this;

						if (files.length == 0) return;

						let func = [];
						files.forEach((item) => {
							func.push(that.upload(item));
						});

						Promise.all(func).then((res) => {
							that.isLoding = false;
						}).catch((err) => {
							that.isLoding = false;
							uni.showModal({
								title: "上传文件出错:" + err,
							})
						})
					}
				})
			},
			upload(fileItem) {
				let that = this;
				return new Promise((res, rej) => {
					uni.uploadFile({
						url: route.services.file.upload,
						filePath: fileItem,
						name: 'file',
						fail: (err) => {
							// that.isLoding = false;
							rej('网络出错');
						},
						success: (val) => {
							// that.isLoding = false;
							if (val.statusCode != 200) {
								rej(val.statusCode);
								return;
							}

							let jres = JSON.parse(val.data);

							if (jres.code != 200) {
								rej(jres.msg);
								return;
							}
							if (that.image.length < 3) {
								that.image.push(jres.data.url)
							} else {
								uni.showToast({
									title: '数量不超过三张',
									icon: "none"
								})
							}
							res(jres);
						}
					})
				})
			},

			// 提交
			submit() {
				if (this.locdata[1].value == '') {
					uni.showToast({
						title: "请填写所属平台",
						icon: 'none'
					})
					return;
				}
				if (this.locdata[2].value == '') {
					uni.showToast({
						title: "请填写平台工号",
						icon: 'none'
					})
					return;
				}
				if (this.isLoding == true) return;
				uni.showLoading({
					title: '加载中'
				})
				home.applyToBecome({
					data: {
						platform: this.locdata[1].value,
						code: this.locdata[2].value,
						files: this.image,
						user_remark: this.remark
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: "none"
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
							return;
						}
						uni.showToast({
							title: res.data.msg
						})
						this.locdata[1].value = ''
						this.locdata[2].value = ''
						this.image = []
						this.remark = ''
					}
				})
			},
           //获取用户资料
			getuserinfo() {
				uni.showLoading({
					title:'加载中'
				})
				user.userDeta({
					data: {},
					fail: (err) => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200){
							uni.showToast({
								title: '网络出错了',
								icon: "none"
							})
							return;
						}
						if (res.data.code != 200) return;
						let Users = res.data.data
						this.locdata[0].value = Users.username
						// console.log(Users);
					},
				})
			}
		},
		mounted() {
        this.getuserinfo()
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

	.record {
		top: 84rpx;
		right: 50rpx;
		z-index: 10;
		color: #FFFFFF;
		font-size: 15px;
		position: fixed;
	}

	.lineTop {
		height: 148rpx;
	}

	.msgBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 40rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.msgTil {

		font-size: 16px;
	}

	.msgItem {
		width: 100%;
		height: 80rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.msgIpt {
		// background: red;
		text-align: right;
		width: 500rpx;
		font-size: 14px;
	}

	.itemLabel {
		font-size: 14px;
	}

	.accessoryBox {
		margin-top: 30rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		padding-bottom: 40rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.accTitle {
		font-size: 16px;
		height: 60rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.input-placeholder {
		color: #999999;
	}

	.annotation {
		font-size: 12px;
		color: red;
	}

	.fileBox {
		margin-top: 20rpx;
		width: 600rpx;
		flex-wrap: wrap;
	}

	.pushBtn {
		width: 130rpx;
		height: 150rpx;
		background: rgb(244, 245, 246);
	}

	.itenImg {
		width: 130rpx;
		height: 150rpx;
		margin-right: 20rpx;
	}

	.pushimg {
		width: 50rpx;
		height: 50rpx;
	}

	.Submit {
		width: 358rpx;
		height: 68rpx;
	}

	.subText {
		color: #FFFFFF;
		z-index: 9;
	}

	.mar-t {
		margin-top: 60rpx;
		margin-bottom: 20rpx;
	}

	.remarkBox {
		margin-top: 40rpx;
		width: 650rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		color: #666;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}

	.reTil {
		width: 100%;
		height: 60rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.reArea {
		width: 96%;
		height: 120rpx;
		padding: 10rpx 2%;
		background: #FFFFFF;
		font-size: 14px;
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
	}
</style>
