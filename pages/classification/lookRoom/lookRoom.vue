<template>
	<view class="">
		<subclass titel='找房'></subclass>
		<view class="flex-d al-center">
			<view class="simulation">
				以下均为模拟数据
			</view>
			<view class="contenBox">
				<view class="item m-t3" v-for=" item in locdata" :key='item.id'>
					<view class="titel flex al-center ju-between">
						{{item.titel}}
						<view @click="addmore(item)" class="bricolor fz-14 flex al-center">
							更多
							<image src="../../../image/lookroom/more.png" class="moreimg" mode=""></image>
						</view>
					</view>
					<view class="flex ju-between">
						<view class="items " @click="gotoDetails(items)" v-for=" items in item.dome" :key='items.id'>
							<image :src="items.image" class="itemsimg" mode=""></image>
							<view class="itemsname m-t1 fz-14">
								{{items.name}}
							</view>
							<view class="fz-12 bricolor">
								{{items.brief}}
							</view>
							<view class="pritext flex m-t1">
								{{items.price}}
								<view v-if="items.price > 2000&&items.price<10000" class="fz-12">
									元/月
								</view>
								<view v-if="items.price>10000" class="fz-12">
									元/平
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="btmLine">

		</view>
	</view>
</template>

<script>
	import subclass from '../../../components/sub-class/subclass.vue'
	export default {
		name: "",
		components: {
			subclass
		},
		props: {},
		data() {
			return {
				locdata: [{
						titel: '租房',
						dome: [{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							}
						]
					},
					{
						titel: '二手房',
						dome: [{
								name: '正西街274号',
								brief: '2室1厅/77.06㎡',
								price: '82万',
								image: require('@/image/lookroom/logo2.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							}
						]
					},
					{
						titel: '新房',
						dome: [{
								name: '润扬观澜鹭岛三期',
								brief: '建面 97-143㎡',
								price: '12000',
								image: require('@/image/lookroom/logo3.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							},
							{
								name: '复地御香山3悦',
								brief: '五居室 南卧/18㎡',
								price: '4000',
								image: require('@/image/lookroom/logo1.png')
							}
						]
					},
				]
			}
		},
		methods: {
          // 更多
		  addmore(item){
			   // console.log(item);
			 uni.navigateTo({
			 	url:'/pages/classification/lookRoom/moreRoom?title=' + item.titel
			 })  
			  },
		 // 去详情
		gotoDetails(items) {
			uni.navigateTo({
				url:'/pages/classification/lookRoom/detailRoom'
			})
		}
		},
		onShow() {

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
	.contenBox {
		width: 690rpx;
	}

	.item {
		width: 650rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 0rpx 20rpx;
		padding-bottom: 20rpx;
	}

	.titel {
		height: 90rpx;
		font-size: 34rpx;
		color: #333333;
	}

	.itemsname {
		width: 200rpx;
		display: -webkit-box;
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
		white-space: normal;
		/*规定段落中的文本不进行换行 */
		word-wrap: break-word;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.itemsimg {
		width: 200rpx;
		height: 160rpx;
	}

	.bricolor {
		color: #666666;
	}

	.pritext {
		color: #F07535;
		font-size: 34rpx;
		align-items: baseline;
	}

	.moreimg {
		width: 15rpx;
		height: 21rpx;
		margin-left: 8rpx;
	}

	.btmLine {
		height: 50rpx;
	}
	
	.simulation{
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		font-size: 30rpx;
		color: #b3b3b3;
	}
</style>
