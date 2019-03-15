<template>
	<view>
		<view class="loginbg">
			<view class="loginCon">
				<view class="logo" :class="isEdit?'edi':''">
					<image src="../../static/img/log/loginIcon.png" mode=""></image>
				</view>
				<view class="inp">
					<view class="inputCon">
						<image src="../../static/img/log/tel.png" mode=""></image>
						<input @focus='inputFocus()' @blur="inputBlur()" v-model="tel" type="text" placeholder="请输入您的手机号码"/>
					</view>
					<view class="inputCon">
						<image src="../../static/img/log/lock.png" mode=""></image>
						<input @focus='inputFocus()' @blur="inputBlur()" v-model="pw" type="text" placeholder="请输入您的密码">
					</view>
				</view>
				<view class="registe" @click="registe">注册</view>
				<view class="loginBtn">
					<button @click="comfirm()">登录</button>
				</view>
				<!-- {{isEdit}} -->
			</view>
		</view>
		<view style="height: 700px;" v-if="isEdit"></view>
	</view>
</template>

<script>
	import {checkPhone,checkPw} from '../../utils/common.js'
	export default {
		data() {
			return {
				isEdit:false,
				tel:'',
				pw:''
			};
		},
		onLoad() {
			var f = uni.getSystemInfo({
				success(res){
					console.log(JSON.stringify(res))
				}
			})
		},
		methods:{
			inputFocus(){
				// document.documentElement.scrollTop = "200px"
				this.isEdit = true
				var f = uni.getSystemInfo({
					success(res){
						console.log(JSON.stringify(res))
					}
				})
			},
			inputBlur(){
				this.isEdit = false
			},
			registe(){
				uni.navigateTo({ url: '/pages/registe/registe'})
			},
			comfirm(){
				if(!this.tel){
// 					uni.showToast({
// 						title: '请输入手机号',
// 						mask: false,
// 						icon:none,
// 						duration: 1500
// 					});
					this.$roast('请输入手机号',"none")
				}else if(checkPhone(this.tel)){
					
				}
			}
		}
	}
</script>

<style scoped>
html,body{
	height:100%;
	margin:0;
}
page{
	height: 100%;
}
.loginbg{
	height: 100vh;
	background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552032692809&di=71979ff83229a29d96a8537732b14077&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fd66b99cedb72c6af10571a93064f4565b85d64044625f-E6xIDb_fw658");
	background-size:cover;
	/* background-position: top; */
	position: fixed;
    width: 100%;
	display: -webkit-flex;
	display: -ms-flex;
	display: flex;
	justify-content:center;
}
.loginCon{
	/* padding: 0 10px; */
}
.logo{
	padding: 40px 0;
	text-align: center;
	transition: all .5s;
}
.logo image{
	width: 156px;
	height: 110px;
	transition: all .5s;
}
.logo.edi{
	padding: 10px 0;
	transition: all .5s;
}
.logo.edi image{
	width: 78px;
	height: 55px;
	transition: all .5s;
}

.inp .inputCon{
	height: 40px;
	width: 100%;
	margin-top: 20px;
	background: white;
	line-height: 40px;
	border-radius: 8px;
}
.inp image{
	height: 30px;
	width: 30px;
	margin: 5px;
	display: inline-block;
}
.inp input{
	display: inline-block;
	font-size: 14px;
	line-height: 40px;
	width: 260px;
	height: 40px !important;
}
.registe{
	margin: 20px 4px 20px 0;
	color: white;
	text-align: right;
	font-size: 14px;
}
.loginBtn button{
	background: #23aa43;
	color: white;
	border-radius: 8px;
}
</style>
