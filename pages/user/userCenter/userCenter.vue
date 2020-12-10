<template>
	<!-- 个人中心 -->
	<div class="whole">
		<!-- 头部 -->
		<headContent :user='user'></headContent>
		<!-- 操作栏 -->
		<actionBar @add='add'></actionBar>
	</div>
</template>

<script>
	import headContent from '../../../components/userCenter/headContent.vue';
	import actionBar from '../../../components/userCenter/actionBar.vue';
	import userDetails from '../../../vendor/user/userDetails.js';
	import jwt from '../../../vendor/auth/jwt.js';
	import cache from "../../../vendor/cache/cache.js"
	export default {
		name: "",
		components: {
			headContent,
			actionBar
		},
		props: {},
		data() {
			return {
				user: {} //用户资料
			}
		},
		methods: {
			// 退出
			add(item) {
				if (item.signout) {
					uni.showModal({
						title: '您确定要退出吗',
						success: (res => {
							if (res.confirm) {
								jwt.flush({
									success: () => {
										this.loadUserData();
									}
								});
								this.user = {}
							}
						})
					})
				}
			},
			// 获取用户资料
			loadUserData() {
				jwt.doOnlyTokenValid({
					showModal: true,
					keepSuccess: false,
					success: () => {
						userDetails.userDeta({
							data: {},
							fail: (err) => {
								uni.showToast({
									title: '网络错误',
									icon: 'none'
								})
							},
							success: (res) => {
								if (res.statusCode != 200) return;
								if (res.data.code != 200) return
								this.user = res.data.data
							},

						})
					},
					fail: () => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}
				})
			},
			
		},
		mounted() {

		},
		onLoad(val) {},
		onShow() {
			this.loadUserData();

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
	.whole {
		background: rgb(245, 245, 245);
		height: 100%;
	}

</style>
