<template>
	<div class="hello-banner-container">
		<div class="d-flex flex-row justify-content-end left">
			<img src="~/assets/gambit-horse.svg" class="gambit-horse" alt="">
		</div>
		<div class="perimeter d-flex justify-content-center align-items-center">
			<p>creative agency</p>
		</div>
		<div class="d-flex flex-column justify-content-around right">
			<p>Strategia</p>
			<p>Branding</p>
			<p>Social media</p>
			<p>Strony i sklepy internetowe</p>
			<p>Aplikacje mobilne i webowe</p>
		</div>
	</div>
</template>

<style lang="sass" scoped>
+keyframes(banner)
	0%
		filter: grayscale(0%)
	50%
		filter: grayscale(100%)
	100%
		filter: grayscale(0%)

.hello-banner-container
	height: 100%
	padding: 90px 5% 5% 5%
	> div
		height: 100%
		float: left

.left
	width: 42%

.right
	widht: 55%
	p
		font-size: 3vw
		font-weight: 700
		padding-left: 3vw
		text-transform: uppercase
		cursor: default
		transition: all .3s ease
		&:hover
			background-image: linear-gradient(to right, $blue , $white)
			color: $white

.gambit-horse
	height: 100%
	padding-right: 3vw

.perimeter
	width: 6%
	animation: banner 5s linear infinite
	border-right: 3px solid $blue
	p
		color: $blue
		position: absolute
		transform: rotate(270deg)
		font-size: 3vw
		font-weight: 700
		margin: 0

@media only screen and (max-width: 768px)
	.hello-banner-container
		padding: 10%
		.perimeter, .right
			display: none!important
		.left
			width: 100%
			justify-content: center!important

</style>
