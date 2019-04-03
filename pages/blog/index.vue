<template>
	<div>
		<SiteHeader title="Blog" bgImage="/see-blog.jpg" />
		<div class="container py-5">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4">
					<div class="post" data-aos="fade-up">
						<div class="post-date">
							<span class="day">01.03</span>
							<span class="year">2019</span>
						</div>
						<nuxt-link to="blog/branding-co-to-wlasciwie-jest">
							<div class="post-image"></div>
						</nuxt-link>
						<div class="post-desc-wrapper">
							<nuxt-link to="blog/branding-co-to-wlasciwie-jest" class="post-title">
								<h2>Branding - co to właściwie jest?</h2>
							</nuxt-link>
							<p class="post-desc">Nie zawsze sobie to uświadamiamy, ale warto zauważyć, że największe światowe marki, sprzedając swoje produkty czy usługi, niosą ze sobą konkretny przekaz [...]</p>
							<nuxt-link to="blog/branding-co-to-wlasciwie-jest" class="read-more">Czytaj dalej -></nuxt-link>
						</div>
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
	.post-date
		position: absolute
		left: 10px
		display: flex
		flex-direction: column
		align-items: center
		background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
		color: $white
		padding: 5px 10px
		z-index: 3
		.day
			font-size: 14px
			padding: 10px 5px 5px
			border-bottom: 1px solid $white
		.year
			font-size: 16px
			padding: 5px 5px 10px
	.post-image
		width: 100%
		height: 250px
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
	.post-desc-wrapper
		border: 1px solid #ebebeb
		padding: 20px
	.post-title
		color: #000
		text-decoration: none
		transition: all .3s ease
		&:hover
			text-decoration: none
			color: $blue
		h2
			font-weight: 600
			font-size: 20px
			line-height: 22px
	.post-desc
		margin: 1em 0
	.read-more
		display: inline-block
		font-weight: 600
		font-size: 20px
		line-height: 22px
		text-decoration: none
		color: $blue
		transition: all .3s ease
		&:hover
			color: #000

</style>
