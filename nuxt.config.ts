// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/styles/index.scss'],
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
	modules: ['@nuxt/eslint'],
});
