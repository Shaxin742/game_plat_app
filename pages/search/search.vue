<template>
	<view style="margin: 0 40upx;">
		<view class="search">
			<input type="text" placeholder="请输入搜索内容"/>
			<icon type="search" size="24"></icon>
		</view>
		<view class="recommend">
			<view class="recommendItem" v-for="(v,i) in recommend_list" :key='i'>
				{{v.name}}
			</view>
		</view>
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
					<view class="buy posabs" hover-class="btnhover">
						<text class="btn" @click.stop="buyIt">购买</text>
					</view>
				</view>
			</scroll-view>
		</view>
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
				recommend_list:[
					{name:'推荐',id:'123'},
					{name:'推荐',id:'123'},
					{name:'推荐',id:'123'},
				],
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
			buyIt(){
				uni.navigateTo({
					 url: '/pages/buy/buy'
				})
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
	.search{
		display: flex;
		margin:20upx 0;
	}
	.search input{
		/* flex: 5; */
		/* border: 1px solid #ccc; */
		background: #eee;
		font-size: 30upx;
		padding-left: 20upx;
		border-radius: 20upx;
		color: #666;
		width: 100%;
	}
	.search icon{
		text-align: right;
		/* flex: 1; */
		margin-left: 20upx;
	}
	
	.recommend{
		margin-top: 30upx;
	}
	.recommendItem{
		display: inline-block;
		padding: 12upx 24upx;
		margin: 10upx 14upx;
		border-radius: 14upx;
		font-size: 28upx;
		background: #eee;
		color:#eab232 ;
	}
	/* list */
	.list_view {
		margin-top: 10px;
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
		left: 10px;
		top: 50%;
		margin-top: -32px;
	}
	
	.icon image {
		width: 64px;
		height: 64px;
	}
	
	.intro {
		font-size: 12px;
		margin-left: 90px;
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
