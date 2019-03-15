<template>
	<view class="registCon">
		<view class="mobile">
			<input type="number" value="" placeholder="请输入你的手机号码" />
		</view>
		<view class="getver">
			<view class="ver">
				<input type="text" value="" placeholder="请输入验证码"/>
			</view>
			<view class="verbtn">
				<button>{{getverVal}}</button>
			</view>
		</view>
		<view class="password">
			<input type="password" value="" placeholder="请输入你的密码"/>
			<uni-icon type="eye"></uni-icon>
		</view>
		<view class="ensure">
			<label><checkbox :checked="isensure"/>同意<text class="service" @click.stop="show_service()">服务条款</text>并注册</label>
		</view>
		<view class="confirm">
			<button @click="comfirm()">确定</button>
		</view>
	</view>
</template>

<script>
	import {checkPhone,checkPw} from '../../utils/common.js'
	export default {
		data() {
			return {
				isensure:true,
				getverVal:'60s后获取'
			};
		},
		methods:{
			show_service(){
				console.log(1)
			}
		}
	}
</script>

<style scoped>
	.registCon{
		margin: 20px 10px;
	}
	.getver{
		margin: 20px 0;
		display: flex;
	}
	.getver .ver{
		flex: 5;
	}
	.getver .verbtn{
		flex: 2;
		margin-left: 10px;
	}
	.getver .verbtn button{
		font-size: 14px;
		height: 48px;
		padding: 0;
		text-align: center;
		line-height: 48px;
		color: #979797;
	}
	.registCon input{
		height: 50px;
		line-height: 50px;
		background: #f1f1f1;
		color: #333;
		font-size: 15px;
		padding: 0 20px;
		border-radius: 8px;
	}
	.ensure{
		padding: 20px 0;
		font-size: 14px;
		color: #979797;
	}
	.ensure checkbox{
		height: 16px;
	}
	.confirm button{
		color: white;
		background: #23aa43;
		border-radius: 8px;;
		border:none;
	}
	.service{
		color: #fb6d0e;
	}
</style>
