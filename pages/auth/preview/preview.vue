<template>
   <view class="back flex-d al-center">
   	   <view class="nav">
   	   	<image @click="retune" src="../../../image/login/retrue.png" class="reimg" mode=""></image>
   	   </view>
	   <view class="potoh flex-d al-center">
	   	  <!-- <image src="../../../image/login/02ff0a460004c9dd612bd0f8eb308d0.png"  mode=""></image> -->
		  	<view class="wrap">
		  		<view class="u-avatar-wrap">
		  			<image class="u-avatar-demo poimg" :src="avatar"  mode="aspectFill"></image>
		  		</view>
		  	</view>
		  <view class="text" @tap="chooseAvatar">
		  	  更换照片
		  </view>
	   </view>
   </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
	 	avatar: 'https://cdn.uviewui.com/uview/common/logo.png',
    }
  },
  methods: {
	  // 返回
	  retune(){
		uni.navigateBack({
			delta:1
		})  
	  },
	chooseAvatar() {
		console.log(111);
				// 此为uView的跳转方法，详见"文档-JS"部分，也可以用uni的uni.navigateTo
								this.$u.route({
									// 关于此路径，请见下方"注意事项"
									url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
									// 内部已设置以下默认参数值，可不传这些参数
									params: {
										// 输出图片宽度，高等于宽，单位px
										destWidth: 250,
										// 裁剪框宽度，高等于宽，单位px
										rectWidth: 250,
										// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
										fileType: 'jpg',
									}
								})
			},
  },
  mounted () {

  },
  	created() {
  			// 监听从裁剪页发布的事件，获得裁剪结果
  			uni.$on('uAvatarCropper', path => {
				// console.log(path);
  				this.avatar = path;
  				// 可以在此上传到服务端
  				// uni.uploadFile({
  				// 	url: 'http://www.example.com/upload',
  				// 	filePath: path,
  				// 	name: 'file',
  				// 	complete: (res) => {
  				// 		console.log(res);
  				// 	}
  				// });
  			})
  		},
  onLoad () {

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
	.back{
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
	}
.nav{
	width: 100%;
margin-top: 60rpx;		
	}
.reimg{
	margin-left: 50rpx;
	width: 22rpx;
	height: 47rpx;
}
.potoh{
	margin-top: 125rpx;
	width: 100%;
}
.poimg{
	width: 500rpx;
	height: 500rpx;
	background: #FFFFFF;
}
.text{
	margin-top: 80rpx;
	font-size: 36rpx;
	color: #666666;
}
</style>
