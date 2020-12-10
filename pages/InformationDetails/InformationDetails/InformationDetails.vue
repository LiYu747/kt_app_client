<template>
	<!-- id为0 是desc  id为1 是content -->
	<view class="flex-d al-center ovov">
		<subunit class="pos " :retur="true"  titel="详情"></subunit>
		<view class="line">

		</view>
		<view class="titel">
			{{content.title}}
		</view>
		<view v-if="id==0" class="desc">
			<u-parse :html="content.desc"></u-parse>
		</view>
		<view v-if="id==1" class="desc">
			<u-parse :html="content.content"></u-parse>
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
				content: {}, //显示的内容
				id: '', //传来的id
			}
		},
		methods: {
	
		},
		mounted() {},
		onLoad(val) {
			let arr = JSON.parse(val.content)
			// console.log(val.id);
			this.id = val.id
			this.content = arr
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
		margin-top: 40rpx;
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
