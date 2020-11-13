<template>
 <view class="">
 	<view class="pos-rel message">
 		<view class="text flex al-center" >
 		请添加附件
 		</view>
		<view  class="">
				<u-upload  ref="uUpload" class="uplod" width='120' max-count="3" height='120' :custom-btn=true :action="action"   :auto-upload="false">
					<template   v-slot:addBtn>
						<view class="pos-abs move">
							请添加附件
						</view>
					</template>
				</u-upload>
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
	  	// 演示地址，请勿直接使用
	  				action: 'http://www.example.com/upload',
    }
  },
  methods: {
		add() {
			// this.$refs.uUpload.upload();
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				// files = this.$refs.uUpload.lists.filter(val => {
				// 	return val.progress == 100;
				// })
				// 如果您不需要进行太多的处理，直接如下即可
				files = this.$refs.uUpload.lists;
				console.log(files)
				this.$emit('abb',files)
			}
  },
  mounted () {

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
.message {
		margin-top: 20rpx;
		width: 644rpx;
		height: 280rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		box-shadow: 1rpx 2rpx 10rpx 0 rgb(220, 220, 220);
		padding-left: 20rpx;
		padding-right: 26rpx;

	}

	.text {
		height: 69rpx;
		font-size: 30rpx;
		color: #666666;
		border-bottom: 1rpx solid #BFBFBF;
		margin-bottom: 20rpx;
	}
	.move{
		top: 0;
		left: 0;
		margin-left: 20rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
		opacity: 0;
	}
</style>
