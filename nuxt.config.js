const pkg = require('./package')

module.exports = {
	mode: 'universal',

	head: {
		title: 'Gambit Studio',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Tworzymy strony internetowe, sklepy, aplikacje. Opracowujemy strategię i kreujemy Twoją markę. Poznaj GambIT' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
	},

	loading: { color: '#fff' },

	css: ['@assets/css/main.sass'],

	plugins: [
		{ src: '@/plugins/aos.js', ssr: false },
		{ src: '@/plugins/font-awesome.js' },
		{ src: '@/plugins/axios.js' }
	],

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
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},
	router: {
		scrollBehavior: function (to, from, savedPosition) {
			return { x: 0, y: 0 }
		}
	},
	build: {
		optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
		splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    },
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
