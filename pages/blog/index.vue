<template>
	<div>
		<SiteHeader title="Blog" bgImage="/see-blog.jpg" />
		<div class="container py-5">
			<div class="row">
				<div class="col-12 col-md-6">
					<div class="post" data-aos="fade-up">
						<nuxt-link to="blog/branding-co-to-wlasciwie-jest">
							<div class="post-image"></div>
						</nuxt-link>
						<nuxt-link to="blog/branding-co-to-wlasciwie-jest" class="post-title">
							<h1>Branding - co to właściwie jest?</h1>
						</nuxt-link>
						<p class="post-desc">Nie zawsze sobie to uświadamiamy, ale warto zauważyć, że największe światowe marki, sprzedając swoje produkty czy usługi, niosą ze sobą konkretny przekaz. Volvo? Bezpieczeństwo. Rolex? Luksus i prestiż. Apple? Design i funkcjonalność. Dobrze prowadzony przekaz jest charakterystyczny dla danej marki, dzięki czemu pozwala jej wyróżnić się wśród konkurencji.</p>
						<nuxt-link to="blog/branding-co-to-wlasciwie-jest" class="read-more">Czytaj dalej -></nuxt-link>
					</div>
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
			title: 'Gambit Studio - Blog'
		}
	}
}
</script>

<style lang="sass" scoped>
.post
	.post-image
		width: 100%
		height: 300px
		background-image: url('/blog/branding.jpg')
		background-size: cover
		background-repeat: no-repeat
		background-position: 50%
		display: flex
		justify-content: center
		align-items: center
		text-align: center
		opacity: .8
		transition: all .3s ease
		&:hover
			opacity: 1
	.post-title
		color: #000
		text-decoration: none
		transition: all .3s ease
		&:hover
			text-decoration: none
			color: $blue
	.read-more
		display: inline-block
		margin: 1em 0
		font-weight: 700
		text-decoration: none
		color: #000
		transition: all .3s ease
		&:hover
			color: $blue

h1
	font-weight: 700
	font-size: 1.8em
	margin: 1em 0
</style>
