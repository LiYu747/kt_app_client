<template>
	<view>
			<subunit titel='添加用户'></subunit>
		<view class="fidex">
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
			<view class="resultTil al-center flex ju-center">
				搜索结果
			</view>
		</view>

		<view class="topLine">

		</view>

		<view class="resultBox flex-d al-center">
			<view v-if="result.username"  class="listsBox">
				<view class=" flex-d  ju-center">
					<view class=" resultItem flex al-center">
						<view class="">
							姓名
						</view>
						<view class="m-l2">
							{{result.username}}
						</view>
					</view>
					<view class="resultItem flex al-center">
						<view class="">
							手机号码
						</view>
						<view class="m-l2">
							{{result.tel}}
						</view>
					</view>
					<view class="resultItem flex al-center nobtm">
						<view class="">
							身份证号
						</view>
						<view class="m-l2">
							{{result.id_card_no}}
						</view>
					</view>
				</view>
			</view>

		</view>

		<view v-if="result.username" class="showBox m-t3  flex al-center ju-center">
			<view class="showCentent">
				<view @click="addYse" class="flex al-center m-t1">
					<image v-show="isYse==true" class="zrimg" src="https://oss.kuaitongkeji.com/static/img/app/address/yes.png" mode=""></image>
					<image v-show="isYse==false" class="zrimg" src="https://oss.kuaitongkeji.com/static/img/app/address/zro.png" mode=""></image>
					<view class="m-l2">
						是否允许添加其他成员
					</view>
				</view>
				<view @click="timeshow = !timeshow , showType=false" class="flex m-t3 al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/address/blckpd.png" class="blckpdImg" mode=""></image>
					<view class="m-l2">
						有效期限
					</view>
					<view class="m-l2">
						{{time}}
					</view>
				</view>
				<view v-show="timeshow == true" class="timeBox pos-abs flex-d al-center">
					<view class="itemType" @click="selTime(item)" v-for="item in timeList" :key='item.id'>
						{{item.label}}
					</view>
				</view>
				<u-picker @confirm="ok"  mode="time" v-model="show" :default-time='defaultTime' :params="params"></u-picker>
				<view @click="showType = !showType , timeshow = false" class="flex m-t3 al-center">
					<image src="https://oss.kuaitongkeji.com/static/img/app/address/blckpd.png" class="blckpdImg" mode=""></image>
					<view class="m-l2">
						选择用户类型
					</view>
					<view class="m-l2">
						{{typeTet}}
					</view>
				</view>
				<view v-show="showType == true" class="typeBox pos-abs flex-d al-center">
					<view class="itemType" @click="selType(item)" v-for="item in types" :key='item.id'>
						{{item.label}}
					</view>
				</view>
				<view class="m-t3 flex">
					<view class="remarkTxt">
						备注
					</view>
					<view class="">
						<textarea class="reArea" v-model="reValue" maxlength="10" placeholder="(10字以内)" />
						</view>
				</view>
				
				<view  class="flex al-center ju-around m-t2">
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
	import address from '../../../../vendor/address/address.js'
	export default {
		name: "",
		components: {
			subunit
		},
		props: {},
		data() {
			return {
				timeList:[
					{label:'永久',
					id:0},
				    { label:'临时',
					id:1}],
					timeshow:false, //是否显示选择时间
					timenum:0,//默认永久
				show:false,//选择时间
				isYse:false,//选择打勾
				types:[
					{id:3,label:'租户'},
					{id:2,label:'家庭成员'}
				],//用户类型
				showType:false,//是否显示用户类型
				typeTet:'', //选择的类型
				typeId:'',//选择类型的id
				time:'',//有效时间
				reValue:'',//备注
				params: {
					year: true,
					month: true,
					day: true,
				},
				addressid:'',//用户地址id
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
				result: {},
				defaultTime:'',
			
			}
		},
		methods: {
			// 表单确定选择
			affirm(){
				if(!this.typeId){
				 uni.showToast({
				 	title:'选择用户类型',
					icon:"none"
				 })
				 return;
				}
			    uni.showModal({
			      content:'您确定添加该用户吗',
			      success:(res) => {
					  if(res.cancel){
						
					  }
			    	if(res.confirm){
						let allow = 0
						if(this.isYse==true){
							allow = 1
						}
						if(this.isYse==false){
							allow = 0
						}
						uni.showLoading({
							title:'加载中'
						})
			    	address.pushMember({
			    		data:{
			    			id:this.addressid,
			    			member_id:this.result.id,
			    			allow_edit_member:allow,
			    			type:this.typeId,
			    			valid_type:this.timenum,
			    			valid_end:this.time,
			    			host_remark:this.reValue
			    		},
			    		fail: () => {
			    			uni.hideLoading()
			    			uni.showToast({
			    				title: '网络错误',
			    				icon: 'none',
			    				duration:4000
			    			})
			    		},
			    		success: (res) => {
			    			uni.hideLoading()
			    			// console.log(res);
			    			if (res.statusCode != 200) {
			    				uni.showToast({
			    					title: '网络出错了',
			    					icon: 'none',
			    					duration:4000
			    				})
			    				return;
			    			}
			    			if (res.data.code != 200) {
			    				uni.showToast({
			    					title: res.data.msg,
			    					icon: 'none',
			    					duration:4000
			    				})
			    				return;
			    			}
			    			uni.showToast({
			    				title:res.data.msg
			    			})
							this.locdata[0].value = ''
							this.locdata[1].value = ''
							this.result = {}
			    		}
			    	})
			    	}
			    	
			      }
			    })
				
			},
			//时间选择
			selTime(item){
				this.timeshow = false
				this.timenum = item.id
				if(item.id == 0){
					this.time = item.label
				}
				if( item.id == 1){
					this.show = true
					if(this.time != '永久'){
					  this.defaultTime = this.time
						}
				}
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
			//选择用户类型	
			selType(item){
				this.showType = false
				this.typeTet = item.label
				this.typeId = item.id
				// console.log(item);
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
				uni.showLoading({
					title:'加载中'
				})
				address.findUser({
					data:{
						username:this.locdata[0].value,
						tel:this.locdata[1].value
					},
					fail: () => {
						uni.hideLoading()
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						})
						},
					success: (res) => {
						uni.hideLoading()
						if (res.statusCode != 200) {
							uni.showToast({
								title: '网络出错了',
								icon: 'none',
								duration:4000
							})
							return;
						}
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration:4000
							})
							return;
						}
						let data = res.data.data
						this.result = data
                        // console.log(data);
					}	
				})
				
			}
		},
		mounted() {

		},
		onLoad(option) {
			this.addressid =  option.addressid
			if(option.typeid==3){
				this.types =[
					{id:3,label:'租户'},
				]
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
	.fidex{
		width: 100%;
		position: fixed;
		z-index: 9;
	}
	
	.topLine{
		height: 340rpx;
	}
	
	.searchBox {
		width: 94%;
		padding: 0 3%;
		height: 260rpx;
		background: #FFFFFF;
	}
	
	.timeBox{
		margin-top: 10rpx;
		width: 170rpx;
		background: #FFFFFF;
		z-index: 9;
		border-radius: 10rpx;
		border: 1px solid #EEEEEE;
		box-shadow: 0px 4px 4px 0px rgba(9, 9, 9, 0.1);
		padding-bottom: 20rpx;
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
		color: #666666;
	}

	.resultTil {
		width: 100%;
		height: 60rpx;
		background: #FFFFFF; 
		font-size: 12px;
		border-top: 1px solid #eee;
	}
	
	.listsBox{
		width: 650rpx;
		padding: 0 20rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
	}
	
	.resultItem{
		height: 80rpx;
		border-bottom: 1px solid #CCCCCC;
		font-size: 14px;
	}
	
	.noBtm{
		border-bottom: none;
	}
	
	
	.showCentent{
		width: 500rpx;
		height: 380rpx;
		border-radius: 20rpx;
		padding: 30rpx;
		background: #FFFFFF;
		font-size: 15px;
		color: #666666;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
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
		height: 40rpx;
		// background: red;
		font-size: 15px;
	}	
	
	.btnr {
		margin-top: 20rpx;
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
	
	.nobtm{
		border-bottom: none;
	}
	
	.typeBox{
		margin-top: 10rpx;
		width: 170rpx;
		background: #FFFFFF;
		z-index: 9;
		border-radius: 10rpx;
		border: 1px solid #EEEEEE;
		box-shadow: 2rpx 2rpx 12rpx #d9d9d9;
		padding-bottom: 20rpx;
	}
	.itemType{
		margin-top: 20rpx;
	}
</style>
