<template>
	<section class="footer" data-aos="fade">
		<div class="container py-5">
			<div class="row">
				<div class="col-12 col-md-4 py-3 py-md-0">
					<img class="footer-logo" src="~/assets/gambit-logo-white.svg" alt="">
				</div>
				<div class="col-12 col-md-4 py-3 py-md-0">
					<h3>Menu</h3>
					<nuxt-link to="/oferta" class="nav-link">
						Oferta
					</nuxt-link>
					<nuxt-link to="/o-nas" class="nav-link">
						O nas
					</nuxt-link>
					<nuxt-link to="/blog" class="nav-link">
						Blog
					</nuxt-link>
					<nuxt-link to="/kontakt" class="nav-link">
						Kontakt
					</nuxt-link>
				</div>
				<div class="col-12 col-md-4 py-3 py-md-0">
					<div class="d-flex flex-column align-items-center align-items-md-start">
						<h3>Kontakt</h3>
						<p>Adres: <span>64-200 Wolsztyn</span></p>
						<p>Telefon: <a href="tel:+48605664101">605 664 101</a></p>
						<p>E-mail: <a href="mailto:biuro@gambitstudio.pl">biuro@gambitstudio.pl</a></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="sass" scoped>
.footer
	background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
	color: $white
	h3
		text-transform: uppercase
		font-size: 1.5em
		border-left: 5px solid $white
		padding-left: 1em
	a
		color: $white
		opacity: .8
		&:hover
			opacity: 1
	p
		padding: 0.5rem 1rem
	span
		opacity: .8
	.row > div
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
	.footer-logo
		width: 70%
		min-width: 200px
// @media only screen and (max-width: 767px)

</style>
