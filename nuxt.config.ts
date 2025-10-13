// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/styles/index.scss'],
	app: {
		head: {
			title: 'Nuxt Fem',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'desc...' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
		pageTransition: { name: 'page', mode: 'default' },
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/_mediaqueries.scss" as *;',
				},
			},
		},
	},
	$production: {
		routeRules: {
			'/**': { isr: true },
		},
	},
	experimental: {
		typedPages: true,
	},
	runtimeConfig: {
		private: {
			apiToken: process.env.DATOCMS_API_TOKEN,
		},
		public: {
			apiToken: process.env.PUBLIC_DATOCMS_API_TOKEN,
		},
	},
	nitro: {
		vercel: {
			config: {
				bypassToken: process.env.REVALIDATE_KEY,
			},
		},
	},
	modules: ['@nuxt/eslint', 'reka-ui/nuxt', '@pinia/nuxt'],
});
