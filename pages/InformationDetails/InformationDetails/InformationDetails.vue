<template>
	<view class="">
		<subunit   titel="详情"></subunit>
		<view class="flex-d al-center ovov">
			<view class="titel">
				{{title}}
			</view>
			<view  class="desc">
				<u-parse :html="content"></u-parse>
			</view>
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
				title:'',
				content: '', //显示的内容
			}
		},
		methods: {
	
		},
		mounted() {
		  let val =	this.$store.state.homeContent
		  this.title = val.title
		  this.content  = val.content
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

<style   lang="scss">
	page {
		background: #FFFFFF !important;
	}

	.pos {
		position: fixed;
	}

	.line {
		height: 128rpx;
	}

	.titel {
		margin-top: 60rpx;
		width: 612rpx;
		height: 66rpx;
		font-size: 36rpx;
		margin-bottom: 100rpx;
		color: #666666;
	}

	.desc {
		padding: 30rpx;

	}
</style>
