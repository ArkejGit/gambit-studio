<template>
	<div class="error-wrapper">
		<h1 v-if="error.statusCode === 404">Nie znaleziono strony</h1>
		<h1 v-else>Wystapił błąd</h1>
		<nuxt-link to="/">Wróć na stronę główną</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'empty'
}
</script>

<style lang="sass" scoped>
.error-wrapper
	background-image: linear-gradient(45deg, #0693F4, $blue, #0693F4)
	height: 100vh
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center
	color: $white
	a
		color: $white
		font-size: 1.5em
</style>
