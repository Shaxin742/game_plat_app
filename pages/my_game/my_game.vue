<template>
	<view>
		<scroll-view class="list_view">
			<view class="list_item posrela clearfix" v-for="(value,index) in list" :key="index">
				<view class="icon posabs" @click="jump_detail()">
					<image lazy-load :src="value.img_url" mode=""></image>
				</view>
				<view class="intro" @click="jump_detail()">
					<view class="title mb5">{{value.name}}</view>
					<view class="content mb5">总下载 {{value.download_number1}} </view>
					<view class="content uni-ellipsis">{{value.descrip}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniLoadMore from '../../component/uni-load-more.vue'
	import {dealNum} from '../../utils/common.js'
	let products = require('../../static/json/game_list.json');
	export default {
		components:{
			// uniIcon
		},
		data() {
			return {
				list: [],
			};
		},
		onLoad() {
			this.list = this.dealDownNum(products.data)
		},
		methods: {
			dealDownNum(v) {
				v.map(c => {
					c.download_number1 = dealNum(c.download_number)
				})
				return v
			},
			jump_detail(){
				uni.navigateTo({
					 url: '/pages/detail/detail'
				})
			}
		}
	}
</script>

<style scoped>
	/* list */
	.list_item {
		background: #FFF;
		padding: 20px 0;
		border-bottom: 1px solid #eee;
	}
	
	.index {
		height: 20px;
		line-height: 20px;
		top: 50%;
		left: 8px;
		color: #333333;
		font-size: 14px;
		margin-top: -10px;
		text-align: center;
	}
	
	.icon {
		left: 37px;
		top: 50%;
		margin-top: -32px;
	}
	
	.icon image {
		width: 64px;
		height: 64px;
	}
	
	.intro {
		font-size: 12px;
		margin-left: 115px;
		color: #999;
	
	}
	
	.intro .title {
		font-size: 14px;
		color: #333;
	}
	
	.intro .btnhover {
		background-color: #1e8e37;
		-webkit-tap-highlight-color: transparent;
	}
	
	.buy {
		width: 70px;
		height: 30px;
		font-size: 12px;
		text-align: center;
		line-height: 31px;
		margin-top: -15px;
		color: white;
		border-radius: 5px;
		right: 10px;
		top: 50%;
		background: #24aa42;
	}
</style>
