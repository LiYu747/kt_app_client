<template>
	<view>
		<subunit></subunit>
		<view class="searchBox">
			<view class="itemBox flex al-center" v-for="item in locdata" :key='item.id'>
				<view class="flex al-center">
					<view class="c-red">
						*
					</view>
					<view class="">
						{{item.label}}
					</view>
				</view>
				<view class="m-l2">
					<input class="ipt" :type="item.type" :placeholder="item.placeholder" v-model="item.value" />
				</view>
			</view>
			<view class="flex ju-center">
				<view @click="search" class="searchBtn flex al-center ju-center m-t2">
					搜索
				</view>
			</view>
		</view>

		<view class="resultBox flex-d al-center">
			<view class="resultTil">
				搜索结果
			</view>

			<view v-if="result.length>0" @click="iSshow = true" class="listsBox m-t3">
				<view class=" flex-d  ju-center" v-for=" (item,index) in result" 
				 :key='item.id'>
					<view class=" resultItem flex al-center">
						<view class="">
							姓名
						</view>
						<view class="m-l2">
							{{item.name}}
						</view>
					</view>
					<view class="resultItem flex al-center">
						<view class="">
							手机号码
						</view>
						<view class="m-l2">
							{{item.tel}}
						</view>
					</view>
					<view class="resultItem flex al-center" :class="{'noBtm':index==result.length-1}">
						<view class="">
							身份证号
						</view>
						<view class="m-l2">
							{{item.idcord}}
						</view>
					</view>
				</view>
			</view>
			
			<view v-if="result.length==0&&flag==true" class="nofind">
				没有您要找的用户,请核对信息
			</view>
		</view>

		<view v-if="iSshow==true" class="showBox pos-abs flex al-center ju-center">
			<view class="showCentent">
				<view @click="addYse" class="flex al-center m-t1">
					<image v-show="isYse==true" class="zrimg" src="https://oss.kuaitongkeji.com/static/img/app/address/yes.png" mode=""></image>
					<image v-show="isYse==false" class="zrimg" src="https://oss.kuaitongkeji.com/static/img/app/address/zro.png" mode=""></image>
					<view class="m-l2">
						是否允许添加其他成员
					</view>
				</view>
				<view @click="show = true" class="flex m-t3 al-center">
					<image src="../../../../image/address/blckpd.png" class="blckpdImg" mode=""></image>
					<view class="m-l2">
						有效期限
					</view>
					<view class="m-l2">
						{{time}}
					</view>
				</view>
				<u-picker @confirm="ok" mode="time" v-model="show" :params="params"></u-picker>
				<view class="m-t3 flex">
					<view class="remarkTxt">
						备注
					</view>
					<view class="">
						<textarea class="reArea" v-model="reValue" placeholder="" />
						</view>
				</view>
				
				<view  class="flex al-center ju-around m-t2">
					<view @click="iSshow = false" class="btnr flex al-center ju-center">
						<image src="https://oss.kuaitongkeji.com/static/img/app/qrcode/2.png" class="btnimg" mode=""></image>
						<view class=" pos-abs">
							取消
						</view>
					</view>
					<view @click="affirm" class="btnr flex al-center ju-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/qrcode/2.png" class="btnimg" mode=""></image>
						<view class=" pos-abs">
						  确认
						</view>
					</view>
				</view>
			 </view>
		</view>
	</view>
</template>

<script>
	import subunit from '../../../../components/sub-unit/subunit.vue'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				show:false,//选择时间
				iSshow:false,//选择表单
				isYse:false,//选择打勾
				time:'',//有效时间
				reValue:'',//备注
				flag:false,//判断是否搜索
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				locdata: [{
						label: '姓名',
						value: '',
						placeholder: '请输入姓名',
						type: 'text'
					},
					{
						label: '手机号码',
						value: '',
						placeholder: '请输入手机号码',
						type: 'number'

					}
				],
				result: [{name:'张三',tel:'176****0164',idcord:'513***********4519'}
				]
			}
		},
		methods: {
			// 表单确定选择
			affirm(){
				this.iSshow = false
				console.log(this.isYse);
				console.log(this.time);
				console.log(this.reValue);
			},
			// 点击打钩选择
			addYse(){
				this.isYse = !this.isYse
			},
			// 时间确定选择
			ok(val){
				// console.log(val);
				this.time = val.year + '-' + val.month + '-' + val.day
				},
			//搜索
			search() {
				if (this.locdata[0].value == '') {
					uni.showToast({
						title: '请输入被搜索人姓名',
						icon: "none"
					})
					return;
				}
				if (this.locdata[1].value == '') {
					uni.showToast({
						title: '请输入被搜索人电话',
						icon: "none"
					})
					return;
				}
				this.flag = true
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
	.searchBox {
		width: 94%;
		padding: 0 3%;
		height: 260rpx;
		background: #FFFFFF;
	}

	.itemBox {
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
		font-size: 14px;
		color: #666666;
	}

	.ipt {
		width: 360rpx;
		font-size: 14px;
		color: #666666;
		border: none;
		outline: none;
	}

	.searchBtn {
		width: 180rpx;
		height: 50rpx;
		background: rgb(240, 117, 53);
		border-radius: 40rpx;
		color: #FFFFFF;
		font-size: 14px;
	}

	.resultBox {
		margin-top: 30rpx;
		color: #666666;
	}

	.resultTil {
		font-size: 12px;
	}
	
	.listsBox{
		width: 650rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
	}
	
	.resultItem{
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
		font-size: 14px;
	}
	
	.noBtm{
		border-bottom: none;
	}
	
	.showBox{
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.3);
	}
	
	.showCentent{
		width: 500rpx;
		height: 350rpx;
		border-radius: 20rpx;
		padding: 30rpx;
		background: #FFFFFF;
		font-size: 15px;
		color: #666666;
	}
	
	.zrimg {
		width: 30rpx;
		height: 30rpx;
	}
	
	.blckpdImg{
	  width: 28rpx;
	  height: 20rpx;
		}
		
	.remarkTxt{
	 	margin-left: 50rpx;
		}
		
	.reArea{
		margin-left: 20rpx;
		width: 350rpx;
		height: 80rpx;
		font-size: 15px;
	}	
	
	.btnr {
		color: #FFFFFF;
		font-size: 28rpx;
	}
	
	.btnimg {
		width: 200rpx;
		height: 60rpx;
	}
	
	.nofind{
		margin-top: 50rpx;
		font-size: 14px;
	}
</style>
