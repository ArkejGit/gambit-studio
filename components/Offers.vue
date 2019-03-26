<template>
	<section class="offers py-5">
		<div class="container">
			<div class="row">
				<div v-for="offer in offers" class="offer-container col-12 col-md-6 col-lg-4" data-aos="zoom-in">
					<div class="offer text-center d-flex flex-column justify-content-around align-items-center">
						<img :src="offer.img" class="offer-image" alt="">
						<h1 class="offer-title">
							{{ offer.title }}
						</h1>
						<p class="offer-description">
							{{ offer.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: function () {
		return {
			offers: [
				{
					title: 'Strony Internetowe',
					description: 'Perfekcyjnie prezentuj się w sieci dzięki funkcjonalnej i nowoczesnej stronie www',
					img: require(`@/assets/websites.svg`)
				},
				{
					title: 'Sklepy Internetowe',
					description: 'Bądź dostępny dla klientów 24h na dobę, 7 dni w tygodniu',
					img: require(`@/assets/shops.svg`)
				},
				{
					title: 'Aplikacje mobilne i webowe',
					description: 'Zyskaj aplikację szytą na miarę, idealnie pasującą do Twoich potrzeb',
					img: require(`@/assets/apps.svg`)
				},
				{
					title: 'Wizerunek marki',
					description: 'Postaw na spójną identyfikację wizualną',
					img: require(`@/assets/branding.svg`)
				},
				{
					title: 'Social media',
					description: 'Dotrzyj do nowych klientów i stań się bardziej rozpoznawalny w sieci',
					img: require(`@/assets/socials.svg`)
				},
				{
					title: 'SEO/SEM',
					description: '?????????????????/',
					img: require(`@/assets/seo.svg`)
				}
			]
		}
	}
}
</script>

<style lang="sass" scoped>
.offer-container
	padding: 1em
.offer
	border: 3px solid $white
	height: 100%
	padding: 1em
	&:before
		position: absolute
		width: 0
		height: 0
		top: 1em
		left: 1em
		content: ''
		border: 3px solid transparent
	&:hover:before
		width: calc(100% - 2em)
		height: calc(100% - 2em)
		border-top-color: $blue
		border-right-color: $blue
		transition: width .2s ease, height .2s ease .2s
	&:after
		position: absolute
		width: 0
		height: 0
		bottom: 1em
		right: 1em
		content: ''
		border: 3px solid transparent
	&:hover:after
		width: calc(100% - 2em)
		height: calc(100% - 2em)
		border-bottom-color: $blue
		border-left-color: $blue
		transition: border-color 0s ease-out .4s, width .2s ease .4s, height .2s ease .6s
	.offer-image
		width: 25%
		filter: grayscale(100%)
		transition: .8s ease
	&:hover
		.offer-image
			filter: grayscale(0)
	h1
		font-size: 25px
		margin: .5em 0

@media only screen and (max-width: 767px)
	.offer-container
		display: flex
		justify-content: center
		align-items: center
	.offer
		width: 80vw
		height: 80vw
</style>
