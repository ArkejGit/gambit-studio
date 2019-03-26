const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
  ** Headers of the page
  */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },

	/*
  ** Global CSS
  */
	css: ['@assets/css/main.sass'],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [
		{ src: '@/plugins/aos.js', ssr: false }
	],

	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
	],
  styleResources: {
        sass: [
            '@assets/css/sass-variables.sass'
        ]
  },
	/*
  ** Axios module configuration
  */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
