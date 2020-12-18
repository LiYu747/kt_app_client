<template>
	<view class="">
		<view class=" posfidex">
			<subunit titel='' :retur='false'></subunit>
			<view class="ipt  ju-center flex al-center pos-rel">
				<image class="img pos-abs" src="https://oss.kuaitongkeji.com/static/img/app/home/ss.png" mode=""></image>
				<input class="input" type="text" v-model="value" @input="change" placeholder="请输入小区名称关键词" />
				<view @click="remove" class=" pos-abs rig">
					取消
				</view>
			</view>
		</view>
		<view class="bottom">

		</view>
		<view v-if="locdata.length>0" class="top flex-d al-center">
			<view @click="gotoo(item)" class="item" v-for="item in locdata" :key="item.id">
				<view class="name flex al-center ju-between">
					{{item.name}}
					<image src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png" class="nameimg" mode=""></image>
				</view>
				<view class="syntext">
					<view class="">
						小区介绍
					</view>
					<view class="synback flex al-center">
						<view class="aa">
							{{item.brief}}
						</view>
					</view>
				</view>
				<view class="syntext">
					<view class="">
						交通方式
					</view>
					<view class="synback flex al-center">
						<view class="aa">
							暂无
						</view>
					</view>
				</view>
			</view>
			<view v-show="isLoding == true" class=" flex ju-center al-center lodbox">
				<image class="lodimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				搜索中...
			</view>
			<view class="flex ju-center m-b2 fz-14" v-if="hasMore == false">
				{{text}}
			</view>

		</view>
		<view class="nono flex al-center ju-center" v-if="locdata.length == 0&&isLoding == false">
			没有您搜索的小区哦~~~
		</view>
	</view>
</template>

<script>
	import subunit from '../../../components/sub-unit/subunit.vue'
	import village from '../../../vendor/village/village.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				locdata: [], //搜索的数据
				value: '', //搜索框绑定v-model
				text: '', //没有更多的提示
				page: 1,
				isLoding: false,
				hasMore: true,
			}
		},
		methods: {
			// 搜索数据
			getData() {
				if (this.isLoding == true || this.hasMore == false) return;
				this.isLoding = true
				village.allvillage({
					data: {
						page: this.page,
						kw: this.value
					},
					fail: (err) => {
						this.isLoding = false
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {
							this.isLoding = false
						//console.log(res.data.data);
						if (res.statusCode != 200) return;

						if (res.data.code != 200) return;
					
						let data = res.data.data
						this.page = data.current_page + 1
						this.hasMore = data.next_page_url ? true : false;

						this.locdata = this.locdata.concat(data.data)
					}
				})
			},
			// 返回
			remove() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 去详情页
			gotoo(item) {
				// console.log(item.id);
				uni.navigateTo({
					url: `/pages/communityForum/introduction/introduction?id=${item.id}`
				})
			},
			change() {
				if (this.value == '') {
					this.remove()
				} else {
					this.getData()
				}
			}

		},
		mounted() {
			this.getData()
		},
		onLoad(val) {

			this.value = val.value
		},
		onReachBottom() {
			this.getData()
			this.text = '没有更多了~'
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
	.ipt {
		width: 750rpx;
		height: 88rpx;
		margin-top: -80rpx;
	}

	.img {
		width: 33rpx;
		height: 34rpx;
		left: 168rpx;
	}

	.input {
		width: 394rpx;
		height: 54rpx;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 27px;
		padding-left: 75rpx;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #FFFFFF;
	}

	.uni-input-placeholder {
		color: #FFFFFF;
	}

	.rig {
		right: 49rpx;
		font-size: 30rpx;
		color: #FFFFFF;
	}

	.posfidex {
		position: fixed;
	}

	.bottom {
		height: 148rpx;
	}

	.top {
		margin-top: 40rpx;
	}

	.item {
		width: 629rpx;
		height: 402rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding-left: 29rpx;
		padding-right: 32rpx;
		padding-top: 30rpx;
		padding-bottom: 53rpx;
	}

	.nameimg {
		width: 17rpx;
		height: 32rpx;
	}

	.name {
		font-size: 30rpx;
		color: #666666;
	}

	.syntext {
		font-size: 24rpx;
		color: #666666;
		margin-top: 29rpx;
	}

	.synback {
		padding: 0 20rpx;
		margin-top: 25rpx;
		width: 569rpx;
		height: 98rpx;
		background: #E6E6E6;
		padding-right: 20rpx;
	}

	.aa {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.nono {
		width: 100%;
		height: 300rpx;
	}

	.lodimg {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}

	.lodbox {
		font-size: 24rpx;
	}
	
	.showloding {
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		color: #FFFFFF;
	}
	
	.loimg {
		width: 50rpx;
		height: 50rpx;
	}
	
	.loding {
		width: 260rpx;
		height: 200rpx;
		background: rgba(88, 88, 88, 0.8);
	}
</style>
