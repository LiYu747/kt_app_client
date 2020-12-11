<template>
	<view>
		<view class="wrap">
		<drag-sorts :list="getData" :props="props" @change="onDragSortChange"></drag-sorts>	
		</view>

	</view>
</template>

<script>
	import dragSorts from '@/components/drag-sorts/index.vue'
	export default {
		name: "",
		components: {
			dragSorts
		},
		props: {},
		data() {
			return {
				  props: {
				        label: 'label'
				      },
			  getData: [
			        {
			          label: '新鲜事1'
			        },
			        {
			          label: '热榜2'
			        },
			        {
			          label: '好人好事'
			        },
			        {
			          label: '家有喜事'
			        },
					{
					  label: '宠物圈'
					},
					{
					  label: '互帮互助'
					},
					{
					  label: '组团运动'
					},
			      ]
			}
		},
		methods: {
		onDragSortChange(e){
			console.log(e);
		}
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
	.wrap {
		width: 690rpx;
		height: 400rpx;
		background: #FFFFFF;
	}
</style>
