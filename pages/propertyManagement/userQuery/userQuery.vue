<template>
	<view class="">
		<view class="">
			<subunit titel='用户查询'></subunit>
			<view class="searchBox flex al-center ju-center">
				<view class="searchBack flex al-center">
					<input type="text" class="ipt" value="" placeholder="请输入关键词" />
				</view>
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
			return {}
		},
		methods: {

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
	.searchBox {
		width: 100%;
		height: 88rpx;
		background: #FFFFFF;
	}

	.searchBack {
		width: 494rpx;
		height: 54rpx;
		background: rgba(204,204,204,0.35);
		border-radius: 27rpx;
	}
    
	.ipt{
		margin-left: 72rpx;
		width: 400rpx;
		// background: red;
	}
	
	.uni-input-placeholder {
		font-size: 12px;
		color:rgb(204,204,204) ;
	}
</style>
