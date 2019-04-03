<template>
	<section :style="{ backgroundImage: `url('${bgImage}')` }" class="slogan py-3">
		<div class="container slogan-container d-flex justify-content-between">
			<div class="d-flex flex-column justify-content-center">
				<div data-aos="fade-right">
					<slot></slot>
				</div>
			</div>
			<div class="d-flex flex-column justify-content-center">
				<router-link :to="link" class="slogan-button" data-aos="fade-left">
					{{ buttonText }}
				</router-link>
			</div>
		</div>
		<div class="slogan-overlay"></div>
	</section>
</template>

<script>
export default {
	props: {
		buttonText: String,
		bgImage: String,
		link: String
	}
}
</script>

<style lang="sass" scoped>
.slogan
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	position: relative
	height: 200px
	.slogan-container
		height: 100%
		flex-direction: row
		> div
			z-index: 1
	.slogan-overlay
		background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
		position: absolute
		width: 100%
		height: 100%
		top: 0
		left: 0
		opacity: .8
	p
		text-transform: uppercase
		font-size: 30px
		font-weight: 700
		color: $white
		margin-bottom: 0
		position: relative
	.slogan-button
		text-transform: uppercase
		border: 2px solid $white
		border-radius: 2em
		font-size: 20px
		font-weight: 600
		color: $white
		padding: .5em
		text-decoration: none
		transition: .3s ease
		&:hover
			background-color: rgba(255,255,255, .2)

@media only screen and (max-width: 767px)
	.slogan
		height: 150px
		.container
			max-width: 100%
			flex-direction: column
			> div
				text-align: center
				align-items: center
		p
			font-size: 3.8vw
		.slogan-button
			font-size: 2.8vw
			width: 50%
			padding: .8em 0
</style>
