<template>
	<!-- 个人中心 -->
	<div class="whole">
		<!-- 头部 -->
	<headContent></headContent>
	 <!-- 操作栏 -->
	 <actionBar></actionBar>
	</div>
</template>

<script>
	import headContent from '../../../components/userCenter/headContent.vue';
	import actionBar from '../../../components/userCenter/actionBar.vue'
	export default {
		name: "",
		components: {
headContent,
actionBar
		},
		props: {},
		data() {
			return {
	
			}
		},
		methods: {

		},
		mounted() {

		},
		onLoad() {

		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.whole{
		background: rgb(245,245,245);
		height: 100%;
	}
</style>
