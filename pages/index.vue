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

		<section class="contact-section">
			<div class="container py-5">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur dolorem reiciendis magnam itaque non eveniet neque, modi natus? Quibusdam nemo tempora neque eum delectus molestiae vitae aliquid quam pariatur quae magni obcaecati consequuntur, itaque, cumque accusantium cum. Distinctio aspernatur, sequi, illum accusamus iste dolor dolorum soluta est eum cumque nemo repudiandae non optio eos voluptatibus neque, ratione aut asperiores, inventore. Tempora voluptatum facere officia quidem, voluptas cum fugit nisi pariatur! Quo quasi, ipsum nobis magnam ipsa, eaque voluptas at, provident corporis tenetur fugiat adipisci nemo sequi? Voluptatem minima dolores molestiae et sed, libero quia sequi commodi pariatur tempore est.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur dolorem reiciendis magnam itaque non eveniet neque, modi natus? Quibusdam nemo tempora neque eum delectus molestiae vitae aliquid quam pariatur quae magni obcaecati consequuntur, itaque, cumque accusantium cum. Distinctio aspernatur, sequi, illum accusamus iste dolor dolorum soluta est eum cumque nemo repudiandae non optio eos voluptatibus neque, ratione aut asperiores, inventore. Tempora voluptatum facere officia quidem, voluptas cum fugit nisi pariatur! Quo quasi, ipsum nobis magnam ipsa, eaque voluptas at, provident corporis tenetur fugiat adipisci nemo sequi? Voluptatem minima dolores molestiae et sed, libero quia sequi commodi pariatur tempore est.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur dolorem reiciendis magnam itaque non eveniet neque, modi natus? Quibusdam nemo tempora neque eum delectus molestiae vitae aliquid quam pariatur quae magni obcaecati consequuntur, itaque, cumque accusantium cum. Distinctio aspernatur, sequi, illum accusamus iste dolor dolorum soluta est eum cumque nemo repudiandae non optio eos voluptatibus neque, ratione aut asperiores, inventore. Tempora voluptatum facere officia quidem, voluptas cum fugit nisi pariatur! Quo quasi, ipsum nobis magnam ipsa, eaque voluptas at, provident corporis tenetur fugiat adipisci nemo sequi? Voluptatem minima dolores molestiae et sed, libero quia sequi commodi pariatur tempore est.</p>
			</div>
		</section>
	</div>
</template>

<script>
import HelloBanner from '~/components/HelloBanner.vue'
import Slogan from '~/components/Slogan.vue'
import Offers from '~/components/Offers.vue'
import Heading from '~/components/Heading.vue'
import Realizations from '~/components/Realizations.vue'

export default {
	components: {
		HelloBanner,
		Slogan,
		Offers,
		Heading,
		Realizations
	},
	layout: 'home'
}
</script>

<style lang="sass">
.hello-banner
	height: 100vh
	min-height: 400px
	max-height: 800px
	position: relative
.offer-section
	background-image: linear-gradient(to top, #f8f8f8 60%, $white)
.contact-section
	background-color: $grey

@media only screen and (max-width: 768px)
	.offer-section
		background-color: $grey
		background-image: none
</style>
