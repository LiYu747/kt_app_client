<template>
	<view>
		<subunit titel='实名信息' class="fixed"></subunit>
		<view class="topLine">

		</view>
		<view class="flex-d al-center">
			<view class="contenBox">
				<view class="flex al-center ju-between itemBox pos-rel" v-for=" (item,index) in locdata" :key='item.id'>
					<view class="">
						{{item.label}}
					</view>
					<view class="">
						<input type="text" class="ipt" :focus="item.focus" :disabled="item.disabled" :placeholder="item.placeholder" v-model="item.value" />
					</view>
					<view v-if="index==2" class="pos-abs rigth">
						<image  class="reimg" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<!-- 退出登录 -->
			<view @click="logOut" class="end flex al-center ju-center">
				<image src="https://oss.kuaitongkeji.com/static/img/app/login/ccuc.png" class="enimg" mode=""></image>
				<view class=" pos-abs">
					退出登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import user from '../../../vendor/user/userDetails.js'
	import jwt from '../../../vendor/auth/jwt.js';
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				locdata: [{
						label: '真实姓名',
						value: '李钰'
					},
					{
						label: '身份证号',
						value: '',
						focus: false,
						placeholder:'请输入您的身份证号'
					},
					{
						label: '修改密码',
						value: '',
						disabled:true
					},
				]
			}
		},
		methods: {
			// 退出登录
			logOut(){
				uni.showModal({
					title: '您确定要退出吗',
					success: (res => {
						if (res.confirm) {
							jwt.flush({
								success: () => {
								}
							});
						}
					})
				})
			},
			//用户信息
			getUserinfo(){
				user.userDeta({
					data: {},
					fail: () => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
						if (res.statusCode != 200) return;
						if (res.data.code != 200) return;
						let Users = res.data.data
						this.locdata[0].value = Users.username
						if(!Users.id_card_no){
							this.locdata[1].focus = true
						}
						this.locdata[1].value = Users.id_card_no.slice(0,3) + '**********' + Users.id_card_no.slice(Users.id_card_no.length-4,Users.id_card_no.length)
					},
				
				})
			}
		},
		mounted() {

		},
		onShow() {
			this.getUserinfo()
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
	}

	.topLine {
		height: 148rpx;
	}

	.contenBox {
		margin-top: 50rpx;
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		color: #666666;
		padding-bottom: 50rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		font-size: 15px;
	}

	.itemBox {
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
	}

	.ipt {
		width: 400rpx;
		text-align: right;
		font-size: 15px;
	}
	.rigth{
		right: 20rpx;
	}
	.reimg {
		width: 18rpx;
		height: 25rpx; 
	}
	.uni-input-placeholder{
		font-size: 14px;
		color: #999999;
	}
	
	.end {
		margin-top: 61rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}
	
	.enimg {
		width: 358rpx;
		height: 68rpx;
	}
</style>
