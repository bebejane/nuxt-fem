// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/styles/index.scss'],
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
});
