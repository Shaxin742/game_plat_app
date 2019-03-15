<template>
	<view>
		<view class="buy_bg">
			<view class="buy_logo">
				<image src="../../static/img/buy/buy_logo.png" mode=""></image>
			</view>
			<view class="buy_success">
				<image src="../../static/img/buy/buy_success.png" mode=""></image>
			</view>
			<view class="pro_intro">
				感谢您购买产品说明产品说明产品明产品说明产品说明产品说明产品说明产品说明产品说明产品说明。
			</view>
			<view class="pro_install">
				<button>安 装</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped="">
	page{
		height: 100%;
	}
	.buy_bg{
		height: 100vh;
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552032692809&di=71979ff83229a29d96a8537732b14077&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd66b99cedb72c6af10571a93064f4565b85d64044625f-E6xIDb_fw658");
		background-size:cover;
		position: fixed;
		width: 100%;
	}
	.buy_logo{
		text-align: left;
		/* height: 80px; */
		margin:20px;
	}
	.buy_logo image{
		height: 30px;
		width: 140px;
	}
	.buy_success{
		margin:40px auto 30px;
		width: 100px;
		height: 123px;
	}
	.buy_success image{
		width: 100px;
		height: 123px;
	}
	.pro_intro{
		font-size: 16px;
		line-height: 25px;
		color: white;
		width: 260px;
		text-indent: 2em;
		margin: 0 auto;
	}
	.pro_install{
		margin-top: 50px;
	}
	.pro_install button{
		max-width: 250px;
		margin: 0 auto;
		background: #23aa43;
		color: white;
	}
</style>
