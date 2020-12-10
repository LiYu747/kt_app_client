<template>
	<view class=" flex updata ju-center al-center">
		<u-button @click="go" type="success">去更新</u-button>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				url: ''
			}
		},
		methods: {
			go() {
				plus.runtime.openURL(this.url)
			}
		},
		mounted() {

		},
		onLoad(val) {
			console.log(val);
			this.url = val.url
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
	.updata {
		height: 600rpx;
	}
</style>
