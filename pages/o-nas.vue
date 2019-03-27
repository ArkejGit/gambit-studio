<template>
	<div>
		<SiteHeader title="O nas" bgImage="/about-bg.jpg" />
		<div class="container py-5">
			<div class="row">
				<div class="d-flex d-md-none col-12 col-md-6 about-image" data-aos="zoom-in">
					<font-awesome-icon icon="users" />
				</div>
				<div class="col-12 col-md-6 text-center" data-aos="fade">
					<h1>O nas</h1>
					<p>Jesteśmy <span class="blue">kreatywną agencją interaktywną</span> zajmującą się projektowaniem i wdrażaniem serwisów internetowych, e‑marketingiem, social-media i szeroko pojętym brandingiem.</p>
					<p>Naszą misją jest dostarczanie partnerom <span class="blue">skutecznych</span> rozwiązań, które usprawnią pracę ich firm.</p>
					<p class="action">Gotowy do współpracy?</p>
					<nuxt-link to="/kontakt">Skontaktuj się</nuxt-link>
				</div>
				<div class="d-none d-md-flex col-12 col-md-6 about-image" data-aos="zoom-in">
					<font-awesome-icon icon="users" />
				</div>
				<div class="col-12 col-md-6 about-image" data-aos="zoom-in">
					<font-awesome-icon icon="chess" />
				</div>
				<div class="col-12 col-md-6 text-center" data-aos="fade">
					<h1>Dlaczego Gambit?</h1>
					<p><span class="blue">Gambit</span> to rodzaj otwarcia szachowego. Uważamy, że w biznesie, tak samo jak w szachach, ważna jest dobrze opracowana <span class="blue">strategia</span>.</p>
					<p>Od początku współpracy angażujemy się w projekt by wspólnie ustalić główne założenia i dostarczyć produkt, który spełnia wszystkie oczekiawania.</p>
					<p class="action">Zagrasz z nami?</p>
					<nuxt-link to="/kontakt">Skontaktuj się</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'

export default {
	components: {
		SiteHeader
	},
	head() {
		return {
			title: 'Gambit Studio - O nas'
		}
	}
}
</script>

<style lang="sass" scoped>
.row > div
	margin: 2em 0
h1
	text-transform: uppercase
p
	margin: 1em 0
.blue
	color: $blue
	font-weight: 600
.action
	font-weight: 600
	margin: 1.5em 0
a
	text-transform: uppercase
	border: none
	border-radius: 2em
	font-size: 20px
	font-weight: 600
	color: $white
	padding: .5em 1em
	text-decoration: none
	background-color: $blue
	outline: none
	transition: .3s ease
	display: inline-block
	&:hover
		opacity: .8

.about-image
	display: flex
	justify-content: center
	align-items: center
	svg
		color: $blue
		width: 50%
		height: 50%
</style>
