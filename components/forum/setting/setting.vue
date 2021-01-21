<template>
	<view class="flex-d al-center">
		<submit titel="编辑" class="pos"></submit>
		<view class="topLine">

		</view>

		<!-- <view class="back">
			<view class=" wid">
				<u-tabs :list="tagdata" :is-scroll="true" inactive-color="#666666" active-color="#F07535" :current="current"
				 @change="change"></u-tabs>
			</view>
		</view> -->

		<view class="wid pos-abs ac">
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>

		</view>
		<view class="wid">
			<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y @scrolltolower="onreachBottom" class="text">
						<view class="item"  v-for="item in arr" :key='item.id'>
                             <view >
                             	    {{item.name}}
                             </view>
						</view>
						<view class="line">
							
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y @scrolltolower="onreachBottom">
						<view class="text">
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
							单价看到你思考就能可是大家能看到爱看年代开始的你阿坎德那时快看到你所看到可能的喀什觉得年卡扩散的卡上电脑卡死开始到
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
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
						hieg: '0'
					},
					{
						name: '新闻',
						hieg: '0'
					},
					{
						name: '没得',
						hieg: '0'
					},
					{
						name: 'ol',
						hieg: '0'
					}
				],
				list: [{
					name: '十年'
				}, {
					name: '青春'
				}, {
					name: '之约'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
                 arr:[{
					 name:'11'
				 },
				 {
				 					 name:'bb'
				 },
				 {
				 					 name:'cc'
				 }
				 ]

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
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		},
		mounted() {

		},
		onLoad(option) {

		},
		onPageScroll(val) {
			if (this.current == 0) {
				this.tagdata[0].hieg = val.scrollTop
			}

			if (this.current == 1) {
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
    .line{
		height: 100rpx;
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
		width: 100%;
	}

	.boxss {
		width: 100rpx;
		// height: 100rpx;
		background: #FFBE00;
		display: -webkit-box;
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
		white-space: normal;
		/*规定段落中的文本不进行换行 */
		word-wrap: break-word;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.boxs {
		// height: 1200rpx;
		background: red;
	}

	.text {
		height: 1000rpx;
	}

	uni-swiper {
		height: 1000rpx;
       background: #FFBE00;
	}
	
	.item{
		height: 400rpx;
		background: red;
		margin-bottom: 100rpx;
	}
</style>
