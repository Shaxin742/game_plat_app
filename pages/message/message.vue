<template>
	<view class="bg">
		<view class="a"></view>
		<view class="message" v-for="(v,i) in messlist" :key='i' @click="navigateT(i)">
			<view class="header">
				<image src="../../static/img/message/message_logo.png" mode=""></image>
				<view class="name">诠星小助手</view>
				<view class="time">{{v.date}}</view>
			</view>
			<view class="inner">
				<image :src="'../../static/img/message/'+(i+1) +'.png'" mode=""></image>
			</view>
			<view class="footer">
				{{v.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	var MESLIST = require('./message.json')
	export default {
		data() {
			return {
				messlist:MESLIST
			};
		},
		methods:{
			navigateT(v){
				uni.navigateTo({
					url: 'detail/detail?id='+v
				});
			}
		}
	}
</script>

<style scoped>
	page,body,.bg{
		background: #ececec;
		height: 100%;
	}
	.a{
		height: 1px;
		background: #ececec;
	}
	.message{
		border-radius: 18upx;
		overflow: hidden;
		margin: 46upx 20upx;
		background: #f7f7f7;
	}
	.header{
		display: flex;
		height: 95upx;
		align-items: center;
		justify-content: center; 
	}
	.header image{
		width: 62upx;
		height: 62upx;
		margin:0 17upx;
	}
	.header .name{
		font-size: 32upx;
		flex: 3;
	}
	.header .time{
		flex: 3;
		color: #c5c5c5;
		font-size: 22upx;
		text-align: right;
		margin-right:23upx ;
	}
	.inner{
		background: white;
	}
	.inner image{
		width: 672upx;
		height: 342upx;
		margin: 15upx 22upx;
	}
	.footer{
		padding: 10upx 14px 30upx;
		font-size: 26upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: white;
	}
</style>
