
<script>
	import cache from 'vendor/cache/cache.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if(!cache.get('first')){
				cache.set('Gshow',true)
				cache.set('first',true)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
	background-color: #f7f7f7;
	}
	@import './style/common.css';
	@import 'uview-ui/theme.scss'
</style>
