// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: ['@nuxt/ui-pro'],

	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/ui',
		'@nuxthq/studio',
		'@vueuse/nuxt',
		'nuxt-og-image'
	],

	hooks: {
		// Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
		'components:extend': (components) => {
			const globals = components.filter(c => ['UButton'].includes(c.pascalName))

			globals.forEach(c => c.global = true)
		}
	},

	ui: {
		icons: ['heroicons', 'simple-icons']
	},

	colorMode: {
		disableTransition: true
	},

	routeRules: {
		// Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
		'/': { prerender: true }
		// '/api/search.json': { prerender: true }
		// '/docs': { redirect: '/docs/getting-started', prerender: false } // not needed for this example
	},

	devtools: {
		enabled: true
	},

	typescript: {
		strict: false
	},

	future: {
		compatibilityVersion: 4
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: false,
				commaDangle: 'never',
				braceStyle: '1tbs'
			}
		}
	},

	compatibilityDate: '2024-07-11'
})
