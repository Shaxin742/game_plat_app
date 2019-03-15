<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="title_bar">
			<view class="title_logo">
				<image src="../../static/tabbarImg/logo.png" mode=""></image>
			</view>
			<view class="search_input" @click="jump_search()">
				<input type="search" disabled placeholder="查找游戏" />
			</view>
			<view class="search_icon" @click="jump_search()">
				<icon type="search" size="20" color="#333" />
			</view>
		</view>
		<view>
			<view class="list_view">
				<view class="list_item posrela clearfix" v-for="(value,index) in list" :key="index">
					<view class="index posabs">{{index+1}}</view>
					<view class="icon posabs" @click="jump_detail()">
						<image lazy-load :src="value.img_url" mode=""></image>
					</view>
					<view class="intro" @click="jump_detail()">
						<view class="title mb5">{{value.name}}</view>
						<view class="content mb5">总下载 {{value.download_number1}} </view>
						<view class="content uni-ellipsis">{{value.descrip}}</view>
					</view>
					<view class="buy posabs" hover-class="btnhover">
						<text class="btn" @click.stop="buyIt">购买</text>
					</view>
				</view>
			</view>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '../../component/uni-load-more.vue'
	import {dealNum} from '../../utils/common.js'
	let products = require('../../static/json/game_list.json');
	export default {
		data() {
			return {
				title: 'uni-load-more',
				list: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		onLoad() {
			this.list = this.dealDownNum(products.data)
		},
		onReady() {
			// console.log(this.list)
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.loadingType = 1;
			let list = [],
				maxItem = this.list[this.list.length - 1],
				length = maxItem + 6;
			for (let i = maxItem + 1; i < length; i++) {
				list.push(i);
			}
			setTimeout(() => {
				if (length > 26) {
					this.loadingType = 2;
					return;
				}
				this.list = this.list.concat(list);
				this.loadingType = 0;
			}, 800);
		},
		components: {
			uniLoadMore,
		},
		methods: {
			dealDownNum(v) {
				v.map(c => {
					c.download_number1 = dealNum(c.download_number)
				})
				return v
			},
			buyIt(){
				uni.navigateTo({
					 url: '/pages/buy/buy'
				})
			},
			jump_detail(){
				uni.navigateTo({
					 url: '/pages/detail/detail'
				})
			},
			jump_search(){
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style scoped>
	/* 下拉刷新 */
	.list_view {
		margin-top: 50px;
		padding: 10upx 0;
	}

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
		left: 30px;
		top: 50%;
		margin-top: -32px;
	}

	.icon image {
		width: 64px;
		height: 64px;
	}

	.intro {
		font-size: 12px;
		margin-left: 110px;
		margin-right: 92px;
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
