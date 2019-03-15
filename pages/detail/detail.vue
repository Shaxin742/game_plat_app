<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="detail_log">
			<image src="../../static/img/comon/detail_log.jpg"></image>
		</view>
		<view class="detail_header">
			<view class="detail_header_logo">
				<image lazy-load :src="detail_data.versions[0].big_icon_url" mode=""></image>
			</view>
			<view class="detail_header_name">
				<view class="d_name col333">{{detail_data.name}}</view>
				<view class="d_intro col9a">
					<text>{{detail_data.download_number1}}次下载·</text>
					<text>{{detail_data.apk_size}}</text>
				</view>
			</view>
		</view>
		<view class="detail_con">
			<view class="detail_con_title col333">游戏截图</view>
			<view class="detail_imgs">
				<image v-for="(v,i) in detail_data.img_url" :src="v" :key='i' lazy-load mode="widthFix"></image>
			</view>
			<view class="detail_desp col333">
				<view v-for="(v,i) in detail_data.descrip" :key='i'>{{v}}</view>
			</view>
		</view>
		<view class="detail_comments">
			<view class="detail_comments_title col333">评论</view>
			<view class="detail_comm" v-for="(v,i) in detail_data.comments" :key='i'>
				<view class="detail_com">
					<view class="detail_com_user col333">
						<view>{{v.user_name}}</view>
						<view>
							<uniRate value="2" disabled size='14'></uniRate>
						</view>
					</view>
					<view class="detail_com_time">{{v.datetime}}</view>
				</view>
				<view class="detail_com_con">
					{{v.text}}
				</view>
			</view>
		</view>
		<view class="btns">
			<button @click="comment">评论</button>
			<button class="submit" @click="submit">购买</button>
		</view>
	</view>
</template>

<script>
	import {dealNum,dealSize} from '../../utils/common.js'
	import uniRate from "@/component/uni-rate/uni-rate.vue"
	let detail = require('../../static/json/app.json');
	export default {
		components:{
			uniRate
		},
		data() {
			return {
				detail_data:{},
			};
		},
		onLoad(option) {
			this.detail_data = this.deal_data(detail)
			console.log(this.detail_data)
			console.log(option) // 路由传值
		},
		methods:{
			deal_data(v){
				v.download_number1 = dealNum(v.download_number)
				v.apk_size = dealSize(v.versions[0].apk_size)
				return v
			},
			comment(){
				uni.navigateTo({
					url: '/pages/comments/comments'
				});
			},
			submit(){
				uni.showToast({
					title: '上帝啊华盛顿',
					mask: false,
					duration: 1500
				});
			}
		}
	}
</script>

<style scoped>
	.detail_log{
		width: 100%;
	}
	.detail_log image{
		width: 750upx;
		height: 180upx;
	}
	.detail_header{
		display: flex;
		padding: 33upx;
		border-bottom: 2px solid #efefef;
	}
	.detail_header_logo{
		flex: 1;
	}
	.detail_header_logo image{
		height: 150upx;
		width: 150upx;
		border-radius: 20upx;
		margin-right: 47upx;
	}
	.detail_header_name{
		flex: 5;
	}
	.detail_header_name .d_name{
		font-size: 44upx;
		margin-top: 36upx;
	}
	.detail_header_name .d_intro{
		font-size: 23upx;
		margin-top: 20upx;
	}
	
	/* 详情 */
	.detail_con{
		padding:  40upx;
		border-bottom: 1px solid #eeeeee;
	}
	.detail_con_title{
		font-size: 40upx;
		margin-bottom: 28upx;
	}
	.detail_imgs{
		width: 620upx;
		margin: 0 auto;
	}
	.detail_imgs image{
		width: 620upx;
		padding-bottom: 18upx;
	}
	.detail_desp{
		font-size: 28upx;
		line-height: 50upx;
		text-indent: 2em;
	}
	/* 评论 */
	.detail_comments{ 
		padding: 46upx;
	}
	.detail_comments_title{
		font-size: 26upx;
		margin-bottom: 40upx;
	}
	.detail_comm{
		border-bottom: 2upx solid #eeeeee;
		margin-left: 22upx;
	}
	.detail_com{
		margin-top: 35upx;
		display: flex;
		justify-content:space-between;
	}
	.detail_com_user{
		font-size: 26upx;
	}
	.detail_com_time{
		margin-top: 20upx;
		font-size: 18upx;
		color: #737373;
	}
	.detail_com_con{
		font-size: 22upx;
		margin-left: 42upx;
		margin: 35upx 0;
	}
	.btns{
		height: 92upx;
		padding: 20upx;
		font-size: 30upx;
		display:flex;
		border-top: 1px solid #eee;
	}
	.btns button{
		height: 90upx;
		border-radius: 12upx;
		font-size: 32upx;
		padding: 10upx;
		border-radius: 12upx;
		border: none;
		flex: 1;
		justify-content:space-around;;
	}
	.submit{
		background: #23aa43;
		margin-left: 20upx;
		color: white;
	}
</style>
