<template>
	<view class="about">
		<view class="logo">
			<image src="../../static/img/comon/logo.png" mode=""></image>
		</view>
		<view class="cont">
			<view class="title">关于我们:</view>
			<view class="desp">
				“诠星”们的梦想，是用炫酷的技术和精良的设计，让每个人都能更简单地把应用，音乐等等好东西放进他的手机。让我们的努力“面向大众、惠及人人”。“从解决问题，到更好地解决问题”，是诠星游戏思考与行动的起点，也是诠星游戏的核心竞争力。面对一个平坦、开放的世界，唯有专注于始终为用户解决问题，才能持续突破。"快速成长的诠星游戏实验室，在“成年”后，该是家什么气质的企业？我们的答案是——真心维护用户利益、真心关注员工个人成长。我们的团队，要有核心价值观，也要保持理想、保持激情。
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

<style scoped>
	page{
		height: 100%;
	}
	.about{
		width: 100%;
		height: 100%;
		background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552032692809&di=71979ff83229a29d96a8537732b14077&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd66b99cedb72c6af10571a93064f4565b85d64044625f-E6xIDb_fw658");
		position: fixed;
		height: 100%;
	}
	.logo{
		width: 130px;
		margin: 0 auto;
		padding: 20px 0;
	}
	.logo image{
		width: 130px;
		height: 92px;
	}
	.cont{
		margin: 0 20px;
		padding: 25px 15px;
		background: rgba(255,255,255,0.3);
		border-radius: 8px;
		color: white;
	}
	.cont{
		font-size: 14px;
		line-height: 20px;
	}
	.title{
		font-size: 20px;
		padding-bottom: 10px;
	}
	.desp{
		text-indent: 2em;
	}
</style>
