<template>
	<view class="">
		<submit titel="房屋报修"></submit>
		<view class="navBox" :style="{height: this.$store.state.customBar + 'rpx'}">
			<view @click="GoRecord" class=" pos-abs remak">
				报修记录
			</view>
		</view>
		<view class="flex-d al-center">
			<view class="formBox fz-14">
				<view class="itemStyle flex ju-between al-center pos-rel" @click="celClass(index)" v-for="(item,index) in formData"
				 :key="item.id">
					<view :class="index==2?'textColor':''">
						{{item.label}}
					</view>
					<view class="flex al-center">
						<input :type="item.type" class="ipt fz-14" :placeholder="item.ploder" :disabled="item.dised" :value="item.value" />
						<image v-if="index == 0" class="reimg pos-abs" src="https://oss.kuaitongkeji.com/static/img/app/address/retrue.png"
						 mode=""></image>
						<image v-if="index == 2" src="https://oss.kuaitongkeji.com/static/img/app/home/xiala.png" class="xiala pos-abs"
						 mode=""></image>
					</view>
				</view>
				<view v-show="celShow == true" class="showBxo pos-abs">
					<view class="m-t2 m-b1" @click="addIssue(item)" v-for="item in celCals" :key="item.id">
						{{item}}
					</view>
				</view>
				<view class="m-t2">
					<textarea placeholder="请输入详细问题信息" maxlength="200" class="textAr fz-12"></textarea>
				</view>
			</view>
			<u-select v-model="show" mode="mutil-column-auto" :default-value='value' :list="renderVillageLists" @confirm="confirm"></u-select>
			<view class="picturesBox flex al-center">
				<view class="" v-for="(item,index) in images" :key="item.id">
					<image :src="item" class="itemImg" :class="(index+1)%4==0?'dv':''" mode="aspectFill"></image>
				</view>
				<view class="itemImg flex al-center ju-center">
					<view @click="upPictures" class="pushBtn flex al-center ju-center">
						<view class="Hline">
					
						</view>
						<view class="Sline pos-abs">
					
						</view>
					</view>
				</view>
			</view>

			<view class="">
				<view class="submit flex al-center ju-center bai">
					提交
				</view>
			</view>
		</view>
		<view v-show="isLoding == true" class="showloding flex al-center ju-center">
			<view class="loding flex-d al-center ju-center">
				<view class=" ">
					<image class="loimg" src="https://oss.kuaitongkeji.com/static/img/app/address/loading.gif" mode=""></image>
				</view>
				上传中
			</view>
		</view>
		<view v-show="celShow == true" @click="celShow = false" class="layout">

		</view>
	</view>
</template>

<script>
	import submit from '../../../../components/sub-unit/subunit.vue'
	import village from '../../../../vendor/village/village.js'
	import route from '../../../../vendor/request/routes.js'
	export default {
		name: "",
		components: {
			submit
		},
		props: {},
		data() {
			return {
				formData: [{
						label: '选择小区',
						value: '',
						ploder: '请选择',
						dised: true
					},
					{
						label: '联系电话',
						value: '',
						type: "number"
					},
					{
						label: '报修',
						value: '',
						dised: true
					}
				],
				celCals: ['报修', '反馈'],
				celShow: false,
				//服务端返回的原始数据
				orgVillageLists: [],
				renderVillageLists: [],
				show: false,
				value: [], //小区列表默认选择的对象
				ids:[],//选择的id
				images:[],//上传的图片
				isLoding:false,
			}
		},
		methods: {
			
			//去报修记录
			GoRecord(){
				uni.navigateTo({
					url:"/pages/address/addediting/temtRecord/temtRecord"
				})
			},
			//选择地址
			confirm(e){
			 e.map(item => {
				 this.formData[0].value += item.label
				 this.ids.push(item.extra)
				 this.value.push(item.value)
			 })	
			},
			//上传图片
			upPictures(){
				uni.chooseImage({
					extension: ['jpg', 'jpeg', 'png', 'gif'],
					success: (chooseImageRes) => {
						const files = chooseImageRes.tempFilePaths;
						this.isLoding = true;
						let that = this;
				
						if (files.length == 0) return;
				
						let func = [];
						files.forEach((item) => {
							func.push(that.upload(item));
						});
				
						Promise.all(func).then((res) => {
							that.isLoding = false;
						}).catch((err) => {
							that.isLoding = false;
							uni.showModal({
								title: "上传文件出错:" + err,
							})
						})
					}
				})
			},
			upload(fileItem) {
				let that = this;
				return new Promise((res, rej) => {
					uni.uploadFile({
						url: route.services.file.upload,
						filePath: fileItem,
						name: 'file',
						fail: (err) => {
							// that.isLoding = false;
							rej('网络出错');
						},
						success: (val) => {
							// that.isLoding = false;
							if (val.statusCode != 200) {
								rej(val.statusCode);
								return;
							}
			
							let jres = JSON.parse(val.data);
			
							if (jres.code != 200) {
								rej(jres.msg);
								return;
							}
								that.images.push(jres.data.url )  
							// console.log(jres.data.url);
							res(jres);
						}
					})
				})
			},
			// 选择类型
			addIssue(item) {
				this.formData[2].label = item
				this.celShow = false
			},
			// 表单选择
			celClass(index) {
				if (index == 0) {
					this.show = true
				};
				if (index == 2) {
					this.celShow = !this.celShow
				}
			},
			//小区列表
			loadVillageLists() {
				let that = this;
				// 小区列表
				village.selectLists({
					data: {},
					fail: (err) => {
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
					},
					success: (res) => {

						if (res.statusCode != 200) return;

						if (res.data.code != 200) return;

						this.orgVillageLists = res.data.data;
						this.renderMSelect();
					},

				})
			},

			//使用返回的数据进行渲染select
			renderMSelect() {
				//renderVillageLists
				if (!this.orgVillageLists || this.orgVillageLists.length == 0) {
					this.renderVillageLists = [];
					return;
				}

				//进行修改
				let tmp = [];

				this.orgVillageLists.forEach((item, index) => {
					let villages = {
						label: item.name,
						value: index,
						extra: item.id,
						children: [],
					};

					if (!item.buildings) return true;
					//楼栋
					item.buildings.forEach((item2, idx2) => {
						let buildings = {
							label: item2.name,
							value: idx2,
							extra: item2.id,
							children: [],
						};
						// console.log('buildings', item2, !item2.apartments)
						if (!item2.apartments) return true;
						item2.apartments.forEach((item5, idx3) => {

							//单元楼
							let ap = {
								label: item5.name,
								value: idx3,
								extra: item5.id,
								children: [],
							};

							if (!item5.floors) return true;

							item5.floors.forEach((item3, index3) => {

								//楼层
								let floors = {
									label: item3.name,
									value: index3,
									extra: item3.id,
									children: [],
								};

								// console.log('item3', item3)
								if (!item3.rooms) return true;
								//门牌号
								item3.rooms.forEach((item4, idx4) => {
									floors.children.push({
										label: item4.room_number,
										value: idx4,
										extra: item4.id,
									});
								})

								ap.children.push(floors);
							})


							buildings.children.push(ap);

						})

						villages.children.push(buildings);
					})

					tmp.push(villages);
				})


				this.renderVillageLists = tmp;
				// console.log(tmp);
			},

		},
		mounted() {
			this.loadVillageLists()
		},
		onLoad(val) {
			console.log(val);

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
	.navBox {
		width: 30%;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 99;
	}

	.remak {
		bottom: 20rpx;
		right: 50rpx;
		color: #fff;
		font-size: 15px;
	}

	.formBox {
		margin-top: 30rpx;
		width: 650rpx;
		border-radius: 10rpx;
		padding: 30rpx 20rpx;
		background: #fff;
		color: #666;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
	}

	.itemStyle {
		height: 80rpx;
		border-bottom: 1px solid #BFBFBF;

	}

	.ipt {
		text-align: right;
		margin-right: 40rpx;
	}

	.reimg {
		width: 20rpx;
		height: 28rpx;
		right: 0;
	}

	.xiala {
		width: 28rpx;
		height: 20rpx;
		right: 0;
	}

	.textAr {
		width: 100%;
		height: 200rpx;
		border-bottom: 1px solid #BFBFBF;
	}

	.picturesBox {
		margin-top: 30rpx;
		width: 650rpx;
		border-radius: 10rpx;
		padding: 30rpx 20rpx;
		background: #fff;
		color: #666;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
		flex-wrap: wrap;
	}

	.pushBtn {
		width: 100rpx;
		height: 100rpx;
		border: 8rpx solid rgb(179, 179, 179);
		border-radius: 14rpx;
	}
	
	.itemImg{
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
		margin-right: 16rpx;
		margin-bottom: 10rpx;
	}
	
	.dv{
		margin-right: 0;
	}

	.Hline {
		width: 70rpx;
		height: 8rpx;
		background: rgb(179, 179, 179);
		border-radius: 20rpx;
	}

	.Sline {
		width: 8rpx;
		height: 70rpx;
		background: rgb(179, 179, 179);
		border-radius: 20rpx;
	}

	.submit {
		margin-top: 100rpx;
		width: 400rpx;
		height: 80rpx;
		border-radius: 40rpx;
		background: linear-gradient(to right, #F5000A, #FF954F);
		margin-bottom: 50rpx;
	}

	/deep/ .u-select__body__picker-view__item[data-v-a577ac80] {
		font-size: 24rpx !important;
		text-align: center !important;
	}

	.textColor {
		color: #F07535;
	}

	.showBxo {
		margin-top: -10rpx;
		width: 610rpx;
		background: #fff;
		z-index: 999;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
		padding: 20rpx;
		border: 1px solid #eee;
		border-radius: 10rpx;
	}

	.layout {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		z-index: 99;
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
		border-radius: 10rpx;
	}
</style>
