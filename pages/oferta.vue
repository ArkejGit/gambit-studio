<template>
	<div>
		<SiteHeader title="Oferta" bgImage="/offer-bg.jpg" />
		<div class="offers-section">
			<Offers />
		</div>
	</div>
</template>

<script>
import Offers from '~/components/Offers.vue'
import SiteHeader from '~/components/SiteHeader.vue'

export default {
	components: {
		Offers,
		SiteHeader
	},
	head() {
		return {
			title: 'Gambit Studio - Oferta'
		}
	}
}
</script>

<style lang="sass" scoped>
	.offers-section
		background-color: $grey
</style>
