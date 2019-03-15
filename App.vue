<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			plus.screen.lockOrientation('portrait-primary'); //锁定
		},
		onShow: function () {
			console.log('App Show')
			// document.body.addEventListener('touchstart', function () { });
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/uni.css';
	.uni-page-body{
		height: 100%;
	}
</style>
