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
				<icon type="search" size="20" color="#333"></icon>
			</view>
		</view>
		
		<view>
			<scroll-view class="list_view">
				<view class="list_item clearfix" v-for="(value,index) in list" @click="jump_detail(value)" :key="index">
					<text class="item_content">{{value.descrip}}</text>
					<view class="item_bg"> 
						<image lazy-load  :src="value.img_url" mode=""></image>
						<view class="item_intro">
							<view class="item_icon posabs">
								<image lazy-load :src="value.icon" mode=""></image>
							</view>
							<view class="item_name posabs">
								<view class="name">
									<text>{{value.name}}</text>
								</view>
								<view>
									<text v-for="(c,i) in value.type" :key='i' class="type">{{c}}<text>|</text></text>
								</view>
							</view>
							<view class="item_place posabs">
								<view class="place_icon">
									<image lazy-load src="../../static/img/main/place.png" mode=""></image>
								</view>
								<view class="place_tp">游戏中心</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	let MAINDATA = require('../../static/json/select.json')
	export default{
		data(){
			return{
				searchVal:'',
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
			this.list = MAINDATA.data;
		},
		methods:{
			jump_detail(v){
				console.log(v)
				uni.navigateTo({
					url: '/pages/detail/detail?id='+v.gameid
				});
			},
			jump_search(){
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		},
	}
</script>

<style scoped>
	
	/* 下拉刷新 */
	.list_view {
		margin-top: 50px;
		padding:10upx 0;
	}

	.list_item {
		background:#FFF;
		width: 680upx;
		margin: 0 auto 30px;
	}
	.list_item .item_bg image{
		width: 680upx;
		height: 510upx;
	}
	.list_item .item_content{
		margin: 10px 0;
		color: #999;
		display: block;
		font-size: 14px;;
	}
	.list_item .item_bg{
		position: relative;
	}
	.list_item .item_bg .item_intro{
		border-bottom: 10px;
		width: 100%;
	}
	.list_item .item_bg .item_intro .item_icon{
		left: 20px;
		bottom: 10px;
	}
	.list_item .item_bg .item_intro .item_icon image{
		height: 40px;
		width: 40px;
		border: 2px solid #FFFFFF;
		border-radius: 6px;
	}
	.list_item .item_bg .item_intro .item_name{
		left: 80px;
		bottom: 15px;
		color: #fff;
	}
	.list_item .item_bg .item_intro .item_name .name{
		font-size: 16px;
		margin-bottom: 3px;;
	}
	.list_item .item_bg .item_intro .item_name .type{
		font-size: 12px;
		height: 20px;
		color: white;
		opacity: 0.7;
	}
	.type text{
		padding: 0 2px;
	}
	.type:last-child text{
		display: none;
	}
	.list_item .item_bg .item_intro .item_place{
		right: 20px;
		bottom: 15px;
		font-size: 12px;
		color: white;
		text-align: center;
		width: 60px;
	}
	.list_item .item_bg .item_intro .item_place image{
		width: 25px;
		height: 25px;
		opacity: 1;
	}
	.list_item .item_bg .item_intro .item_place .place_tp{
		opacity: 0.7;
	}
</style>
