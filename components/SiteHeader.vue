<template>
	<section :style="{ backgroundImage: `url('${bgImage}')` }" class="site-header d-flex flex- column justify-content-center align-items-center">
			<h1>
				{{ title }}
			</h1>
		<div class="site-header-overlay"></div>
	</section>
</template>

<script>
export default {
	props: {
		title: String,
		bgImage: String
	}
}
</script>

<style lang="sass" scoped>
.site-header
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	position: relative
	height: 50vh
	max-height: 400px
	padding-top: 71px
	h1
		color: $white
		text-transform: uppercase
		font-size: 50px
		font-weight: 600
		z-index: 1
		text-align: center
	.site-header-overlay
		background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
		position: absolute
		width: 100%
		height: 100%
		top: 0
		left: 0
		opacity: .8

@media only screen and (max-width: 767px)
	.site-header
		height: 40vh
</style>
