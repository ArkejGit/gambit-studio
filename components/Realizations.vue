<template>
	<div class="container py-5">
		<div class="row justify-content-center">
			<div v-for="realization in realizations" class="realization-container col-12 col-md-6 col-lg-4" data-aos="zoom-in">
				<div class="offer text-center d-flex flex-column justify-content-around align-items-center">
					<img :src="realization.bgImage" class="realization-image" alt="">
					<div class="realization-info d-flex flex-column justify-content-around align-items-center">
						<p>
							{{ realization.description }}
						</p>
						<img :src="realization.logo" class="realization-logo" alt="">
						<a :href="realization.link" class="realization-link" target="_blank" rel="noopener noreferrer">
							Zobacz
						</a>
					</div>
					<div class="realization-overlay"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			realizations: [
				{
					logo: require(`@/assets/domy-rako-logo.svg`),
					description: 'strona internetowa',
					link: 'http://domy-rakoniewice.pl',
					bgImage: '/case-domy-rako.jpg'
				},
				{
					logo: require(`@/assets/odkurzacze-logo.svg`),
					description: 'sklep internetowy',
					link: 'https://www.odkurzaczecentralnefrackowiak.pl',
					bgImage: '/case-odkurzacze.jpg'
				}
			]
		}
	}
}
</script>

<style lang="sass" scoped>
.realization-container
	position: relative
	padding: 15px
	.realization-image
		width: 100%
	.realization-info
		position: absolute
		width: calc(100% - 30px)
		height: calc(100% - 30px)
		color: $white
		z-index: 5
		opacity: 0
		transition: .3s ease
		p
			font-weight: 600
			text-transform: uppercase
		.realization-logo
			width: 60%
		.realization-link
			border: 2px solid $white
			border-radius: 5px
			padding: .3em
			color: $white
			text-decoration: none
			font-weight: 600
			&:hover
				background-color: rgba(255,255,255, .2)
	.realization-overlay
		position: absolute
		width: calc(100% - 30px)
		height: calc(100% - 30px)
		background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
		opacity: 0
		transition: .3s ease
	&:hover
		.realization-info
			opacity: 1
		.realization-overlay
			opacity: .8

// @media only screen and (max-width: 767px)

</style>
