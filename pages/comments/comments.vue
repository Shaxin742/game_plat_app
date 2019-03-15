<template>
	<view style="margin: 30upx;">
		<view class="textCon">
			<textarea placeholder="请输入评论" class="commonts_area" v-model="comment"/>
		</view>
		<view class="rate">
			请输入评分:
			<uniRate @change='get_rate'></uniRate>
		</view>
		<button class="sub_btn" @click="submit">发布评论</button>
	</view>
</template>

<script>
	import uniRate from "@/component/uni-rate/uni-rate.vue"
	export default {
		components:{uniRate},
		data() {
			return {
				rate_val:0,
				comment:''
			};
		},
		methods:{
			get_rate(v){
				this.rate_val = v.value
			},
			submit(){
				console.log(this.rate_val)
				uni.navigateBack({
					delta: ''
				});
			}
		}
	}
</script>

<style scoped>
	.textCon{
		padding: 20upx;
		border: 1px solid #eee;
	}
	.commonts_area{
		width: 100%;
	}
	.rate{
		margin: 20upx 0;
		color: #333;
		font-size: 30upx;
	}
	.sub_btn{
		background: #23aa43;
		color: white;
	}
</style>
