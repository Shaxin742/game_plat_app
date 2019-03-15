<template>
	<view class="update_bg">
		<view>
			<view class="logo">
				<image src="../../static/img/log/loginIcon.png" mode=""></image>
			</view>
		</view>
		
		<view class="version">
			当前版本已为最新版本
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

<style scoped>
	page{
		height: 100%;
	}
	.update_bg{
		height: 100vh;
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552032692809&di=71979ff83229a29d96a8537732b14077&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd66b99cedb72c6af10571a93064f4565b85d64044625f-E6xIDb_fw658");
		background-size:cover;
		position: fixed;
		width: 100%;
	}
	.logo image{
		display: block;
		height: 160px;
		width: 220px;
		margin: 60px auto 0;
	}
	.version{
		color: white;
		font-size: 16px;
		margin-top: 50px;
		text-align: center;
	}
</style>
