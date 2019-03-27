<template>
	<div>
		<h2>Wypełnij formularz lub skontaktuj się z nami bezpośrednio</h2>
		<h3 class="d-block d-md-none">
			<font-awesome-icon icon="envelope-open-text" />
			<a href="mailto:biuro@gambitstudio.pl">biuro@gambitstudio.pl</a>
		</h3>
		<h3 class="d-block d-md-none">
			<font-awesome-icon icon="mobile-alt" />
			<a href="tel:+48605664101">605-664-101</a>
		</h3>
		<div class="form-container d-flex flex-row">
			<div class="contact mail">
				<div data-aos="fade-left">
				<a href="mailto:biuro@gambitstudio.pl">biuro@gambitstudio.pl</a>
				<font-awesome-icon icon="envelope-open-text" />
				</div>
			</div>
			<form>
				<input v-model="inputs.name" @change="onChange('name')" type="text" name="name" title="name" placeholder="imię" autocomplete="name" required>
				<input v-model="inputs.email" @change="onChange('email')" type="email" name="email" title="email" placeholder="e-mail" autocomplete="email" required>
				<input v-model="inputs.phone" @change="onChange('phone')" type="tel" name="phone" title="phone" placeholder="telefon" autocomplete="tel-national" required>
				<input v-model="inputs.subject" @change="onChange('subject')" type="text" name="subject" title="subect" placeholder="temat" required>
				<textarea v-model="inputs.message" @change="onChange('message')" name="message" title="message" cols="30" rows="5" placeholder="treść" required></textarea>
				<label class="accept1"><input v-model="checkedAccepts" @change="onCheckboxChange('accept1')" type="checkbox" name="accept1" value="accept1">Wyrażam zgodę na przetwarzanie przez Gambit Studio Agencję Interaktywną Robert Krawczyk z siedzibą w Wolsztynie podanych danych w celu przesłania wyceny usług, a następnie realizacji umowy o świadczenie usług. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. <span class="red">*</span></label>
				<label class="accept2"><input v-model="checkedAccepts" @change="onCheckboxChange('accept2')" type="checkbox" name="accept2" value="accept2">Wyrażam zgodę na przetwarzanie przez Gambit Studio Agencję Interaktywną Robert Krawczyk z siedzibą w Wolsztynie podanych danych w celach marketingowych własnych produktów i usług lub produktów i usług podmiotów trzecich oraz dla monitorowania ruchu na stronie internetowej. <span class="red">*</span></label>
				<button @click.prevent="processForm">
					Wyślij
				</button>
			</form>
			<div class="contact phone">
				<div data-aos="fade-right">
				<font-awesome-icon icon="mobile-alt" />
				<a href="tel:605664101">605-664-101</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputs: {
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			},
			processing: false,
			checkedAccepts: [],
			failureMessage: ''
		}
	},
	methods: {
		onChange: function (name) {
			const input = name === 'message' ? document.querySelector(`textarea[name=message]`) : document.querySelector(`input[name=${name}]`)
			if (input.validity.valid === false) {
				input.classList.add('invalid')
			} else {
				input.classList.remove('invalid')
			}
		},
		onCheckboxChange: function (name) {
			const accept = document.querySelector(`.${name}`)
			if (this.checkedAccepts.includes(name)) {
				accept.classList.remove('red')
			} else {
				accept.classList.add('red')
			}
		},
		processForm: function () {
			const invalids = [...document.querySelectorAll('input')].filter(input => input.validity.valid === false)
			if (invalids.length > 0 || this.inputs.message === '') {
				if (this.inputs.message === '') {
					const message = document.querySelector('textarea[name=message]')
					message.classList.add('invalid')
					message.scrollIntoView()
				}
				if (invalids.length > 0) {
					invalids.map(input => input.classList.add('invalid'))
					invalids[0].scrollIntoView()
				}
			} else if (this.checkedAccepts.length < 2) {
				['accept1', 'accept2'].map((accept) => {
					if (!this.checkedAccepts.includes(accept)) {
						document.querySelector(`.${accept}`).classList.add('red')
					}
				})
				document.querySelector(`.accept1`).scrollIntoView()
			}	else {
				console.log('brawo') // eslint-disable-line
			}
		}
	}
}
</script>

<style lang="sass" scoped>
.contact
	width: 25%
	display: flex
	align-items: flex-start
	> div
		position: sticky
		top: 5em
		color: $white
		background-color: $blue
		padding: 1em
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		transition: all .3s ease
	a
		color: $white
		font-weight: 600
		font-size: 1.2em
	svg
		width: 2em
		height: 2em
		margin: .5em
.mail
	justify-content: flex-start
	> div:hover
		padding-left: 2em
.phone
	justify-content: flex-end
	> div:hover
		padding-right: 2em

form
	width: 50%
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	> input, textarea
		padding: .5em
		width: 100%
		margin: 1em 0
		border: 2px solid $blue
		&:focus
			outline: none
			box-shadow: 0 0 5px #000
	label
		width: 100%
		font-size: .8em
		input
			margin-right: 1em
	.invalid
		border: 2px solid red
	.red
		color: red

button
	margin: 1em 0 2em 0
	text-transform: uppercase
	border: none
	border-radius: 2em
	font-size: 20px
	font-weight: 600
	color: $white
	padding: .5em 3em
	text-decoration: none
	background-color: $blue
	outline: none
	transition: .3s ease
	&:hover
		opacity: .8

h2
	text-transform: uppercase
	font-weight: 600
	font-size: 1.2em
	margin: 2em 0

@media only screen and (max-width: 1100px)
	.contact
		> div
			flex-direction: column
		a
			font-size: 1em
		svg
			width: 1.5em
			height: 1.5em

@media only screen and (max-width: 767px)
	.form-container
		justify-content: center
		align-items: center
		.contact
			display: none
		form
			width: 80%
	h2
		margin-bottom: 0
	h3
		margin: .5em 0
		a
			color: #000
			text-decoration: none
			font-weight: 600
		svg
			margin-right: .5em

</style>
