<template>
	<div id="app" class="wrapper-page">
		<Header></Header>

		<div class="content">
			<router-view/>
		</div>

		<Footer></Footer>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
	  components: {
	  	Header: () => import('@/components/Header.vue'),
	  	Footer: () => import('@/components/Footer.vue'),
	  }
	}

	import jquery from "../node_modules/jquery/dist/jquery.js";
	import magnificPopup from "../node_modules/magnific-popup/dist/jquery.magnific-popup.js";
	import commonJS from "./assets/js/common.js";
</script>

<style lang="scss">
	@import "~../node_modules/normalize.css/normalize.css";
	@import "~../node_modules/bootstrap/scss/bootstrap-grid.scss";
	@import "~../node_modules/animate.css/animate.css";
	@import "~../node_modules/font-awesome-5-css/css/all.css";
	@import "~../node_modules/magnific-popup/dist/magnific-popup.css";
	@import "/assets/sass/main.scss";
</style>
