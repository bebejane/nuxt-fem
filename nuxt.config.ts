// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	extends: [['github:bebejane/kt-nuxt-datocms']],
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
	},
	modules: ['@nuxt/eslint', 'reka-ui/nuxt', '@pinia/nuxt'],
});
