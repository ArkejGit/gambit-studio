<template>
	<div>
		<section class="hello-banner">
			<HelloBanner />
		</section>

		<section class="offer-section">
			<Heading>
				W czym możemy pomóc?
			</Heading>
			<Offers />
		</section>

		<Slogan button-text="Sprawdź nas" bgImage="/dont-be-pawn.jpg">
			<p>Nie bądź pionkiem w swojej branży</p>
			<p>Pomożemy Ci stać się liderem</p>
		</Slogan>

		<section class="realizations-section">
			<Heading>
				Realizacje
			</Heading>
			<Realizations />
		</section>

		<Slogan button-text="Czytaj bloga" bgImage="/see-blog.jpg">
			<p>Zobacz co słychać</p>
			<p>na naszym blogu</p>
		</Slogan>

		<section class="contact-section text-center">
			<Heading>
				Kontakt
			</Heading>
			<ContactForm />
		</section>
	</div>
</template>

<script>
import HelloBanner from '~/components/HelloBanner.vue'
import Slogan from '~/components/Slogan.vue'
import Offers from '~/components/Offers.vue'
import Heading from '~/components/Heading.vue'
import Realizations from '~/components/Realizations.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
	components: {
		HelloBanner,
		Slogan,
		Offers,
		Heading,
		Realizations,
		ContactForm
	},
	layout: 'home'
}
</script>

<style lang="sass" scoped>
.hello-banner
	height: 100vh
	min-height: 400px
	max-height: 800px
	position: relative
.offer-section
	background-image: linear-gradient(to top, #f8f8f8 60%, $white)

@media only screen and (max-width: 768px)
	.offer-section
		background-color: $grey
		background-image: none
</style>
