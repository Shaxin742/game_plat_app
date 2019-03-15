<template>
	<view>
		<view>
			<view class="detail_con">
				<view class="detail_con_title col333">游戏详情</view>
				<view class="detail_imgs">
					<image v-for="(v,i) in detail_data.img_url" :src="v" :key='i' lazy-load mode="widthFix"></image>
				</view>
				<view class="detail_desp col333">
					<view v-for="(v,i) in detail_data.descrip" :key='i'>{{v}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var DETAIL = require('../detail.json')
	export default {
		data() {
			return {
				detail_id:1,
				detail_data:{}
			};
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.detail_data = DETAIL.data[option.id]
		}
		
	}
</script>

<style scoped>
	/* 详情 */
	.detail_con{
		padding:  40upx;
		/* border-bottom: 1px solid #eeeeee; */
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
</style>
