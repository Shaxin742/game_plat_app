<template>
	<view>
		<view class="user_aver">
			<img :src="aver" alt="">
		</view>
		<view>
			<button @click="get_image()">选择图片</button>
			<button @click="make_image()">点击生成图片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aver:'/static/img/my/portraitDefault.png',
				
			};
		},
		methods:{
			setData: function (obj) {
				let that = this;
				Object.keys(obj).forEach(function (key) {
					that.$set(that.$data, key, obj[key])
				});
			},
			get_image(){
				var _this = this
				uni.chooseImage({
					success: function (res) {
						_this.setData({
							aver: res.tempFilePaths[0],
						})
						// _this.loadImage();
					},
				})
			},
			
			make_image(){
				console.log(1)
			}
		}
	}
</script>

<style scoped>
	.user_aver{
		height: 260upx;
		width: 260upx;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		border: 1px solid #eee;
	}
	.user_aver image{
		height: 260upx;
		width: 260upx;
	}
	
	
</style>
