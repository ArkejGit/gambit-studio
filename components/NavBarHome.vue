<template>
	<div class="navbar-container">
		<b-navbar class="container navbar d-flex" toggleable="md">
			<b-navbar-brand class="navbar-brand flex-grow-1">
				<router-link to="/">
					<img :src="require(`@/assets/gambit-logo.svg`)" class="d-inline-block align-top" alt="Gambit Studio Logo">
				</router-link>
			</b-navbar-brand>
			<b-navbar-toggle target="nav_collapse" />
			<b-collapse id="nav_collapse" v-model="showCollapse" is-nav>
				<b-navbar-nav class="flex-grow-1 justify-content-around text-center">
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
				</b-navbar-nav>
			</b-collapse>
					<a href="https://www.facebook.com/GambitStudio/" target="_blank" rel="noopener noreferrer" class="d-none d-md-block facebook" alt="facebook"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
		</b-navbar>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			showCollapse: false
		}
	},
	watch: {
		showCollapse: function (showCollapse) {
			const button = document.querySelector('.navbar-toggler')
			const span = document.querySelector('.navbar-light .navbar-toggler-icon')
			if (!showCollapse) {
				button.style.borderColor = 'rgba(0, 0, 0, 0.1)'
				span.style.backgroundImage = 'url(/menu.svg)'
			} else {
				button.style.borderColor = '#fff'
				span.style.backgroundImage = 'url(/close.svg)'
			}
		}
	},
	mounted() {
		const route = this.$route.name
		const span = document.querySelector('.navbar-light .navbar-toggler-icon')
		span.style.backgroundImage = route === 'index' ? 'url(/menu.svg)' : 'url(/menu-white.svg)'
	}
}
</script>

<style lang="sass" scoped>
.navbar-container
	position: absolute
	width: 100%
	z-index: 3

#nav_collapse
	z-index: 3

.home .navbar-brand, .navbar-brand
	max-width: 250px
	z-index: 9
	a, a:hover
		border: none

.navbar-light .navbar-nav
	.nav-link
		color: $white
		opacity: .9
		font-weight: bold
		text-transform: uppercase
		transition: .3s ease
		border-bottom: 2px solid transparent
	.nav-link:hover, .nuxt-link-active
		border-bottom: 2px solid $white
		opacity: 1

.home .navbar-light .navbar-nav
	.nav-link
		color: #080808
		opacity: .5
	.nav-link:hover, .nuxt-link-active
		border-bottom: 2px solid $blue
		opacity: 1

.home .navbar-light
	.navbar-toggler
		border-color: rgba(0, 0, 0, 0.1)
	.navbar-toggler-icon
		background-image: 'url(/menu.svg)'

.navbar-light
	.navbar-toggler
		border-color: $white
	.navbar-toggler-icon
		border: 3px solid red
		background-image: 'url(/menu-white.svg)'

.facebook
	color: $blue
	opacity: .8
	transition: all .3s ease
	&:hover
		opacity: 1
	svg
		height: 1.5em
		width: 1.5em

@media only screen and (max-width: 767px)
	#nav_collapse
		background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
		opacity: .95
		width: 100vw
		height: 100vh
		top: 0
		left: 0
		position: fixed
		z-index: 10
		ul
			height: 100vh
			display: flex
			flex-direction: column
			a
				border: 0
				color: $white
				font-size: 7vw
	.navbar-toggler
		z-index: 12
		outline: none
		.navbar-toggler-icon
			border: 2px solid red
	.facebook
		display: none
</style>
