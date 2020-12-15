<template>
	<view class="flex-d al-center ovov">
		<subunit class="pos " :retur="true"  titel="详情"></subunit>
		<view class="line">

		</view>
		<view class="titel">
			{{title}}
		</view>
		<view  class="desc">
			<u-parse :html="content"></u-parse>
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
		mounted() {},
		onLoad(val) {
			this.title = val.title
			this.content  = val.content
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
