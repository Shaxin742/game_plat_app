<template>
	<view>
		<view class="bg">
			<view class="buy_logo">
				<image src="../../static/img/comon/logo.png" mode=""></image>
			</view>
			<view class="buy_tel">
				<image src="../../static/img/buy/buytel.png" mode=""></image>
				<input type="number" class="col333" v-model="tel" placeholder="请输入你的手机号码">
			</view>
			<view class="buy_intro">
				<view class="intro_title">产品说明：</view>
				<view class="intro_con">产品说明产品说明产品说明产品说 明产品说明产品说明产品说明产品说明 产品说明产品说明产品说明产品说明产 品说明产品说明</view>
			</view>
			<view class="buy_submit">
				<button @click="submit()">购 买</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {checkPhone} from '../../utils/common.js'
	export default {
		data() {
			return {
				tel:''
			};
		},
		methods:{
			submit(){
				if(!this.tel){
					// this.$roast('请输入手机号','none')
					this.$load('请输入手机号')
					return false; 
				}else if(!(checkPhone(this.tel))){
					this.$roast('手机号码有误，请重填','none','none')
					return false; 
				}else{
					uni.navigateTo({
						url: '../buy_success/buy_success'
					});
				}
			}
		}
	}
</script>

<style scoped>
	page{
		height: 100%;
	}
	.bg{
		background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552032692809&di=71979ff83229a29d96a8537732b14077&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd66b99cedb72c6af10571a93064f4565b85d64044625f-E6xIDb_fw658");
		position: fixed;
		height: 100%;
		width: 100%;
	}
	.buy_logo{
		width: 259upx;
		height: 186upx;
		margin: 46upx auto;
	}
	.buy_logo image{
		width: 259upx;
		height: 186upx;
	}
	.buy_tel{
		display: flex;
		margin: 0 70upx 46upx;
		background: rgba(255,255,255,0.4);
		padding: 13px 12px;
		border-radius: 14upx;
	}
	.buy_tel image{
		/* flex: 1; */
		width: 23px;
		height: 25px;
	}
	.buy_tel input{
		border-bottom: 1px solid #a1b1d0;
		margin-left: 20upx;
		flex: 4;
		color: white;
	}
	.buy_intro{
		margin: 24upx 70upx;
		padding: 31upx;
		background: rgba(255,255,255,0.4);
		color: white;
		border-radius: 14upx;
	}
	.buy_intro .intro_title{
		font-size: 40upx;
		margin-bottom: 20upx;
	}
	.buy_intro .intro_con{
		font-size: 30upx;
		text-indent: 2em;
		line-height: 60upx;
	}
	.buy_submit button{
		background: #23aa43;
		color: white;
		border: none;
		margin: 70upx 172upx 0;
	}
</style>
