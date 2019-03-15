<template>
	<view>
		<view class="status_bar">  
			<view class="top_view"></view>  
		</view> 
		<view class="userinfo">
			<view class="alignRight" @click="editPortrait">更换头像</view>
			<view class="portrait" @click="login">
				<img src="/static/img/my/portraitDefault.png" alt="">
				<view class="col333">点击登录</view>
			</view>
		</view>
		<view class="mb40">
			<view class="uni-list-cell" v-for="(v,i) in listCells" :key="i" @click="jump(v)" hover-class="uni-list-cell-hover">
				<view class="uni-list-cell-navigate" :class="{'uni-navigate-right' : v.has_arrow}">
					<img :src="v.img" :alt="v.text">
					<text> 
						{{v.text}}
					</text>
				</view>
			</view>
		</view>
		<view>
			<button class="logout" @click="logout">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listCells:[
					{'img':'/static/img/my/wodeyouxi.png',"text":'我的游戏',"url":'/pages/my_game/my_game',"has_arrow":true},
					{'img':'/static/img/my/xiaoxitongzhi.png',"text":'消息通知',"url":'/pages/message/message',"has_arrow":true},
					{'img':'/static/img/my/qinglihuancun.png',"text":'清理缓存',"url":'',"has_arrow":false},
					{'img':'/static/img/my/banbengengxin.png',"text":'版本更新',"url":'/pages/version_update/version_update',"has_arrow":true},
					{'img':'/static/img/my/guanyuwomen.png',"text":'关于我们',"url":'/pages/about/about',"has_arrow":true},
				]
			};
		},
		methods:{
			editPortrait(){
				uni.navigateTo({
					url: '/pages/change_aver/change_aver'
				});
			},
			login(){
				uni.navigateTo({
					url: '/pages/login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			logout(){
				uni.showToast({
					title: '登出',
					icon:"success",
					duration: 2000
				})
			},
			jump(v){
				if(v.has_arrow){
					uni.navigateTo({
						url: v.url
					});
				}else{
					console.log(1)
					uni.removeStorage({
						key: 'storage_key',
						success: function (res) {
							uni.showToast({
								title: '清理成功',
								mask: false,
								duration: 1500
							});
						}
					});
				}
			}
		}
	}
</script>

<style scoped>
.userinfo{
	height: 220px;
	background: #eeeeee;
	text-align: right;
}
.userinfo .alignRight{
	padding: 15px 15px 10px 0;
	font-size: 14px;
	color: #333;
}
.userinfo .portrait{
	width: 120px; 
	height: 120px;
	text-align: center;
	margin: 0 auto;
}
.userinfo .portrait image{
	border: 2px solid #e1e1e1;
	border-radius: 50%;
	overflow: hidden;
	width: 120px; 
	height: 120px;
}



/* list */
.uni-list-cell {
	position: relative;
	border-bottom: 1px solid #f3f3f3;
}
.uni-list-cell-hover {
	background-color: #eee;
}
.uni-list-cell-navigate {
	font-size:14px;
	padding: 6px 20px;
	line-height: 40px;
}
.uni-list-cell-navigate {
	padding-right: 36px;
}
.uni-list-cell-navigate.uni-navigate-right:after {
	font-family: uniicons;
	content: '\e583';
	position: absolute;
	right: 24px;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-list-cell-navigate.uni-active {
	background: #eee;
}

.uni-list-cell .uni-list-cell-navigate image{
	height: 34px;
	width: 34px;
	position: absolute;
	left: 20px;
	top: 50%;
	margin-top: -17px;
}
.uni-list-cell .uni-list-cell-navigate text{
	margin-left: 45px;
}

.logout{
	margin: 20px auto;
	width: 200px;
	height:44px;
	/* text-align: center; */
	color: white;
	background: #c8473d;
}
</style>
