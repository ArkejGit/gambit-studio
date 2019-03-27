<template>
	<div>
		<SiteHeader title="Kontakt" bgImage="/contact-bg.jpg" />
		<div class="text-center">
			<ContactForm />
		</div>
	</div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
	components: {
		SiteHeader,
		ContactForm
	},
	head() {
		return {
			title: 'Gambit Studio - Kontakt'
		}
	}
}
</script>

<style lang="sass" scoped>
h2
	text-transform: uppercase
	font-weight: 600
	font-size: 1.2em
	margin: 2em 0
</style>
