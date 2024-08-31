export default defineAppConfig({
	ui: {
		variables: {
			header: {
				height: '16rem'
			},
			light: {
				background: '255 255 255',
				foreground: 'var(--color-gray-700)'
			},
			dark: {
				background: 'var(--color-gray-900)',
				foreground: 'var(--color-gray-200)'
			}
		},
		primary: 'merino',
		gray: 'fuscous-gray',
		button: {
			rounded: 'rounded-full',
			default: {
				size: 'md'
			}
		},
		input: {
			default: {
				size: 'md'
			}
		},
		card: {
			rounded: 'rounded-xl'
		},
		footer: {
			top: {
				wrapper: 'border-t border-gray-200 dark:border-gray-800',
				container: 'py-8 lg:py-16'
			},
			bottom: {
				wrapper: 'border-t border-gray-200 dark:border-gray-800'
			}
		},
		page: {
			hero: {
				wrapper: 'lg:py-24'
			}
		}
	}
})
