<template>
	<div class="container text-center d-flex flex-column align-items-center" data-aos="fade">
		<h1>
			<slot></slot>
		</h1>
		<div class="underline"></div>
	</div>
</template>

<style lang="sass" scoped>
h1
	text-transform: uppercase
	font-weight: 700
	margin-top: 1em
.underline
	width: 150px
	height: 3px
	background-color: $blue
@media only screen and (max-width: 768px)
	h1
		font-size: 6vw
	.underline
		width: 30vw
</style>
