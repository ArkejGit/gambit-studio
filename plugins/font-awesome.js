import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faEnvelopeOpenText, faUsers, faChess } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMobileAlt)
library.add(faEnvelopeOpenText)
library.add(faFacebook)
library.add(faUsers)
library.add(faChess)

Vue.component('font-awesome-icon', FontAwesomeIcon)
