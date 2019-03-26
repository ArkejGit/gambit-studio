<template>
	<transition name="layout" mode="out-in">
		<div class="home">
			<NavBarHome />
			<nuxt />
			<Footer />
		</div>
	</transition>
</template>

<script>
import NavBarHome from '~/components/NavBarHome.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		NavBarHome,
		Footer
	}
}
</script>
