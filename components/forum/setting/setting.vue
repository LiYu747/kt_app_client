<template>
	<view class="flex-d al-center">
		<submit titel="编辑" class="pos"></submit>
		<view class="topLine">

		</view>

		<view class="back">
			<view class=" wid">
				<u-tabs :list="tagdata" :is-scroll="true" inactive-color="#666666" active-color="#F07535" :current="current"
				 @change="change"></u-tabs>
			</view>
		</view>
		
		<view v-show="current==0"  class="boxs">
			我是0
		</view>
		<view v-show="current==1" class="boxs">
			我是1
		</view>
	</view>

	
</template>

<script>
	import submit from '../../sub-unit/subunit.vue'
	import village from '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {
			submit,

		},
		props: {},
		data() {
			return {
				current: 0,
				tagdata: [{
						name: '为保',
						hieg:'0'
					},
					{
						name: '新闻',
						hieg:'0'
					},
					{
						name: '没得',
						hieg:'0'
					},
					{
						name: 'ol',
						hieg:'0'
					}
				],
			}
		},
		methods: {
			change(index) {
				this.current = index
			console.log(this.tagdata[index].hieg)
				uni.pageScrollTo({
					scrollTop: this.tagdata[index].hieg,
					duration: 0
				});
			}
		},
		mounted() {

		},
		onLoad(option) {

		},
		onPageScroll(val) {
			if(this.current == 0){
				this.tagdata[0].hieg = val.scrollTop
			}
			
			if(this.current == 1){
				this.tagdata[1].hieg = val.scrollTop
			}
		
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
	.ac {
		top: 148rpx;
	}

	.pos {
		position: fixed;
		z-index: 99;
	}

	.topLine {
		height: 250rpx;
	}


	.back {
		width: 100%;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		top: 148rpx;
		z-index: 99;
	}

	.wid {
		width: 90%;
	}
	
	.boxs{
		height: 1200rpx;
		background: red;
		}
</style>
